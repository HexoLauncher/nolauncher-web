---
title: Troubleshooting
description: Resolve launch, Java, download, import and blueprint issues.
---

## The game will not launch

Check which launch step failed, then open the instance's game log or log files. If the crash window provides an analysis, use it to check Java, memory and mods.

1. Confirm the selected account can sign in.
2. Check that Minecraft, the loader and mods are compatible.
3. Check the Java path and version, and remove unnecessary custom JVM arguments.
4. If mods were recently added or updated, disable those items and retry.

## Java is missing or incompatible

Rescan Java under **Settings → Java**, or download the required version. Update or clear an outdated per-instance Java path before using automatic selection. See [settings](../settings/).

## Search or download fails

- **CurseForge:** check the API key under **Settings → API**.
- **No search results:** check the platform, query, Minecraft version and loader filters.
- **Manual download required:** save the original files in the directory indicated by the pending list.
- **Connection error:** check your network and access to the source platform, then retry.

## An import file is not recognized

Use **Import modpack** for platform packs, **Import from archive** for Nolauncher instance exports, and **From other launchers** for another launcher's data directory. An ordinary archive may not contain a supported modpack structure.

Linked modpacks cannot be updated in Nolauncher. Update through their original launcher or import a copy.

## A blueprint cannot be previewed or uploaded

3D previews and material lists support `.litematic`, not `.schem`. Uploads require blueprint-library sign-in. If a cover is still rendering, wait for its status to update; inspect the error message if rendering fails.

## Report an issue

Include the launcher version, operating system, Minecraft and loader versions, reproduction steps and relevant logs or error messages in [GitHub Issues](https://github.com/HexoLauncher/HexoLauncher/issues).

Remove access tokens, API keys and private personal information before posting logs.
