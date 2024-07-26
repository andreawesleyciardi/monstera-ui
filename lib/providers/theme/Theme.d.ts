import React from 'react';
import {
    ComponentsOverrides as MuiComponentsOverrides,
    ComponentsProps as MuiComponentsProps,
    ComponentsPropsList as MuiComponentsPropsList,
    ComponentsVariants as MuiComponentsVariants,
    PaletteColor,
    PaletteColorOptions,
    Theme as MuiTheme,
    ThemeOptions as MuiThemeOptions,
} from '@mui/material/styles';
import { SvgIconProps } from '@mui/material/SvgIcon';
import { PaletteMode as MuiPaletteMode, PaletteOptions as MuiPaletteOptions } from '@mui/material';

import { WidgetClassKey, WidgetProps } from '../../components/Widget';
import { WidgetHeaderClassKey, WidgetHeaderProps } from '../../components/WidgetHeader';
import { WidgetBodyClassKey, WidgetBodyProps } from '../../components/WidgetBody';
import { WidgetFooterClassKey, WidgetFooterProps } from '../../components/WidgetFooter';
import { WidgetActionsClassKey, WidgetActionsProps } from '../../components/WidgetActions';
import { WidgetTitleClassKey, WidgetTitleProps, WidgetFooterTextClassKey, WidgetFooterTextProps } from '../../components/WidgetTypography';

declare module '@mui/material/styles' {
	interface Palette {
        baseMode: PaletteColor;
        borders: PaletteColor;
        chart1: PaletteColor;
        chart2: PaletteColor;
        chart3: PaletteColor;
        chart4: PaletteColor;
        chart5: PaletteColor;
        chart6: PaletteColor;
        darker: PaletteColor;
        even: PaletteColor;
        odd: PaletteColor;
        oppositeMode: PaletteColor; 
	}

	interface PaletteOptions {
        baseMode?: PaletteColorOptions;
        borders?: PaletteColorOptions;
        chart1?: PaletteColorOptions;
        chart2?: PaletteColorOptions;
        chart3?: PaletteColorOptions;
        chart4?: PaletteColorOptions;
        chart5?: PaletteColorOptions;
        chart6?: PaletteColorOptions;
        darker?: PaletteColorOptions;
        even?: PaletteColorOptions;
        odd?: PaletteColorOptions;
        oppositeMode?: PaletteColorOptions;
	}
    
    interface Theme {
        branding: {
            appName: string;
            companyName: string;
            logo: string | { [key: string]: string };
            logosRootUrl: string;
            palette: Palette;
            [key: string]: any;
        };
        icons: {
            add: React.FunctionComponent<SvgIconProps>;
            copy: React.FunctionComponent<SvgIconProps>;
            delete: React.FunctionComponent<SvgIconProps>;
            edit: React.FunctionComponent<SvgIconProps>;
            export: React.FunctionComponent<SvgIconProps>;
            filter: React.FunctionComponent<SvgIconProps>;
            firstPage: React.FunctionComponent<SvgIconProps>;
            info: React.FunctionComponent<SvgIconProps>;
            lastPage: React.FunctionComponent<SvgIconProps>;
            nextPage: React.FunctionComponent<SvgIconProps>;
            previousPage: React.FunctionComponent<SvgIconProps>;
            remove: React.FunctionComponent<SvgIconProps>;
            search: React.FunctionComponent<SvgIconProps>;
            sort: React.FunctionComponent<SvgIconProps>;
            [key: string]: React.FunctionComponent<SvgIconProps> | null | undefined;
        };
    }
    
    interface ThemeOptions {
        branding?: {
            appName?: string;
            companyName?: string;
            logo?: string | { [key: string]: string };
            logosRootUrl?: string;
            palette?: PaletteOptions;
            [key: string]: any;
        };
        icons?: {
            add?: React.FunctionComponent<SvgIconProps>;
            copy?: React.FunctionComponent<SvgIconProps>;
            delete?: React.FunctionComponent<SvgIconProps>;
            edit?: React.FunctionComponent<SvgIconProps>;
            export?: React.FunctionComponent<SvgIconProps>;
            filter?: React.FunctionComponent<SvgIconProps>;
            firstPage?: React.FunctionComponent<SvgIconProps>;
            info?: React.FunctionComponent<SvgIconProps>;
            lastPage?: React.FunctionComponent<SvgIconProps>;
            nextPage?: React.FunctionComponent<SvgIconProps>;
            previousPage?: React.FunctionComponent<SvgIconProps>;
            remove?: React.FunctionComponent<SvgIconProps>;
            search?: React.FunctionComponent<SvgIconProps>;
            sort?: React.FunctionComponent<SvgIconProps>;
            [key: string]: React.FunctionComponent<SvgIconProps> | null | undefined;
        };
    }

