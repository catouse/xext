declare namespace Xuanxuan {
    /**
     * 平台访问模块
     */
    interface Platform {
        /**
         * 平台功能访问对象
         *
         * @readonly
         * @memberof PlatformModule
         * @type {Object}
         */
        modules: Object;

        /**
         * 平台类型名称
         * @type {String}
         * @readonly
         * @memberof PlatformModule
         */
        type: string;

        /**
         * 平台环境变量对象
         * @type {Map<String, any>}
         *
         * @readonly
         * @memberof PlatformModule
         */
        env: Object;

        /**
         * 是否指定的平台类型
         * @param {String} type 平台类型名称
         * @memberof Index
         * @return {boolean} 如果为 `true` 则为指定的平台类型，否则不是
         */
        isType(type: string): boolean;

        /**
         * 使用名称路径调用平台模块方法或者获取属性
         *
         * @param {string|string[]} nameArr 名称路径，使用 '.' 拼接或者使用字符串数组
         * @param {...any} params 调用方法时用到的参数表
         * @returns {any} 返回所调用的方法执行结果
         * @memberof PlatformModule
         */
        call(nameArr: string[] | string, ...params: any): any;

        /**
         * 根据名称路径获取模块内属性值
         *
         * @param {string[] | string} nameArr 名称数组
         * @returns {any} 属性值
         * @memberof PlatformModule
         */
        access(nameArr: string[] | string): any;

        /**
         * 判断平台模块中是否拥有指定的方法或属性定义
         *
         * @param {string[]|string} nameArr 名称数组
         * @returns {boolean} 如果返回 `true` 则为拥有指定的方法或属性定义，否则为没有有指定的方法或属性定义
         * @memberof PlatformModule
         */
        has(nameArr: string[] | string): boolean;
    }
}
