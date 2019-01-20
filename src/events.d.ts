declare namespace Xuanxuan {
    /**
     * 事件管理模块
     */
    interface Events {
        /**
         * 绑定事件并返回一个 {Sysmbo} 作为事件绑定 ID 用于取消事件
         * @param  {string} event 事件名称
         * @param  {function} listener 事件回调函数
         * @return {Symbol} 事件绑定 ID
         */
        on(event: string, listener: EventListener): Symbol;

        /**
         * 绑定一个一次性事件，触发后会自动取消绑定，只会触发一次
         * @param  {string} event 事件名称
         * @param  {Function} listener 事件回调函数
         * @return {Symbol} 事件绑定 ID
         */
        once(event: string, listener: EventListener): Symbol;

        /**
         * 取消绑定事件
         * @param  {...Symbol} names 要取消的事件 ID
         * @return {void}
         */
        off(...names: Symbol[]): void;

        /**
         * 触发一个事件
         *
         * @param {string} name 要触发的事件名称
         * @param {...any} args 事件参数
         * @memberof Events
         * @return {void}
         */
        emit(name: string, ...args: any[]): void;

        /**
         * 监听通用数据变更事件
         *
         * @param {Function} listener 事件回调函数
         * @return {Symbol} 事件绑定 ID
         */
        onDataChange(listener: EventListener): Symbol;

        /**
         * 触发通用数据变更事件
         *
         * @param {Object<string, any>} data 变更数据表
         * @param {number} delay 事件触发最小延迟时间，单位毫秒
         * @return {void}
         * @memberof Events
         */
        emitDataChange(data: Object, delay?: number): void;
    }
}
