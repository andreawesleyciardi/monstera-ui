import React from 'react';
import Paper from '@mui/material/Paper';
import { styled, useThemeProps } from '@mui/material/styles';

import { WidgetProps, WidgetOwnerState } from './Widget.types';

const Root = styled(Paper, {
	name: 'MuiWidget',
})(({}) => (
    {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    gap: '1px',
    height: 'auto',
    width: '100%',
}));

export const Widget = React.forwardRef<HTMLDivElement, WidgetProps>(
	function Widget(inProps, ref) {
		const { children, sx, ...props } = useThemeProps({
			props: inProps,
			name: 'MuiWidget',
		});

        const ownerState = { sx }

		return (
			<Root className="MuiWidget" role="widget-root" {...props} sx={sx} ref={ref}>
				{children}
			</Root>
		);
	}
);
