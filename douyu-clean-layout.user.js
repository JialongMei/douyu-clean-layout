// ==UserScript==
// @name         斗鱼网页全屏纯净布局
// @namespace    local.douyu.webfullscreen.layout
// @version      1.0.0
// @author       JialongMei
// @license      MIT
// @homepageURL  https://github.com/JialongMei/douyu-clean-layout
// @supportURL   https://github.com/JialongMei/douyu-clean-layout/issues
// @description  网页全屏时隐藏底部礼物工具栏并补满直播高度，保留右侧聊天；不操作账号、弹幕或礼物。
// @match        https://www.douyu.com/*
// @run-at       document-start
// @noframes
// @grant        none
// @updateURL    none
// ==/UserScript==

// Layout only: no requests, storage, timers, input hooks or automatic fullscreen.
// Exiting native webpage fullscreen restores the site's normal layout automatically.
(function () {
    'use strict';
    const styleId = 'douyu-webfullscreen-clean-layout';
    function install() {
        if (document.getElementById(styleId)) return;
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
body.is-fullScreenPage #js-player-toolbar,
body.is-fullScreenPage .PlayerToolbar,
body.is-fullScreenPage div:has(> #js-player-toolbar):not(:has(#room-html5-player)) {
    display: none !important;
}
body.is-fullScreenPage .stream__T55I3,
body.is-fullScreenPage .layout-Player-video {
    bottom: 0 !important;
    height: 100% !important;
}
`;
        (document.head || document.documentElement).appendChild(style);
    }
    if (document.documentElement) install();
    else document.addEventListener('DOMContentLoaded', install, { once: true });
})();
