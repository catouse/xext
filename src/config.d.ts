/// <reference path="./models.d.ts" />

declare namespace Xuanxuan {
    /**
     * 应用配置模块
     */
    interface Config {
        /**
         * 系统配置模块
         */
        system: Object;
        /**
         * 媒体配置模块
         */
        media: Object;
        /**
         * 界面配置模块
         */
        ui: Object;
        /**
         * 包配置模块
         */
        pkg: Object;
        /**
         * 运行时配置中加载的内置扩展模块
         */
        exts: Extension|AppExtension|ThemeExtension;
        /**
         * 语言配置模块
         */
        lang: Object;
    }
}