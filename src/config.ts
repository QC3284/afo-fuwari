import type {
	GitHubEditConfig,
	ImageFallbackConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
	UmamiConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

const customDomain = "blog.3284123.xyz";

export const siteConfig: SiteConfig = {
	customDomain,
	title: "QC3284's Blog",
	subtitle: "乐于分享",
	description:
		"分享一些个人经历，文章和教程的个人技术博客，作者为QC3284",

	keywords: [],
	lang: "zh_CN",
	themeColor: {
		hue: 215,
		fixed: false,
	},
	banner: {
		enable: false,
		src: "/xinghui.avif",
		position: "center",
		credit: {
			enable: true,
			text: "Pixiv @chokei",
			url: "https://www.pixiv.net/artworks/122782209",
		},
	},
	background: {
		enable: true,
		src: "https://pic-eo-1.xcqcoo.top/random.js",
		position: "center",
		size: "cover",
		repeat: "no-repeat",
		attachment: "fixed",
		opacity: 1,
	},
	toc: {
		enable: true,
		depth: 2,
	},
	favicon: [
		{
			src: "https://cdn-esa-cn-1.3284123.xyz/gh/QC3284/233@main/yinlang.jpg",
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
			url: "/friends/",
			external: false,
		},
		{
			name: "统计",
			url: "https://umami.3284123.xyz/share/21i0HxSvjaEWAGfU",
			external: true,
		},
		{
			name: "随机图Api",
			url: "https://pic-eo-1.xcqcoo.top/",
			external: true,
		},
		{
			name: "随机人品",
			url: "https://api-ym.xcqcoo.top/lucky.php",
			external: true,
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "https://cdn-esa-cn-1.3284123.xyz/gh/QC3284/233@main/yinlang.jpg",
	name: "QC3284",
	bio: "Enjoys sharing.",
	links: [
		{
			name: "Bilibli",
			icon: "simple-icons:bilibili",
			url: "https://space.bilibili.com/510234024",
		},
		{
			name: "GitHub",
			icon: "simple-icons:github",
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
	enable: true,
	baseUrl: "https://umami.3284123.xyz",
	shareId: "21i0HxSvjaEWAGfU",
	timezone: "Asia/Shanghai",
};

export const gitHubEditConfig: GitHubEditConfig = {
	enable: true,
	baseUrl: "https://github.com/QC3284/afo-fuwari/blob/main/src/content/posts",
};
