import React from 'react';
import { styled, useThemeProps } from '@mui/material/styles';

import { WidgetTitleProps, WidgetFooterTextProps } from './Widget.types';
import { Typography } from '../..';

const Title = styled(Typography, {
	name: 'MuiWidgetTitle',
	slot: 'root',
})<{ ownerState: WidgetTitleProps }>(({  }) => ({
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
			<Title
				className="MuiWidgetTitle"
				{...props}
				ownerState={ownerState}
				role="widget-title"
				ref={ref}
			>
				{children}
			</Title>
		);
	}
);

const Text = styled(Typography, {
	name: 'MuiWidgetFooterText',
	slot: 'root',
})<{ ownerState: WidgetFooterTextProps }>(({  }) => ({
	fontSize: '0.875rem',
	fontFamily: 'inherit',
}));

export const WidgetFooterText = React.forwardRef<HTMLSpanElement, WidgetFooterTextProps>(
	function WidgetFooterText(inProps, ref) {
		const { children, ...props } = useThemeProps({
			props: inProps,
			name: 'MuiWidgetFooterText',
		});

		const ownerState = { ...props };

		return (
			<Text
				className="MuiWidgetFooterText"
				{...props}
				ownerState={ownerState}
				role="widget-footer-text"
				ref={ref}
			>
				{children}
			</Text>
		);
	}
);