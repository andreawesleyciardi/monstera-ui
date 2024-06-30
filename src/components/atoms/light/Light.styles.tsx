import { TComponentsDefinition } from '../../../providers';

export const LightTheme: TComponentsDefinition = {
	MuiLight: {
		defaultProps: {
			color: 'default',
			size: 'small',
			textTransform: 'capitalize',
			typesMap: {
				language: 'primary',
			},
			variant: 'filled',
		},
		styleOverrides: {},
	},
};
