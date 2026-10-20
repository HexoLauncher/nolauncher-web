import type { Locale } from "./landing";

export type LegalPage = "terms" | "privacy";

export interface Section {
  title: string;
  body: string[];
  list?: string[];
  after?: string[];
  // 在段落後面加上 GitHub Issues 連結
  issues?: boolean;
}

export interface LegalDoc {
  title: string;
  intro: string;
  sections: Section[];
}

interface LegalStrings {
  updated: string;
  back: string;
  issues: string;
  terms: LegalDoc;
  privacy: LegalDoc;
}

export const UPDATED = "2026-10-20";

const zhTW: LegalStrings = {
  updated: "最後更新",
  back: "回到首頁",
  issues: "GitHub Issues",
  terms: {
    title: "服務條款",
    intro:
      "下載、安裝或使用 Nolauncher（以下稱「本軟體」）以及本網站，即表示你同意以下條款。如果不同意，請不要使用本軟體。",
    sections: [
      {
        title: "軟體授權",
        body: [
          "本軟體以 MIT 授權開放原始碼，你可以依照 MIT 授權使用、修改和散布。關於原始碼的部分，如果本條款和 MIT 授權有衝突，以 MIT 授權為準。",
        ],
      },
      {
        title: "與 Mojang、Microsoft 的關係",
        body: [
          "本軟體不是 Mojang 或 Microsoft 的官方產品，也沒有得到他們的認可。Minecraft 是 Mojang Synergies AB 的商標。",
          "用本軟體遊玩 Minecraft 時，你需要擁有正版遊戲，並遵守 Minecraft 使用者授權合約（EULA）和 Microsoft 服務合約。",
        ],
      },
      {
        title: "第三方內容",
        body: [
          "透過本軟體搜尋和下載的模組、資源包、光影和模組包來自 Modrinth、CurseForge 等平台，著作權屬於原作者。使用這些內容時，請遵守各自的授權和平台規範。",
          "我們不對第三方內容的安全性、品質或合法性負責。",
        ],
      },
      {
        title: "藍圖庫",
        body: ["上傳藍圖到藍圖庫時，你需要確認："],
        list: [
          "你有權分享這份藍圖，例如是你自己做的，或已經取得作者同意。",
          "內容沒有侵害他人的著作權或其他權利。",
          "內容不含惡意、違法或不當的東西。",
        ],
        after: [
          "上傳即表示你同意我們在藍圖庫儲存、展示你的藍圖，並讓其他使用者下載。違反本條款或被檢舉的內容，我們可以不另行通知直接移除。",
        ],
      },
      {
        title: "使用規範",
        body: ["使用本軟體時，你不可以："],
        list: [
          "用本軟體散布惡意程式。",
          "干擾或攻擊本軟體相關的服務或第三方平台。",
          "規避 Minecraft 的正版驗證。",
          "大量發送自動化請求，造成服務負擔。",
        ],
      },
      {
        title: "免責聲明",
        body: [
          "本軟體依「現況」提供，不附帶任何明示或默示的保證。重要的存檔請自行備份。",
          "在法律允許的範圍內，因使用或無法使用本軟體而造成的資料遺失、存檔損毀或其他損失，我們不負賠償責任。",
        ],
      },
      {
        title: "條款變更",
        body: [
          "我們可能會修改本條款，修改後會更新本頁和上方的日期。修改後繼續使用本軟體，即表示你同意新的條款。",
        ],
      },
      {
        title: "聯絡我們",
        body: ["對本條款有任何問題，歡迎到這裡提出："],
        issues: true,
      },
    ],
  },
  privacy: {
    title: "隱私權聲明",
    intro:
      "這份聲明說明 Nolauncher 啟動器和本網站會處理哪些資料、拿來做什麼，以及你可以怎麼控制。",
    sections: [
      {
        title: "匿名使用資料",
        body: [
          "Nolauncher 目前沒有任何遙測功能，不會蒐集或送出任何使用資料。",
          "未來為了改善啟動器，我們可能會加入匿名的使用資料蒐集，用來找出錯誤、了解哪些功能比較常用，決定接下來要優化什麼。如果加入，可能包含：",
        ],
        list: [
          "啟動器版本、作業系統和 Java 版本。",
          "當機和錯誤紀錄，送出前會先去掉使用者名稱、檔案路徑等可以辨識你的資訊。",
          "功能的使用次數，例如安裝模組、匯入模組包。",
          "效能數據，例如啟動遊戲花了多久。",
        ],
        after: [
          "這些資料不會包含你的 Microsoft 帳號、Minecraft 玩家名稱、電子郵件或檔案內容，我們也不會保存你的 IP 位址，無法用來辨識你本人。匿名資料只用在改善本軟體，不會出售，也不會提供給第三方做廣告。",
        ],
      },
      {
        title: "關閉匿名資料蒐集",
        body: [
          "加入這項功能前，我們會先更新本聲明，並在 Releases 的更新說明中告知。加入後，你可以隨時在啟動器的「設定」裡關閉匿名使用資料。關閉後，啟動器不會再送出任何使用資料，所有功能都照常可以用。",
          "因為資料是匿名的，我們沒辦法找出哪些資料屬於你，所以無法針對個人刪除已經送出的資料。",
        ],
      },
      {
        title: "Microsoft 帳號登入",
        body: [
          "登入時，你是在 Microsoft 的頁面輸入帳號密碼，我們拿不到你的密碼。登入後取得的憑證只存在你的電腦上，只用來向 Microsoft 和 Mojang 驗證遊戲。",
        ],
      },
      {
        title: "第三方服務",
        body: [
          "搜尋和下載內容時，啟動器會直接連線到下面這些服務，它們會依照自己的隱私權政策處理你的請求：",
        ],
        list: [
          "Modrinth、CurseForge：搜尋和下載模組、資源包、光影、模組包。",
          "Microsoft、Mojang：帳號登入、下載遊戲檔案。",
          "GitHub：檢查更新、下載新版本。",
        ],
      },
      {
        title: "藍圖庫",
        body: [
          "上傳到藍圖庫的藍圖檔案，以及你填的名稱和說明，會公開給其他使用者瀏覽和下載。請不要在裡面放個人資料。",
        ],
      },
      {
        title: "本網站",
        body: [
          "本網站沒有使用 cookie，也沒有追蹤或廣告程式。你選的語言存在瀏覽器的 localStorage 裡，不會傳到伺服器。",
          "網站字型由 Google Fonts 提供，載入時你的瀏覽器會連線到 Google 的伺服器。",
        ],
      },
      {
        title: "聲明變更",
        body: [
          "我們可能會修改本聲明，修改後會更新本頁和上方的日期。如果蒐集的資料範圍有重大變更，也會在 Releases 的更新說明中告知。",
        ],
      },
      {
        title: "聯絡我們",
        body: ["對隱私權有任何問題，歡迎到這裡提出："],
        issues: true,
      },
    ],
  },
};

