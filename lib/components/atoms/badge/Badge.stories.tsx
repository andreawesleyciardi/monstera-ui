import type { Meta, StoryObj } from '@storybook/react';
import MailIcon from '@mui/icons-material/Mail';

import { Badge } from './Badge';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: 'Components/Atoms/Badge',
	component: Badge,
	parameters: {
		
	},
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		children: { control: 'text' },
        color: { control: 'select', options: ['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning'], defaultValue: 'default', table: {defaultValue: {summary: 'default'}} },
        invisible: { control: 'boolean', defaultValue: false, table: {defaultValue: {summary: false}} },
        max: { control: { type: 'number', min:0, max:1000000, step: 1 } },
        overlap: { control: 'radio', options: ['circular', 'rectangular'], defaultValue: 'rectangular', table: {defaultValue: {summary: 'rectangular'}} },
        showZero: { control: 'boolean', defaultValue: false, table: {defaultValue: {summary: false}} },
        variant: { control: 'radio', options: ['dot', 'standard'], defaultValue: 'standard', table: {defaultValue: {summary: 'standard'}} },
	},
    args: {
        children: <MailIcon color="action" />,
        color: 'primary',
        badgeContent: 6
	},
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
	args: {
        color: 'primary',
        badgeContent: 4
	},
};

export const BasicX: Story = {
	args: {
        color: 'success',
        badgeContent: 40
	},
};