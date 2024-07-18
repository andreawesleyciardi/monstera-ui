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
			variant: 'default',
			fullArea: false,
			fullHeight: false,
			fullWidth: false,
		},
	},
	MuiWidgetHeader: {
		defaultProps: {
            variant: 'default',
        },
	},
	MuiWidgetFooter: {
		defaultProps: {
			variant: 'default',
		},
	},
	MuiWidgetTitle: {
		defaultProps: {
			align: 'center',
			variant: 'h3',
		},
	},
};
