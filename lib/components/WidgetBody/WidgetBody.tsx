import { forwardRef, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes, } from 'react';
import { Box } from '@mui/material';
import { Palette, PaletteColor, styled, useThemeProps } from '@mui/material/styles';

import { WidgetBodyProps, WidgetBodyOwnerState } from './WidgetBody.d';

const Root = styled(Box, {
	name: 'MuiWidgetBody',
	slot: 'root',
})<{ ownerState: WidgetBodyOwnerState }>(
	({
		theme,
		ownerState: {
			variant = 'default',
			fullArea,
			fullHeight,
			fullWidth,
			paddingX,
			paddingY,
		},
	}) => {
        return {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: '1 1',
            position: 'relative',
            boxSizing: 'border-box',
            // ...theme.typography.body1,
            ...{
                backgroundColor: (theme.palette[(variant != 'default' ? variant : 'baseMode') as keyof Palette] as PaletteColor).main as string,
                color: (theme.palette[(variant != 'default' ? variant : 'baseMode') as keyof Palette] as PaletteColor).contrastText as string,
                padding: `${
                    paddingY ?? (fullArea || fullHeight ? '0px' : '2rem')
                } ${paddingX ?? (fullArea || fullWidth ? '0px' : '1.5rem')}`,
            },
        }
    }
);

const WidgetBody: ForwardRefExoticComponent<PropsWithoutRef<WidgetBodyProps> & RefAttributes<HTMLDivElement>> = forwardRef((inProps: WidgetBodyProps, ref) => {
	const {
		children,
		variant,
		fullArea,
		fullHeight,
		fullWidth,
		paddingX,
		paddingY,
		...props
	} = useThemeProps({
		props: inProps,
		name: 'MuiWidgetBody',
	});

	const ownerState = {
		variant,
		fullArea,
		fullHeight,
		fullWidth,
		paddingX,
		paddingY,
	};

	return (
		<Root
			className={`MuiWidgetBody`}
			ownerState={ownerState}
			role="widget-body"
			ref={ref}
			{...props}
		>
			{children}
		</Root>
	);
}) as ForwardRefExoticComponent<PropsWithoutRef<WidgetBodyProps> & RefAttributes<HTMLDivElement>>;

export default WidgetBody;
