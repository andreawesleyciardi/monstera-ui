import { TComponentsDefinition } from '../../../providers';

export const DialogTheme: TComponentsDefinition = {
	MuiDialogActions: {
		defaultProps: {
			position: 'center',
		},
	},
	MuiDialog: {
		defaultProps: {
			fullWidth: true,
			maxWidth: 'sm',
			PaperProps: {
				elevation: 0,
				square: true,
			},
		},
	},
	MuiDialogBody: {
		defaultProps: {
			color: 'default',
			fullArea: false,
			fullHeight: false,
			fullWidth: false,
		},
	},
	MuiDialogHeader: {
		defaultProps: {
			variant: 'dark',
		},
	},
	MuiDialogFooter: {
		defaultProps: {
			color: 'default',
		},
	},
	MuiDialogPortal: {
		defaultProps: {
			dialogContainerId: 'MuiDialogContainer',
		},
	},
	MuiDialogTitle: {
		defaultProps: {
			align: 'center',
			variant: 'h3',
		},
	},
};
