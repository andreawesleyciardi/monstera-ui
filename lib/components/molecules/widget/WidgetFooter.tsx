import React from 'react';
import { Box } from '@mui/material';
import { styled, useThemeProps } from '@mui/material/styles';

import { WidgetFooterProps, WidgetFooterOwnerState } from './Widget.types';

const Root = styled(Box, {
	name: 'MuiWidgetFooter',
})<{ ownerState: WidgetFooterOwnerState }>(
	({ theme, ownerState: { color = 'default' } }) => ({
		width: '100%',
        minHeight: '48px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flex: '1 1',
		position: 'relative',
		boxSizing: 'border-box',
		...theme.typography.body1,
		...{
			backgroundColor:
				theme.palette[color != 'default' ? color : 'widget'].main,
		},
	})
);

export const WidgetFooter = React.forwardRef<HTMLDivElement, WidgetFooterProps>(
	function WidgetFooter(inProps, ref) {
		const { children, ...props } = useThemeProps({
			props: inProps,
			name: 'MuiWidgetFooter',
		});

		const ownerState = {
			...props,
		};

		return (
			<Root
				className={`MuiWidgetFooter`}
				ownerState={ownerState}
				role="widget-footer"
				ref={ref}
			>
				{children}
			</Root>
		);
	}
);
