---
title: Instances and imports
description: Create, organize and export instances, or copy and link existing game directories.
---

An instance combines a Minecraft version, mod loader and game files. Use separate instances for different mod setups.

## Create and organize

Use **Add instance → Custom** to choose a version and loader. Vanilla, Fabric, Forge and NeoForge are supported.

Set an instance name, icon, group and notes. Instances can also be duplicated or exported. The instance editor provides tabs for mods, resource packs, shaders, worlds, servers, screenshots and logs.

## Import from another launcher

1. Open **Add instance → From other launchers**.
2. Select a detected launcher, or specify its data directory manually.
3. Select the instances and choose copy or link mode.
4. Import, then check the success and failure results.

Nolauncher recognizes Prism Launcher, PolyMC, MultiMC, Modrinth App, CurseForge and vanilla `.minecraft` directories.

| Mode | Game files | Effect |
| --- | --- | --- |
| Copy | Copied into Nolauncher's instance directory | Manage an independent copy |
| Link | Kept in their original location | Changes to shared files affect the other launcher too |

Linked instances cannot receive modpack updates in Nolauncher. Update through the original launcher, or import a copy instead. If an unsupported loader is reported, change it to a supported loader.

![Importing instances](/move.png)

## Export and restore

Export an instance as an archive, then restore it through **Add instance → Import from archive**.

This differs from importing a platform modpack. Use [modpack import](../modpacks/) for `.mrpack` files and other supported modpack formats.

## Per-instance settings

The instance's settings can override Java, memory and launch arguments. Otherwise, use the launcher defaults. See [settings](../../reference/settings/).
