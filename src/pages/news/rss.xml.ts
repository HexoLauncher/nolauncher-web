import type { APIContext } from "astro";
import { newsFeed } from "../../lib/news";

export const GET = (context: APIContext) => newsFeed("zh-tw", context);
