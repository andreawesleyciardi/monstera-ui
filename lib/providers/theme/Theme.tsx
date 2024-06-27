import React, {
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import _ from 'lodash';
import {
	createTheme,
	Theme as MuiTheme,
	ThemeOptions as MuiThemeOptions,
	ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';
import { PaletteMode as MuiPaletteMode } from '@mui/material';
import { ThemeContext as MuiThemeContext } from '@mui/styled-engine';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import {
	TTheme,
	TModeDefinition,
	TThemeContext,
	TThemeProviderProps,
} from './Theme.types';
import {
	defaultBrand,
	defaultPalette,
	defaultExtraPalette,
	defaultExtraDarkPalette,
	defaultChartsPalette,
	defaultChartsDarkPalette,
	defaultComponents,
	defaultTypography,
} from './Theme.defaults';
import {
	createBrandedTheme,
	createChartsPaletteTheme,
	createPaletteTheme,
	createComponentsTheme,
	getCustomValue,
} from './Theme.utilities';

// Context

const ThemeContext = React.createContext<TThemeContext | null>(null);

// Provider

export const ThemeProvider: any = ({
	children,
	palette: customPalette = {},
	brand: customBrand = {},
	chartsPalette: customChartsPalette = [],
	chartsDarkPalette: customChartsDarkPalette = [],
	components: customComponents = {},
	mode: customMode = 'light',
	modeIsToggable = true,
	darkPalette: customDarkPalette = {},
	darkBrand: customDarkBrand = {},
	darkComponents: customDarkComponents = {},
	typography: customTypography = {},
}: TThemeProviderProps) => {
	const getDefaultMode = (mode: TModeDefinition): MuiPaletteMode => {
		if (mode == 'auto') {
			return useMediaQuery('(prefers-color-scheme: dark)')
				? 'dark'
				: 'light';
		}
		return mode;
	};

	const [mode, setMode] = useState<MuiPaletteMode>(
		getDefaultMode(customMode)
	);

	const themeBuilder = (
		mode: MuiPaletteMode = 'light',
		modeIsToggable: boolean
	): MuiTheme => {
		// Palette
		const paletteTheme: MuiThemeOptions = createPaletteTheme(
			getCustomValue(
				customPalette,
				customDarkPalette,
				mode,
				modeIsToggable
			),
			_.merge(
				{},
				defaultPalette,
				mode == 'light' ? defaultExtraPalette : defaultExtraDarkPalette
			),
			mode
		);
		let customTheme: MuiTheme = createTheme(paletteTheme);

		// Brand colors and assets
		const brandedTheme: MuiThemeOptions = createBrandedTheme(
			getCustomValue(customBrand, customDarkBrand, mode, modeIsToggable),
			defaultBrand
		);
		customTheme = createTheme(customTheme as MuiThemeOptions, brandedTheme);

		// Charts colors
		const chartsTheme: MuiThemeOptions = createChartsPaletteTheme(
			getCustomValue(
				customChartsPalette,
				customChartsDarkPalette,
				mode,
				modeIsToggable,
				true
			),
			getCustomValue(
				defaultChartsPalette,
				defaultChartsDarkPalette,
				mode,
				modeIsToggable,
				true
			)
		);
		customTheme = createTheme(customTheme as MuiThemeOptions, chartsTheme);

		// Typography
		const typographyTheme: MuiThemeOptions = {
			typography: _.merge(
				{},
				defaultTypography(customTypography?.fontFamily),
				customTypography
			),
		};
		customTheme = createTheme(
			customTheme as MuiThemeOptions,
			typographyTheme
		);

		// Components
		const componentsTheme: MuiThemeOptions = createComponentsTheme(
			customTheme,
			defaultComponents,
			getCustomValue(
				customComponents,
				customDarkComponents,
				mode,
				modeIsToggable
			)
		);
		customTheme = createTheme(
			customTheme as MuiThemeOptions,
			componentsTheme
		);

		console.log(customTheme);
		return customTheme;
	};

	const theme = useMemo(() => themeBuilder(mode, modeIsToggable), [mode]);

	// logo, logosRootUrl, [any]: any --> Create muiTheme custom variables https://mui.com/material-ui/customization/theming/#custom-variables

	const toggleMode = useCallback(
		() => setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light')),
		[]
	);

	const contextValue = _.merge(
		{},
		{ mode: mode, modeIsToggable: modeIsToggable },
		modeIsToggable
			? {
					toggleMode: toggleMode,
			  }
			: {}
	);

	return (
		theme != null && (
			<div className="themeContainer">
				<ThemeContext.Provider value={contextValue}>
					<MuiThemeProvider theme={theme}>
						<EmotionThemeProvider theme={theme}>
							<CssBaseline />
							{children}
						</EmotionThemeProvider>
					</MuiThemeProvider>
				</ThemeContext.Provider>
			</div>
		)
	);
};

export const useTheme = (): TTheme => {
	const themeContext = useContext(ThemeContext);
	const muiThemeContext = useContext(MuiThemeContext);
	return _.merge({}, themeContext, muiThemeContext) as TTheme;
};
