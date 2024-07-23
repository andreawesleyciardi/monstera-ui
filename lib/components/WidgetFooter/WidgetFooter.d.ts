import { BoxProps } from '@mui/material/Box';
import { TypographyProps } from '@mui/material/Typography';

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

export interface WidgetFooterTextProps extends TypographyProps {}

export interface WidgetFooterOwnerState extends WidgetFooterProps {}
