import React, { ReactNode } from 'react';
import { BoxProps, TooltipProps } from '@mui/material';

import { TColor } from './../../../providers';

type LightColors =
	| 'default'
	| 'primary'
	| 'secondary'
	| 'error'
	| 'info'
	| 'success'
	| 'warning'
	| TColor;

export interface LightProps extends BoxProps {
	color?: LightColors;
	darkModeColor?: LightColors;
	label?: string | React.ReactNode;
	labelsMap?: {
		[key: string]: string | React.ReactNode;
	};
	size?: 'medium' | 'small';
	textTransform?: 'capitalize' | 'uppercase';
	type?: string;
	typesMap?: {
		[key: string]: LightColors;
	};
	tooltipProps?: TooltipProps;
	variant?: 'filled' | 'outlined';
}

export interface LightOwnerState extends LightProps {}
