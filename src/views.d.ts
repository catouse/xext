declare namespace Xuanxuan {
    /**
     * 界面视图库
     */
    interface Views {
        chats: {
            ChatAvatar: typeof React.Component,
            ChatTipPopover: typeof React.Component,
            ChatChangeFontPopover: typeof React.Component,
            ChatTitle: typeof React.Component,
            ChatCommittersSettingDialog: typeof React.Component,
            ChatView: typeof React.Component,
            ChatCommittersSetting: typeof React.Component,
            ChatsCache: typeof React.Component,
            ChatCreateDialog: typeof React.Component,
            ChatsDndContainer: typeof React.Component,
            ChatCreateGroups: typeof React.Component,
            ChatsHistoryDialog: typeof React.Component,
            ChatCreate: typeof React.Component,
            ChatsHistory: typeof React.Component,
            ChatHeader: typeof React.Component,
            ChatHistory: typeof React.Component,
            Index: typeof React.Component,
            ChatInviteDialog: typeof React.Component,
            MenuHeader: typeof React.Component,
            ChatInvite: typeof React.Component,
            MenuList: typeof React.Component,
            ChatJoinPublic: typeof React.Component,
            Menu: typeof React.Component,
            ChatListItem: typeof React.Component,
            MessageBroadcast: typeof React.Component,
            ChatMessages: typeof React.Component,
            MessageContentFile: typeof React.Component,
            ChatSearchResult: typeof React.Component,
            MessageContentImage: typeof React.Component,
            ChatSendbox: typeof React.Component,
            MessageContentText: typeof React.Component,
            ChatSidebarFiles: typeof React.Component,
            MessageDivider: typeof React.Component,
            ChatSidebarPeoples: typeof React.Component,
            MessageListItem: typeof React.Component,
            ChatSidebarProfile: typeof React.Component,
            MessageList: typeof React.Component,
            ChatSidebar: typeof React.Component,
            MessagesPreviewDialog: typeof React.Component,
        };

        common: {
            AboutDialog: typeof React.Component,
            MemberProfileDialog: typeof React.Component,
            About: typeof React.Component,
            MemberProfile: typeof React.Component,
            BuildInfo: typeof React.Component,
            Routes: typeof React.Component,
            DraftEditor: typeof React.Component,
            StatusDot: typeof React.Component,
            EmojiPopover: typeof React.Component,
            UserAvatar: typeof React.Component,
            UserChangePasswordDialog: typeof React.Component,
            FileListItem: typeof React.Component,
            UserListItem: typeof React.Component,
            FileListView: typeof React.Component,
            UserProfileDialog: typeof React.Component,
            HotkeySettingDialog: typeof React.Component,
            UserSettingDialog: typeof React.Component,
            MemberListItem: typeof React.Component,
            UserSetting: typeof React.Component,
            MemberList: typeof React.Component,
        };

        exts: {
            AppExtensions: typeof React.Component,
            ExtensionListItem: typeof React.Component,
            AppFiles: typeof React.Component,
            AppHome: typeof React.Component,
            Index: typeof React.Component,
            ExtensionDetailDialog: typeof React.Component,
            WebApp: typeof React.Component,
            ExtensionDetail: typeof React.Component,
        };

        index: {
            Chats: typeof React.Component,
            AppView: typeof React.Component,
            Index: typeof React.Component,
        };

        login: {
            Form: typeof React.Component,
            SwapUserDialog: typeof React.Component,
            Index: typeof React.Component,
            SwapUser: typeof React.Component,
        };

        main: {
            Navbar: typeof React.Component,
            CacheContainer: typeof React.Component,
            Index: typeof React.Component,
            GlobalMessage: typeof React.Component,
            UserMenu: typeof React.Component,
        }
    }
}
