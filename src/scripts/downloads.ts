import {
  RELEASES,
  assetOS,
  assetArchitecture,
  fallbackRelease,
  detectOS,
  fetchLatestRelease,
  selectAsset,
  type Architecture,
  type Release,
} from "../lib/releases";

type NavigatorWithHints = Navigator & {
  userAgentData?: {
    platform: string;
    getHighEntropyValues?: (
      hints: string[],
    ) => Promise<{ architecture?: string; bitness?: string }>;
  };
};

const nav = navigator as NavigatorWithHints;
const os = detectOS(
  nav.userAgentData?.platform || nav.platform,
  nav.userAgent,
  nav.maxTouchPoints,
);
const root = document.querySelector<HTMLElement>("[data-downloads]");
let release: Release = root?.dataset.release
  ? JSON.parse(root.dataset.release)
  : fallbackRelease;
let architecture: Architecture = /aarch64|arm64/i.test(
  nav.userAgent + nav.platform,
)
  ? "arm64"
  : "unknown";
if (
  os !== "macOS" &&
  /x86_64|x64|win64|amd64/i.test(nav.userAgent + nav.platform)
) {
  architecture = "x64";
}

function render() {
  const asset = selectAsset(release, os, architecture);
  const version = release.tag_name.replace(/^v/i, "");
  document
    .querySelectorAll("[data-version]")
    .forEach((el) => (el.textContent = version));
  document
    .querySelectorAll<HTMLAnchorElement>("[data-download]")
    .forEach((link) => {
      link.href =
        asset?.browser_download_url ||
        (os === "macOS" ? "#download-options" : RELEASES);
      link.title = asset?.name || "";
      link.querySelectorAll("[data-download-os]").forEach((el) => {
        el.textContent = os ? ` · ${os}` : "";
      });
      if (asset || os !== "macOS") link.target = "_blank";
      else link.removeAttribute("target");
    });
  const filename = document.querySelector<HTMLElement>(
    "[data-download-filename]",
  );
  if (filename)
    filename.textContent =
      asset?.name ||
      (os === "macOS" && architecture === "unknown"
        ? root?.dataset.chooseArchitecture || ""
        : "");
  if (os === "macOS" && !asset) {
    const options =
      document.querySelector<HTMLDetailsElement>("#download-options");
    if (options) options.open = true;
  }
  const list = document.querySelector("[data-download-assets]");
  if (list) {
    const assets = release.assets.filter((asset) => assetOS(asset.name));
    assets.sort(
      (a, b) => Number(assetOS(b.name) === os) - Number(assetOS(a.name) === os),
    );
    list.replaceChildren(
      ...assets.map((asset) => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.href = asset.browser_download_url;
        const arch = assetArchitecture(asset.name);
        const cpu =
          assetOS(asset.name) === "macOS"
            ? arch === "arm64"
              ? " · Apple Silicon"
              : arch === "x64"
                ? " · Intel"
                : ""
            : "";
        link.textContent = `${assetOS(asset.name)}${cpu} — ${asset.name}`;
        link.target = "_blank";
        link.rel = "noopener";
        li.append(link);
        return li;
      }),
    );
  }
}

document
  .querySelectorAll<HTMLAnchorElement>("[data-download]")
  .forEach((link) => {
    link.addEventListener("click", () => {
      if (link.getAttribute("href") === "#download-options") {
        const options =
          document.querySelector<HTMLDetailsElement>("#download-options");
        if (options) options.open = true;
      }
    });
  });

render();
nav.userAgentData
  ?.getHighEntropyValues?.(["architecture", "bitness"])
  .then((hints) => {
    if (hints.architecture === "arm") architecture = "arm64";
    else if (hints.architecture === "x86" && hints.bitness === "64")
      architecture = "x64";
    render();
  })
  .catch(() => {});
fetchLatestRelease()
  .then((latest) => {
    release = latest;
    render();
  })
  .catch(() => {});