const zhCN: LegalStrings = {
  updated: "最后更新",
  back: "回到首页",
  issues: "GitHub Issues",
  terms: {
    title: "服务条款",
    intro:
      "下载、安装或使用 Nolauncher（以下称“本软件”）以及本网站，即表示你同意以下条款。如果不同意，请不要使用本软件。",
    sections: [
      {
        title: "软件许可",
        body: [
          "本软件以 MIT 许可证开源，你可以按照 MIT 许可证使用、修改和分发。关于源代码的部分，如果本条款和 MIT 许可证有冲突，以 MIT 许可证为准。",
        ],
      },
      {
        title: "与 Mojang、Microsoft 的关系",
        body: [
          "本软件不是 Mojang 或 Microsoft 的官方产品，也没有得到他们的认可。Minecraft 是 Mojang Synergies AB 的商标。",
          "用本软件游玩 Minecraft 时，你需要拥有正版游戏，并遵守 Minecraft 最终用户许可协议（EULA）和 Microsoft 服务协议。",
        ],
      },
      {
        title: "第三方内容",
        body: [
          "通过本软件搜索和下载的模组、资源包、光影和整合包来自 Modrinth、CurseForge 等平台，著作权归原作者所有。使用这些内容时，请遵守各自的许可和平台规范。",
          "我们不对第三方内容的安全性、质量或合法性负责。",
        ],
      },
      {
        title: "蓝图库",
        body: ["上传蓝图到蓝图库时，你需要确认："],
        list: [
          "你有权分享这份蓝图，例如是你自己做的，或已经取得作者同意。",
          "内容没有侵犯他人的著作权或其他权利。",
          "内容不含恶意、违法或不当的东西。",
        ],
        after: [
          "上传即表示你同意我们在蓝图库存储、展示你的蓝图，并让其他用户下载。违反本条款或被举报的内容，我们可以不另行通知直接移除。",
        ],
      },
      {
        title: "使用规范",
        body: ["使用本软件时，你不可以："],
        list: [
          "用本软件传播恶意程序。",
          "干扰或攻击本软件相关的服务或第三方平台。",
          "规避 Minecraft 的正版验证。",
          "大量发送自动化请求，给服务造成负担。",
        ],
      },
      {
        title: "免责声明",
        body: [
          "本软件按“现状”提供，不附带任何明示或默示的保证。重要的存档请自行备份。",
          "在法律允许的范围内，因使用或无法使用本软件而造成的数据丢失、存档损坏或其他损失，我们不承担赔偿责任。",
        ],
      },
      {
        title: "条款变更",
        body: [
          "我们可能会修改本条款，修改后会更新本页和上方的日期。修改后继续使用本软件，即表示你同意新的条款。",
        ],
      },
      {
        title: "联系我们",
        body: ["对本条款有任何问题，欢迎到这里提出："],
        issues: true,
      },
    ],
  },
  privacy: {
    title: "隐私声明",
    intro:
      "这份声明说明 Nolauncher 启动器和本网站会处理哪些数据、拿来做什么，以及你可以怎么控制。",
    sections: [
      {
        title: "匿名使用数据",
        body: [
          "Nolauncher 目前没有任何遥测功能，不会收集或发送任何使用数据。",
          "未来为了改进启动器，我们可能会加入匿名的使用数据收集，用来找出错误、了解哪些功能比较常用，决定接下来要优化什么。如果加入，可能包括：",
        ],
        list: [
          "启动器版本、操作系统和 Java 版本。",
          "崩溃和错误日志，发送前会先去掉用户名、文件路径等可以识别你的信息。",
          "功能的使用次数，例如安装模组、导入整合包。",
          "性能数据，例如启动游戏花了多久。",
        ],
        after: [
          "这些数据不会包括你的 Microsoft 账号、Minecraft 玩家名、电子邮箱或文件内容，我们也不会保存你的 IP 地址，无法用来识别你本人。匿名数据只用于改进本软件，不会出售，也不会提供给第三方做广告。",
        ],
      },
      {
        title: "关闭匿名数据收集",
        body: [
          "加入这项功能前，我们会先更新本声明，并在 Releases 的更新说明中告知。加入后，你可以随时在启动器的“设置”里关闭匿名使用数据。关闭后，启动器不会再发送任何使用数据，所有功能都照常可用。",
          "因为数据是匿名的，我们没办法找出哪些数据属于你，所以无法针对个人删除已经发送的数据。",
        ],
      },
      {
        title: "Microsoft 账号登录",
        body: [
          "登录时，你是在 Microsoft 的页面输入账号密码，我们拿不到你的密码。登录后取得的凭据只存在你的电脑上，只用来向 Microsoft 和 Mojang 验证游戏。",
        ],
      },
      {
        title: "第三方服务",
        body: [
          "搜索和下载内容时，启动器会直接连接到下面这些服务，它们会按照自己的隐私政策处理你的请求：",
        ],
        list: [
          "Modrinth、CurseForge：搜索和下载模组、资源包、光影、整合包。",
          "Microsoft、Mojang：账号登录、下载游戏文件。",
          "GitHub：检查更新、下载新版本。",
        ],
      },
      {
        title: "蓝图库",
        body: [
          "上传到蓝图库的蓝图文件，以及你填写的名称和说明，会公开给其他用户浏览和下载。请不要在里面放个人信息。",
        ],
      },
      {
        title: "本网站",
        body: [
          "本网站没有使用 cookie，也没有追踪或广告程序。你选的语言保存在浏览器的 localStorage 里，不会传到服务器。",
          "网站字体由 Google Fonts 提供，加载时你的浏览器会连接到 Google 的服务器。",
        ],
      },
      {
        title: "声明变更",
        body: [
          "我们可能会修改本声明，修改后会更新本页和上方的日期。如果收集的数据范围有重大变更，也会在 Releases 的更新说明中告知。",
        ],
      },
      {
        title: "联系我们",
        body: ["对隐私有任何问题，欢迎到这里提出："],
        issues: true,
      },
    ],
  },
};

