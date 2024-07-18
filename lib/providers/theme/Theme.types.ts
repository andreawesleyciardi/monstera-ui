import { Theme as MuiTheme } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { SvgIconProps } from '@mui/material/SvgIcon';
import { PaletteMode as MuiPaletteMode } from '@mui/material';
import React from 'react';



import { PaletteColor, PaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Palette {
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
            palette: PaletteOptions;
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

    interface TypographyVariants {
		label: React.CSSProperties;
	}

	interface TypographyVariantsOptions {
		label?: React.CSSProperties;
	}
}

declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		label: true;
	}
}

export type PaletteMode = MuiPaletteMode | 'auto';

export type ThemeProviderProps = {
    children: React.ReactNode;
    mode: PaletteMode;
	theme: MuiTheme;
}




export type TThemeContext = {};



export type TBrandPalette = {
	primary?: TColorDefinition;
	secondary?: TColorDefinition;
} & {
	[key: string]: TColorDefinition;
};

export type TBrandParams = {
	logo?: string | { [key: string]: string };
	logosRootUrl?: string;
	[key: string]: any;
};

export type TBrandDefinition = {
	palette?: TBrandPalette;
} & TBrandParams;

export type TBrand = {
	palette?: TPalette;
	brand?: TBrandParams;
};

export type TChartsPaletteDefinition = string[];

// ----------------------------------------------------------------

export type TComponents = {
	[key: string]: {
		defaultProps: {
			[key: string]: string | boolean;
		};
		styleOverrides: {
			[key: string]: (props: any) => void | object;
		};
	};
};

export type TStyleOverrides = {
	[key: string]: any;
};

export type TComponentDefinition = {
	defaultProps?: {
		[key: string]: string | boolean | object | number;
	};
	styleOverrides?: string | TStyleOverrides;
	variants?: object[];
};

export type TComponentsDefinition = {
	[key: string]: TComponentDefinition;
};

// ----------------------------------------------------------------

export type TIconsDefinition = {
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

// ----------------------------------------------------------------



// ----------------------------------------------------------------

export type TThemeProviderProps = {
	children: React.ReactNode;
	palette?: TPaletteDefinition;
	brand?: TBrandDefinition;
	chartsPalette?: TChartsPaletteDefinition;
	chartsDarkPalette?: TChartsPaletteDefinition;
	components?: TComponentsDefinition;
	mode?: TModeDefinition;
	modeIsToggable?: boolean;
	darkPalette?: TPaletteDefinition;
	darkBrand?: TBrandDefinition;
	darkComponents?: TComponentsDefinition;
	typography?: TypographyOptions;
};

export type TTheme = MuiTheme & {
	mode?: MuiPaletteMode;
	modeIsToggable?: boolean;
	brand?: TBrandParams;
	toggleMode?: () => void;
};

// export type TMuiCreateThemeProps = {
// 	brand?: { [key: string]: string | number };
// 	palette?: TPalette;
// 	components?: any;
// };

// export type TTheme = {
// 	palette?: TPalette;
// 	components?: any;
// 	[key: string]: any;
// };
