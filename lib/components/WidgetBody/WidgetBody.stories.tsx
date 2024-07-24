import type { Meta, StoryObj } from '@storybook/react';

import Widget from './../Widget';
import WidgetHeader from './../WidgetHeader';
import WidgetBody from './WidgetBody';
import WidgetFooter from './../WidgetFooter';
import { WidgetFooterText } from './../WidgetTypography';

const meta: Meta<typeof WidgetBody> = {
	title: 'Components/WidgetBody',
	component: WidgetBody,
    decorators: [
        (Story) => (
            <Widget>
                <WidgetHeader title="Widget Title" sx={{ backgroundColor: '#DADADA', color: '#919191' }} />
                <Story />
                <WidgetFooter sx={{backgroundColor: '#DADADA', color: '#919191' }}>
                    <WidgetFooterText>Widget Footer Content</WidgetFooterText>
                </WidgetFooter>
            </Widget>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof WidgetBody>;

export const Base: Story = {
    args: {
        children: <>Widget Body Content</>,
    }
};