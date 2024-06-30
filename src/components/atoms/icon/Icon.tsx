import React from 'react';
import { styled, useThemeProps } from '@mui/material/styles';
import { createSvgIcon, Icon as MuiIcon, SvgIcon } from '@mui/material';

import { IconProps } from './Icon.types';

const IconBase = styled(MuiIcon, {
	name: 'MuiIconBase',
	slot: 'root',
})(({ theme }) => ({
	fontSize: 'inherit',
}));

const Root = styled(MuiIcon, {
	name: 'MuiIcon',
	slot: 'root',
})(({}) => ({
	fontSize: 'inherit',
}));

const Icon = React.forwardRef<any, IconProps>(function Icon(inProps, ref) {
	const { defaultIcons, ...props } = useThemeProps({
		props: inProps,
		name: 'MuiIcon',
	});

	const { type, ...others } = props;

	const CustomIcon =
		defaultIcons?.[type] != null ? defaultIcons?.[type] : null;

	return CustomIcon != null ? (
		<CustomIcon className="MuiIcon" {...others} />
	) : null;
});

export { createSvgIcon, Icon, IconBase, SvgIcon };
