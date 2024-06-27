import type { Meta, StoryObj } from '@storybook/react';
import Avatar from '@mui/material/Avatar';
import { Chip } from './Chip';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: 'Components/Atoms/Chip',
	component: Chip,
	parameters: {
		
	},
    args: {
        color: 'default',
        label: 'Chip content',
        square: false,
        variant: 'filled'
    },
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
        label: {control: 'text', },
		color: { control: 'select', options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'], defaultValue: 'default', table: {defaultValue: {summary: 'default'}} },
		square: { control: 'boolean', defaultValue: false, table: {defaultValue: {summary: false}} },
		variant: { control: 'radio', options: ['filled', 'outlined'], defaultValue: 'filled', table: {defaultValue: {summary: 'filled'}} },
	},
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
	args: {
        color: 'primary',
        square: false,
	},
};

export const Square: Story = {
	args: {
        color: 'primary',
        square: true,
	},
};