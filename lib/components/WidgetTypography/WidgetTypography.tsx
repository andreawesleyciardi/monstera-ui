import { forwardRef, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes, } from 'react';
import { styled, useThemeProps } from '@mui/material/styles';
import { Typography } from '@mui/material';

import { WidgetTitleProps, WidgetFooterTextProps } from './WidgetTypography.d';

const Title = styled(Typography, {
	name: 'MuiWidgetTitle',
	slot: 'root',
})<{ ownerState: WidgetTitleProps }>(({  }) => ({
	fontSize: '0.875rem',
	fontWeight: '600',
	fontFamily: 'inherit',
}));

const WidgetTitle: ForwardRefExoticComponent<PropsWithoutRef<WidgetTitleProps> & RefAttributes<HTMLSpanElement>> = forwardRef((inProps: WidgetTitleProps, ref) => {
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
}) as ForwardRefExoticComponent<PropsWithoutRef<WidgetFooterTextProps> & RefAttributes<HTMLSpanElement>>;



const Text = styled(Typography, {
	name: 'MuiWidgetFooterText',
	slot: 'root',
})<{ ownerState: WidgetFooterTextProps }>(({  }) => ({
	fontSize: '0.875rem',
	fontFamily: 'inherit',
}));

const WidgetFooterText: ForwardRefExoticComponent<PropsWithoutRef<WidgetFooterTextProps> & RefAttributes<HTMLSpanElement>> = forwardRef((inProps: WidgetFooterTextProps, ref) => {
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
}) as ForwardRefExoticComponent<PropsWithoutRef<WidgetFooterTextProps> & RefAttributes<HTMLSpanElement>>;

export { WidgetTitle, WidgetFooterText }