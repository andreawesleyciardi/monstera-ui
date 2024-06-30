import { TComponentsDefinition } from '../../../providers';

export const TabsTheme: TComponentsDefinition = {
	MuiTab: {
		defaultProps: {},
		styleOverrides: {
			root: {
				textTransform: 'none',
			},
		},
	},
	MuiTabs: {
		defaultProps: {
			centered: true,
		},
		styleOverrides: {},
	},
};
