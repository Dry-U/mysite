# Dar1an 作品集

使用 Astro 构建并部署到 Cloudflare Pages 的个人作品集网站。

## 技术栈

- **框架**: [Astro](https://astro.build)
- **样式**: CSS 变量 + 自定义属性
- **图标**: [Remix Icon](https://remixicon.com)
- **部署**: Cloudflare Pages

## 功能特性

- 深色极简设计风格
- 堆叠式滚动布局
- 双语显示（中英文）
- 响应式设计
- 组件化结构

## 项目结构

```
/
├── src/
│   ├── components/       # 可复用组件
│   ├── layouts/          # 布局组件
│   │   └── BaseLayout.astro
│   ├── pages/            # 页面路由
│   │   ├── index.astro   # 首页
│   │   ├── blog/         # 博客文章
│   │   ├── portfolio/    # 作品集
│   │   └── share/        # 工具资源
│   └── styles/
│       └── global.css    # 全局样式
├── public/               # 静态资源
└── dist/                 # 构建输出
```

## 常用命令

| 命令              | 操作                                   |
| :---------------- | :------------------------------------- |
| `npm install`     | 安装依赖                               |
| `npm run dev`     | 启动开发服务器 `localhost:4321`        |
| `npm run build`   | 构建生产版本到 `./dist/`               |
| `npm run preview` | 本地预览构建结果                       |

## 部署方式

### Cloudflare Pages（推荐）

1. 将代码推送到 GitHub/GitLab
2. 在 Cloudflare Pages 中连接仓库
3. 构建设置：
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output: `dist`

### Wrangler CLI

```bash
npx wrangler pages deploy dist
```

## 关于 node_modules

`node_modules` 文件夹**不需要**被 Git 管理。项目根目录的 `.gitignore` 文件中已经配置了忽略该文件夹。依赖项通过 `package.json` 记录，其他开发者运行 `npm install` 即可安装所有依赖。

## 版权

© 2025 Dar1an. 保留所有权利。
