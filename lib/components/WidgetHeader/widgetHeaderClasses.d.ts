export interface WidgetHeaderClasses {
    /** Styles applied to the root element. */
    root: string;
}
export type WidgetHeaderClassKey = keyof WidgetHeaderClasses;
export declare function getWidgetHeaderUtilityClass(slot: string): string;
// declare const widgetHeaderClasses: WidgetHeaderClasses;
// export default widgetHeaderClasses;
