export interface WidgetClasses {
    /** Styles applied to the root element. */
    root: string;
}
export type WidgetClassKey = keyof WidgetClasses;
export declare function getWidgetUtilityClass(slot: string): string;
declare const widgetClasses: WidgetClasses;
export default widgetClasses;
