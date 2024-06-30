import { TComponentsDefinition } from '../../../providers';

export const ScoreTheme: TComponentsDefinition = {
	MuiScore: {
		defaultProps: {},
		styleOverrides: {
			label: {
				'&.MuiTypography-label::after': {
					content: '""',
					display: 'none',
				},
				fontSize: '0.729rem',
				lineHeight: '1',
			},
			value: {
				display: 'inline-block',
				fontWeight: '600',
				lineHeight: '1',
			},
			unit: {
				display: 'inline-block',
				fontWeight: '400',
				lineHeight: '1',
			},
		},
	},
};
