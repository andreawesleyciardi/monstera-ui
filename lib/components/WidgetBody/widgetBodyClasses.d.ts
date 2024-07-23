export interface WidgetBodyClasses {
    /** Styles applied to the root element. */
    root: string;
}
export type WidgetBodyClassKey = keyof WidgetBodyClasses;
// export declare function getWidgetBodyUtilityClass(slot: string): string;
declare const widgetBodyClasses: WidgetBodyClasses;
export default widgetBodyClasses;
