# 素材来源

本插件使用的鲸鱼娘同人表情来自「蓝色大肥鱼档案馆」：

- 站点：<https://fisharchive.cc/>
- 角色原作：上善无形（Bilibili）
- DeepSeek 元素二次设计：ZipZipPipe（Bilibili）
- 授权：CC BY-NC-SA 4.0（署名 · 非商业性使用 · 相同方式共享）

这里的图片仅用于本机 Harness 界面装饰，不做商业分发。若要再次分发本插件或其中的图片，请保留上述署名并遵循同一协议。

使用的文件：

| 文件 | 原图 |
|---|---|
| `assets/avatar.webp`、`assets/banner.webp` | `deepseek-shuangshou-tuo-sai`、`deepseek-jushou-dazhaohu` |
| `assets/hero.webp` | `deepseek-liezui-xiao` |
| `assets/corner-ciallo.webp` | `deepseek-biye-ciallo` |
| `assets/corner-bowl.webp` | `deepseek-pao-zai-jingyu-wan` |
| `assets/corner-moyu.webp` | `deepseek-mo-yu` |
| `assets/corner-original.webp` | `assets/deepseek_whale.png` |
| `assets/corner-cry.webp` | `deepseek-da-ku` |

其中 `corner-original`、`corner-bowl`、`corner-cry` 的白色背景由脚本抠除，其余保留原图透明背景。

`scripts/build.mjs` 会把上述 WebP 内联进 `client.js`，因此运行时不需要额外请求。
