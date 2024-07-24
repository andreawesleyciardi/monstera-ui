import type { Meta, StoryObj } from '@storybook/react';
import InfoIcon from '@mui/icons-material/Info';

import { Tooltip } from './Tooltip';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Tooltip> = {
	title: 'Components/Tooltip',
	component: Tooltip,
	parameters: {
		
	},
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		children: { control: 'text' },
        placement: { control: 'select', options: ['bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top'], defaultValue: 'bottom', table: {defaultValue: {summary: 'bottom'}} },
        title: { control: 'text' },
	},
    args: {
        children: <InfoIcon color="primary" />,
        title: 'Tooltip content'
	},
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
	args: {
        
	},
};

export const Top: Story = {
	args: {
        open: true,
        placement: 'top'
	},
};

export const Right: Story = {
	args: {
        open: true,
        placement: 'right'
	},
};

export const Bottom: Story = {
	args: {
        open: true,
        placement: 'bottom'
	},
};

export const Left: Story = {
	args: {
        open: true,
        placement: 'left'
	},
};