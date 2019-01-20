declare namespace Xuanxuan {
    /**
     * 通用数据实体类
     */
    class Entity {
        /**
         * 实体名称
         * @type {string}
         */
        static NAME: string;

        /**
         * 数据库存储实体属性结构管理器
         *
         * @type {EntitySchema}
         * @static
         */
        static SCHEMA: Object;

        /**
         * 创建一个基础实体类实例
         * @param {!Object<string, any>} data 实体属性对象
         * @param {!string} entityType 实体类型名称
         */
        constructor(data: Object, entityType: string);

        /**
         * 从属性对象更新此实体属性
         *
         * @param {...Object<string, any>} data 属性对象
         * @return {Entity} 返回自身用于链式调用
         */
        assign(...data: Object[]): Entity;

        /**
         * 调用此方法确保实体拥有合适的 GID 属性
         *
         * @return {void}
         */
        ensureGid(): void;

        /**
         * 用于数据存储的简单对象
         *
         * @return {Object<string, any>} 用于的存储对象
         */
        plain(): Object;

        /**
         * 跟踪实体属性变更的 ID，每次更新需要更高此值为一个全局唯一的数字
         * @type {number}
         */
        readonly updateId: number;

        /**
         * 调用此方法将会更新用于跟踪实体属性变更 ID
         *
         * @return {void}
         */
        renewUpdateId(): void;

        /**
         * 实体类型
         * @type {string}
         * @readonly
         */
        readonly entityType: string;

        /**
         *  GID 属性（全局唯一编号）
         * @type {string}
         * @readonly
         */
        readonly gid: string;

        /**
         *  ID 属性
         * @type {number}
         */
        readonly id: string | number;

        /**
         * 数据库存储实体属性结构管理器
         *
         * @readonly
         * @type {EntitySchema}
         */
        readonly schema: Object;

        /**
         * 设置内部数据属性
         * @param {String|Object<string, any>} key 如果为 `string` 则作为要设置的属性名称，如果为 `Object<string, any>` 则作为属性对象批量设置属性值，此时 `val` 参数将会被忽略
         * @param {any} val 当 `key` 如果为 `string` 时要设置的属性值
         * @param {boolean} [ignoreUpdateId=false] 不更新用于跟踪实体属性变更 ID
         * @returns {Entity} 返回自身用于链式调用
         */
        $set(key: string | Object, val?: any, ignoreUpdateId?: boolean): Entity;

        /**
         * 内部数据属性的值
         * @param  {string} key 属性名称
         * @param  {any} defaultValue 默认值
         * @return {any} 内部数据属性值
         */
        $get(key: string, defaultValue: any): any;
    }

    /**
     * 聊天消息类
     */
    class ChatMessage extends Entity {
        /**
         * 实体名称
         * @type {string}
         */
        static NAME: string;

        /**
         * 聊天消息状态管理器
         *
         * @static
         * @type {Status}
         */
        static STATUS: Object;

        /**
         * 聊天消息类型表
         * @type {Object<string,string>}
         * @static
         */
        static TYPES: Object;

        /**
         * 聊天消息内容类型表
         * @type {Object<string,string>}
         * @static
         */
        static CONTENT_TYPES: Object;

        /**
         * 聊天消息对象内容类型表
         * @type {Object<string,string>}
         * @static
         */
        static OBJECT_TYPES: Object;

        /**
         * 数据库存储实体属性结构管理器
         *
         * @type {EntitySchema}
         * @static
         */
        static SCHEMA: Object;

        /**
         * 创建一个聊天消息类实例
         * @param {Object<string,any>} data 聊天消息属性对象
         */
        constructor(data: Object);

        /**
         * 用于发送到服务器的数据简单对象
         *
         * @return {Object<string,any>} 简单对象
         */
        plainServer(): Object;

        /**
         * 数据库存储实体属性结构管理器
         *
         * @readonly
         * @type {EntitySchema}
         */
        readonly schema: Object;

        /**
         *  ID 属性值
         * @type {number}
         */
        readonly id: string;

        /**
         * 排序序号
         * @type {number}
         */
        readonly order: number;

        /**
         * 状态值
         * @readonly
         * @type {number}
         */
        readonly status: number;

        /**
         * 状态名称
         * @readonly
         * @type {string}
         */
        readonly statusName: string;

        /**
         * 判断当前状态是否是给定的状态
         * @param {number|string} status 要判断的状态值或状态名称
         * @return {boolean} 如果为 `true` 则为给定的状态，否则不是
         */
        isStatus(status: number | string): boolean;

        /**
         * 是否发送失败
         * @type {boolean}
         * @readonly
         */
        readonly isSendFail: boolean;

        /**
         * 是否发送成功
         * @type {boolean}
         * @readonly
         */
        readonly isOK: boolean;

        /**
         * 是否已发送正在等待服务器结果
         * @type {boolean}
         * @readonly
         */
        readonly isSending: boolean;

        /**
         * 是否是草稿状态（未发送）
         * @type {boolean}
         * @readonly
         */
        readonly isDraft: boolean;

        /**
         * 标记为开始发送状态
         *
         * @return {void}
         */
        beginSend(): void;

        /**
         * 标记为结束发送
         *
         * @param {*} remoteId 服务器存储 ID，如果为 `0`，表示发送失败（没有在服务器上存储）
         * @return {void}
         */
        endSend(remoteId: string): void;

        /**
         * 全局唯一标识字符串 GID
         * @type {string}
         */
        readonly cgid: string;

        /**
         * 是否处于未读状态
         * @type {boolean}
         */
        readonly unread: boolean;

        /**
         * 是否删除（已撤销）
         * @type {boolean}
         */
        readonly deleted: boolean;

        /**
         * 判断当前消息是否能够删除
         * @param {String|number} 当前用户 ID
         * @returns {boolean} 如果返回 `true` 则能够删除，否则为不能删除
         */
        canDelete(userID: string | number): boolean;

        /**
         * 消息额外存储数据
         * @type {Object}
         */
        readonly data: Object;

        /**
         * 消息额外数据属性值
         *
         * @param {String} name 属性名称
         * @param {any} defaultValue 默认值
         * @return {any} 属性值
         */
        getDataValue(name: string, defaultValue?: any): any;

        /**
         * 设置消息额外属性值
         * @param {String|Map<String, any>} name 属性名称
         * @param {?any} value 属性值
         * @return {void}
         */
        setDataValue(name: string, value: any): void;

        /**
         * 消息发送日期时间戳
         * @type {number}
         */
        readonly date: number;

        /**
         * 消息发送日期时间戳，相当于读取 `date` 属性
         * @type {number}
         */
        readonly sendTime: number;

        /**
         * 消息发送者 ID
         * @type {number}
         */
        readonly senderId: number;

        /**
         * 判断给定的成员 ID 是否是当前消息发送者
         *
         * @param {number} userId 成员 ID
         * @returns {boolean} 如果返回 `true` 则为是当前消息发送者，否则为不是当前消息发送者
         */
        isSender(userId: number): boolean;

        /**
         * 消息发送者成员对象
         * @type {Member}
         */
        readonly sender: Member;

        /**
         * 从系统获取消息发送成员对象
         *
         * @param {{get: function(id: number):Member}} appMembers 用于从系统获取成员信息的辅助对象
         * @return {Member} 消息发送成员
         */
        getSender(appMembers: {get: Function}): Member;

        /**
         * 消息内容类型
         * @type {string}
         */
        readonly contentType: string;

        /**
         * 消息内容是否是文件
         * @type {boolean}
         * @readonly
         */
        readonly isFileContent: boolean;

        /**
         * 消息内容是否是文本
         * @type {boolean}
         * @readonly
         */
        readonly isTextContent: boolean;

        /**
         * 消息内容是否是纯文本
         * @type {boolean}
         * @readonly
         */
        readonly isPlainTextContent: boolean;

        /**
         * 消息内容是否是图片
         * @type {boolean}
         * @readonly
         */
        readonly isImageContent: boolean;

        /**
         * 消息内容是否是对象
         * @type {boolean}
         * @readonly
         */
        readonly isObjectContent: boolean;

        /**
         * 内容对象类型
         * @readonly
         * @type {string}
         */
        readonly objectContentType: string;

        /**
         * 内容对象
         * @readonly
         * @type {Object<string, any>}
         */
        readonly objectContent: Object;
        /**
         * 消息类型
         * @type {string}
         */
        readonly type: string;

        /**
         * 消息类型是否为广播
         * @type {boolean}
         * @readonly
         */
        readonly isBroadcast: boolean;

        /**
         * 原始内容字符串
         * @type {string}
         */
        readonly content: string;

        /**
         * 将文本消息渲染为 HTML 格式
         *
         * @param {...function(content: string, options: Object<string,any>)} converters 格式转换函数
         * @return {string} 转换后的 HTML 字符串
         */
        renderedTextContent(...converters: Function[]): string;

        /**
         * 是否块级富文本消息（至少包含一个 3 级以上的标题）
         * @type {boolean}
         */
        readonly isBlockContent: boolean;

        /**
         * 图片内容对象
         * @type {Object<string,any>}
         */
        readonly imageContent: Object;

        /**
         * 更新图片内容对象
         *
         * @param {Object} content 图片内容对象
         * @return {void}
         */
        updateImageContent(content: Object): void;

        /**
         * 文件内容对象
         * @type {Object<string,any>}
         */
        readonly fileContent: Object;

        /**
         * 更新文件内容对象
         *
         * @param {Object} content 文件内容对象
         * @return {void}
         */
        updateFileContent(content: Object): void;

        /**
         * 消息指令对象
         *
         * @return {{action: string}} 消息指令对象
         */
        getCommand(): {action: string};

        /**
         * 重置实体属性
         *
         * @param {Object} newData 属性对象
         * @return {void}
         */
        reset(newData: Object): void;

        /**
         * 检查消息是否需要检查重新发送
         * @type {boolean}
         * @readonly
         */
        readonly needCheckResend: boolean;

        /**
         * 判断消息是否发送失败并且需要重新发送
         * @type {boolean}
         * @readonly
         */
        readonly needResend: boolean;

        /**
         * 是否发送失败
         * @type {boolean}
         * @readonly
         */
        readonly isSendFailed: boolean;

        /**
         * 检查消息是否过期（在一定时间内没有收到服务器回应的远程存储 ID）
         * @type {boolean}
         * @readonly
         */
        readonly isOutdated: boolean;

        /**
         * 创建一个聊天消息类实例
         *
         * @static
         * @param {Object<string,any>|ChatMessage} chatMessage 聊天消息属性对象或者聊天消息实例
         * @return {ChatMessage} 聊天消息类实例
         */
        static create(chatMessage: Object | ChatMessage): ChatMessage;
        /**
         * 对聊天消息列表进行排序
         * @param  {ChatMessage[]} messages 要排序的聊天列表
         * @return {ChatMessage[]} 排序后的聊天列表
         * @static
         */
        static sort(messages: ChatMessage[]): ChatMessage[];
    }

    /**
     * 聊天类
     */
    class Chat extends Entity {
        /**
         * 实体名称
         * @type {string}
         */
        static NAME: string;

        /**
         * 成员状态管理器
         *
         * @static
         * @type {Status}
         */
        static STATUS: Object;

        /**
         * 聊天类型表
         * @type {Object<string,string>}
         * @static
         */
        static TYPES: Object;

        /**
         * 白名单类型表
         * @type {Object<string,string>}
         * @static
         */
        static COMMITTERS_TYPES: Object;

        /**
         * 数据库存储实体属性结构管理器
         *
         * @type {EntitySchema}
         * @static
         */
        static SCHEMA: Object;

        /**
         * 创建一个聊天类实例
         * @param {Object<string,any>} data 聊天属性对象
         */
        constructor(data: Object);

        /**
         * 最大聊天消息排序编号
         * @type {number}
         */
        readonly maxMsgOrder: number;

        /**
         * 递增最大聊天消息排序编号
         * @return {number} 最大聊天消息排序编号
         */
        newMsgOrder(): number;

        /**
         * 调用此方法确保实体拥有合适的 GID 属性
         *
         * @return {void}
         * @override
         */
        ensureGid(): void;

        /**
         * 数据库存储实体属性结构管理器
         *
         * @readonly
         * @type {EntitySchema}
         */
        readonly schema: Object;

        /**
         *  ID 属性值
         * @type {number}
         */
        readonly id: string;

        /**
         * 状态值
         * @readonly
         * @type {number}
         */
        readonly status: string;

        /**
         * 状态名称
         * @readonly
         * @type {string}
         */
        readonly statusName: string;

        /**
         * 判断当前状态是否是给定的状态
         * @param {number|string} status 要判断的状态值或状态名称
         * @return {boolean} 如果为 `true` 则为给定的状态，否则不是
         */
        isStatus(status: number | string): boolean;

        /**
         * 判断当前状态是否是正常状态
         * @return {boolean} 如果为 `true` 则为正常状态，否则不是
         */
        readonly isOK: boolean;

        /**
         * 聊天类型
         * @type {string}
         */
        readonly type: string;

        /**
         * 是否为机器人聊天类型
         * @type {boolean}
         */
        readonly isRobot: boolean;

        /**
         * 是否一对一聊天类型
         * @type {boolean}
         */
        readonly isOne2One: boolean;

        /**
         * 是否为已删除的一对一聊天
         * @type {boolean}
         */
        readonly isDeleteOne2One: boolean;

        /**
         * 是否讨论组
         * @type {boolean}
         */
        readonly isGroup: boolean;

        /**
         * 聊天分组
         * @type {string}
         */
        readonly category: string;

        /**
         * 聊天名称
         * @type {string}
         */
        readonly name: string;

        /**
         * 聊天显示名称，如果是一对一聊天则返回对方成员名称，否则返回聊天 `name` 属性值
         * @param {{members: {get: function(id: number):Member}}} app 用于获取系统成员的辅助对象
         * @param {boolean} [includeMemberCount=false] 是否包含聊天成员数目
         * @return {string} 聊天名称
         */
        getDisplayName(app: {members: {get: Function}}, includeMemberCount?: boolean): string;

        /**
         * 聊天名称的拼音字符串（用于排序或搜索）
         *
         * @param {{members: {get: function(id: number):Member}}} app 用于获取系统成员的辅助对象
         * @return {string} 拼音字符串
         */
        getPinYin(app: {members: {get: Function}}): string;

        /**
         * 是否已收藏此聊天
         * @type {boolean}
         */
        readonly star: boolean;

        /**
         * 是否已设置为免打扰
         * @type {boolean}
         */
        readonly mute: boolean;

        /**
         * 是否已经隐藏（存档）此聊天，相当于读取 `hide` 属性
         * @type {boolean}
         */
        readonly hidden: boolean;

        /**
         * 是否已经隐藏（存档）此聊天
         * @type {boolean}
         */
        readonly hide: boolean;

        /**
         * 是否已设为公开聊天
         * @type {boolean}
         */
        readonly public: boolean;

        /**
         * 聊天创建时间戳
         * @type {number}
         */
        readonly createdDate: number;

        /**
         * 聊天解散时间戳
         * @type {number}
         */
        readonly dismissDate: number;

        /**
         * 是否已经解散此聊天
         * @type {boolean}
         */
        readonly isDismissed: boolean;

        /**
         * 判断指定的用户是否能够解散此聊天
         *
         * @param {Member|{id: number}|{account: string}} user 成员对象
         * @returns {boolean} 如果返回 `true` 则可以解散，否则为不是
         */
        canDismiss(user: Member | {id: number} | {account: string}): boolean;

        /**
         * 聊天管理员集合
         * @type {Set<string|number>}
         */
        readonly admins: Set<string | number>;

        /**
         * 判断给定的成员是否是此聊天的管理员
         *
         * @param {Member|{id: number}|{account: string}} member 成员对象
         * @returns {boolean} 如果为 `true` 则为是此聊天管理员，否则为不是
         */
        isAdmin(member: Member | {id: number} | {account: string}): boolean;

        /**
         * 向此聊天添加一个新的管理员
         *
         * @param {number} memberId 要做为新管理员的 ID
         * @return {void}
         */
        addAdmin(memberId: number): void;

        /**
         * 白名单设置
         * @type {Set<string>}
         */
        readonly committers: Set<string>;

        /**
         * 白名单类型
         * @type {string}
         */
        readonly committersType: string;

        /**
         * 判断给定的用户是否在白名单中
         *
         * @param {number|{id: number}} member 用户 ID 或者用户对象
         * @returns {boolean} 如果返回 `true` 则为在白名单中，否则为不在
         */
        isCommitter(member: number | {id: number}): boolean;

        /**
         * 判断给定的成员是否是能够重命名此聊天
         *
         * @param {Member|{id: number}|{account: string}} user 成员对象
         * @returns {boolean} 如果为 `true` 则能够重命名此聊天，否则为不能
         */
        canRename(user: Member | {id: number} | {account: string}): boolean;

        /**
         * 判断给定的成员是否是能够邀请其他成员参与此聊天
         *
         * @param {Member|{id: number}|{account: string}} user 成员对象
         * @returns {boolean} 如果为 `true` 则能够邀请其他成员参与此聊天，否则为不能
         */
        canInvite(user: Member | {id: number} | {account: string}): boolean;

        /**
         * 判断给定的成员是否是能够将聊天内成员移除此聊天
         *
         * @param {!(Member|{id: number}|{account: string})} user 成员对象
         * @param {!(Member|{id: number}|{account: string})} kickOfWho 要移除的成员对象
         * @returns {boolean} 如果为 `true` 则能够将聊天内成员移除此聊天，否则为不能
         */
        canKickOff(user: Member | {id: number} | {account: string}, kickOfWho: Member | {id: number} | {account: string}): boolean;

        /**
         * 判断给定的成员是否是能够将聊天设置为公开或者取消公开设置
         *
         * @param {Member|{id: number}|{account: string}} user 成员对象
         * @returns {boolean} 如果为 `true` 则能够将聊天设置为公开或者取消公开设置，否则为不能
         */
        canMakePublic(user: Member | {id: number} | {account: string}): boolean;

        /**
         * 判断给定的成员是否是能够修改此聊天的白名单
         *
         * @param {Member|{id: number}|{account: string}} user 成员对象
         * @returns {boolean} 如果为 `true` 则能够修改此聊天的白名单，否则为不能
         */
        canSetCommitters(user: Member | {id: number} | {account: string}): boolean;

        /**
         * 判断此聊天对于指定的用户是否只读（无法发送消息）
         *
         * @param {Member|{id: number}|{account: string}} member 成员对象
         * @returns {boolean} 如果为 `true` 则为只读，否则不是
         */
        isReadonly(member: Member | {id: number} | {account: string}): boolean;

        /**
         * 是否可见
         * @type {boolean}
         */
        readonly visible: boolean;

        /**
         * 可见的日期
         * @type {number}
         */
        readonly visibleDate: number;

        /**
         * 是否设置有白名单
         * @type {boolean}
         */
        readonly hasWhitelist: boolean;

        /**
         * 此聊天的白名单
         * @type {string}
         */
        readonly whitelist: string;

        /**
         * 判断给定的用户 ID 是否在白名单中
         *
         * @param {number} memberId 用户 ID
         * @param {?Set<number>} whitelist 白名单
         * @returns {boolean} 如果返回 `true` 则为在白名单中，否则为不在
         */
        isInWhitelist(memberId: number, whitelist: Set<number>): boolean;

        /**
         * 将给定的用户 ID 添加到白名单中
         *
         * @param {number} memberId 用户 ID
         * @returns {boolean} 如果返回 `true` 则为添加成功，否则为添加失败
         */
        addToWhitelist(memberId: number): boolean;

        /**
         * 将给定的用户 ID 从白名单中移除
         *
         * @param {number} memberId 用户 ID
         * @returns {boolean} 如果返回 `true` 则为移除成功，否则为移除失败
         */
        removeFromWhitelist(memberId: number): boolean;

        /**
         * 聊天的创建者用户名
         * @type {string}
         */
        readonly createdBy: string;

        /**
         * 聊天成员 ID 集合
         * @type {Set<number>}
         */
        readonly members: string;

        /**
         * 判断给定的成员 ID 是否在此聊天成员集合中
         *
         * @param {number|{id: number}} memberId 聊天成员对象或者成员 ID
         * @returns {boolean} 如果返回 `true` 则为在此聊天成员集合中，否则为不在
         */
        isMember(memberId: number | {id: number}): boolean;

        /**
         * 设置聊天成员
         * @param {Member[]} members 聊天成员
         * @return {void}
         */
        resetMembers(members: Member[]): void;

        /**
         * 将成员添加到聊天中
         *
         * @param {...Member} newMembers 新到成员
         * @return {void}
         */
        addMember(...newMembers: Member[]): void;

        /**
         * 从系统更新聊天成员列表
         *
         * @param {{get: function(id: number):Member}} appMembers 用于从系统获取成员信息的辅助对象
         * @return {void}
         */
        updateMembersSet(appMembers: {get: Function}): void;

        /**
         * 聊天成员数目
         *
         * @param {{get: function(id: number):Member}} appMembers 用于从系统获取成员信息的辅助对象
         * @return {number} 成员数目
         */
        getMembersCount(appMembers: {get: Function}): number;

        /**
         * 从系统获取聊天成员列表
         *
         * @param {{get: function(id: number):Member}} appMembers 用于从系统获取成员信息的辅助对象
         * @return {Member[]} 聊天成员列表
         */
        getMembersSet(appMembers: {get: Function}): Member[];

        /**
         * 聊天成员中除了我之外的其他用户 ID
         * @param {String|number} currentUserID 当前用户 ID
         * @return {Array<String|number>} 返回其他用户ID列表
         */
        getOtherMembersID(currentUserID: string | number): Array<string | number>;

        /**
         * 一对一聊天对方成员
         *
         * @param {{members: {get: function(id: number):Member}}} app 用于获取系统成员的辅助对象
         * @return {Member} 对方成员对象
         */
        getTheOtherOne(app: {members: {get: Function}}): Member;

        /**
         * 判断聊天是否在线，如果是一对一聊天则判断对方成员状态是否在线，如果是其他聊天则直接判定为在线
         *
         * @param {{members: {get: function(id: number):Member}}} app 用于获取系统成员的辅助对象
         * @returns {boolean} 如果为 `true` 则为在线，否则为不在线
         */
        isOnline(app: {members: {get: Function}}): boolean;

        /**
         * 判断给定的用户是否是聊天的创建者
         *
         * @param {Member|{id: number}|{account: string}} user 聊天成员对象
         * @returns {boolean} 如果返回 `true` 则为是聊天的创建者，否则为不是聊天的创建者
         */
        isOwner(user: Member | {id: number} | {account: string}): boolean;

        /**
         * 是否能够让其他成员自由加入
         * @readonly
         * @type {boolean}
         */
        readonly canJoin: boolean;

        /**
         * 判断给定的用户是否能够退出讨论组
         *
         * @param {Member|{id: number}|{account: string}} user 聊天成员对象
         * @returns {boolean} 如果返回 `true` 则为能够退出讨论组，否则为不能够退出讨论组
         */
        canExit(user: Member | {id: number} | {account: string}): boolean;

        /**
         * 是否隐藏此聊天
         * @readonly
         * @type {boolean}
         */
        readonly canHide: boolean;

        /**
         * 是否是系统聊天
         * @type {boolean}
         */
        readonly isSystem: boolean;

        /**
         * 是否是讨论组或系统聊天
         * @type {boolean}
         */
        readonly isGroupOrSystem: boolean;

        /**
         * 此聊天的未读消息数目
         * @type {number}
         */
        readonly noticeCount: number;

        /**
         * 清除此聊天的未读消息数目
         *
         * @return {ChatMessage[]} 已新标记为已读的消息清单
         */
        muteNotice(): void;

        /**
         * 此聊天是否已被设置为免打扰或者隐藏（已存档）
         * @readonly
         * @type {boolean}
         */
        readonly isMuteOrHidden: boolean;

        /**
         * 此聊天缓存的消息列表
         * @readonly
         * @type {ChatMessage[]}
         */
        readonly messages: ChatMessage[];

        /**
         * 上次在界面上激活的时间戳
         * @type {number}
         */
        readonly lastActiveTime: number;

        /**
         * 将聊天设置已激活
         * @return {void}
         */
        makeActive(): void;

        /**
         * 是否有缓存消息
         * @type {boolean}
         */
        readonly hasSetMessages: boolean;

        /**
         * 将聊天消息添加到缓存
         *
         * @param {ChatMessage[]} messages 要缓存的聊天列表
         * @param {number} userId 用户 ID
         * @param {boolean} [localMessage=false] 是否来源于本地数据消息
         * @param {boolean} [skipOld=false] 是否忽略已缓存的消息
         * @returns {Chat} 返回自身用于链式调用
         */
        addMessages(messages: ChatMessage[], userId: number, localMessage?: boolean, skipOld?: boolean): Chat;

        /**
         * 缓存中最新的一个聊天消息
         * @type {ChatMessage}
         */
        readonly lastMessage: ChatMessage;

        /**
         * 从缓存中移除指定 GID 的聊天消息
         *
         * @param {string} messageGid 聊天消息 GID
         * @returns {boolean} 如果返回 `true` 则移除成功，否则为移除失败（可能是未找到指定的聊天消息）
         */
        removeMessage(messageGid: string): boolean;

        /**
         * 是否已经从数据库加载完所有消息到缓存
         * @type {boolean}
         */
        readonly isLoadingOver: boolean;

        /**
         * 是否是第一次从数据库加载消息
         * @type {boolean}
         */
        readonly isFirstLoaded: boolean;

        /**
         * 创建一个聊天类实例
         *
         * @static
         * @param {Object<string,any>|Chat} chat 聊天属性对象或者聊天实例
         * @return {Chat} 聊天类实例
         */
        static create(chat: Chat | Object): Chat;

        /**
         * 对聊天列表进行排序，排序规则 `orders` 可以为以下值：
         * - `function(c1: Member, c2: Member):number`，自定义排序函数；
         * - 一个用逗号分隔的根据属性排序的属性名称表；
         * - 根据属性排序的属性名称表数组。
         * 默认的排序规则为：`['star', 'notice', 'hide', 'mute', 'lastActiveTime', 'online', 'createDate', 'name', 'id']`。
         * @param  {Chat[]} chats 要排序的聊天列表
         * @param  {array|string|function(c1: Chat, c2: Chat):number}  orders 排序规则
         * @param  {{members: {get: function(id: number):Member}}} app 用于获取系统成员的辅助对象
         * @return {Chat[]} 排序后的聊天列表
         */
        static sort(chats: Chat[], orders: string | Function | Array<string | Function>, app: {members: {get: Function}}): Chat[];
    }

    /**
     * 系统成员类
     */
    class Member extends Entity {
        /**
         * 实体名称
         * @type {string}
         */
        static NAME: string;

        /**
         * 成员状态管理器
         *
         * @static
         * @type {Status}
         */
        static STATUS: Object;

        /**
         * 数据库存储实体属性结构管理器
         *
         * @type {EntitySchema}
         * @static
         */
        static SCHEMA: Object;

        /**
         * 创建一个成员类实例
         * @param {Object<string, any>} data 成员属性对象
         */
        constructor(data: Object);

        /**
         * 数据库存储实体属性结构管理器
         *
         * @readonly
         * @type {EntitySchema}
         */
        readonly schema: Object;

        /**
         * 是否已经删除
         * @type {boolean}
         */
        readonly isDeleted: boolean;

        /**
         * 状态值
         * @type {number}
         */
        readonly status: number;

        /**
         * 状态名称
         * @type {string}
         * @readonly
         */
        readonly statusName: string;

        /**
         * 是否状态为在线
         * @type {boolean}
         * @readonly
         */
        readonly isOnline: boolean;

        /**
         * 是否状态是否为离线
         * @type {boolean}
         * @readonly
         */
        readonly isOffline: boolean;

        /**
         * 是否状态是否为忙碌
         * @type {boolean}
         * @readonly
         */
        readonly isBusy: boolean;

        /**
         * 判断当前状态是否是给定的状态
         * @param {number|string} status 要判断的状态值或状态名称
         * @return {boolean} 如果为 `true` 则为给定的状态，否则不是
         */
        isStatus(status: number | string): boolean;

        /**
         * 判断成员账号是否为给定的值
         *
         * @param {string} account 要判断的用户名
         * @return {boolean} 如果为 `true` 则为给定的值，否则不是
         */
        isMember(account: string): boolean;

        /**
         * 性别
         * @type {string}
         */
        readonly gender: string;

        /**
         * 部门编号
         * @type {number}
         */
        readonly dept: string;

        /**
         * 从系统获取部门信息
         * @param {{members: {getDept: function(dept: number):Object}}} app 用于获取系统部门信息的辅助对象
         * @return {Object} 部门信息对象
         */
        getDept(app: {members: {getDept: Function}}): Object;

        /**
         * 部门名称
         *
         * @param {{members: {getDept: function(dept: number):Object}}} app 用于获取系统部门信息的辅助对象
         * @return {string} 部门名称
         */
        getDeptName(app: {members: {getDept: Function}}): string;

        /**
         * 部门完整名称
         *
         * @param {{members: {getDept: function(dept: number):Object}}} app 用于获取系统部门信息的辅助对象
         * @returns {string} 部门完整名称
         */
        getDeptFullName(app: {members: {getDept: Function}}): string;

        /**
         * 是否为超级管理员
         * @type {boolean}
         * @readonly
         */
        readonly isSuperAdmin: boolean;

        /**
         * 是否为管理员
         * @type {boolean}
         * @readonly
         */
        readonly isAdmin: boolean;

        /**
         * 用户真实姓名的多语言配置
         *
         * @readonly
         */
        readonly realnames: string;

        /**
         * 用户用户真实姓名
         * @type {string}
         */
        readonly realname: string;

        /**
         * 用户账号
         * @type {string}
         * @readonly
         */
        readonly account: string;

        /**
         * 用户头像图片地址
         * @type {string}
         * @readonly
         */
        readonly avatar: string;

        /**
         * 用户电话号码
         * @type {string}
         * @readonly
         */
        readonly phone: string;

        /**
         * 用户移动电话
         * @type {string}
         * @readonly
         */
        readonly mobile: string;

        /**
         * 用户电子邮件地址
         * @type {string}
         * @readonly
         */
        readonly email: string;

        /**
         * 从系统获取用户头像图片地址
         *
         * @param {string} serverUrl 服务器地址
         * @return {string} 用户头像图片地址
         */
        getAvatar(serverUrl: string): string;

        /**
         * 用户角色代号
         * @type {string}
         * @readonly
         */
        readonly role: string;

        /**
         * 从系统获取角色名称
         *
         * @param {{members: {getRoleName: function(role: string):string}}} app 用于获取系统部门信息的辅助对象
         * @return {string} 角色名称
         */
        getRoleName(app: {members: {getRoleName: Function}}): string;

        /**
         * 限时名称
         * @type {string}
         * @readonly
         */
        readonly displayName: string;

        /**
         * 用户显示名称的拼音字符串（通常用于检索和排序）
         * @readonly
         * @type {string}
         */
        readonly namePinyin: string;

        /**
         * 成员与给定的关键字匹配分值
         * @param {string[]} keys 关键字列表
         * @return {number} 匹配的分值
         */
        getMatchScore(keys: string[]): number;

        /**
         * 创建一个成员实例
         *
         * @static
         * @param {Objec|Member} member 成员属性对象
         * @return {Member} 成员实例
         */
        static create(member: Object | Member): Member;

        /**
         * 对成员列表进行排序，排序规则 `orders` 可以为以下值：
         * - `function(m1: Member, m2: Member):number`，自定义排序函数；
         * - 一个用逗号分隔的根据属性排序的属性名称表；
         * - 根据属性排序的属性名称表数组。
         * 默认的排序规则为：`['me', 'status', '-namePinyin', '-id']`。
         * @param  {Member[]} members 要排序的成员列表
         * @param  {array|string|function(m1: Member, m2: Member):number}  orders 排序规则
         * @param  {{id: number}|number} userMe 当前登录的用户 ID 或者用户对象
         * @return {Member[]} 排序后的成员列表
         * @static
         */
        static sort(members: Member[], orders: Array<string | Function> | string | Function, userMe: {id: number} | number): Member[];
    }
}
