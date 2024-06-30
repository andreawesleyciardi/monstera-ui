import { TComponentsDefinition } from '../../../providers';

export const TypographyTheme: TComponentsDefinition = {
	MuiTypography: {
		defaultProps: {
			sx: {
				// fontFamily: 'inherit',
				// fontFamily: [
				// 	'Montserrat',
				// 	'Open Sans',
				// 	'Helvetica Neue',
				// 	'Helvetica',
				// 	'Arial',
				// 	'sans-serif',
				// ].join(','),
			},
			variantMapping: {
				label: 'label',
			},
		},
		styleOverrides: {
			root: {
				'&.MuiTypography-label::after': {
					content: '":"',
					display: 'inline-block',
					position: 'absolute',
				},
				'&.MuiTypography-label': {
					color: '#AAAAAA',
				},
			},
		},
	},
};
