import React from 'react';
import { Box } from '@mui/material';
import { styled, useThemeProps } from '@mui/material/styles';

import { WidgetBodyProps, WidgetBodyOwnerState } from './Widget.types';

const Root = styled(Box, {
	name: 'MuiWidgetBody',
	slot: 'root',
})<{ ownerState: WidgetBodyOwnerState }>(
	({
		theme,
		ownerState: {
			color = 'default',
			fullArea,
			fullHeight,
			fullWidth,
			paddingX,
			paddingY,
		},
	}) => ({
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flex: '1 1',
		position: 'relative',
		boxSizing: 'border-box',
		// ...theme.typography.body1,
		...{
			backgroundColor:
				theme.palette[color != 'default' ? color : 'widget'].main,
			color: theme.palette[color != 'default' ? color : 'widget']
				.contrastText,
			padding: `${
				paddingY ?? (fullArea || fullHeight ? '0px' : '2rem')
			} ${paddingX ?? (fullArea || fullWidth ? '0px' : '1.5rem')}`,
		},
	})
);

export const WidgetBody = React.forwardRef<HTMLDivElement, WidgetBodyProps>(
	function WidgetBody(inProps, ref) {
		const {
			children,
			color,
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
			color,
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
	}
);
