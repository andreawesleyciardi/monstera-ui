export interface WidgetActionsClasses {
    /** Styles applied to the root element. */
    root: string;
}
export type WidgetActionsClassKey = keyof WidgetActionsClasses;
export declare function getWidgetActionsUtilityClass(slot: string): string;
// declare const widgetActionsClasses: WidgetActionsClasses;
// export default widgetActionsClasses;
