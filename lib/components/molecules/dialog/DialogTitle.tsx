import React from 'react';
import { styled, useThemeProps } from '@mui/material/styles';

import { DialogTitleProps } from './Dialog.types';
import { Typography } from './../../../components';

const Root = styled(Typography, {
	name: 'MuiDialogTitle',
	slot: 'root',
})<{ ownerState: DialogTitleProps }>(({ theme, ownerState }) => ({
	fontSize: '0.875rem',
	fontWeight: '600',
	fontFamily: 'inherit',
}));

export const DialogTitle = React.forwardRef<HTMLSpanElement, DialogTitleProps>(
	function DialogTitle(inProps, ref) {
		const { children, ...props } = useThemeProps({
			props: inProps,
			name: 'MuiDialogTitle',
		});

		const ownerState = { ...props };

		return (
			<Root
				className="MuiDialogTitle"
				{...props}
				ownerState={ownerState}
				role="dialog-title"
				ref={ref}
			>
				{children}
			</Root>
		);
	}
);
