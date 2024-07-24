import { BoxProps } from '@mui/material/Box';

export interface WidgetFooterProps extends BoxProps {
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
}

export interface WidgetFooterOwnerState extends WidgetFooterProps {}
