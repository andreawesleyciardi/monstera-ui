import {
    AlertTheme,
    BadgeTheme,
	ButtonsTheme,
	ChartTheme,
	ChipTheme,
	DialogTheme,
	IconTheme,
	InputsTheme,
	LightTheme,
	ScoreTheme,
	StatusTheme,
	TableTheme,
	TabsTheme,
	TypographyTheme,
	WidgetTheme,
} from 'components';
import { PaletteColor } from '@mui/material/styles';

import {
	TBrandDefinition,
	TColorsVariables,
	TComponentsDefinition,
	TPaletteDefinition,
} from './Theme.types';
import { CssBaselineTheme } from './Theme.fonts';

declare module '@mui/material/styles' {
	interface Palette {
		dark: PaletteColor;
		default: PaletteColor;
		dialog: PaletteColor;
		chartsColors: string[];
		transparent: PaletteColor;
		widget: PaletteColor;
	}

	interface PaletteOptions {
		dark: PaletteColor;
		default: PaletteColor;
		dialog: PaletteColor;
		chartsColors: string[];
		transparent: PaletteColor;
		widget: PaletteColor;
	}
}

export const defaultPalette: TPaletteDefinition = {
	primary: { main: '#46BEDC', contrastText: '#FFFFFF' },
	secondary: { main: '#A5A9AC', contrastText: '#FFFFFF' },
	error: { main: '#C8001E', contrastText: '#FFFFFF' },
	warning: { main: '#FF7300', contrastText: '#FFFFFF' },
	info: { main: '#7094AA', contrastText: '#FFFFFF' },
	success: { main: '#6EA500', contrastText: '#FFFFFF' },
};

export const defaultExtraPalette: TPaletteDefinition = {
	borders: { main: '#E5E6E7', contrastText: '#000000' },
	dark: {
		main: '#242A30',
		light: '#242A30',
		dark: '#FFFFFF',
		contrastText: '#FFFFFF',
	},
	default: {
		main: '#FFFFFF',
		light: '#FFFFFF',
		dark: '#333333',
		contrastText: '#333333',
	},
	dialog: {
		main: '#FFFFFF',
		light: '#FFFFFF',
		dark: '#333333',
		contrastText: '#333333',
	},
	widget: {
		main: '#FFFFFF',
		light: '#FFFFFF',
		dark: '#333333',
		contrastText: '#333333',
	},
	odd: { main: '#FFFFFF', contrastText: '#333333' },
	even: { main: '#F9F9F9', contrastText: '#333333' },
	transparent: { main: 'rgba(0,0,0,0)', contrastText: '#333333' },
};

export const defaultExtraDarkPalette: TPaletteDefinition = {
	borders: { main: '#E5E6E7', contrastText: '#FFFFFF' },
	dark: {
		main: '#FFFFFF',
		light: '#FFFFFF',
		dark: '#242A30',
		contrastText: '#242A30',
	},
	default: {
		main: '#242A30',
		light: '#242A30',
		dark: '#FFFFFF',
		contrastText: '#FFFFFF',
	},
	dialog: {
		main: '#242A30',
		light: '#242A30',
		dark: '#FFFFFF',
		contrastText: '#FFFFFF',
	},
	widget: {
		main: '#242A30',
		light: '#242A30',
		dark: '#FFFFFF',
		contrastText: '#FFFFFF',
	},
	odd: { main: '#FFFFFF', contrastText: '#FFFFFF' },
	even: { main: '#323A42', contrastText: '#FFFFFF' },
	transparent: { main: 'rgba(0,0,0,0)', contrastText: '#FFFFFF' },
};

export const defaultBrand: TBrandDefinition = {
	palette: {
		primary: defaultPalette.primary,
		secondary: defaultPalette.secondary,
	},
	logo: { main: '' },
	logosRootUrl: '',
};

export const defaultChartsPalette = [
	'rgba(70, 190, 220, 1)',
	'rgba(110, 165, 0, 1)',
	'rgba(112, 148, 170, 1)',
	'rgba(165, 169, 172, 1)',
	'rgba(36, 42, 48, 1)',
	'rgba(255, 180, 0, 1)',
];

export const defaultChartsDarkPalette = [
	'rgba(70, 190, 220, 1)',
	'rgba(110, 165, 0, 1)',
	'rgba(112, 148, 170, 1)',
	'rgba(165, 169, 172, 1)',
	'rgba(36, 42, 48, 1)',
	'rgba(255, 180, 0, 1)',
];

export const defaultComponents: TComponentsDefinition = {
	...CssBaselineTheme,
    ...AlertTheme,
    ...BadgeTheme,
	...ButtonsTheme,
	...ChartTheme,
	...ChipTheme,
	...DialogTheme,
	...IconTheme,
	...InputsTheme,
	...LightTheme,
	...ScoreTheme,
	...StatusTheme,
	...TableTheme,
	...TabsTheme,
	...TypographyTheme,
	...WidgetTheme,
	MuiPaper: {
		styleOverrides: {
			elevation1: {
				boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.07)',
			},
		},
	},
};

export const componentsMap: { [key: string]: string } = {
	Chip: 'MuiChip',
};

declare module '@mui/material/styles' {
	interface TypographyVariants {
		label: React.CSSProperties;
	}

	// allow configuration using `createTheme`
	interface TypographyVariantsOptions {
		label?: React.CSSProperties;
	}
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		label: true;
	}
}

export const defaultTypography = (fontFamily = 'Montserrat') => {
	const arrFontFamily = [
		fontFamily,
		'Open Sans',
		'Helvetica Neue',
		'Helvetica',
		'Arial',
		'sans-serif',
	].join(',');
	return {
		fontFamily: arrFontFamily,
		fontSize: '0.875rem',
		// fontFamily: fontFamily,
		body1: {
			fontFamily: arrFontFamily,
		},
		body2: {
			fontFamily: arrFontFamily,
		},
		button: {
			fontFamily: arrFontFamily,
		},
		caption: {
			fontFamily: arrFontFamily,
		},
		h1: {
			fontFamily: arrFontFamily,
		},
		h2: {
			fontFamily: arrFontFamily,
		},
		h3: {
			fontFamily: arrFontFamily,
		},
		h4: {
			fontFamily: arrFontFamily,
		},
		h5: {
			fontFamily: arrFontFamily,
		},
		h6: {
			fontFamily: arrFontFamily,
		},
		label: {
			fontFamily: arrFontFamily,
			fontSize: '0.875rem',
			fontWeight: '300',
			lineHeight: '1.5',
			position: 'relative',
		},
		overline: {
			fontFamily: arrFontFamily,
		},
		subtitle1: {
			fontFamily: arrFontFamily,
		},
		subtitle2: {
			fontFamily: arrFontFamily,
		},
	};
};
