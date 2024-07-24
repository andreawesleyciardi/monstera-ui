import { PaletteMode as MuiPaletteMode } from '@mui/material';
import {
	ThemeOptions as MuiThemeOptions,
} from '@mui/material/styles';

import {
    AlertTheme,
    BadgeTheme,
	// ButtonsTheme,
	// ChartTheme,
	ChipTheme,
	// DialogTheme,
	// IconTheme,
	InputsTheme,
	// LightTheme,
	// ScoreTheme,
	// StatusTheme,
	// TableTheme,
	// TabsTheme,
	TypographyTheme,
	WidgetTheme,
	WidgetHeaderTheme,
	WidgetBodyTheme,
	WidgetFooterTheme,
	WidgetActionsTheme,
    WidgetTypographyTheme,
} from './../../components';

import MontserratThin from './fonts/Montserrat/Montserrat-Thin.ttf';
import MontserratThinItalic from './fonts/Montserrat/Montserrat-ThinItalic.ttf';
import MontserratExtraLight from './fonts/Montserrat/Montserrat-ExtraLight.ttf';
import MontserratExtraLightItalic from './fonts/Montserrat/Montserrat-ExtraLightItalic.ttf';
import MontserratLight from './fonts/Montserrat/Montserrat-Light.ttf';
import MontserratLightItalic from './fonts/Montserrat/Montserrat-LightItalic.ttf';
import MontserratRegular from './fonts/Montserrat/Montserrat-Regular.ttf';
import MontserratItalic from './fonts/Montserrat/Montserrat-Italic.ttf';
import MontserratMedium from './fonts/Montserrat/Montserrat-Medium.ttf';
import MontserratMediumItalic from './fonts/Montserrat/Montserrat-MediumItalic.ttf';
import MontserratSemiBold from './fonts/Montserrat/Montserrat-SemiBold.ttf';
import MontserratSemiBoldItalic from './fonts/Montserrat/Montserrat-SemiBoldItalic.ttf';
import MontserratBold from './fonts/Montserrat/Montserrat-Bold.ttf';
import MontserratBoldItalic from './fonts/Montserrat/Montserrat-BoldItalic.ttf';
import MontserratExtraBold from './fonts/Montserrat/Montserrat-ExtraBold.ttf';
import MontserratExtraBoldItalic from './fonts/Montserrat/Montserrat-ExtraBoldItalic.ttf';
import MontserratBlack from './fonts/Montserrat/Montserrat-Black.ttf';
import MontserratBlackItalic from './fonts/Montserrat/Montserrat-BlackItalic.ttf';

