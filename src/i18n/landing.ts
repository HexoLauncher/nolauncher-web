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
  shotAlt: "Nolauncher 主視窗",
  features: [
    { title: "模組、資源包、光影", body: "直接在啟動器裡搜尋" },
    { title: "模組包", body: "匯入你常玩的模組包" },
    {
      title: "從其他啟動器搬過來",
      body: "不需要手動搬遷模組，直接匯入啟動器",
    },
  ],
  moreTitle: "其他",
  extras: [
    { title: "外觀", body: "深色、淺色或跟隨系統，另外有六種主題色。" },
    { title: "語言", body: "介面有繁體中文和英文。" },
    { title: "更多功能", body: "製作中..." },
  ],
  blueprintTitle: "藍圖庫",
  blueprintLead: "上傳和下載 Litematica",
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
  shotAlt: "Nolauncher 主窗口",
  features: [
    { title: "模组、资源包、光影", body: "直接在启动器里搜索" },
    { title: "整合包", body: "导入你常玩的整合包" },
    {
      title: "从其他启动器迁移过来",
      body: "不需要手动迁移模组，直接导入启动器",
    },
  ],
  moreTitle: "其他",
  extras: [
    { title: "外观", body: "深色、浅色或跟随系统，另外有六种主题色。" },
    { title: "语言", body: "界面有繁体中文和英文。" },
    { title: "更多功能", body: "制作中..." },
  ],
  blueprintTitle: "蓝图库",
  blueprintLead: "上传和下载 Litematica",
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
  shotAlt: "Nolauncher main window",
  features: [
    {
      title: "Mods, resource packs, shaders",
      body: "Search for them right in the launcher.",
    },
    { title: "Modpacks", body: "Bring in the modpacks you already play." },
    {
      title: "Coming from another launcher",
      body: "No moving mods by hand. Import your instances straight in.",
    },
  ],
  moreTitle: "Other",
  extras: [
    {
      title: "Appearance",
      body: "Dark, light or follow the system, plus six accent colors.",
    },
    {
      title: "Language",
      body: "The interface comes in Traditional Chinese and English.",
    },
    { title: "More features", body: "In the works..." },
  ],
  blueprintTitle: "Blueprint library",
  blueprintLead: "Upload and download Litematica schematics.",
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
