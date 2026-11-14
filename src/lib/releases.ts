export const RELEASES =
  "https://github.com/HexoLauncher/HexoLauncher/releases/latest";
export const RELEASE_API =
  "https://api.github.com/repos/HexoLauncher/HexoLauncher/releases/latest";

export interface ReleaseAsset {
  name: string;
  browser_download_url: string;
}

export interface Release {
  tag_name: string;
  assets: ReleaseAsset[];
}

export type OS = "Windows" | "macOS" | "Linux";
export type Architecture = "arm64" | "x64" | "unknown";
const FALLBACK_VERSION = "0.1.4";

const fallbackNames = [
  `nolauncher_${FALLBACK_VERSION}_x64-setup.exe`,
  `nolauncher_${FALLBACK_VERSION}_aarch64.dmg`,
  `nolauncher_${FALLBACK_VERSION}_x64.dmg`,
  `nolauncher_${FALLBACK_VERSION}_amd64.AppImage`,
  `nolauncher_${FALLBACK_VERSION}_amd64.deb`,
  `nolauncher-${FALLBACK_VERSION}-1.x86_64.rpm`,
  `nolauncher_${FALLBACK_VERSION}_x64_en-US.msi`,
];

export const fallbackRelease: Release = {
  tag_name: `v${FALLBACK_VERSION}`,
  assets: fallbackNames.map((name) => ({
    name,
    browser_download_url: `https://github.com/HexoLauncher/HexoLauncher/releases/download/v${FALLBACK_VERSION}/${name}`,
  })),
};

export function isRelease(value: unknown): value is Release {
  if (!value || typeof value !== "object") return false;
  const release = value as Release;
  return (
    typeof release.tag_name === "string" &&
    release.tag_name.length > 0 &&
    Array.isArray(release.assets) &&
    release.assets.every(
      (asset) =>
        asset &&
        typeof asset.name === "string" &&
        typeof asset.browser_download_url === "string" &&
        asset.browser_download_url.startsWith(
          "https://github.com/HexoLauncher/HexoLauncher/releases/download/",
        ),
    )
  );
}

export async function fetchLatestRelease(): Promise<Release> {
  const response = await fetch(RELEASE_API, {
    headers: { Accept: "application/vnd.github+json" },
    signal: AbortSignal.timeout(5000),
  });
  if (!response.ok) throw new Error(`GitHub release: ${response.status}`);
  const release: unknown = await response.json();
  if (!isRelease(release)) throw new Error("Invalid GitHub release");
  return release;
}

export function assetOS(name: string): OS | null {
  if (/\.(exe|msi)$/i.test(name)) return "Windows";
  if (/\.dmg$/i.test(name)) return "macOS";
  if (/\.(appimage|deb|rpm)$/i.test(name)) return "Linux";
  return null;
}

export function assetArchitecture(name: string): Architecture {
  if (/(?:^|[_\-.])(aarch64|arm64)(?:[_\-.]|$)/i.test(name)) return "arm64";
  if (/(?:^|[_\-.])(x64|x86_64|amd64)(?:[_\-.]|$)/i.test(name)) return "x64";
  return "unknown";
}

export function detectOS(
  platform: string,
  userAgent: string,
  touchPoints = 0,
): OS | null {
  if (
    /android|iphone|ipad|ipod|cros/i.test(userAgent) ||
    (/mac/i.test(platform) && touchPoints > 1)
  )
    return null;
  if (/win/i.test(platform || userAgent)) return "Windows";
  if (/mac/i.test(platform || userAgent)) return "macOS";
  if (/linux/i.test(platform || userAgent)) return "Linux";
  return null;
}

export function selectAsset(
  release: Release,
  os: OS | null,
  architecture: Architecture,
) {
  if (!os) return undefined;
  const candidates = release.assets.filter(
    (asset) => assetOS(asset.name) === os,
  );

  const compatible = candidates.filter((asset) => {
    const arch = assetArchitecture(asset.name);
    return (
      arch === "unknown" || architecture === "unknown" || arch === architecture
    );
  });
  const extensions =
    os === "Windows"
      ? [".exe", ".msi"]
      : os === "macOS"
        ? [".dmg"]
        : [".appimage", ".deb", ".rpm"];

  if (
    os === "macOS" &&
    architecture === "unknown" &&
    new Set(compatible.map((asset) => assetArchitecture(asset.name))).size > 1
  ) {
    return undefined;
  }
  return compatible.sort(
    (a, b) =>
      extensions.findIndex((ext) => a.name.toLowerCase().endsWith(ext)) -
      extensions.findIndex((ext) => b.name.toLowerCase().endsWith(ext)),
  )[0];
}

export const buildRelease = import.meta.env.SSR
  ? fetchLatestRelease().catch(() => fallbackRelease)
  : Promise.resolve(fallbackRelease);
