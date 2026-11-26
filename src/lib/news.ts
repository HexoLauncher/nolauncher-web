import { getCollection, render, type CollectionEntry } from "astro:content";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { locales, type Locale } from "../i18n/landing";
import { newsStrings } from "../i18n/news";

export type NewsEntry = CollectionEntry<"news">;

const slugOf = (entry: NewsEntry) => entry.id.split("/").slice(1).join("/");

export const newsUrl = (lang: Locale, entry: NewsEntry) =>
  `${locales[lang].path}news/${slugOf(entry)}/`;

export const feedUrl = (lang: Locale) => `${locales[lang].path}news/rss.xml`;

export async function getNews(lang: Locale) {
  const entries = await getCollection(
    "news",
    (e) =>
      e.id.startsWith(`${lang}/`) && (import.meta.env.DEV || !e.data.draft),
  );
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function newsPaths(lang: Locale) {
  const entries = await getNews(lang);
  return entries.map((entry) => ({
    params: { slug: slugOf(entry) },
    props: { entry },
  }));
}

/** 將文章渲染成完整 HTML，並把相對網址轉為絕對網址，讓 RSS 閱讀器能正確載入圖片與連結 */
async function renderHtml(
  container: AstroContainer,
  entry: NewsEntry,
  base: URL,
) {
  const { Content } = await render(entry);
  const html = await container.renderToString(Content);
  return html.replace(
    /\s(href|src)="(?!(?:[a-z][a-z0-9+.-]*:|#|\/\/))([^"]*)"/gi,
    (_, attr: string, url: string) => ` ${attr}="${new URL(url, base).href}"`,
  );
}

export async function newsFeed(lang: Locale, context: APIContext) {
  if (!context.site) throw new Error("RSS 需要在 astro.config.mjs 設定 site");
  const t = newsStrings[lang];
  const entries = await getNews(lang);
  const container = await AstroContainer.create();
  const site = context.site;
  return rss({
    title: `${t.title} · Nolauncher`,
    description: t.lead,
    site: context.site,
    items: await Promise.all(
      entries.map(async (entry) => ({
        title: entry.data.title,
        description: await renderHtml(
          container,
          entry,
          new URL(newsUrl(lang, entry), site),
        ),
        pubDate: entry.data.date,
        link: newsUrl(lang, entry),
        categories: tagsOf(lang, entry).map((t) => t.label),
      })),
    ),
    customData: `<language>${locales[lang].htmlLang}</language>`,
  });
}

export interface NewsTag {
  key: string;
  label: string;
  kind: "tag" | "version";
}

export function tagsOf(lang: Locale, entry: NewsEntry): NewsTag[] {
  const names = newsStrings[lang].tags;
  const tags: NewsTag[] = entry.data.tags.map((key) => ({
    key,
    label: names[key] ?? key,
    kind: "tag",
  }));
  const v = entry.data.version;
  if (v)
    tags.push({ key: v, label: `v${v.replace(/^v/i, "")}`, kind: "version" });
  return tags;
}

export const formatDate = (date: Date) => date.toISOString().slice(0, 10);
