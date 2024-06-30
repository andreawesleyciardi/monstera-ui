import * as React from 'react';
import { styled, useThemeProps } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

import { defaultColor } from './Status.defaults';
import { StatusProps, StatusOwnerState } from './Status.types';

const Root = styled(Box, {
	name: 'MuiStatus',
	slot: 'root',
})<{ ownerState: StatusOwnerState }>(
	({
		theme,
		ownerState: { color, darkModeColor, size, textTransform, variant },
	}) => {
		const modeColor = theme.palette.mode == 'light' ? color : darkModeColor;
		const parsedColor =
			typeof modeColor == 'string'
				? modeColor == 'default'
					? defaultColor
					: theme.palette[modeColor]
				: modeColor;
		const mainColor = parsedColor?.main;
		const contrastTextColor = parsedColor?.contrastText ?? '#FFFFFF';
		return {
			alignItems: 'center',
			backgroundColor: variant == 'outlined' ? 'transparent' : mainColor,
			border: `2px solid ${mainColor}`,
			borderRadius: '0.25rem',
			boxSizing: 'border-box',
			color: variant == 'outlined' ? mainColor : contrastTextColor,
			display: 'flex',
			justifyContent: 'center',
			minWidth: '5.25em',
			padding: `${size == 'small' ? '0px' : '0.2rem'} 1.25rem`,
			textTransform: textTransform,
			// width: '100%',
		};
	}
);

const Label = styled(Typography, {
	name: 'MuiStatus',
	slot: 'label',
})(({ theme }) => ({
	display: 'block',
	fontSize: '75%',
	fontStyle: 'normal',
	fontWeight: '600',
}));

export const Status = React.forwardRef<HTMLDivElement, StatusProps>(
	function Status(inProps, ref) {
		const {
			color,
			label = null,
			labelProps,
			labelsMap = {},
			sx,
			type,
			typesMap = {},
			...props
		} = useThemeProps({
			props: inProps,
			name: 'MuiStatus',
		});

		const ownerState = { ...props, color: typesMap?.[type ?? ''] ?? color };

		return (
			<Root ref={ref} ownerState={ownerState} sx={sx}>
				<Label {...labelProps}>
					{label != null &&
						(typeof label === 'string'
							? labelsMap?.[label] ?? label
							: label)}
				</Label>
			</Root>
		);
	}
);
