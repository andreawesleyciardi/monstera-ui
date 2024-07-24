import React from 'react';
import { ChipProps as MuiChipProps, ChipOwnProps as MuiChipOwnProps } from '@mui/material';

export type ChipProps = Omit<MuiChipProps, 'onClick'|'onDelete'> & {
    index?: string | number;
	onClick?: (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>,
		index?: string | number
	) => void;
	onDelete?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>,index?: string | number) => void;
    square?: string | boolean;
};

export type ChipOwnProps = MuiChipOwnProps & {
    square?: string | boolean;
}