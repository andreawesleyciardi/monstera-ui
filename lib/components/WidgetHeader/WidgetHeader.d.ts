import { BoxProps } from '@mui/material/Box';
import { TypographyProps } from '@mui/material/Typography';

export interface WidgetHeaderProps extends Omit<BoxProps, 'title'> {
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
	title?: string | null;
	titleProps?: TypographyProps;
}