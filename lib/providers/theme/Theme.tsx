import React, {
	useContext,
	useState,
} from 'react';
import _ from 'lodash';
import {
	createTheme,
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
    PaletteMode,
    ThemeContextProps,
	ThemeProviderProps,
    ThemeProviderThemeProps,
} from './Theme.d';
import {
    getDefaultTheme
} from './Theme.defaults';

// Context

const ThemeContext = React.createContext<ThemeContextProps | null>(null);

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
		() => { return getInitialMode(props.mode); }
	);

    const formatCustomTheme = (theme: ThemeProviderThemeProps = {}, mode: MuiPaletteMode): MuiThemeOptions => (
        typeof theme === 'function' ? theme(mode) : theme
    );

    const theme = React.useMemo(
        () => createTheme(deepmerge(getDefaultTheme(mode), formatCustomTheme(props?.theme, mode))),
        [mode, props?.theme],
    );

    const contextValue = React.useMemo(
        () => ({
            togglePaletteMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
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

export const useTheme = (): object => {
	const themeContext = useContext(ThemeContext);
	const muiThemeContext = useContext(MuiThemeContext);
	return _.merge({}, themeContext, muiThemeContext) as object;
};
