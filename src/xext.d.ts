/// <reference path="./node-modules.d.ts" />
/// <reference path="./lang.d.ts" />
/// <reference path="./components.d.ts" />
/// <reference path="./platform.d.ts" />
/// <reference path="./utils.d.ts" />
/// <reference path="./models.d.ts" />
/// <reference path="./profile.d.ts" />
/// <reference path="./app.d.ts" />
/// <reference path="./views.d.ts" />
/// <reference path="./events.d.ts" />
/// <reference path="./exts.d.ts" />

/**
 * 全局扩展模块
 */
declare interface Xext {
    /**
     * 语言管理模块
     */
    lang: Xuanxuan.Lang;

    /**
     * 依赖模块
     */
    nodeModules: Xuanxuan.NodeModules;

    /**
     * 通用组件库
     */
    components: Xuanxuan.Components;

    /**
     * 通用工具模块
     */
    utils: Xuanxuan.Utils;

    /**
     * 平台访问模块
     */
    platform: Xuanxuan.Platform;

    /**
     * 应用核心模块
     */
    app: Xuanxuan.App;

    /**
     * 界面视图库
     */
    views: Xuanxuan.Views;
}

declare namespace NodeJS {
    interface Global {
        /**
         * 全局扩展访问对象
         */
        Xext: Xext;

        /**
         * 如果为 true，表示当前代码运行为调试模式，否则为正常模式
         */
        DEBUG: boolean;
    }
}
