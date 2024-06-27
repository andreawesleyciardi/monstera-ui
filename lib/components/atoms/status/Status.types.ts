import React, { ReactNode } from 'react';
import { BoxProps, TypographyProps } from '@mui/material';

import { TColor } from './../../../providers';

type StatusColors =
	| 'default'
	| 'primary'
	| 'secondary'
	| 'error'
	| 'info'
	| 'success'
	| 'warning'
	| TColor;

export interface StatusProps extends BoxProps {
	color?: StatusColors;
	darkModeColor?: StatusColors;
	label?: string | React.ReactNode;
	labelProps?: TypographyProps;
	labelsMap?: {
		[key: string]: string | React.ReactNode;
	};
	size?: 'medium' | 'small';
	textTransform?: 'capitalize' | 'uppercase';
	type?: string;
	typesMap?: {
		[key: string]: StatusColors;
	};
	variant?: 'filled' | 'outlined';
}

export interface StatusOwnerState extends StatusProps {}
