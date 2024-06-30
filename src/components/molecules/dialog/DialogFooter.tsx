import React from 'react';
import { Box } from '@mui/material';
import { styled, useThemeProps } from '@mui/material/styles';

import { DialogFooterProps, DialogFooterOwnerState } from './Dialog.types';

const Root = styled('div', {
	// TO MAKE IT A BOX
	name: 'MuiDialogBody',
})<{ ownerState: DialogFooterOwnerState }>(
	({ theme, ownerState: { color = 'default' } }) => ({
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flex: '1 1',
		position: 'relative',
		boxSizing: 'border-box',
		...theme.typography.body1,
		...{
			backgroundColor:
				theme.palette[color != 'default' ? color : 'dialog'].main,
		},
	})
);

export const DialogFooter = React.forwardRef<HTMLDivElement, DialogFooterProps>(
	function DialogFooter(inProps, ref) {
		const { children, ...props } = useThemeProps({
			props: inProps,
			name: 'MuiDialogFooter',
		});

		const ownerState = {
			...props,
		};

		return (
			<Root
				className={`MuiDialogFooter`}
				ownerState={ownerState}
				role="dialog-footer"
				ref={ref}
			>
				{children}
			</Root>
		);
	}
);
