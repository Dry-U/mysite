# 个人作品集网站 (My Personal Website)

这是一个基于原生 HTML、CSS 和 JavaScript 构建的现代化个人静态网站。项目采用模块化结构设计，包含主页、博客、作品集和资源分享等独立板块，并针对移动端和桌面端进行了响应式适配。

## 📂 项目结构

```text
mysite/
├── index.html          # 网站主页入口
├── style.css           # 主页核心样式
├── subpage.css         # 子页面通用样式 (统一风格)
├── script.js           # 网站交互逻辑 (导航、滚动等)
├── README.md           # 项目说明文档
│
├── blog/               # [博客模块]
│   ├── index.html      # 博客列表页
│   └── minimalism.html # 示例文章页
│
├── portfolio/          # [作品集模块]
│   ├── index.html      # 作品展示列表页
│   └── project-alpha.html # 示例作品详情页
│
└── share/              # [分享模块]
    └── index.html      # 资源分享列表页
```

## ✨ 功能特性

*   **模块化设计**: 博客、作品、分享均拥有独立的子目录和页面，便于扩展和维护。
*   **响应式布局**: 完美适配手机、平板和桌面电脑。
*   **统一视觉风格**: 所有子页面共用 `subpage.css`，确保网站整体视觉体验一致。
*   **平滑交互**: 
    *   主页导航支持平滑滚动定位。
    *   智能导航栏：在主页点击 Logo 滚动至顶部，在子页面点击 Logo 返回主页。
*   **轻量级**: 无需复杂的构建工具，纯静态文件，加载速度快。

## 🚀 如何使用

### 1. 本地预览
直接双击打开项目根目录下的 `index.html` 文件即可在浏览器中预览网站。

### 2. 内容管理

#### 添加新博客文章
1. 在 `blog/` 目录下复制 `minimalism.html` 并重命名（例如 `my-new-post.html`）。
2. 编辑新文件，修改标题、日期和文章内容。
3. 打开 `blog/index.html`，在文章列表中添加指向新文件的链接。

#### 添加新作品
1. 在 `portfolio/` 目录下复制 `project-alpha.html` 并重命名。
2. 编辑文件内容，替换图片和项目描述。
3. 在 `portfolio/index.html` 中添加新作品的卡片入口。

### 3. 部署上线
本项目为纯静态网站，非常适合部署在以下平台：
*   **Cloudflare Pages** (推荐): 连接 GitHub 仓库即可自动部署。
*   **GitHub Pages**: 在仓库设置中开启 Pages 服务。
*   **Vercel / Netlify**: 导入项目即可。

## 🛠️ 技术栈
*   HTML5
*   CSS3 (Flexbox, Grid, CSS Variables)
*   Vanilla JavaScript (ES6+)

---
© 2025 My Personal Website. All Rights Reserved.
