# QC3284's Blog

个人技术博客：OpenWrt / X-WRT / iStoreOS 编译与使用教程、以及一些折腾记录。

线上地址：<https://blog.3284123.xyz>

## 来源与致谢

- 主题基于 **[fuwari](https://github.com/saicaca/fuwari)**（作者 [saicaca](https://github.com/saicaca)）
- 深度定制版基于 **[afoim/fuwari](https://github.com/afoim/fuwari)**（作者 二叉树树 / AcoFork），本仓库是它的派生版本
- 遵循上游 **MIT License**，完整许可见 [LICENSE](LICENSE)

## 技术栈

| 项 | 版本 |
|---|---|
| Astro | 6.1.6 |
| Svelte | 5 |
| Tailwind CSS | 3 |
| 包管理 | pnpm 9.14.4 |

## 常用命令

```bash
pnpm install        # 安装依赖
pnpm dev            # 本地开发（默认 http://localhost:4321）
pnpm build          # 构建到 dist/
pnpm preview        # 预览构建产物
pnpm new-post       # 新建文章
pnpm type-check     # 类型检查
pnpm format         # 格式化
pnpm lint           # 检查
```

`pnpm build:cdn` / `pnpm cdnify` 等是上游 AcoFork 版提供的额外脚本，用法见 `scripts/`。
## 目录速查

| 位置 | 作用 |
|---|---|
| `src/config.ts` | **站点配置总入口**：标题、导航、头像、图片兜底、umami 统计等 |
| `src/content/posts/` | 文章（Markdown） |
| `public/` | 静态资源（图片等） |
| `src/layouts/`、`src/components/` | 布局与组件 |
| `wrangler.jsonc` / `edgeone.json` | 部署配置（Cloudflare Workers / 腾讯 EdgeOne） |

## 部署

构建产物是纯静态站，当前实际在服务的入口：

| 入口 | 平台 |
|---|---|
| <https://blog.3284123.xyz> | — |
| <https://blog.xcqcoo.top> | Netlify |
| <https://eo-blog.xcqcoo.top> | EdgeOne |

Cloudflare Workers 那条路（`cf-blog.xcqcoo.top`）当前**未生效**：该域名的 DNS 是灰云 CNAME，请求进不了 Cloudflare 边缘（error 1034）。

```bash
# Cloudflare Workers（可选）
pnpm build && npx wrangler deploy
```

## 维护说明

- 依赖安装用国内镜像（`registry.npmmirror.com`）
- 历史上曾有一个 `patches/astro.patch`（为 astro 5 写的、用于关闭图片优化），
  升级到 astro 6 后其目标文件已不存在、补丁实际未生效，**2026-09-24 已移除**；
  实测移除前后构建产物的图片路径完全一致（都使用原始路径）。
