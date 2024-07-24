import React from 'react';
import { ButtonGroup } from '@mui/material';
import { styled, useThemeProps } from '@mui/material/styles';

import { WidgetActionsProps } from './WidgetActions.d';

const Root = styled(ButtonGroup, {
	name: 'MuiWidgetActions',
	slot: 'root',
})<{ ownerState: WidgetActionsProps }>(
	({ ownerState: { position } }) => ({
		borderRadius: '0px',
		maxHeight: '100%',
		position: 'absolute',
		left: position == 'left' ? '1rem' : 'auto',
		right: position != 'left' ? '1rem' : 'auto',
	})
);

const WidgetActions = React.forwardRef<
	HTMLDivElement,
	WidgetActionsProps
>(function WidgetActions(inProps, ref) {
	const { children, position, ...props } = useThemeProps({
		props: inProps,
		name: 'MuiWidgetActions',
	});

	const ownerState = { position };

	return (
		<Root
			className="MuiWidgetActions MuiActionsGroup"
			ownerState={ownerState}
			role="widget-actions"
			{...props}
			ref={ref}
		>
			{children}
		</Root>
	);
});

export default WidgetActions;