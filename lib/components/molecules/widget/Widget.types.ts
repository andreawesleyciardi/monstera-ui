import { ButtonGroupProps } from '@mui/material/ButtonGroup';
import { BoxProps } from '@mui/material/Box';
import { PaperProps } from '@mui/material/Paper';
import { TypographyProps } from '@mui/material/Typography';

export type TThemeWidget = {
	backgroundColor: string;
};

export interface WidgetProps extends PaperProps {}

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

export interface WidgetTitleProps extends TypographyProps {}

export interface WidgetActionsProps extends ButtonGroupProps {
	position?: 'left' | 'right';
}

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
