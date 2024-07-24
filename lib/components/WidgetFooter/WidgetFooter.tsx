import { forwardRef, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes, } from 'react';
import { Box } from '@mui/material';
import { styled, useThemeProps } from '@mui/material/styles';

import { WidgetFooterProps, WidgetFooterOwnerState } from './WidgetFooter.d';

const Root = styled(Box, {
	name: 'MuiWidgetFooter',
})<{ ownerState: WidgetFooterOwnerState }>(
	({ theme, ownerState: { variant = 'default' } }) => ({
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
				theme.palette[variant != 'default' ? variant : 'baseMode'].main,
		},
	})
);

const WidgetFooter: ForwardRefExoticComponent<PropsWithoutRef<WidgetFooterProps> & RefAttributes<HTMLDivElement>> = forwardRef((inProps: WidgetFooterProps, ref) => {
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
            {...props}
			ref={ref}
		>
			{children}
		</Root>
	);
}) as ForwardRefExoticComponent<PropsWithoutRef<WidgetFooterProps> & RefAttributes<HTMLDivElement>>;

export default WidgetFooter;