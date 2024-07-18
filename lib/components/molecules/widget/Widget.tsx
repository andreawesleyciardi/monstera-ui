import { forwardRef, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes, } from 'react';
import Paper from '@mui/material/Paper';
import { styled, useThemeProps } from '@mui/material/styles';

import { WidgetProps } from './Widget.types';

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

const Widget: ForwardRefExoticComponent<PropsWithoutRef<WidgetProps> & RefAttributes<HTMLDivElement>> = forwardRef((inProps: WidgetProps, ref) => {
	const { children, ...props } = useThemeProps({
		props: inProps,
		name: 'MuiWidget',
	});
	return (
		<Root className="MuiWidget" role="widget-root" {...props} ref={ref}>
			{children}
		</Root>
	);
}) as ForwardRefExoticComponent<PropsWithoutRef<WidgetProps> & RefAttributes<HTMLDivElement>>;

export default Widget;