# 蓝鲸女仆主题 · DSH Whale-Maid Theme

给 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) Web UI 的整页皮肤插件：深蓝海洋配色，加上鲸鱼娘同人贴纸。

<p align="center">
  <img src="assets/hero.webp" width="150" alt="鲸鱼娘头像">
  <img src="assets/corner-original.webp" width="120" alt="站姿立绘">
  <img src="assets/corner-bowl.webp" width="150" alt="鲸鱼碗">
</p>

## 功能

- **整页配色**：底色、卡片、浮层、边框、品牌色、文字层级、侧栏，亮/暗两套主题令牌全部重绘成深蓝海洋色系，附带蓝色滚动条、选区颜色和页边光晕。
- **侧栏头像**：把品牌图标换成鲸鱼娘。
- **空白会话**：大图标换成另一个表情。
- **欢迎卡**：输入框上方一行卡片（头像 + 文案 + 3 个提示胶囊），点胶囊会把提示词插进输入框；可收起，收起后原地出现「显示欢迎卡」。
- **右下角贴纸**：6 张同人图轮换（8 秒/张，悬停暂停，点击切下一张），气泡只在悬停时出现，不挡内容。
- **输入框下方提示条**：点一下换一句台词。
- 文案中英双语，跟随界面语言。

## 安装

这是一个 DSH **profile bundle**（Host + Client 两半），需要安装在某个 profile 里：

1. 克隆本仓库到本机：
   ```bash
   git clone https://github.com/shixiaojuwa-prog/dsh-whale-maid-theme.git
   ```
2. 打开 DSH Web UI → 设置 → 插件 → 安装本地 bundle，选择仓库目录（包含 `package.json` 的那一层）。
   也可以在 Agent 里用 `plugin_manager` 工具的 `install_bundle` 指向该目录。
3. 刷新页面（首次安装后需要刷新一次，之后改动走 HMR）。

安装后它会对该 profile 的所有会话生效。不想用时在插件页停用或卸载即可。

## 自定义

- 配色：`src/client.js` 里的 `TOKENS`
- 文案：`src/client.js` 里的 `ZH` / `EN`
- 轮换图片：`src/client.js` 里的 `PORTRAITS`，以及 `assets/` 下对应的 WebP
- 改完执行：
  ```bash
  node scripts/build.mjs
  ```
  它会把图片内联进 `client.js`，不需要额外服务或网络。

## 目录结构

```
.
├── index.js            # Host 半：本插件不注册 Host 服务，仅占一个可卸载的插件行
├── client.js           # 构建产物（已提交，安装时无需构建）
├── src/client.js       # 可编辑源码：主题令牌、组件、文案
├── scripts/build.mjs   # 把 assets 内联进 client.js
├── assets/             # 头像、欢迎条、右下角轮换图（WebP）
├── locale/             # 插件管理页显示用的中英文标题与描述
├── icon.svg
├── CREDITS.md          # 每张图的来源
└── LICENSE / LICENSE-ART.md
```

## 兼容性

- 面向 DSH `0.2.x` 的 Web profile（使用 Slot 扩展点：`sidebar.brand.mark`、`conversation.hero.brand.mark`、`conversation.input.dock`、`conversation.composer.dock`、`shell.overlay`）。
- DSH 升级若调整了上述 Slot，插件可能部分失效；`src/client.js` 里每个注册都包了 `attempt()`，单个失败不会影响其余部分。

## 素材与授权

- **代码**：MIT，见 [LICENSE](LICENSE)。
- **同人图片**：来自[蓝色大肥鱼档案馆](https://fisharchive.cc/)，角色原作“上善无形”，DeepSeek 元素二次设计“ZipZipPipe”，采用 **CC BY-NC-SA 4.0**（署名 · 非商业性使用 · 相同方式共享）。详见 [CREDITS.md](CREDITS.md) 与 [LICENSE-ART.md](LICENSE-ART.md)。
- 因此本仓库中的图片**不可用于商业用途**；二次分发请保留署名并沿用同一协议。

## 致谢

- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)：插件与 Slot 机制
- [蓝色大肥鱼档案馆](https://fisharchive.cc/) 与两位原作者：鲸鱼娘形象与表情
