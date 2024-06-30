import { Theme as MuiTheme } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { SvgIconProps } from '@mui/material/SvgIcon';
import { PaletteMode as MuiPaletteMode } from '@mui/material';
import React from 'react';

export type TThemeContext = {};

export type TColorsVariables = {
	primary?: TColorDefinition;
	secondary?: TColorDefinition;
	error?: TColorDefinition;
	warning?: TColorDefinition;
	info?: TColorDefinition;
	success?: TColorDefinition;
} & {
	[key: string]: TColorDefinition;
};

export type TColor = {
	main: string;
	light?: string;
	dark?: string;
	contrastText?: string;
};

export type TColorDefinition = string | TColor | undefined;

// ----------------------------------------------------------------

export type TPaletteDefinition = { contrastThreshold?: number } & {
	[key: string]: TColorDefinition;
};

export type TPalette = { contrastThreshold?: number } & {
	[key: string]: TColor;
};

// ----------------------------------------------------------------

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

export type TModeDefinition = MuiPaletteMode | 'auto';

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
