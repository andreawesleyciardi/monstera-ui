import { forwardRef, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes, } from 'react';
import { Box } from '@mui/material';
import { styled, useThemeProps } from '@mui/material/styles';

import { WidgetHeaderProps } from './Widget.types';
import { WidgetTitle } from './WidgetTypography';

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

const WidgetHeader: ForwardRefExoticComponent<PropsWithoutRef<WidgetHeaderProps> & RefAttributes<HTMLDivElement>> = forwardRef((inProps: WidgetHeaderProps, ref) => {
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
            {...props}
			ref={ref}
		>
			{title && <WidgetTitle {...titleProps}>{title}</WidgetTitle>}
			{children}
		</Root>
	);
}) as ForwardRefExoticComponent<PropsWithoutRef<WidgetHeaderProps> & RefAttributes<HTMLDivElement>>;

export default WidgetHeader;