export const getDefaultTheme = (mode: MuiPaletteMode): MuiThemeOptions => ({
    palette: {
        mode,
        primary: { main: '#46BEDC', contrastText: '#FFFFFF' },
        secondary: { main: '#A5A9AC', contrastText: '#FFFFFF' },
        error: { main: '#C8001E', contrastText: '#FFFFFF' },
        warning: { main: '#FF7300', contrastText: '#FFFFFF' },
        info: { main: '#7094AA', contrastText: '#FFFFFF' },
        success: { main: '#6EA500', contrastText: '#FFFFFF' },
        chart1: { main: 'rgba(70, 190, 220, 1)', contrastText: '#333333' },
        chart2: { main: 'rgba(110, 165, 0, 1)', contrastText: '#333333' },
        chart3: { main: 'rgba(112, 148, 170, 1)', contrastText: '#333333' },
        chart4: { main: 'rgba(165, 169, 172, 1)', contrastText: '#333333' },
        chart5: { main: 'rgba(36, 42, 48, 1)', contrastText: '#333333' },
        chart6: { main: 'rgba(255, 180, 0, 1)', contrastText: '#333333' },
        darker: { main: '#242A30', contrastText: '#FFFFFF' },
        ...(mode === 'light' ?
            {
                background: {
                    base: '#F3F3F5'
                },
                baseMode: { main: '#FFFFFF', contrastText: '#333333' },
                borders: { main: '#E5E6E7', contrastText: '#333333' },
                even: { main: '#F9F9F9', contrastText: '#333333' },
                odd: { main: '#FFFFFF', contrastText: '#333333' },
                oppositeMode: { main: '#242A30', contrastText: '#FFFFFF' },
            }
            :
            {
                background: {
                    base: '#0D1117'
                },
                baseMode: { main: '#242A30', contrastText: '#FFFFFF' },
                borders: { main: '#E5E6E7', contrastText: '#FFFFFF' },
                even: { main: '#323A42', contrastText: '#FFFFFF' },
                odd: { main: '#FFFFFF', contrastText: '#FFFFFF' },
                oppositeMode: { main: '#FFFFFF', contrastText: '#333333' },
            }
        ),
    },
    // branding: {},
    // icons: {},
    typography: {
        fontFamily: 'Montserrat, Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
        // body1: {
		// 	fontFamily: 'Montserrat, Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
		// },
		// body2: {
		// 	fontFamily: 'Montserrat, Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
		// },
		// button: {
		// 	fontFamily: 'Montserrat, Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
		// },
		// caption: {
		// 	fontFamily: 'Montserrat, Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
		// },
		// h1: {
		// 	fontFamily: 'Montserrat, Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
		// },
		// h2: {
		// 	fontFamily: 'Montserrat, Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
		// },
		// h3: {
		// 	fontFamily: 'Montserrat, Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
		// },
		// h4: {
		// 	fontFamily: 'Montserrat, Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
		// },
		// h5: {
		// 	fontFamily: 'Montserrat, Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
		// },
		// h6: {
		// 	fontFamily: 'Montserrat, Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
		// },
		label: {
			// fontFamily: 'Montserrat, Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
			fontSize: '0.875rem',
			fontWeight: 300,
			lineHeight: 1.5,
			position: 'relative',
		},
		// overline: {
		// 	fontFamily: 'Montserrat, Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
		// },
		// subtitle1: {
		// 	fontFamily: 'Montserrat, Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
		// },
		// subtitle2: {
		// 	fontFamily: 'Montserrat, Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
		// },
    },
    components: {
        ...AlertTheme,
        ...BadgeTheme,
        // ...ButtonsTheme,
        // ...ChartTheme,
        ...ChipTheme,
        // ...DialogTheme,
        // ...IconTheme,
        ...InputsTheme,
        // ...LightTheme,
        // ...ScoreTheme,
        // ...StatusTheme,
        // ...TableTheme,
        // ...TabsTheme,
        ...TypographyTheme,
        ...WidgetTheme,
        ...WidgetHeaderTheme,
        ...WidgetBodyTheme,
        ...WidgetFooterTheme,
        ...WidgetActionsTheme,
        ...WidgetTypographyTheme,
        MuiPaper: {
            styleOverrides: {
                elevation1: {
                    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.07)',
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                    font-family: 'Montserrat';
                    font-weight: 100;
                    font-style: normal;
                    src: local('Montserrat Thin'),
                        url(${MontserratThin}) format('truetype');
                }
                @font-face {
                    font-family: 'Montserrat';
                    font-weight: 100;
                    font-style: italic;
                    src: local('Montserrat Thin Italic'),
                        url(${MontserratThinItalic}) format('truetype');
                }
                @font-face {
                    font-family: 'Montserrat';
                    font-weight: 200;
                    font-style: normal;
                    src: local('Montserrat Extra Light'),
                        url(${MontserratExtraLight}) format('truetype');
                }
                @font-face {
                    font-family: 'Montserrat';
                    font-weight: 200;
                    font-style: italic;
                    src: local('Montserrat Extra Light Italic'),
                        url(${MontserratExtraLightItalic}) format('truetype');
                }
                @font-face {
                    font-family: 'Montserrat';
                    font-weight: 300;
                    font-style: normal;
                    src: local('Montserrat Light'),
                        url(${MontserratLight}) format('truetype');
                }
                @font-face {
                    font-family: 'Montserrat';
                    font-weight: 300;
                    font-style: italic;
                    src: local('Montserrat Light Italic'),
                        url(${MontserratLightItalic}) format('truetype');
                }
                @font-face {
                    font-family: 'Montserrat';
                    font-weight: 400;
                    font-style: normal;
                    src: local('Montserrat Regular'),
                        url(${MontserratRegular}) format('truetype');
                }
                @font-face {
                    font-family: 'Montserrat';
                    font-weight: 400;
                    font-style: italic;
                    src: local('Montserrat Regular Italic'),
                        url(${MontserratItalic}) format('truetype');
                }
                @font-face {
                    font-family: 'Montserrat';
                    font-weight: 500;
                    font-style: normal;
                    src: local('Montserrat Medium'),
                        url(${MontserratMedium}) format('truetype');
                }
                @font-face {
                    font-family: 'Montserrat';
                    font-weight: 500;
                    font-style: italic;
                    src: local('Montserrat Medium Italic'),
                        url(${MontserratMediumItalic}) format('truetype');
                }
                @font-face {
                    font-family: 'Montserrat';
                    font-weight: 600;
                    font-style: normal;
                    src: local('Montserrat Semi-Bold'),
                        url(${MontserratSemiBold}) format('truetype');
                }
                @font-face {
                    font-family: 'Montserrat';
                    font-weight: 600;
                    font-style: italic;
                    src: local('Montserrat Semi-Bold Italic'),
                        url(${MontserratSemiBoldItalic}) format('truetype');
                }
                @font-face {
                    font-family: 'Montserrat';
                    font-weight: 700;
                    font-style: normal;
                    src: local('Montserrat Bold'),
                        url(${MontserratBold}) format('truetype');
                }
                @font-face {
                    font-family: 'Montserrat';
                    font-weight: 700;
                    font-style: italic;
                    src: local('Montserrat Bold Italic'),
                        url(${MontserratBoldItalic}) format('truetype');
                }
                @font-face {
                    font-family: 'Montserrat';
                    font-weight: 800;
                    font-style: normal;
                    src: local('Montserrat Extra-Bold'),
                        url(${MontserratExtraBold}) format('truetype');
                }
                @font-face {
                    font-family: 'Montserrat';
                    font-weight: 800;
                    font-style: italic;
                    src: local('Montserrat Extra-Bold Italic'),
                        url(${MontserratExtraBoldItalic}) format('truetype');
                }
                @font-face {
                    font-family: 'Montserrat';
                    font-weight: 900;
                    font-style: normal;
                    src: local('Montserrat Black'),
                        url(${MontserratBlack}) format('truetype');
                }
                @font-face {
                    font-family: 'Montserrat';
                    font-weight: 900;
                    font-style: italic;
                    src: local('Montserrat Black Italic'),
                        url(${MontserratBlackItalic}) format('truetype');
                }
            `,
        },
    }
})
