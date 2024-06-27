import React from 'react';
import { styled, useThemeProps } from '@mui/material/styles';

import { WidgetTitleProps } from './Widget.types';
import { Typography } from './../../../components';

const Root = styled(Typography, {
	name: 'MuiWidgetTitle',
	slot: 'root',
})<{ ownerState: WidgetTitleProps }>(({ theme, ownerState }) => ({
	fontSize: '0.875rem',
	fontWeight: '600',
	fontFamily: 'inherit',
}));

export const WidgetTitle = React.forwardRef<HTMLSpanElement, WidgetTitleProps>(
	function WidgetTitle(inProps, ref) {
		const { children, ...props } = useThemeProps({
			props: inProps,
			name: 'MuiWidgetTitle',
		});

		const ownerState = { ...props };

		return (
			<Root
				className="MuiWidgetTitle"
				{...props}
				ownerState={ownerState}
				role="widget-title"
				ref={ref}
			>
				{children}
			</Root>
		);
	}
);
