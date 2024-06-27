import React from 'react';

import { TComponentsDefinition } from './../../providers';

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

export const CssBaselineTheme: TComponentsDefinition = {
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
};
