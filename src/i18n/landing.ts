export const locales = {
  "zh-tw": { htmlLang: "zh-TW", label: "繁", path: "/" },
  "zh-cn": { htmlLang: "zh-CN", label: "简", path: "/zh-cn/" },
  en: { htmlLang: "en", label: "EN", path: "/en/" },
} as const;

export type Locale = keyof typeof locales;

const zhTW = {
  description: "功能強大，為專業用戶設計的 Minecraft 啟動器。",
  nav: { features: "功能", blueprints: "藍圖", docs: "文件" },
  language: "語言",
  download: "下載",
  otherDownloads: "其他系統與安裝檔",
  chooseArchitecture: "請選擇適合 Mac 晶片的版本：Apple Silicon 或 Intel。",
  shotAlt: "Nolauncher 主視窗",
  features: [
    {
      title: "模組、資源包、光影",
      body: "在 Modrinth 與 CurseForge 搜尋內容，依 Minecraft 版本與模組載入器篩選，再安裝到指定實例。",
    },
    {
      title: "模組包",
      body: "瀏覽並安裝 Modrinth、CurseForge、FTB 與 ATLauncher 的模組包，也能從本機模組包檔案匯入。",
    },
    {
      title: "從其他啟動器搬過來",
      body: "掃描 Prism Launcher、PolyMC、MultiMC、Modrinth App 與 CurseForge 的實例，選擇複製匯入，或連結原本的遊戲目錄。",
    },
  ],
  moreTitle: "其他",
  extras: [
    { title: "版本與實例", body: "建立原版、Fabric、Forge 或 NeoForge 實例，分組整理，也能複製與匯出。" },
    { title: "Java 管理", body: "偵測電腦上的 Java，依遊戲需求選用版本；缺少時可在啟動器內下載安裝。" },
    { title: "地圖與種子工具", body: "查看種子地圖與本機世界地圖，尋找史萊姆區塊與結構群集。" },
    { title: "帳號與造型", body: "使用 Microsoft 帳號登入，在造型衣櫃中收藏、預覽與套用皮膚。" },
    { title: "外觀", body: "切換深色、淺色或跟隨系統，選用六種預設主題色，或自訂顏色與背景圖片。" },
    { title: "語言", body: "啟動器介面提供繁體中文與英文" },
  ],
  tools: {
    title: "工具",
    lead: "內建種子地圖、史萊姆與結構工具。",
    items: [{ title: "種子地圖" },{ title: "史萊姆掛機點" },{ title: "多聯結構" },],
  },
  preview3d: "3D 預覽",
  blueprintTitle: "藍圖庫",
  blueprintLead: "瀏覽、上傳與分享藍圖",
  releases: "前往 Releases",
  readDocs: "閱讀文件",
  notOfficial: "不是 Mojang 或 Microsoft 的官方產品。",
  terms: "服務條款",
  privacy: "隱私權聲明",
};

export type Strings = typeof zhTW;

