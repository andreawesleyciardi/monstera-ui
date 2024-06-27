import React, { ElementType, ReactNode } from 'react';
import { TypographyProps } from '@mui/material/Typography';
import { StackProps } from '@mui/material/Stack';

export interface ScoreProps extends StackProps {
	label?: string;
	nullSymbol?: string;
	size?: 'default' | 'big';
	slots?: {
		label?: React.FunctionComponent;
		unit?: React.FunctionComponent;
		value?: React.FunctionComponent;
	};
	slotsProps?: {
		label?: TypographyProps | object;
		unit?: TypographyProps | object;
		value?: TypographyProps | object;
	};
	unit?: number;
	value?: number;
}

export interface ScoreOwnerState extends ScoreProps {}
