import React from 'react';
import { Box } from '@mui/material';
import { styled, useThemeProps } from '@mui/material/styles';

import { DialogBodyProps, DialogBodyOwnerState } from './Dialog.types';

const Root = styled(Box, {
	name: 'MuiDialogBody',
	slot: 'root',
})<{ ownerState: DialogBodyOwnerState }>(
	({
		theme,
		ownerState: {
			color = 'default',
			fullArea,
			fullHeight,
			fullWidth,
			paddingX,
			paddingY,
		},
	}) => ({
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flex: '1 1',
		position: 'relative',
		boxSizing: 'border-box',
		// ...theme.typography.body1,
		...{
			backgroundColor:
				theme.palette[color != 'default' ? color : 'dialog'].main,
			color: theme.palette[color != 'default' ? color : 'dialog']
				.contrastText,
			padding: `${
				paddingY ?? (fullArea || fullHeight ? '0px' : '2.08335rem')
			} ${paddingX ?? (fullArea || fullWidth ? '0px' : '1.5rem')}`,
		},
	})
);

export const DialogBody = React.forwardRef<HTMLDivElement, DialogBodyProps>(
	function DialogBody(inProps, ref) {
		const {
			children,
			color,
			fullArea,
			fullHeight,
			fullWidth,
			paddingX,
			paddingY,
			...props
		} = useThemeProps({
			props: inProps,
			name: 'MuiDialogBody',
		});

		const ownerState = {
			color,
			fullArea,
			fullHeight,
			fullWidth,
			paddingX,
			paddingY,
		};

		return (
			<Root
				className={`MuiDialogBody`}
				ownerState={ownerState}
				role="dialog-body"
				ref={ref}
				{...props}
			>
				{children}
			</Root>
		);
	}
);
