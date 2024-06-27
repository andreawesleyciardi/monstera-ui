import type { Meta, StoryObj } from '@storybook/react';
import React, { useCallback } from 'react';
import { Box, Stack } from '@mui/material';

import { TextField as TextFieldComponent } from './TextField';
import { ThemeProvider } from '../../../../providers/theme/Theme';

const Template = (args) => {
	return (
		<Stack
			sx={{
				bgcolor: '#f3f3f5',
				display: 'flex',
				gap: '1.5rem',
				alingItems: 'center',
				justifyContent: 'center',
				minHeight: '200px',
				p: 3,
				paddingBottom: '400px',
			}}
		>
			<Box
				sx={{
					bgcolor: '#ffffff',
					p: 2,
					width: '25%',
				}}
			>
				<TextFieldComponent
					label="Test"
					placeholder="Placeholder"
					{...args}
				/>
			</Box>
		</Stack>
	);
};

const meta: Meta<typeof TextFieldComponent> = {
	title: 'UI/Components/Atoms/Inputs',
	component: TextFieldComponent,
	decorators: [
		(Story) => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		),
	],
};

export default meta;

type Story = StoryObj<typeof TextFieldComponent>;

export const TextField = Template.bind({});
