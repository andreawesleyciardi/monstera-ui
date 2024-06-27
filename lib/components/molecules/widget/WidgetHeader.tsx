import React from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { styled, useThemeProps } from '@mui/material/styles';

import { WidgetHeaderProps } from './Widget.types';
import { WidgetTitle } from './WidgetTitle';

const Root = styled(Box, {
	name: 'MuiWidgetHeader',
	slot: 'root',
})<{ ownerState: WidgetHeaderProps }>(
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
				theme.palette[variant != 'default' ? variant : 'widget'].main,
			color: theme.palette[variant != 'default' ? variant : 'widget']
				.contrastText,
		},
	})
);

export const WidgetHeader = React.forwardRef<HTMLDivElement, WidgetHeaderProps>(
	function WidgetHeader(inProps, ref) {
		const { children, title, titleProps, variant, ...props } =
			useThemeProps({
				props: inProps,
				name: 'MuiWidgetHeader',
			});

		const ownerState = { variant };

		return (
			<Root
				className="MuiWidgetHeader"
				ownerState={ownerState}
				role="widget-header"
				ref={ref}
			>
				{title && <WidgetTitle {...titleProps}>{title}</WidgetTitle>}
				{children}
			</Root>
		);
	}
);
