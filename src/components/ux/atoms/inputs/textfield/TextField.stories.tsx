import type { Meta, StoryObj } from '@storybook/react';
import React, { useCallback } from 'react';
import { Box, Stack } from '@mui/material';
import { ThemeProvider } from './../../../../../providers';

import { Controller, useForm, useFormState } from 'react-hook-form';

import { TextField as TextFieldComponent } from './TextField';

const Template = (args) => {
	const { register, handleSubmit, control, formState, watch, setValue } =
		useForm({ mode: 'onChange', defaultValues: {} });
	const extraFormState = useFormState({ control });

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
				<form
					method={'post'}
					onSubmit={(event) => {
						const target = event.currentTarget;
						handleSubmit(() => {
							debugger;
							// submit(target, { method: method });
						})(event);
					}}
				>
					<TextFieldComponent
						control={control}
						label="Test"
						name="test"
						placeholder="Placeholder"
						{...args}
					/>
				</form>
			</Box>
		</Stack>
	);
};

const meta: Meta<typeof TextFieldComponent> = {
	title: 'UXXX/Components/Atoms/Inputs',
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
