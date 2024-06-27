import {
	createTheme,
	// GlobalStyles as MuiGlobalStyles,
	Theme as MuiTheme,
	ThemeOptions as MuiThemeOptions,
	ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';
import { PaletteMode as MuiPaletteMode } from '@mui/material';
import _ from 'lodash';

import {
	TBrand,
	TBrandDefinition,
	TColor,
	TColorDefinition,
	TComponents,
	TComponentDefinition,
	TComponentsDefinition,
	TIconsDefinition,
	// TMuiCreateThemeProps,
	TPalette,
	TPaletteDefinition,
	TStyleOverrides,
	// TTheme,
	TThemeContext,
	TThemeProviderProps,
} from './Theme.types';
import {
	defaultBrand,
	defaultPalette,
	// defaultComponents,
	componentsMap,
} from './Theme.defaults';

const parsePalette = function (
	palette: { [key: string]: TColorDefinition } | undefined
): { [key: string]: TColor } {
	if (palette == undefined) {
		return {};
	}
	let parsedPalette: { [key: string]: TColor } = {};
	for (const key in palette) {
		parsedPalette[key] = (
			typeof palette[key] === 'string'
				? { main: palette[key] }
				: palette[key]
		) as TColor;
	}
	return parsedPalette;
};

const parseBrandParams = function (brand: any) {
	if (typeof brand?.logo === 'string') {
		brand.logo = { main: brand?.logo };
	}
	return brand;
};

const parseBrand = function ({ palette, ...brand }: TBrandDefinition): TBrand {
	let parsedBrandPalette = parsePalette(palette);
	let parsedBrandParams = parseBrandParams(brand);
	return _.merge(
		{},
		Object.keys(parsedBrandPalette).length > 0
			? { palette: parsedBrandPalette }
			: {},
		parsedBrandParams != null && Object.keys(parsedBrandParams).length > 0
			? { brand: parsedBrandParams }
			: {}
	);
};

// TO REMOVE AFTER FIX CHIP COMPONENT
const parseComponents = function (
	components: TComponentsDefinition
): TComponents {
	let parsedComponents: TComponentsDefinition = {};
	Object.keys(components).forEach((key) => {
		parsedComponents[componentsMap[key] ?? key] = components[key];
	});

	return parsedComponents;
};

export const createPaletteTheme = function (
	palette: TPaletteDefinition,
	basePalette: TPaletteDefinition,
	mode: MuiPaletteMode
): MuiThemeOptions {
	const paletteTheme: TPalette = parsePalette(
		_.merge({}, basePalette ?? {}, palette)
	);
	return { palette: _.merge({}, paletteTheme, { mode: mode }) };
};

export const createBrandedTheme = function (
	brand: TBrandDefinition,
	baseBrand: TBrandDefinition
): MuiThemeOptions {
	const brandedTheme: TBrand = parseBrand(_.merge({}, baseBrand, brand));
	return brandedTheme;
};

export const createChartsPaletteTheme = function (
	customValues: string[],
	defaultValues: string[]
): MuiThemeOptions {
	return { chartsColors: [].concat(customValues, defaultValues) };
};

export const createComponentsTheme = function (
	customTheme: MuiTheme,
	defaultComponents: TComponentsDefinition,
	components?: TComponentsDefinition
): MuiThemeOptions {
	const getStyleOverridesValue = (styleOverrides: TStyleOverrides) => {
		let result: TStyleOverrides = {};
		Object.keys(styleOverrides ?? {}).forEach((key) => {
			result[key] =
				typeof styleOverrides?.[key] === 'function'
					? styleOverrides[key]({ theme: customTheme })
					: styleOverrides[key];
		});
		return result;
	};

	const getSingleComponentValue = (obj: TComponentDefinition) => {
		return {
			defaultProps: obj?.defaultProps ?? {},
			styleOverrides:
				obj?.styleOverrides != null
					? getStyleOverridesValue(obj?.styleOverrides)
					: {},
		} as TComponentDefinition;
	};

	const componentsKeys = Object.keys(
		_.merge({}, defaultComponents, components)
	);

	let mergedComponents: TComponentsDefinition = {};

	componentsKeys.forEach((key) => {
		mergedComponents[key] = _.merge(
			{},
			getSingleComponentValue(defaultComponents?.[key] ?? {}),
			getSingleComponentValue(components?.[key] ?? {})
		);
	});

	const componentsTheme: TComponents = parseComponents(mergedComponents);

	return { components: componentsTheme };
};

export const getCustomValue = function (
	customLight: any,
	customDark: any,
	mode: MuiPaletteMode,
	modeIsToggable: boolean,
	isArray: boolean = false
) {
	if (isArray == false) {
		return modeIsToggable === true
			? _.merge({}, customLight, mode === 'dark' ? customDark : {})
			: mode === 'light'
			? { ...customLight }
			: { ...customDark };
	} else {
		return modeIsToggable === true
			? mode === 'dark'
				? customDark
				: customLight
			: mode === 'light'
			? customLight
			: customDark;
	}
};

export const createTypographyTheme = function (
	components: TComponentsDefinition,
	baseComponents?: TComponentsDefinition
): MuiThemeOptions {
	const componentsTheme: TComponents = parseComponents(
		_.merge({}, baseComponents ?? {}, components)
	);
	return { components: componentsTheme };
};
