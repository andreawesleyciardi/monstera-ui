import React from 'react';
import { styled, useThemeProps } from '@mui/material/styles';
import { Portal } from '@mui/base';

import { DialogPortalProps } from './Dialog.types';

const Root = styled('div', {
	name: 'MuiDialogPortal',
	slot: 'root',
})(({ theme }) => ({}));

export const DialogPortal = React.forwardRef<
	HTMLSpanElement,
	DialogPortalProps
>(function DialogPortal({ id, isOpenId, ...inProps }, ref) {
	const { children, dialogContainerId, ...props } = useThemeProps({
		props: inProps,
		name: 'MuiDialogPortal',
	});

	return isOpenId == id ? (
		<Root>
			<Portal
				container={() => {
					return (
						dialogContainerId != null
							? document.getElementById(dialogContainerId)
							: null
					)!;
				}}
				// {...props}
				ref={ref}
			>
				{children}
			</Portal>
		</Root>
	) : null;
});
