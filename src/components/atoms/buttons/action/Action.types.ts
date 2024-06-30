import React from 'react';
import { IconButtonProps, TooltipProps } from '@mui/material';
import { LoadingButtonProps } from '@mui/lab';

import { IconProps, PermissionsProps } from '../../..';

export type ActionProps = IconButtonProps &
	LoadingButtonProps & {
		iconProps?: IconProps;
		isIconButton?: boolean;
		permissionsProps?: Omit<PermissionsProps, 'children'> & {
			children?: React.ReactNode;
		};
		tooltipProps?: Omit<TooltipProps, 'children'>;
	};

export type FastActionProps = Omit<ActionProps, 'permissionsProps'> & {
	permissionsProps?: Omit<PermissionsProps, 'actionKey' | 'children'> & {
		actionKey?: string;
	};
};

export type ActionOwnerState = {
	isIconButton?: boolean;
};
