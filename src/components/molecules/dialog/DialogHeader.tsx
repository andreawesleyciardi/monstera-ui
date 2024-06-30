import React from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { styled, useThemeProps } from '@mui/material/styles';

import { DialogHeaderProps } from './Dialog.types';
import { DialogTitle } from './DialogTitle';

const Root = styled(Box, {
	name: 'MuiDialogHeader',
	slot: 'root',
})<{ ownerState: DialogHeaderProps }>(
	({ theme, ownerState: { variant = 'default' } }) => ({
		width: '100%',
		height: '48px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: '0.5rem',
		paddingLeft: '1rem',
		paddingRight: '1rem',
		position: 'relative',
		boxSizing: 'border-box',
		...{
			backgroundColor:
				theme.palette[variant != 'default' ? variant : 'dialog'].main,
			color: theme.palette[variant != 'default' ? variant : 'dialog']
				.contrastText,
		},
	})
);

export const DialogHeader = React.forwardRef<HTMLDivElement, DialogHeaderProps>(
	function DialogHeader(inProps, ref) {
		const { children, title, titleProps, variant, ...props } =
			useThemeProps({
				props: inProps,
				name: 'MuiDialogHeader',
			});

		const ownerState = { variant };

		return (
			<Root
				className="MuiDialogHeader"
				ownerState={ownerState}
				role="dialog-header"
				ref={ref}
			>
				{title && <DialogTitle {...titleProps}>{title}</DialogTitle>}
				{children}
			</Root>
		);
	}
);
