---
title: Modpacks
description: Install modpacks from a platform, import local files and update packs.
---

Install a modpack from an online platform or a local file. Each pack is created as an instance.

## Install from a platform

1. Open **Add instance**.
2. Select Modrinth, CurseForge, FTB or ATLauncher.
3. Search for a pack, read its description and select a version.
4. Set the instance name and group, then install.

FTB and ATLauncher packs can offer optional content during installation. CurseForge requires an API key; see [settings](../../reference/settings/).

## Import a file

Use **Add instance → Import modpack**. Select a file, review the detected pack information and confirm installation.

Recognized formats include Modrinth, CurseForge, HMCL/MCBBS, ATLauncher and FTB. Import support depends on the file's structure and format. An ordinary ZIP is not necessarily a modpack.

Archives created by Nolauncher's instance export use **Import from archive** instead. See [instances and imports](../instances/).

![Modpack import](/modepack.webp)

## Manual downloads

Files that cannot be downloaded automatically appear in a pending list. Open the listed pages, save the original files to the indicated directory and confirm that all pending downloads have been found.

## Update a pack

Instances with source information can select another release from their source platform. Local modpack files can also be used for updates. Confirm the target version and back up important worlds and custom configuration first.

Modpack updates are blocked for linked imports because the original launcher's version records would not be updated. Use the original launcher, or import a copy instead.
