import type { Meta, StoryObj } from '@storybook/react';

import { Typography as TypographyComponent } from './Typography';
import { ThemeProvider } from '../../../providers/theme/Theme';

const Template = (args) => {
	return <TypographyComponent {...args} />;
};

const meta: Meta<typeof TypographyComponent> = {
	title: 'UI/Components/Atoms/Typography',
	component: TypographyComponent,
	decorators: [
		(Story) => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		),
	],
};

export default meta;

type Story = StoryObj<typeof TypographyComponent>;

export const Typography = Template.bind({});
