import type { Meta, StoryObj } from '@storybook/react';

import { Alert } from './Alert';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: 'Components/Atoms/Alert',
	component: Alert,
	parameters: {
		
	},
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		children: { control: 'text' },
		severity: { control: 'text' },
	},
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Success: Story = {
	args: {
        children: 'Success Alert content',
		severity: 'success',
	},
};

export const Warning: Story = {
	args: {
        children: 'Warning Alert content',
		severity: 'warning',
	},
};

export const Error: Story = {
	args: {
        children: 'Error Alert content',
		severity: 'error',
	},
};

export const Info: Story = {
	args: {
        children: 'Info Alert content',
		severity: 'info',
	},
};