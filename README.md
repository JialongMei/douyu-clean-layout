# Douyu Clean Layout · 斗鱼网页全屏纯净布局

独立的 Tampermonkey 用户脚本：斗鱼网页全屏时隐藏底部礼物工具栏，让直播画面补满左侧高度，保留右侧聊天。

不依赖 DouyuEx 或任何第三方库，无需构建。

## 安装

1. 在现代 Chrome、Edge 或 Brave 中安装 [Tampermonkey](https://www.tampermonkey.net/)。浏览器需支持 CSS `:has()`。
2. 点击 **[安装脚本](https://raw.githubusercontent.com/JialongMei/douyu-clean-layout/main/douyu-clean-layout.user.js)**，在篡改猴中确认安装。
3. 刷新斗鱼直播间，点击播放器自带的**网页全屏**按钮。

如果浏览器仅显示脚本文本，可将文件保存为 `.user.js`，在篡改猴的「实用工具 / Utilities → 从文件导入 / Import from file」中导入。

已有 DouyuEx 的用户无需开启它；本脚本可以单独使用。退出网页全屏后，礼物栏和普通页面布局自动恢复。

当前不启用自动更新。更新时重新打开上面的安装链接即可。

## 做了什么

- 隐藏礼物工具栏及其外层占位，避免留下空白条。
- 将网页全屏中的直播区域扩展到底部。
- 保留右侧聊天，不主动进入全屏，不更改弹幕设置。

仅匹配 `https://www.douyu.com/*` 的顶层页面；CSS 只在网站原生网页全屏状态 `body.is-fullScreenPage` 下生效。

脚本只添加一个样式节点：不读取账号、Cookie、弹幕内容或本地存储，不发起网络请求，不签到、不发弹幕、不送礼。使用 `@grant none`，没有 `@require` 或外部资源。

## 验证与限制

1.0.0 已在真实斗鱼直播间、3440×1320 视口验证：礼物栏及占位隐藏，直播区域 3060×1320，聊天区域 380×1320；退出网页全屏后恢复原有 108px 工具栏，再次进入仍正常。

本脚本针对斗鱼当前桌面网页结构。网站改版后，选择器可能需要更新。它只处理页面底部工具栏，不过滤直播画面本身的弹幕、礼物动画，也不绕过登录或画质限制。

反馈问题请使用 [GitHub Issues](https://github.com/JialongMei/douyu-clean-layout/issues)，说明浏览器版本，并提供不包含个人信息的截图。

## 许可证

[MIT](LICENSE)
