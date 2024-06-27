import type { Meta, StoryObj } from '@storybook/react';
import React, { useCallback } from 'react';
import { Box, Stack } from '@mui/material';

import {
	Action as ActionComponent,
	AddAction,
	CloneAction,
	CopyAction,
	DeleteAction,
	EditAction,
	ExportAction,
	InfoAction,
	RemoveAction,
} from './Action';
import { ThemeProvider } from './../../../../providers';

const Template = (args) => {
	const testPermissions = 'add,edit,testbutton';

	const permissionsValidator = useCallback((actionKey, permissions) => {
		return (
			permissions &&
			(typeof permissions === 'string'
				? permissions.split(',')
				: permissions
			).find((element) => element == actionKey) != undefined
		);
	}, []);

	return (
		<Stack
			sx={{
				bgcolor: '#f3f3f5',
				display: 'flex',
				gap: '1.5rem',
				alingItems: 'center',
				justifyContent: 'center',
				minHeight: '200px',
				paddingBottom: '400px',
			}}
		>
			<Box
				sx={{
					p: 3,
					bgcolor: '#f3f3f5',
					display: 'flex',
					gap: '1.5rem',
					alingItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Box
					sx={{
						bgcolor: '#ffffff',
					}}
				>
					<AddAction />
				</Box>
				<Box
					sx={{
						bgcolor: '#ffffff',
					}}
				>
					<CloneAction />
				</Box>
				<Box
					sx={{
						bgcolor: '#ffffff',
					}}
				>
					<CopyAction />
				</Box>
				<Box
					sx={{
						bgcolor: '#ffffff',
					}}
				>
					<DeleteAction />
				</Box>
				<Box
					sx={{
						bgcolor: '#ffffff',
					}}
				>
					<EditAction />
				</Box>
				<Box
					sx={{
						bgcolor: '#ffffff',
					}}
				>
					<ExportAction />
				</Box>
				<Box
					sx={{
						bgcolor: '#ffffff',
					}}
				>
					<InfoAction />
				</Box>
				<Box
					sx={{
						bgcolor: '#ffffff',
					}}
				>
					<RemoveAction />
				</Box>
			</Box>
			<Box
				sx={{
					p: 3,
					bgcolor: '#f3f3f5',
					display: 'flex',
					gap: '1.5rem',
					alingItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Box
					sx={{
						bgcolor: '#ffffff',
					}}
				>
					<AddAction
						permissionsProps={{
							permissions: testPermissions,
							permissionsValidator: permissionsValidator,
						}}
					/>
				</Box>
				<Box
					sx={{
						bgcolor: '#ffffff',
					}}
				>
					<CloneAction
						permissionsProps={{
							permissions: testPermissions,
							permissionsValidator: permissionsValidator,
						}}
					/>
				</Box>
				<Box
					sx={{
						bgcolor: '#ffffff',
					}}
				>
					<CopyAction
						permissionsProps={{
							permissions: testPermissions,
							permissionsValidator: permissionsValidator,
						}}
					/>
				</Box>
				<Box
					sx={{
						bgcolor: '#ffffff',
					}}
				>
					<DeleteAction
						permissionsProps={{
							permissions: testPermissions,
							permissionsValidator: permissionsValidator,
						}}
					/>
				</Box>
				<Box
					sx={{
						bgcolor: '#ffffff',
					}}
				>
					<EditAction
						permissionsProps={{
							permissions: testPermissions,
							permissionsValidator: permissionsValidator,
						}}
					/>
				</Box>
				<Box
					sx={{
						bgcolor: '#ffffff',
					}}
				>
					<ExportAction
						permissionsProps={{
							permissions: testPermissions,
							permissionsValidator: permissionsValidator,
						}}
					/>
				</Box>
				<Box
					sx={{
						bgcolor: '#ffffff',
					}}
				>
					<InfoAction tooltipProps={{ title: 'test' }} />
				</Box>
				<Box
					sx={{
						bgcolor: '#ffffff',
					}}
				>
					<RemoveAction
						permissionsProps={{
							permissions: testPermissions,
							permissionsValidator: permissionsValidator,
						}}
					/>
				</Box>
			</Box>
			<Box
				sx={{
					p: 3,
					bgcolor: '#f3f3f5',
					display: 'flex',
					gap: '1.5rem',
					alingItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Box
					sx={{
						bgcolor: '#ffffff',
						p: 2,
					}}
				>
					<ActionComponent
						isIconButton={false}
						permissionsProps={{
							actionKey: 'testbutton',
							permissions: testPermissions,
							permissionsValidator: permissionsValidator,
						}}
					>
						Test Button
					</ActionComponent>
				</Box>
				<Box
					sx={{
						bgcolor: '#ffffff',
						p: 2,
					}}
				>
					<AddAction
						isIconButton={false}
						permissionsProps={{
							permissions: testPermissions,
							permissionsValidator: permissionsValidator,
						}}
					/>
				</Box>
				<Box
					sx={{
						bgcolor: '#ffffff',
						p: 2,
					}}
				>
					<AddAction
						isIconButton={false}
						permissionsProps={{
							permissions: testPermissions,
							permissionsValidator: permissionsValidator,
						}}
					>
						Custom Add Text
					</AddAction>
				</Box>
				<Box
					sx={{
						bgcolor: '#ffffff',
						p: 2,
					}}
				>
					<AddAction
						isIconButton={false}
						loading={true}
						permissionsProps={{
							permissions: testPermissions,
							permissionsValidator: permissionsValidator,
						}}
					>
						Loading
					</AddAction>
				</Box>
			</Box>
		</Stack>
	);
};

const meta: Meta<typeof ActionComponent> = {
	title: 'UI/Components/Atoms/Buttons',
	component: ActionComponent,
	decorators: [
		(Story) => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		),
	],
};

export default meta;

type Story = StoryObj<typeof ActionComponent>;

export const Action = Template.bind({});
