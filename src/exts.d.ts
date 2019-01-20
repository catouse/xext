declare namespace Xuanxuan {

    /**
     * 界面主题管理类
     */
    class Theme {
        /**
             * 创建一个界面主题类实例
             * @param {Object} data 主题属性对象
             * @param {string} data.name 主题的名称，同一个扩展中的主题名称不能相同
             * @param {string} data.displayName 主题在界面上显示的名称
             * @param {string} data.color 主题的主色调
             * @param {string} data.style 主题对应的 css 文件
             * @param {string} data.inject 主题的载入方式
             * @param {ThemeExtension} extension 主题所属的扩展
             */
            constructor(data: {name: string, displayName: string, color: string, style: string, inject: string}, extension: ThemeExtension);

            /**
             * 主题的主色调
             * @type {string}
             */
            readonly color: string;

            /**
             * 主题所属的扩展
             * @type {ThemeExtension}
             */
            readonly extension: ThemeExtension;

            /**
             * 主题的名称，同一个扩展中的主题名称不能相同
             * @type {string}
             */
            readonly name: string;

            /**
             * 主题在界面上显示的名称
             * @type {string}
             */
            readonly displayName: string;

            /**
             * 主题名称的拼音形式字符串
             * @type {string}
             * @readonly
             */
            readonly pinyinNames: string;

            /**
             * 主题编号
             * @type {string}
             */
            readonly id: string;

            /**
             * 主题的载入方式，目前支持 `'inject'` 和 `'append'`
             * @type {string}
             */
            readonly inject: string;

            /**
             * 是否为追加载入方式（`append`）
             * @type {boolean}
             */
            readonly isAppend: boolean;

            /**
             * 是否为覆盖载入方式（`override`）
             * @type {boolean}
             */
            readonly isOverride: boolean;

            /**
             * 主题对应的 CSS 样式表文件路径
             * @type {string}
             */
            readonly styleFile: string;

            /**
             * 预览图片地址
             *
             * @readonly
             * @type {string}
             */
            readonly preview: string;

            /**
             * 主题作者（实际为主题所属扩展的作者）
             * @type {string}
             */
            readonly author: string;

            /**
             * 主题发布者（实际为主题所属扩展的发布者）
             * @type {string}
             */
            readonly publisher: string;

            /**
             * 主题关键字（实际为主题所属扩展的关键字）
             * @type {string[]}
             */
            readonly extKeywords: string[];

            /**
             * 主题扩展显示名称
             * @type {string}
             */
            readonly extDisplayName: string;

            /**
             * 主题扩展扩展名称
             * @type {string}
             */
            readonly extName: string;

            /**
             * 主题扩展扩展名称拼音字符串
             * @type {string}
             */
            readonly extPinyinNames: string;

            /**
             * 主题扩展描述
             * @type {string}
             */
            readonly extDescription: string;

            /**
             * 主题与给定的关键字匹配分值
             * @memberof Member
             * @param {string[]} keys 关键字列表
             * @return {number} 匹配的分值
             */
            getMatchScore(keys: string[]): number;
    }

    /**
     * 扩展
     */
    class Extension {
        /**
         * 扩展类型表
         * @type {Map<string, string>}
         * @static
         */
        static TYPES: Object;

        /**
         * 创建一个扩展基础类实例
         * @param {Object} pkgData 扩展的 package.json 文件数据
         * @param {Object} data 扩展的运行时数据
         */
        constructor(pkgData: Object, data: Object);

        /**
         * 从扩展的 package.json 文件数据初始化扩展信息
         * @param {Object} pkgData 扩展的 package.json 文件数据
         * @return {void}
         */
        initPkg(pkgData: Object): void;

        /**
         * 添加一个该扩展的错误信息
         * @param {string} name 错误名称
         * @param {string} error 错误信息
         * @return {void}
         */
        addError(name: string, error: string): void;

        /**
         * 错误信息清单
         * @type {Object[]}
         */
        readonly errors: Object[];

        /**
         * 是否有错误信息
         * @type {boolean}
         */
        readonly hasError: boolean;

        /**
         * 扩展名称的拼音字符串
         * @type {string}
         */
        readonly pinyinNames: string;

        /**
         * 扩展配置数据
         * @type {Object}
         */
        readonly config: Object;

        /**
         * 扩展显示名称
         * @type {string}
         */
        readonly displayName: string;

        /**
         * 扩展类型
         * @type {string}
         */
        readonly type: string;

        /**
         * 内部名称
         * @type {string}
         */
        readonly name: string;

        /**
         * 是否主题类型扩展
         * @type {boolean}
         */
        readonly isTheme: boolean;

        /**
         * 是否插件类型扩展
         * @type {boolean}
         */
        readonly isPlugin: boolean;

        /**
         * 是否是应用类型扩展
         * @type {boolean}
         */
        readonly isApp: boolean;

        /**
         * 是否内置扩展
         * @type {boolean}
         */
        readonly buildIn: boolean;
        /**
         * 扩展内置配置信息
         * @type {{name: string}[]}
         */
        readonly configurations: Object;

        /**
         * 扩展的 package.json 文件数据
         * @type {Object}
         */
        readonly pkg: Object;

        /**
         * 扩展描述信息
         * @type {string}
         */
        readonly description: string;

        /**
         * 扩展版本信息
         * @type {string}
         */
        readonly version: string;

        /**
         * 扩展作者信息
         * @type {{name: string, email: string}}
         */
        readonly author: {name: string, email: string} | string;

        /**
         * 发布者信息
         * @type {{name: string, email: string}}
         */
        readonly publisher: {name: string, email: string} | string;

        /**
         * 扩展版权信息
         * @type {string}
         */
        readonly license: string;

        /**
         * 扩展主页链接
         * @type {string}
         */
        readonly homepage: string;

        /**
         * 扩展关键字清单
         * @type {string[]}
         */
        readonly keywords: string[];

        /**
         * 扩展扩展要求的运行环境
         * @type {{xuanxuan: string, platform: string, extensions: string[]}}
         */
        readonly engines: {xuanxuan: string, platform: string, extensions: string[]};

        /**
         * 版本库信息
         * @type {{type: string, url: string}}
         */
        readonly repository: {type: string, url: string};

        /**
         * 问题反馈地址
         * @type {{url: string}}
         */
        readonly bugs: {url: string};

        /**
         * 扩展是否支持热加载
         * @type {boolean}
         */
        readonly hot: boolean;

        /**
         * 远程免登录入口地址
         * @type {string}
         */
        readonly entryUrl: string;

        /**
         * 远程免登录入口 ID
         * @type {string}
         */
        readonly entryID: string;

        /**
         * 远程免登录入口地址
         *
         * @param {string} [referer=''] 要访问的地址
         * @param {string} [entryID=null] 远程免登录入口 ID
         * @returns {Promise<string>} 使用 Promise 异步返回处理结果
         */
        getEntryUrl(referer?: string, entryID?: string): Promise<string>;

        /**
         * 是否支持远程免登录
         * @type {boolean}
         */
        readonly hasServerEntry: boolean;

        /**
         * 远程额外数据
         * @type {any}
         */
        readonly serverData: any;

        /**
         * 远程扩展下载地址
         * @type {string}
         */
        readonly download: string;

        /**
         * 是否是远程扩展
         * @type {boolean}
         */
        readonly isRemote: boolean;

        /**
         * 当前扩展是否为内置或远程扩展
         *
         * @readonly
         * @type {boolean}
         */
        readonly isBuildInOrRemote: boolean;

        /**
         * 远程扩展是否加载完毕
         * @type {boolean}
         */
        readonly isRemoteLoaded: boolean;

        /**
         * 远程 MD5 值
         * @type {string}
         */
        readonly md5: string;

        /**
         * 扩展所属的用户
         * @type {string}
         */
        readonly user: string;

        /**
         * 远程扩展缓存路径
         * @type {string}
         */
        readonly remoteCachePath: string;

        /**
         * 远程扩展是否加载失败
         * @type {boolean}
         */
        readonly loadRemoteFailed: boolean;

        /**
         * 远程扩展下载进度，百分比，取值范围 0~100
         * @type {number}
         */
        readonly downloadProgress: number;

        /**
         * 设置远程扩展加载结果
         *
         * @param {boolean} result 是否加载失败
         * @param {Error} [error=null] 设置加载失败的错误信息
         * @return {void}
         */
        setLoadRemoteResult(result: boolean, error?: Error): void;

        /**
         * 扩展配色
         * @type {string}
         */
        readonly accentColor: string;

        /**
         * 扩展模块入口文件路径
         * @type {string}
         */
        readonly mainFile: string;

        /**
         * 扩展图标
         * @type {string}
         */
        readonly icon: string;

        /**
         * 通知消息发送者信息配置
         *
         * @readonly
         * @type {Map<String, Object>}
         */
        readonly notificationSenders: Object;

        /**
         * 指定的通知消息发送者信息配置对象
         * @param {Object|string} sender 发送者 ID 或发送者信息对象
         * @return {Object} 发送者信息配置对象
         */
        getNotificationSender(sender: Object | string): Object;

        /**
         * 扩展作者名称
         * @type {string}
         */
        readonly authorName: string;

        /**
         * 扩展存储数据
         * @type {{data: Object, pkg: Object}}
         */
        readonly storeData: {data: Object, pkg: Object};

        /**
         * 扩展运行时数据
         * @type {Object}
         */
        readonly data: Object;

        /**
         * 扩展安装时间（时间戳形式）
         * @type {number}
         */
        readonly installTime: number;

        /**
         * 是否已禁用扩展
         * @type {boolean}
         */
        readonly disabled: boolean;

        /**
         * 扩展是否可用
         * @type {boolean}
         */
        readonly avaliable: boolean;

        /**
         * 扩展上次更新的时间（时间戳）
         * @type {number}
         */
        readonly updateTime: number;

        /**
         * 扩展本地文件路径
         * @type {string}
         */
        readonly localPath: boolean;

        /**
         * 是否为正在开发中的扩展
         * @type {boolean}
         */
        readonly isDev: boolean;

        /**
         * 是否有 JS 模块
         * @type {boolean}
         */
        readonly hasModule: boolean;

        /**
         * 扩展配置项值
         *
         * @param {?string} key 配置名称
         * @return {any} 扩展配置值
         */
        getConfig(key?: string): any;

        /**
         * 设置扩展配置项
         *
         * @param {string|Object} key 配置名称或者配置对象
         * @param {any} value 配置值，如果 `key` 为 `Object` 则忽略此参数
         * @return {void}
         */
        setConfig(key: string | Object, value?: any): void;

        /**
         * 扩展用户配置项值
         *
         * @param {string} key 配置名称
         * @param {any} defualtValue 默认值
         * @return {any} 扩展配置值
         */
        getUserConfig(key: string, defualtValue?: any): any;

        /**
         * 设置扩展用户配置项
         *
         * @param {string|Object} key 配置名称或者配置对象
         * @param {any} value 配置值，如果 `key` 为 `Object` 则忽略此参数
         * @return {void}
         */
        setUserConfig(key: string | Object, value?: any): void;

        /**
         * 重新载入扩展模块
         *
         * @return {any} 扩展模块
         */
        loadModule(): any;

        /**
         * 扩展模块是否已经加载
         * @type {boolean}
         */
        readonly isModuleLoaded: boolean;

        /**
         * 扩展是否需要重新载入才能启用
         * @type {boolean}
         */
        readonly needRestart: boolean;

        /**
         * 加载并启用扩展
         *
         * @return {boolean} 如果为 `true` 表示加载成功，否则表示加载失败
         */
        attach(): boolean;

        /**
         * 热加载并启用扩展
         *
         * @return {boolean} 如果为 `true` 表示加载成功，否则表示加载失败
         */
        hotAttach(): boolean;

        /**
         * 停用并卸载扩展
         *
         * @return {void}
         */
        detach(): void;

        /**
         * 是否拥有 React 视图替换组件
         * @type {boolean}
         */
        readonly hasReplaceViews: boolean;

        /**
         *  React 视图替换组件清单
         * @type {Map<string, Class<Component>>}
         */
        readonly replaceViews: Object;

        /**
         * 上次加载此扩展所花费的时间，单位为毫秒
         * @type {number}
         */
        readonly loadTime: number;

        /**
         * 加载后的扩展模块
         * @type {any}
         */
        readonly module: any;

        /**
         * 调用扩展模块方法
         *
         * @param {string} methodName 方法名称
         * @param {...any} params 方法参数
         * @return {any} 如果返回所调用的方法返回值
         */
        callModuleMethod(methodName: string, ...params: any[]): any;

        /**
         * 扩展支持的命令
         * @type {Map<string, any>}
         */
        readonly commands: Object;

        /**
         * 指定名称的扩展命令
         *
         * @param {string} commandName 命令名称
         * @return {any} 扩展命令
         */
        getCommand(commandName: string): any;

        /**
         * 网址解析器
         *
         * @param {string} url 要解析的网址
         * @param {string} [type='inspect'] 解析类型，包括 `'inspect'` 和 `'open'`
         * @return {any} 网址解析器对象
         */
        getUrlInspector(url: string, type?: string): any;


        /**
         * 网址打开处理器
         *
         * @param {string} url 要打开的网址
         * @return {any} 网址打开处理器对象
         */
        getUrlOpener(url: string): any;

        /**
         * 格式化上下文菜单条目
         *
         * @param {Object} menuItem 要格式化的上下文菜单条目
         * @param {Object} urlFormatObject 网址格式化对象
         * @return {Object} 上下文菜单条目
         */
        formatContextMenuItem(menuItem: Object, urlFormatObject: Object): Object;

        /**
         * 上下文菜单生成器
         *
         * @return {Object[]} 上下文菜单生成器列表
         */
        getContextMenuCreators(): Object[];

        /**
         * 扩展与给定的关键字匹配分值
         * @param {string[]} keys 关键字列表
         * @return {number} 匹配的分值
         */
        getMatchScore(keys: string[]): number;

        /**
         * 保存扩展自定义数据
         * @return {void}
         */
        saveData(): void;
    }

    /**
     * 应用扩展
     */
    class AppExtension extends Extension {
        /**
         * 创建一个应用扩展类实例
         * @param {Object} pkg 扩展的 package.json 文件数据
         * @param {Object} data 扩展的运行时数据
         */
        constructor(pkg: Object, data: Object);

        /**
         * 应用类型是否是内嵌网页应用
         * @type {boolean}
         */
        readonly isWebview: boolean;

        /**
         * 应用类型
         * @type {string}
         */
        readonly appType: string;

        /**
         * 内嵌网页应用地址
         * @type {string}
         */
        readonly webViewUrl: string;

        /**
         * 应用的免登录地址
         * @param {string} referer 要访问的地址，如果留空使用应用主页地址
         * @param {string} entryID 入口 ID，如果留空使用应用的 ID
         * @returns {Promise} 使用 Promise 异步返回处理结果
         */
        getEntryUrl(referer?: string, entryID?: string): Promise<string>;

        /**
         * 内嵌网页预加载脚本
         * @type {string}
         */
        readonly webViewPreloadScript: string;

        /**
         * 内嵌网页注入 CSS
         * @type {string}
         */
        readonly injectCSS: string;

        /**
         * 内嵌网页注入脚本
         * @type {string}
         */
        readonly injectScript: string;

        /**
         * 是否是本地内嵌网页
         * @type {boolean}
         */
        readonly isLocalWebView: boolean;

        /**
         * 应用配色
         * @type {string}
         */
        readonly appAccentColor: string;

        /**
         * 应用背景色
         * @type {string}
         */
        readonly appBackColor: string;

        /**
         * 应用图标
         * @type {string}
         */
        readonly appIcon: string;

        /**
         * 应用在菜单上显示的图标
         * @type {string}
         */
        readonly menuIcon: string;

        /**
         * 扩展图标
         * @type {string}
         */
        readonly icon: string;

        /**
         * 扩展配色
         * @type {string}
         */
        readonly accentColor: string;

        /**
         * 应用内部视图入口组件
         * @type {Class<Component>}
         */
        readonly MainView: typeof React.Component;

        /**
         * 是否为内置应用
         * @type {boolean}
         */
        readonly buildIn: boolean;

        /**
         * 是否是默认应用
         * @type {boolean}
         */
        readonly isDefault: boolean;

        /**
         * 是否是固定显示的应用
         * @type {boolean}
         */
        readonly isFixed: boolean;

        /**
         * 是否允许用户将应用图标固定在窗口菜单上
         * @type {boolean}
         */
        readonly canPinnedOnMenu: boolean;

        /**
         * 应用图标在导航上显示的顺序
         *
         * @readonly
         * @type {number}
         */
        readonly pinnedOnMenuOrder: number;

        /**
         * 应用图标是否能够固定在窗口菜单上
         * @type {boolean}
         */
        readonly pinnedOnMenu: boolean;
    }

    /**
     * 插件扩展
     */
    class PluginExtension extends Extension {
        /**
         * 创建一个插件扩展类实例
         * @param {Object} pkg 扩展的 package.json 文件数据
         * @param {Object} data 扩展的运行时数据
         */
        constructor(pkg: Object, data: Object);
    }

    /**
     * 主题扩展
     */
    class ThemeExtension extends Extension {
        /**
         * 创建一个主题扩展类实例
         * @param {Object} pkg 扩展的 package.json 文件数据
         * @param {Object} data 扩展的运行时数据
         */
        constructor(pkg: Object, data: Object);

        /**
         * 主题扩展中定义的所有主题
         * @type {Theme[]}
         */
        readonly themes: Theme[];

        /**
         * 根据主题名称获取主题对象
         *
         * @param {string} name 主题名称
         * @return {Theme} 主题对象
         */
        getTheme(name: string): Theme;
    }
}
