import { Palette } from '@mui/material/styles';
import { BoxProps } from '@mui/material/Box';

export interface WidgetBodyProps extends BoxProps {
	classes?: object;
	variant?:
		| 'primary'
		| 'secondary'
		| 'success'
		| 'error'
		| 'info'
		| 'warning'
		| 'dark'
		| 'default'
        | string;
	fullArea?: boolean;
	fullHeight?: boolean;
	fullWidth?: boolean;
	paddingX?: string;
	paddingY?: string;
}

export interface WidgetBodyOwnerState extends WidgetBodyProps {}