    interface TypeBackground {
        base: string;
    }

    interface TypographyVariants {
		label: React.CSSProperties;
	}

	interface TypographyVariantsOptions {
		label?: React.CSSProperties;
	}

    interface ComponentsPropsList {
        MuiWidget: WidgetProps;
        MuiWidgetHeader: WidgetHeaderProps;
        MuiWidgetBody: WidgetBodyProps;
        MuiWidgetFooter: WidgetFooterProps;
        MuiWidgetActions: WidgetActionsProps;
        MuiWidgetTitle: WidgetTitleProps;
        MuiWidgetFooterText: WidgetFooterTextProps;
    }

    interface Components<Theme = unknown> {
        MuiWidget?: {
            defaultProps?: MuiComponentsProps['MuiWidget'];
            styleOverrides?: MuiComponentsOverrides<Theme>['MuiWidget'];
            variants?: MuiComponentsVariants<Theme>['MuiWidget'];
        };
        MuiWidgetHeader?: {
            defaultProps?: MuiComponentsProps['MuiWidgetHeader'];
            styleOverrides?: MuiComponentsOverrides<Theme>['MuiWidgetHeader'];
            variants?: MuiComponentsVariants<Theme>['MuiWidgetHeader'];
        };
        MuiWidgetBody?: {
            defaultProps?: MuiComponentsProps['MuiWidgetBody'];
            styleOverrides?: MuiComponentsOverrides<Theme>['MuiWidgetBody'];
            variants?: MuiComponentsVariants<Theme>['MuiWidgetBody'];
        };
        MuiWidgetFooter?: {
            defaultProps?: MuiComponentsProps['MuiWidgetFooter'];
            styleOverrides?: MuiComponentsOverrides<Theme>['MuiWidgetFooter'];
            variants?: MuiComponentsVariants<Theme>['MuiWidgetFooter'];
        };
        MuiWidgetActions?: {
            defaultProps?: MuiComponentsProps['MuiWidgetActions'];
            styleOverrides?: MuiComponentsOverrides<Theme>['MuiWidgetActions'];
            variants?: MuiComponentsVariants<Theme>['MuiWidgetActions'];
        };
        MuiWidgetTitle?: {
            defaultProps?: MuiComponentsProps['MuiWidgetTitle'];
            styleOverrides?: MuiComponentsOverrides<Theme>['MuiWidgetTitle'];
            variants?: MuiComponentsVariants<Theme>['MuiWidgetTitle'];
        };
        MuiWidgetFooterText?: {
            defaultProps?: MuiComponentsProps['MuiWidgetFooterText'];
            styleOverrides?: MuiComponentsOverrides<Theme>['MuiWidgetFooterText'];
            variants?: MuiComponentsVariants<Theme>['MuiWidgetFooterText'];
        };
    }

    interface ComponentNameToClassKey {
        MuiWidget: WidgetClassKey;
        MuiWidgetHeader: WidgetHeaderClassKey;
        MuiWidgetBody: WidgetBodyClassKey;
        MuiWidgetFooter: WidgetFooterClassKey;
        MuiWidgetActions: WidgetActionsClassKey;
        MuiWidgetTitle: WidgetTitleClassKey;
        MuiWidgetFooterText: WidgetFooterTextClassKey;
    }
}

declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		label: true;
	}
}

export type PaletteMode = MuiPaletteMode | 'auto';

export type ThemeProviderThemeProps = MuiThemeOptions | ((mode: MuiPaletteMode) => MuiThemeOptions);

export type ThemeProviderProps = {
    children: React.ReactNode;
    isBranded: boolean;
    mode: PaletteMode;
	theme: ThemeProviderThemeProps;
}

export type ThemeContextProps = {
    togglePaletteMode: () => void;
    toggleIsBranded: () => void;
};



// DEVIL MAY CRY song