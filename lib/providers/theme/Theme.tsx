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
import { deepmerge } from '@mui/utils';
import { PaletteMode as MuiPaletteMode } from '@mui/material';
import { ThemeContext as MuiThemeContext } from '@mui/styled-engine';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import {
	TTheme,
	TModeDefinition,
	TThemeContext,

    PaletteMode,
	ThemeProviderProps,
} from './Theme.types';
import {
    getCustomTheme,
    getDefaultTheme
} from './Theme.styles';

// Context

const ThemeContext = React.createContext<TThemeContext | null>(null);

// Provider

export const ThemeProvider: any = ({
	children,
    ...props
}: ThemeProviderProps) => {
	const getInitialMode = (mode: PaletteMode = 'light'): MuiPaletteMode => {
		if (mode == 'auto') {
			return useMediaQuery('(prefers-color-scheme: dark)')
				? 'dark'
				: 'light';
		}
		return mode;
	};

	const [mode, setMode] = useState<MuiPaletteMode>(
		getInitialMode(props.mode)
	);

    const themeMode = React.useMemo(
        () => ({
            togglePaletteMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = React.useMemo(
        () =>
            createTheme(deepmerge(getDefaultTheme(mode), getCustomTheme(props?.theme, mode))),
        [mode, props?.theme],
    );




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
