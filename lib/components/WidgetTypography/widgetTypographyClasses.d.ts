export interface WidgetTitleClasses {
    /** Styles applied to the root element. */
    root: string;
}
export type WidgetTitleClassKey = keyof WidgetTitleClasses;
export declare function getWidgetTitleUtilityClass(slot: string): string;
// declare const widgetTitleClasses: WidgetTitleClasses;
// export { widgetTitleClasses };


export interface WidgetFooterTextClasses {
    /** Styles applied to the root element. */
    root: string;
}
export type WidgetFooterTextClassKey = keyof WidgetFooterTextClasses;
export declare function getWidgetFooterTextUtilityClass(slot: string): string;
// declare const widgetFooterTextClasses: WidgetFooterTextClasses;
// export { widgetFooterTextClasses };