import { TComponentsDefinition } from '../../../providers';

export const StatusTheme: TComponentsDefinition = {
	MuiStatus: {
		defaultProps: {
			color: 'default',
			labelProps: {},
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
