import React from 'react';

export type PermissionsProps = {
	children: React.ReactNode;
	actionKey: string;
	permissions?: string | string[];
	permissionsValidator?: (
		actionKey: string,
		permissions?: string | string[]
	) => boolean;
};
