import type { Locale } from "./landing";

interface NewsStrings {
  title: string;
  lead: string;
  empty: string;
  back: string;
  tags: Record<string, string>;
}

export const newsStrings: Record<Locale, NewsStrings> = {
  "zh-tw": {
    title: "最新消息",
    lead: "Nolauncher 的版本更新與公告。",
    empty: "目前還沒有消息。",
    back: "所有消息",
    tags: { release: "版本更新", news: "消息" },
  },
  "zh-cn": {
    title: "最新消息",
    lead: "Nolauncher 的版本更新与公告。",
    empty: "目前还没有消息。",
    back: "所有消息",
    tags: { release: "版本更新", news: "消息" },
  },
  en: {
    title: "News",
    lead: "Release notes and announcements for Nolauncher.",
    empty: "No news yet.",
    back: "All news",
    tags: { release: "Release", news: "News" },
  },
};
