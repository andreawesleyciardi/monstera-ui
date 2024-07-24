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
} from './Theme.d';
import {
    getDefaultTheme
} from './Theme.theme';

// Context

const ThemeContext = React.createContext<ThemeContextProps | null>(null);

// Provider

const ThemeProvider: any = ({
	children,
    ...props
}: ThemeProviderProps) => {
	const [mode, setMode] = useState<MuiPaletteMode>(props.mode == 'auto' ? (useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light') : (props.mode ?? 'light'));

	const [isBranded, setIsBranded] = useState<boolean>(props.isBranded ?? false);

    const theme = React.useMemo(
        () => {
            const customTheme = props?.theme != null ? (typeof props?.theme === 'function' ? props?.theme(mode) : props?.theme) : {};
            return createTheme(
            deepmerge(
                _.merge(
                    getDefaultTheme(mode),
                    { palette: (isBranded === true && customTheme?.branding?.palette != null ? customTheme?.branding?.palette : {}) }
                ),
                customTheme
            )
        )},
        [mode, isBranded, props?.theme],
    );

    const contextValue = React.useMemo(
        () => ({
            togglePaletteMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
            toggleIsBranded: () => {
                setIsBranded((prevMode) => (prevMode === true ? false : true));
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

const useTheme = (): ThemeContextProps => {
	const themeContext = useContext(ThemeContext);
	return themeContext;
};

const useMuiTheme = (): MuiThemeOptions => {
	const muiThemeContext = useContext(MuiThemeContext);
	return muiThemeContext;
};

export default ThemeProvider;
export { useTheme, useMuiTheme };