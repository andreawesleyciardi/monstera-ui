import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Box, Stack } from '@mui/material';

import { DialogProvider, useDialog } from './Dialog';
import { ThemeProvider } from '../theme/Theme';
import {
	ActionButton,
	DialogBody,
	DialogFooter,
	DialogHeader,
	DialogPortal,
	DialogTitle,
	Typography,
} from '../..';

const Template = () => {
	const usedialog = useDialog();

	const close = () => {
		usedialog?.close();
	};

	return (
		<Box
			sx={{
				bgcolor: '#f3f3f5',
				display: 'flex',
				gap: '1.5rem',
				alingItems: 'center',
				justifyContent: 'center',
				minHeight: '200px',
				paddingBottom: '400px',
				paddingTop: '1.5rem',
			}}
		>
			<Box
				sx={{
					bgcolor: '#ffffff',
					p: 2,
				}}
			>
				<ActionButton
					isIconButton={false}
					onClick={() => {
						usedialog?.open('Button1');
					}}
				>
					Open First Modal
				</ActionButton>
			</Box>
			<Box
				sx={{
					bgcolor: '#ffffff',
					p: 2,
				}}
			>
				<ActionButton
					isIconButton={false}
					onClick={() => {
						usedialog?.open('Button2', { maxWidth: 'xl' });
					}}
				>
					Open Second Modal
				</ActionButton>
			</Box>

			<DialogPortal {...usedialog} id="Button1">
				<DialogHeader
					title="Dialog Header 1"
					titleProps={{ variant: 'h5' }}
				>
					<Typography variant="body1">Extra</Typography>
				</DialogHeader>
				<DialogBody sx={{ alignItems: 'flex-end' }}>
					Button1 Modal
				</DialogBody>
				<DialogFooter>
					<ActionButton
						isIconButton={false}
						onClick={() => {
							usedialog?.close();
						}}
					>
						Close First Modal
					</ActionButton>
				</DialogFooter>
			</DialogPortal>

			<DialogPortal {...usedialog} id="Button2">
				<DialogHeader
					title="Dialog Header 2"
					titleProps={{ variant: 'h5' }}
				>
					<Typography variant="body1">Extra</Typography>
				</DialogHeader>
				<DialogBody sx={{ alignItems: 'flex-end' }}>
					Button2 Modal
				</DialogBody>
				<DialogFooter>
					<ActionButton
						isIconButton={false}
						onClick={() => {
							usedialog?.close();
						}}
					>
						Close Second Modal
					</ActionButton>
				</DialogFooter>
			</DialogPortal>
		</Box>
	);
};

const meta: Meta<typeof DialogProvider> = {
	title: 'UI/Providers/Dialog',
	component: DialogProvider,
	decorators: [
		(Story) => (
			<ThemeProvider>
				<DialogProvider>
					<Story />
				</DialogProvider>
			</ThemeProvider>
		),
	],
};

export default meta;

type Story = StoryObj<typeof DialogProvider>;

export const Dialog = Template.bind({});
