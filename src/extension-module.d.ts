/// <reference path="./xext.d.ts" />

interface ExtensionModule {
    /**
     * 扩展生命周期函数：当扩展被加载后调用，此时可以对扩展进行初始化
     * @param ext 当前被载入的扩展对象
     */
    onAttach?(ext: Xuanxuan.Extension): void;

    /**
     * 扩展生命周期函数：当界面加载完毕时调用，此时扩展可以处理与界面相关操作
     * @param ext 当前被载入的扩展对象
     */
    onReady?(ext: Xuanxuan.Extension): void;

    /**
     * 扩展生命周期函数：当用户登录完成时调用
     * @param user 为登录的用户对象
     * @param error 当登录失败时返回的错误信息，如果登录成功，则此参数为 null
     */
    onUserLogin?(user: Xuanxuan.User, error: Error): void;

    /**
     * 扩展生命周期函数：当当前登录的退出登录时调用
     * @param user 为登录的用户对象
     */
    onUserLogout?(user: Xuanxuan.User): void;

    /**
     * 扩展生命周期函数：当用户状态发生变化时调用。
     * 用户状态代码含义：
     * - unverified - 0: 未登录；
     * - disconnect - 1: 登录过，但掉线了；
     * - logined - 2: 登录成功；
     * - online - 3: 在线；
     * - busy - 4: 忙碌；
     * - away - 5: 离开。
     * @param status 为用户新的状态代码
     * @param oldStatus 为用户之前的状态代码
     * @param user 为当前状态发生变化的用户对象
     */
    onUserStatusChange?(status: number, oldStatus: number, user: Xuanxuan.User): void;

    /**
     * 扩展生命周期函数：当用户发送聊天消息时调用
     * @param messages 为用户要发送出去的消息对象数组
     * @param chat 为用户发送消息的会话对象
     * @param user 为当前发送消息的用户的对象
     */
    onSendChatMessages?(messages: Xuanxuan.ChatMessage[], chat: Xuanxuan.Chat, user: Xuanxuan.User): void;

    /**
     * 扩展生命周期函数：当用户接收到聊天消息时调用。
     * @param messages 为用户接收到的消息对象数组
     * @param user 为当前接收消息的用户的对象
     */
    onReceiveChatMessages?(messages: Xuanxuan.ChatMessage[], user: Xuanxuan.User): void;

    /**
     * 扩展生命周期函数：当在界面上需要转化 markdown 格式的消息文本为 html 时会调用此回调方法。
     * @param content 为用户接收到的消息对象数组
     */
    onRenderChatMessageContent?(content: string): string;

    /**
     * 当扩展类型为应用（app）且 appType 为 'insideView' 时作为内嵌应用的 React 实现的界面主组件。MainView 应该返回一个 React 组件类或组件函数。
     */
    MainView?: React.Component | Function;

    /**
     * 用于配置替换系统内置界面组件。replaceViews 为一个对象，对象的键名为要替换的组件路径，键值为要用来替换的 React 组件类或组件函数。
     */
    replaceViews?: Object;

    /**
     * 扩展支持的命令。commands 为一个对象，对象的键名为响应的命令名称，键值为命令回调函数或者命令定义对象。
     */
    commands?: Object;

    /**
     * 为消息增加操作菜单。contextMenuCreators 为一个菜单生成对象数组，对象数组为每个菜单生成对象。菜单生成对象包括 match 属性用于定义匹配的菜单类型，creator 属性用于生成菜单项目的函数。
     */
    contextMenuCreators?: Array<Object>;

    /**
     * 网址解释器，可以将消息中的网址渲染成卡片形式。urlInspectors 为一个对象数组，每个对象包含有 test 属性为正则表达式用于匹配要解释的 url 地址，inspector 为回调函数（function(url: string)）用于生成 URL 对应的卡片参数。
     */
    urlInspectors?: Array<{test: RegExp | Function, inspector: Function}>;
}