const zhCN: Strings = {
  description: "功能强大，为专业用户设计的 Minecraft 启动器。",
  nav: { features: "功能", blueprints: "蓝图", docs: "文档" },
  language: "语言",
  download: "下载",
  otherDownloads: "其他系统与安装包",
  chooseArchitecture: "请选择适合 Mac 芯片的版本：Apple Silicon 或 Intel。",
  shotAlt: "Nolauncher 主窗口",
  features: [
    {
      title: "模组、资源包、光影",
      body: "在 Modrinth 与 CurseForge 搜索内容，按 Minecraft 版本与模组加载器筛选，再安装到指定实例。",
    },
    {
      title: "整合包",
      body: "浏览并安装 Modrinth、CurseForge、FTB 与 ATLauncher 的整合包，也能从本地整合包文件导入。",
    },
    {
      title: "从其他启动器迁移过来",
      body: "扫描 Prism Launcher、PolyMC、MultiMC、Modrinth App 与 CurseForge 的实例，选择复制导入，或链接原来的游戏目录。",
    },
  ],
  moreTitle: "其他",
  extras: [
    { title: "版本与实例", body: "创建原版、Fabric、Forge 或 NeoForge 实例，分组整理，也能复制与导出。" },
    { title: "Java 管理", body: "检测电脑上的 Java，按游戏需求选用版本；缺少时可在启动器内下载安装。" },
    { title: "地图与种子工具", body: "查看种子地图与本地世界地图，寻找史莱姆区块与结构群集。" },
    { title: "账号与外观", body: "使用 Microsoft 账号登录，在皮肤衣橱中收藏、预览与应用皮肤。" },
    { title: "外观", body: "切换深色、浅色或跟随系统，选用六种预设主题色，或自定义颜色与背景图片。" },
    { title: "语言", body: "启动器界面提供繁体中文与英文" },
  ],
  tools: {
    title: "工具",
    lead: "内置种子地图、史莱姆与结构工具。",
    items: [{ title: "种子地图" },{ title: "史莱姆挂机点" },{ title: "多联结构" },],
  },
  preview3d: "3D 预览",
  blueprintTitle: "蓝图库",
  blueprintLead: "浏览、上传与分享蓝图",
  releases: "前往 Releases",
  readDocs: "阅读文档",
  notOfficial: "不是 Mojang 或 Microsoft 的官方产品。",
  terms: "服务条款",
  privacy: "隐私声明",
};

const en: Strings = {
  description: "A powerful Minecraft launcher built for power users.",
  nav: {
    features: "Features",
    blueprints: "Blueprints",
    docs: "Docs",
  },
  language: "Language",
  download: "Download",
  otherDownloads: "Other platforms and installers",
  chooseArchitecture:
    "Choose the build for your Mac chip: Apple Silicon or Intel.",
  shotAlt: "Nolauncher main window",
  features: [
    {
      title: "Mods, resource packs, shaders",
      body: "Search Modrinth and CurseForge, filter by Minecraft version and mod loader, then install content into your chosen instance.",
    },
    {
      title: "Modpacks",
      body: "Browse and install packs from Modrinth, CurseForge, FTB and ATLauncher, or import a modpack file from your computer.",
    },
    {
      title: "Coming from another launcher",
      body: "Find instances from Prism Launcher, PolyMC, MultiMC, Modrinth App and CurseForge. Import a copy or link the existing game directory.",
    },
  ],
  moreTitle: "Other",
  extras: [
    {
      title: "Versions and instances",
      body: "Create vanilla, Fabric, Forge or NeoForge instances. Organize them into groups, duplicate them or export a copy.",
    },
    {
      title: "Java management",
      body: "Detect installed Java runtimes and select one for your game. Download and install missing versions from the launcher.",
    },
    {
      title: "Maps and seed tools",
      body: "Explore seed maps and local world maps, find slime chunks and search for structure clusters.",
    },
    {
      title: "Accounts and skins",
      body: "Sign in with Microsoft and use the wardrobe to save, preview and apply skins.",
    },
    {
      title: "Appearance",
      body: "Choose dark, light or system mode, six preset accent colors, or your own colors and background image.",
    },
    {
      title: "Language",
      body: "The launcher interface is available in Traditional Chinese and English",
    },
  ],
  tools: {
    title: "Tools",
    lead: "Seed maps, slime chunks and structure search.",
    items: [{ title: "Seed map" },{ title: "Slime chunks" },{ title: "Structure clusters" },],
  },
  preview3d: "3D preview",
  blueprintTitle: "Blueprint library",
  blueprintLead: "Browse, upload and share schematics.",
  releases: "Go to Releases",
  readDocs: "Read the docs",
  notOfficial: "Not an official Mojang or Microsoft product.",
  terms: "Terms",
  privacy: "Privacy",
};

export const strings: Record<Locale, Strings> = {
  "zh-tw": zhTW,
  "zh-cn": zhCN,
  en,
};
