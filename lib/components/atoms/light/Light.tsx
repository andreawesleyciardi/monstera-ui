import * as React from 'react';
import { styled, useThemeProps } from '@mui/material/styles';
import { Box } from '@mui/material';

import { Tooltip } from './../../../components';
import { LightProps, LightOwnerState } from './Light.types';

const Root = styled(Box, {
	name: 'MuiLight',
	slot: 'root',
})<{ ownerState: LightOwnerState }>(
	({
		theme,
		ownerState: { color, darkModeColor, size, textTransform, variant },
	}) => {
		const modeColor = theme.palette.mode == 'light' ? color : darkModeColor;
		const parsedColor =
			typeof modeColor == 'string'
				? modeColor == 'default'
					? theme.palette.error
					: theme.palette[modeColor]
				: modeColor;
		const mainColor = parsedColor?.main;
		return {
			aspectRatio: '1 / 1',
			backgroundColor: variant == 'outlined' ? 'transparent' : mainColor,
			border: `1px solid ${mainColor}`,
			borderRadius: '50%',
			boxSizing: 'border-box',
			textTransform: textTransform,
			width: size == 'small' ? '8px' : '12px',
		};
	}
);

export const Light = React.forwardRef<HTMLDivElement, LightProps>(
	function Light(inProps, ref) {
		const {
			color,
			label = null,
			labelsMap = {},
			sx,
			textTransform,
			type,
			typesMap = {},
			tooltipProps = {},
			...props
		} = useThemeProps({
			props: inProps,
			name: 'MuiLight',
		});

		const ownerState = {
			...props,
			color: typesMap?.[type ?? ''] ?? color,
			textTransform,
		};

		return label != null ? (
			<Tooltip
				title={
					label != null &&
					(typeof label === 'string'
						? labelsMap?.[label] ?? label
						: label)
				}
				{...tooltipProps}
				slotProps={{
					tooltip: { sx: { textTransform: textTransform } },
				}}
			>
				<Root ref={ref} ownerState={ownerState} sx={sx} />
			</Tooltip>
		) : (
			<Root ref={ref} ownerState={ownerState} sx={sx} />
		);
	}
);
