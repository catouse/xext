declare namespace Xuanxuan {
    /**
     * 语言管理模块
     */
    interface Lang {
        /**
         * 数据对象
         * @type {Map<String, String>}
         * @readonly
         */
        data: Object;

        /**
         * 使用参数格式化的文本
         *
         * @param {string} name 配置名称
         * @param {...any} args 格式化参数
         * @return {string} 文本
         */
        format(name: string, ...args: any[]): string;

        /**
         * 根据配置名称获取文本
         * @param  {string} name 配置名称
         * @param  {string} defaultValue 默认文本，如果没有在找到文本则返回此值
         * @return {string} 文本
         */
        string(name: string, defaultValue: string): string;

        /**
         * 绑定语言变更事件
         * @param {function(String)} listener 事件回调函数
         * @return {Symbol} 使用 `Symbol` 存储的事件 ID，用于取消事件
         * @example
         * // 绑定语言变更事件
         * const langChangeHandler = onLangChange(newLang => {
         * });
         *
         * // 取消事件绑定
         * events.off(langChangeHandler);
         */
        onLangChange(listener: Function): Symbol;

        /**
         * 所有语言清单
         * @return {Array<{name: String, label: String}>} 语言清单列表
         */
        getAllLangList(): Array<{name: string, label: string}>;

        /**
         * 是否刚刚变更了语言
         * @return {boolean} 如果为 `true`，则为刚刚变更了语言，否则没有
         */
        isJustLangSwitched(): boolean;

        /**
         * 应用显示名称
         * @param {?String} langName 语言名称
         * @return {String} 语言显示名称
         */
        getLangDisplayName(langName: string): string;
    }
}
