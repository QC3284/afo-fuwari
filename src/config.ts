import type {
	ExpressiveCodeConfig,
	GitHubEditConfig,
	ImageFallbackConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
	UmamiConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "QC3284's Blog",
	subtitle: "乐于分享",
	description:
		"分享一些个人经历，文章和教程的个人技术博客，作者为QC3284",

	keywords: [],
	lang: "zh_CN", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
	themeColor: {
		hue: 215, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
		forceDarkMode: false, // Force dark mode and hide theme switcher
	},
	banner: {
		enable: false,
		src: "/xinghui.avif", // Relative to the /src directory. Relative to the /public directory if it starts with '/'

		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: true, // Display the credit text of the banner image
			text: "Pixiv @chokei", // Credit text to be displayed

			url: "https://www.pixiv.net/artworks/122782209", // (Optional) URL link to the original artwork or artist's page
		},
	},
	background: {
		enable: true, // Enable background image
		src: "https://pic-eo-1.xcqcoo.top/random.js", // Background image URL (supports HTTPS)
		position: "center", // Background position: 'top', 'center', 'bottom'
		size: "cover", // Background size: 'cover', 'contain', 'auto'
		repeat: "no-repeat", // Background repeat: 'no-repeat', 'repeat', 'repeat-x', 'repeat-y'
		attachment: "fixed", // Background attachment: 'fixed', 'scroll', 'local'
		opacity: 1, // Background opacity (0-1)
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		{
			src: "https://cdn-esa-1.xcqcoo.top/gh/QC3284/233@main/yinlang.jpg", // Path of the favicon, relative to the /public directory
			//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
			//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		},
	],
	officialSites: [
		{ url: "https://blog.3284123.xyz", alias: "CN" },
		{ url: "https://cf-blog.xcqcoo.top", alias: "Global" },
	],
	server: [
		{ url: "", text: "Blog" },
		{ url: "https://umami.3284123.xyz", text: "Umami" },
		{ url: "https://pic-eo-1.xcqcoo.top", text: "RandomPic" },
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		{
			name: "友链",
			url: "/friends/", // Internal links should not include the base path, as it is automatically added
			external: false, // Show an external link icon and will open in a new tab
		},
//		{
//			name: "赞助",
//			url: "/sponsors/", // Internal links should not include the base path, as it is automatically added
//			external: false, // Show an external link icon and will open in a new tab
//		},
		{
			name: "统计",
			url: "https://umami.3284123.xyz/share/", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
//		{
//			name: "监控",
//			url: "https://status.acofork.com", // Internal links should not include the base path, as it is automatically added
//			external: true, // Show an external link icon and will open in a new tab
//		},
		{	name: "随机图Api",
			url: "https://https://pic-eo-1.xcqcoo.top/", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
		{	name: "随机人品",
			url: "https://api-ym.xcqcoo.top/lucky.php", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "https://cdn-esa-1.xcqcoo.top/gh/QC3284/233@main/yinlang.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "QC3284",
	bio: "Enjoys sharing.",
	links: [
		{
			name: "Bilibli",
			icon: "bilibili", // Local icon
			url: "https://space.bilibili.com/510234024",
		},
		{
			name: "GitHub",
			icon: "github", // Local icon
			url: "https://github.com/QC3284",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const imageFallbackConfig: ImageFallbackConfig = {
	enable: false,
	originalDomain: "https://eopfapi.acofork.com/pic?img=ua",
	fallbackDomain: "https://eopfapi.acofork.com/pic?img=ua",
};

export const umamiConfig: UmamiConfig = {
	enable: false,
	baseUrl: "https://umami.3284123.xyz",
	shareId: "",
	timezone: "Asia/Shanghai",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};

export const gitHubEditConfig: GitHubEditConfig = {
	enable: true,
	baseUrl: "https://github.com/QC3284/afo-fuwari/blob/main/src/content/posts",
};

// todoConfig removed from here
