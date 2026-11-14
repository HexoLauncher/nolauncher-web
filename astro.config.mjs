// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Nolauncher',
			favicon: '/icon.svg',
			defaultLocale: 'root',
			locales: {
				root: { label: '繁體中文', lang: 'zh-TW' },
				'zh-cn': { label: '简体中文', lang: 'zh-CN' },
				en: { label: 'English', lang: 'en' },
			},
			customCss: ['./src/styles/docs.css'],
			components: {
				SiteTitle: './src/components/docs/SiteTitle.astro',
				ThemeSelect: './src/components/docs/Download.astro',
				ThemeProvider: './src/components/docs/ThemeProvider.astro',
			},
			head: [
				{ tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
				{ tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' } },
				{ tag: 'link', attrs: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&family=Noto+Sans+TC:wght@400;500;700;900&family=Noto+Sans+SC:wght@400;500;700;900&display=swap' } },
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/HexoLauncher/HexoLauncher' }],
			sidebar: [
				{
					label: '使用指南',
					translations: { en: 'User guide', 'zh-cn': '使用指南' },
					items: [
						{ slug: 'guides/getting-started' },
						{ slug: 'guides/instances' },
						{ slug: 'guides/content' },
						{ slug: 'guides/modpacks' },
						{ slug: 'guides/blueprints' },
						{ slug: 'guides/tools' },
					],
				},
				{
					label: '設定與問題排解',
					translations: { en: 'Settings and troubleshooting', 'zh-cn': '设置与问题排查' },
					items: [{ slug: 'reference/settings' }, { slug: 'reference/troubleshooting' }],
				},
			],
		}),
	],
	redirects: {
		'/guides/example': '/guides/getting-started/',
		'/reference/example': '/reference/settings/',
	},
});
