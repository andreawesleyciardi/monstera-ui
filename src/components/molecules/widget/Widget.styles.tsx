import { TComponentsDefinition } from '../../../providers';

export const WidgetTheme: TComponentsDefinition = {
	MuiWidget: {
		defaultProps: {
			elevation: 1,
			square: true,
			variant: 'elevation',
		},
	},
	MuiWidgetActions: {
		defaultProps: {
			position: 'right',
		},
	},
	MuiWidgetBody: {
		defaultProps: {
			color: 'default',
			fullArea: false,
			fullHeight: false,
			fullWidth: false,
		},
	},
	MuiWidgetHeader: {
		defaultProps: {},
	},
	MuiWidgetFooter: {
		defaultProps: {
			color: 'default',
		},
	},
	MuiWidgetTitle: {
		defaultProps: {
			align: 'center',
			variant: 'h3',
		},
	},
};
