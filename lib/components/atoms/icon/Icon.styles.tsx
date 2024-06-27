import { TComponentsDefinition } from '../../../providers';
import { defaultIcons } from './Icon.defaults';

export const IconTheme: TComponentsDefinition = {
	MuiIcon: {
		defaultProps: {
			defaultIcons: defaultIcons,
			fontSize: 'inherit',
		},
		styleOverrides: {},
	},
};
