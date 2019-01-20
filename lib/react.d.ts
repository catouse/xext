/// <reference path="../src/xext.d.ts" />
/// <reference types="react" />
/**
 * React 模块
 */
export declare const React: {
    Component: typeof import("react").Component;
    PureComponent: typeof import("react").PureComponent;
    Fragment: import("react").ExoticComponent<{
        children?: import("react").ReactNode;
    }>;
    Children: import("react").ReactChildren;
};
/**
 * ReactDOM 模块
 */
export declare const ReactDOM: Object;
export default React;
