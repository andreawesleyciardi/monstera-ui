import React, { ElementType, ReactNode } from 'react';
import { ButtonGroupProps } from '@mui/material/ButtonGroup';
import { BoxProps } from '@mui/material/Box';
import { PaperProps } from '@mui/material/Paper';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import { TypographyProps } from '@mui/material/Typography';
import { Variant } from '@mui/material/styles/createTypography';
import { PortalProps } from '@mui/base';

export interface DialogHeaderProps extends Omit<BoxProps, 'title'> {
	classes?: object;
	variant?:
		| 'primary'
		| 'secondary'
		| 'success'
		| 'error'
		| 'info'
		| 'warning'
		| 'dark'
		| 'default';
	title?: string | null;
	titleProps?: TypographyProps;
}

export interface DialogTitleProps extends TypographyProps {}

export interface DialogActionsProps extends ButtonGroupProps {
	position?: 'left' | 'center' | 'right';
}

export interface DialogBodyProps extends BoxProps {
	classes?: object;
	color?:
		| 'primary'
		| 'secondary'
		| 'success'
		| 'error'
		| 'info'
		| 'warning'
		| 'dark'
		| 'default';
	fullArea?: boolean;
	fullHeight?: boolean;
	fullWidth?: boolean;
	paddingX?: string;
	paddingY?: string;
}

export interface DialogBodyOwnerState extends DialogBodyProps {}

export interface DialogFooterProps extends BoxProps {
	classes?: object;
	color?:
		| 'primary'
		| 'secondary'
		| 'success'
		| 'error'
		| 'info'
		| 'warning'
		| 'dark'
		| 'default';
}

export interface DialogFooterOwnerState extends DialogFooterProps {}

export type DialogPortalProps = PortalProps & {
	id: string;
	isOpenId: string | null;
	dialogContainerId?: string;
};
