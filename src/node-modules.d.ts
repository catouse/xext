declare namespace Xuanxuan {
    /**
     * 依赖模块
     */
    interface NodeModules {
        React: {
            Component: typeof React.Component,
            PureComponent: typeof React.PureComponent,
            Fragment: typeof React.Fragment,
            Children: typeof React.Children,
        };
        ReactDOM: Object;
        ReactSplitPane: Object;
        EmojionePicker: Object;
        marked: Object;
        md5: Function;
        fs: Object;
        extractZip: Function;
        emojione: Object;
        DraftJs: Object;
        HTMLParser: Object;
        compareVersions: Function;
        hotkeys: Object;
        pinyin: Object;
        uuid: Object;
        jQuery: Object;
    }
}