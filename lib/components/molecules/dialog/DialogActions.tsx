import React from 'react';
import { ButtonGroup } from '@mui/material';
import { styled, useThemeProps } from '@mui/material/styles';

import { DialogActionsProps } from './Dialog.types';

// TO FIX BECAUSE CURRENTLY BASED ON THE WIDGET ACTIONS

const Root = styled(ButtonGroup, {
	name: 'MuiDialogActions',
	slot: 'root',
})<{ ownerState: DialogActionsProps }>(
	({ theme, ownerState: { position } }) => ({
		borderRadius: '0px',
		// maxHeight: '100%',
		// position: 'absolute',
		// left: position == 'left' ? '1rem' : 'auto',
		// right: position != 'left' ? '1rem' : 'auto',
	})
);

export const DialogActions = React.forwardRef<
	HTMLDivElement,
	DialogActionsProps
>(function DialogActions(inProps, ref) {
	const { children, position, ...props } = useThemeProps({
		props: inProps,
		name: 'MuiDialogActions',
	});

	const ownerState = { position };

	return (
		<Root
			className="MuiDialogActions MuiActionsGroup"
			ownerState={ownerState}
			role="dialog-actions"
			{...props}
			ref={ref}
		>
			{children}
		</Root>
	);
});
