import { TComponentsDefinition } from './../../../providers';

export const ButtonsTheme: TComponentsDefinition = {
	MuiAction: {
		defaultProps: {
			color: 'primary',
			disableElevation: true,
			isIconButton: true,
			size: 'small',
			variant: 'contained',
		},
		styleOverrides: {
			root: {
				height: '100%',
				'.MuiIconButton-root': {
					height: '100%',
					width: '100%',
				},
			},
		},
	},
	MuiButton: {
		defaultProps: {},
	},
	MuiButtonBase: {
		defaultProps: {
			disableRipple: true,
			disableTouchRipple: true,
		},
	},
	MuiButtonGroup: {
		styleOverrides: {
			root: {
				'&.MuiActionsGroup': {
					height: '2.9rem',
				},
			},
		},
	},
	MuiIconButton: {
		defaultProps: {
			disableRipple: true,
			disableFocusRipple: true,
		},
		styleOverrides: {
			root: {
				fontSize: '1.2rem',
			},
		},
	},
};
