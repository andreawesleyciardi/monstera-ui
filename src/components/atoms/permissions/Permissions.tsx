import React from 'react';
import { styled, useThemeProps } from '@mui/material/styles';

import { PermissionsProps } from './Permissions.types';

const Root = styled('span', {
	name: 'MuiPermissions',
	slot: 'root',
})(({ theme }) => ({}));

export const Permissions = (inProps: PermissionsProps) => {
	const props = useThemeProps({
		props: inProps,
		name: 'MuiPermissions',
	});
	const { actionKey, children, permissions, permissionsValidator } = props;

	return actionKey == null ||
		(actionKey != null &&
			(permissions === undefined ||
				(permissions !== undefined &&
					permissionsValidator &&
					permissionsValidator(actionKey, permissions)))) ? (
		<Root>{children}</Root>
	) : (
		<></>
	);
};