const en: LegalStrings = {
  updated: "Last updated",
  back: "Back to home",
  issues: "GitHub Issues",
  terms: {
    title: "Terms of Service",
    intro:
      'By downloading, installing or using Nolauncher (the "Software") or this website, you agree to these terms. If you do not agree, please do not use the Software.',
    sections: [
      {
        title: "License",
        body: [
          "The Software is open source under the MIT License. You may use, modify and distribute it under that license. Where these terms conflict with the MIT License regarding the source code, the MIT License prevails.",
        ],
      },
      {
        title: "Mojang and Microsoft",
        body: [
          "The Software is not an official Mojang or Microsoft product and is not endorsed by them. Minecraft is a trademark of Mojang Synergies AB.",
          "To play Minecraft with the Software you need a legitimate copy of the game, and you must follow the Minecraft EULA and the Microsoft Services Agreement.",
        ],
      },
      {
        title: "Third-party content",
        body: [
          "Mods, resource packs, shaders and modpacks found and downloaded through the Software come from platforms such as Modrinth and CurseForge and belong to their authors. Follow their licenses and the platforms' rules when you use them.",
          "We are not responsible for the safety, quality or legality of third-party content.",
        ],
      },
      {
        title: "Blueprint library",
        body: ["When you upload a blueprint, you confirm that:"],
        list: [
          "You have the right to share it, because you made it or have the author's permission.",
          "It does not infringe anyone's copyright or other rights.",
          "It contains nothing malicious, illegal or inappropriate.",
        ],
        after: [
          "By uploading, you let us store and display your blueprint in the library and let other users download it. We may remove content that breaks these terms or is reported, without notice.",
        ],
      },
      {
        title: "Acceptable use",
        body: ["When using the Software, you must not:"],
        list: [
          "Use it to distribute malware.",
          "Disrupt or attack services related to the Software or third-party platforms.",
          "Bypass Minecraft's license verification.",
          "Send large volumes of automated requests that burden any service.",
        ],
      },
      {
        title: "Disclaimer",
        body: [
          'The Software is provided "as is", without warranty of any kind, express or implied. Back up worlds that matter to you.',
          "To the extent permitted by law, we are not liable for data loss, corrupted worlds or any other damage arising from the use of, or inability to use, the Software.",
        ],
      },
      {
        title: "Changes",
        body: [
          "We may update these terms. When we do, we will update this page and the date above. Continuing to use the Software after a change means you accept the new terms.",
        ],
      },
      {
        title: "Contact",
        body: ["Questions about these terms are welcome at:"],
        issues: true,
      },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    intro:
      "This policy explains what data the Nolauncher launcher and this website handle, what it is used for, and how you can control it.",
    sections: [
      {
        title: "Anonymous usage data",
        body: [
          "Nolauncher currently has no telemetry. It does not collect or send any usage data.",
          "To improve the launcher, we may add anonymous usage data collection in the future, to find bugs, see which features get used, and decide what to optimize next. If we do, it may include:",
        ],
        list: [
          "Launcher version, operating system and Java version.",
          "Crash and error logs, with user names, file paths and other identifying details removed before sending.",
          "How often features are used, such as installing mods or importing modpacks.",
          "Performance figures, such as how long the game takes to launch.",
        ],
        after: [
          "This data would not include your Microsoft account, Minecraft username, email address or file contents. We would not store your IP address, and the data could not be used to identify you. Anonymous data is only used to improve the Software. It is never sold or shared with third parties for advertising.",
        ],
      },
      {
        title: "Turning it off",
        body: [
          "Before adding this, we will update this policy and announce it in the release notes. Once added, you can turn off anonymous usage data at any time in the launcher's Settings. Once it is off, the launcher sends no usage data at all, and every feature keeps working.",
          "Because the data is anonymous, we cannot tell which records came from you, so we cannot delete data that was already sent on a per-person basis.",
        ],
      },
      {
        title: "Microsoft sign-in",
        body: [
          "You enter your credentials on Microsoft's own sign-in page, so we never see your password. The tokens you get after signing in are stored only on your computer and used only to authenticate the game with Microsoft and Mojang.",
        ],
      },
      {
        title: "Third-party services",
        body: [
          "When you search for or download content, the launcher connects directly to these services, which handle your requests under their own privacy policies:",
        ],
        list: [
          "Modrinth and CurseForge: searching and downloading mods, resource packs, shaders and modpacks.",
          "Microsoft and Mojang: account sign-in and game file downloads.",
          "GitHub: checking for and downloading updates.",
        ],
      },
      {
        title: "Blueprint library",
        body: [
          "Blueprint files you upload, along with the name and description you enter, are public for other users to browse and download. Please do not include personal information in them.",
        ],
      },
      {
        title: "This website",
        body: [
          "This website uses no cookies and no tracking or advertising scripts. Your language choice is kept in your browser's localStorage and never sent to a server.",
          "Fonts are served by Google Fonts, so your browser connects to Google's servers when loading them.",
        ],
      },
      {
        title: "Changes",
        body: [
          "We may update this policy. When we do, we will update this page and the date above. If the scope of collected data changes significantly, we will also say so in the release notes.",
        ],
      },
      {
        title: "Contact",
        body: ["Questions about privacy are welcome at:"],
        issues: true,
      },
    ],
  },
};

export const legal: Record<Locale, LegalStrings> = {
  "zh-tw": zhTW,
  "zh-cn": zhCN,
  en,
};
