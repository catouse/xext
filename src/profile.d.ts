/// <reference path="./models.d.ts" />

declare namespace Xuanxuan {
    /**
     * 用户类
     */
    class User extends Member {
        /**
         * 事件表
         * @type {Object<string, string>}
         * @static
         */
        static EVENT: Object;

        /**
         * 数据库存储实体属性结构管理器
         *
         * @type {EntitySchema}
         * @static
         */
        static SCHEMA: Object;

        /**
         * 用户状态管理器
         *
         * @type {Status}
         * @static
         */
        static STATUS: Object;

        /**
         * 创建一个用户类实例
         * @param {Object<string, any>} data 属性对象
         */
        constructor(data: Object);

        /**
         * 用户类数据库存储实体属性结构管理器
         *
         * @readonly
         * @type {EntitySchema}
         */
        readonly schema: string;

        /**
         * 判定当前用户事件机制是否可用
         *
         * @readonly
         * @type {boolean}
         */
        readonly isEventsEnable: boolean;

        /**
         * 当前用户实例存储数据对象
         *
         * @return {Object<string, any>} 数据对象
         */
        plain(): Object;

        /**
         * 将用户保存到本地存储
         *
         * @return {void}
         */
        save(): void;

        /**
         * 判定用户是否在今天第一次进行登录
         *
         * @readonly
         * @type {boolean}
         */
        readonly isFirstSignedToday: string;

        /**
         * 判定用户是否成功登录过
         *
         * @type {boolean}
         */
        readonly signed: boolean;

        /**
         * 用户个人配置数据
         *
         * @readonly
         * @return {Object<string, any>} 配置数据对象
         */
        readonly config: Object;

        /**
         * 判断用户状态是否处于离线状态
         *
         * @readonly
         * @return {boolean} 如果为 `true` 则表示用户处于离线状态，否则为为通过验证或在线状态
         */
        readonly isDisconnect: boolean;

        /**
         * 判断用户状态是否处于未通过验证状态
         *
         * @readonly
         * @return {boolean} 如果为 `true` 则表示用户处于未通过验证状态
         */
        readonly isUnverified: boolean;

        /**
         * 判断用户状态是否处于已通过验证状态
         *
         * @readonly
         * @return {boolean}
         */
        readonly isVertified: boolean;

        /**
         * 判断用户状态是否处于已登录状态
         *
         * @readonly
         * @return {boolean}
         */
        readonly isLogined: boolean;

        /**
         * 将用户登录状态设置为离线状态
         *
         * @return {void}
         */
        markDisconnect(): void;

        /**
         * 将用户登录状态设置为未通过验证状态
         *
         * @return {void}
         */
        markUnverified(): void;

        /**
         * 判断用户状态是否处于正在登录中状态
         *
         * @readonly
         * @return {boolean}
         */
        readonly isLogging: boolean;

        /**
         * 标记用户正在开始登录操作
         *
         * @return {void}
         */
        beginLogin(): void;

        /**
         * 标记用户已结束登录操作
         *
         * @param {boolean} result 是否登录成功
         * @return {void}
         */
        endLogin(result: boolean): void;

        /**
         * 用户可用的 Session ID
         *
         * @type {string}
         */
        readonly sessionID: string;

        /**
         * 用户登录的服务器地址（以 URL 实例形式）
         *
         * @type {URL}
         */
        readonly server: URL;

        /**
         * 用户登录的服务器地址（以字符串形式）
         *
         * @readonly
         * @type {string}
         */
        readonly serverUrl: string;

        /**
         * 然之服务器地址
         *
         * @type {string}
         */
        readonly ranzhiUrl: string;

        /**
         *  XXD 服务器端口号
         *
         * @readonly
         * @type {string}
         */
        readonly webServerPort: string;

        /**
         * 要登录的 XXD 服务器名称
         *
         * @readonly
         * @type {string}
         */
        readonly serverName: string;

        /**
         * 请求 XXD 服务器信息 URL 地址
         *
         * @readonly
         * @type {string}
         */
        readonly webServerInfoUrl: string;

        /**
         *  Socket 服务器端口
         *
         * @type {string}
         */
        readonly socketPort: string;

        /**
         *  Socket 服务连接地址
         *
         * @type {string}
         */
        readonly socketUrl: string;

        /**
         * 服务器版本
         *
         * @type {string}
         */
        readonly serverVersion: string;

        /**
         * 服务器地址根路径
         *
         * @type {string}
         */
        readonly serverUrlRoot: string;

        /**
         * 拼接 http 服务器请求地址
         * @param {string} [path=''] 请求路径
         * @return {void}
         */
        makeServerUrl(path?: string): void;

        /**
         * 上传文件请求地址
         *
         * @type {string}
         */
        readonly uploadUrl: string;

        /**
         * 用户标识字符串
         *
         * @type {string}
         */
        readonly identify: string;

        /**
         *  Socket 加密 Token 字符串
         *
         * @type {string}
         */
        readonly token: string;

        /**
         *  Socket 服务 AES 加密向量
         *
         * @type {string}
         */
        readonly cipherIV: string;

        /**
         * 最大允许文件上传大小
         *
         * @type {number}
         */
        readonly uploadFileSize: number;

        /**
         * 上次登录的时间戳
         *
         * @type {number}
         * @readonly
         */
        readonly lastLoginTime: number;

        /**
         * 是否已设置为自动登录
         *
         * @type {boolean}
         */
        readonly autoLogin: boolean;

        /**
         * 是否设置为记住密码
         *
         * @type {boolean}
         */
        readonly rememberPassword: boolean;

        /**
         * 是否开启 LDAP 登录模式
         *
         * @type {boolean}
         */
        readonly ldap: boolean;

        /**
         * 用户头像图片地址
         *
         * @type {string}
         */
        readonly avatar: string;

        /**
         * 是否从没有成功登录过
         *
         * @type {boolean}
         * @readonly
         */
        readonly isNeverLogined: string;

        /**
         * 用户密码
         *
         * @type {string}
         */
        readonly password: string;

        /**
         * 包含 MD5 前缀的密码
         *
         * @type {string}
         */
        readonly passwordMD5WithFlag: string;

        /**
         * 用于登录验证的密码
         *
         * @type {string}
         * @readonly
         */
        readonly passwordForServer: string;

        /**
         *  MD5 算法加密后的密码
         *
         * @type {string}
         * @readonly
         */
        readonly passwordMD5: string;

        /**
         * 检查当前版本是否支持特定功能
         *
         * @param {string} name 功能名称
         * @return {boolean}
         */
        isVersionSupport(name: string): boolean;

        /**
         * 创建一个用户实例
         *
         * @static
         * @param {Object|User} user 用户数据对象
         * @return {User}
         */
        static create(user: Object | User): User;

        /**
         * 创建用户唯一识别标识字符串
         *
         * @static
         * @param {string} server 用户登录的服务器地址
         * @param {string} account 用户账号
         * @return {string}
         */
        static createIdentify(server: string, account: string): string;
    }

    /**
     * 当前用户账号访问模块
     */
    interface UserProfile {
        EVENT: Object;
        createUser: Function;
        onSwapUser: Function;
        onUserStatusChange: Function;
        onUserConfigChange: Function;
        onUserConfigRequestUpload: Function;
        getLastSavedUser: Function;
        isCurrentUser: Function;
        readonly user: User;
        readonly userId: number | string;
        readonly isUserOnline: boolean;
        readonly isUserVertified: boolean;
        readonly userStatus: number;
        readonly userConfig: Object;
        readonly userAccount: string;
    }
}