import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from './Typography';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: 'Components/Atoms/Typography',
	component: Typography,
	parameters: {
		
	},
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
        align: { control: 'select', options: ['center', 'inherit', 'justify', 'left', 'right'], defaultValue: 'inherit', table: {defaultValue: {summary: 'inherit'}} },
		children: { control: 'text' },
        gutterBottom: { control: 'boolean', defaultValue: false, table: {defaultValue: {summary: 'false'}} },
        paragraph: { control: 'boolean', defaultValue: false, table: {defaultValue: {summary: 'false'}} },
		variant: { control: 'select', options: ['body1', 'body2', 'button', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'inherit', 'overline', 'subtitle1', 'subtitle2'], defaultValue: 'body1', table: {defaultValue: {summary: 'body1'}} },
	},
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Base: Story = {
	args: {
        children: 'Lorem ipsum dolor sit amet',
	},
};

export const Body2: Story = {
	args: {
        children: 'Lorem ipsum dolor sit amet',
		variant: 'body2',
	},
};

export const Button: Story = {
	args: {
        children: 'Lorem ipsum dolor sit amet',
		variant: 'button',
	},
};

export const Caption: Story = {
	args: {
        children: 'Lorem ipsum dolor sit amet',
		variant: 'caption',
	},
};

export const H1: Story = {
	args: {
        children: 'Lorem ipsum dolor sit amet',
		variant: 'h1',
	},
};

export const H2: Story = {
	args: {
        children: 'Lorem ipsum dolor sit amet',
		variant: 'h2',
	},
};

export const H3: Story = {
	args: {
        children: 'Lorem ipsum dolor sit amet',
		variant: 'h3',
	},
};

export const H4: Story = {
	args: {
        children: 'Lorem ipsum dolor sit amet',
		variant: 'h4',
	},
};

export const H5: Story = {
	args: {
        children: 'Lorem ipsum dolor sit amet',
		variant: 'h5',
	},
};

export const H6: Story = {
	args: {
        children: 'Lorem ipsum dolor sit amet',
		variant: 'h6',
	},
};

export const Inherit: Story = {
	args: {
        children: 'Lorem ipsum dolor sit amet',
		variant: 'inherit',
	},
};

export const Overline: Story = {
	args: {
        children: 'Lorem ipsum dolor sit amet',
		variant: 'overline',
	},
};

export const Subtitle1: Story = {
	args: {
        children: 'Lorem ipsum dolor sit amet',
		variant: 'subtitle1',
	},
};

export const Subtitle2: Story = {
	args: {
        children: 'Lorem ipsum dolor sit amet',
		variant: 'subtitle2',
	},
};

export const Label: Story = {
	args: {
        children: 'Lorem ipsum dolor sit amet',
		variant: 'label',
	},
};