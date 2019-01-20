/// <reference path="./xext.d.ts" />
/// <reference path="./extension-module.d.ts" />

/**
 * 全局扩展访问模块
 * @private
 */
const xext: Xext = global.Xext;

/**
 * 是否开启了调试模式
 */
export const DEBUG = global.DEBUG;

/**
 * 界面语言访问模块
 */
export const lang: Xuanxuan.Lang = xext.lang;

/**
 * 依赖模块
 */
export const nodeModules: Xuanxuan.NodeModules = xext.nodeModules;

/**
 * React 模块
 */
export const React: Object = xext.nodeModules.React;

/**
 * ReactDOM 模块
 */
export const ReactDOM: Object = xext.nodeModules.ReactDOM;

/**
 * 通用组件库
 */
export const components: Xuanxuan.Components = xext.components;

/**
 * 通用工具模块
 */
export const utils: Xuanxuan.Utils = xext.utils;

/**
 * 平台访问模块
 */
export const platform: Xuanxuan.Platform = xext.platform;

/**
 * 应用核心模块
 */
export const app: Xuanxuan.App = xext.app;

/**
 * 界面视图库
 */
export const views: Xuanxuan.Views = xext.views;

/**
 *
 */
export default xext;