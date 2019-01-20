declare namespace Xuanxuan {
    /**
     * 通用工具模块
     */
    interface Utils {
        Color: Object,
        Markdown: Object,
        Status: Object,
        DateHelper: {
            createDate: Function,
            formatDate: Function,
            isSameDay: Function,
            isSameMonth: Function,
            isSameYear: Function,
            isToday: Function,
            isYestoday: Function,
            formatSpan: Function,
            getTimeBeforeDesc: Function,
            createPhpTimestramp: Function,
        },
        MdiFileIcon: Object,
        Store: {
            set: Function,
            get: Function,
            remove: Function,
            clear: Function,
            forEach: Function,
            length: number,
            all: any[]
        },
        Pinyin: Function,
        StringHelper: {
            format: Function,
            isEmpty: Function,
            isNotEmpty: Function,
            formatBytes: Function,
            ifEmptyThen: Function,
        },
        DelayAction: Object,
        Plain: Function,
        TaskQueue: Object,
        HtmlHelper: {
            classes: Function,
            rem: Function,
            getSearchParam: Function,
            strip: Function,
            isWebUrl: Function,
        },
        SearchScore: Object,
        TimeSequence: Function,
        Skin: {
            style: Function,
            text: Function,
            longShadow: Function,
        },
        LimitTimePromise: Function,
        SortHelper: Function,
        Image: Object,
    }
}
