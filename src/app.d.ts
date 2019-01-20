/// <reference path="./models.d.ts" />

declare namespace Xuanxuan {
    /**
     * 应用核心模块
     */
    interface App {
        /**
         * 当前用户账号信息
         */
        profile: UserProfile;

        /**
         * 系统成员管理模块
         */
        members: {
            update: Function,
            init: Function,
            get: Function,
            getAll: Function,
            forEach: Function,
            guess: Function,
            query: Function,
            remove: Function,
            getRoleName: Function,
            getDept: Function,
            getDeptsTree: Function,
            deptsSorter: Function,
            onMembersChange: Function,
            map: Object;
            all: Array<Member>;
            depts: Object;
            hasDepts: boolean;
        }

        /**
         * 聊天管理模块
         */
        im: {
            chats: Object,
            ui: Object,
            server: Object,
            notice: Object,
            files: Object,
        };

        /**
         * 数据库访问模块
         */
        db: {
            database: Object,
        };

        /**
         * 服务器访问模块
         */
        server: {
            login: Function,
            logout: Function,
            socket: Function,
            onUserLogin: Function,
            onUserLogout: Function,
            changeUserStatus: Function,
            fetchUserList: Function,
            tryGetTempUserInfo: Function,
        };

        /**
         * 通知管理模块
         */
        notice: {
            update: Function,
            onNoticeUpdate: Function,
            isMatchWindowCondition: Function,
            requestAttention: Function,
        };

        /**
         * 通用事件管理模块
         */
        events: Events;

        /**
         * 界面交互管理模块
         */
        ui: {
            entryParams: Object,
            canQuit: boolean,
            isSmallScreen: boolean,
            showMobileChatsMenu: Function,
            disableGlobalShortcut: Function,
            enableGlobalShortcut: Function,
            onAppLinkClick: Function,
            emitAppLinkClick: Function,
            quit: Function,
            showMessger: Function,
            showContextMenu: Function,
            modal: Object,
            reloadWindow: Function,
            triggerReady: Function,
            onReady: Function,
            isAutoLoginNextTime: Function,
            openUrl: Function,
            getUrlMeta: Function,
            openUrlInDialog: Function,
            openUrlInBrowser: Function,
            openUrlInApp: Function,
            requestUpdateViewStyle: Function,
        };

        /**
         * 实体数据类模块
         */
        models: {
            Entity: typeof Xuanxuan.Entity,
            Member: typeof Xuanxuan.Member,
            Chat: typeof Xuanxuan.Chat,
            ChatMessage: typeof Xuanxuan.ChatMessage,
        };

        /**
         * 待办管理模块
         */
        todo: {
            createTodo: Function,
            createTodoFromMessage: Function,
        };

        /**
         * 当前登录的用户
         */
        user: User;
    }
}
