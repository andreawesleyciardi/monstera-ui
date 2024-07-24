import type { Meta, StoryObj } from '@storybook/react';

import Widget from './Widget';
import WidgetHeader from './../WidgetHeader';
import WidgetBody from './../WidgetBody';
import WidgetFooter from './../WidgetFooter';
import { WidgetFooterText } from './../WidgetTypography';

const meta: Meta<typeof Widget> = {
	title: 'Components/Widget',
	component: Widget,
    // subcomponents: { WidgetHeader, WidgetBody, WidgetFooter },
};

export default meta;

type Story = StoryObj<typeof Widget>;

export const Base: Story = {
    render: (args) => (
        <Widget {...args}> 
            <WidgetHeader title="Widget Title" />
            <WidgetBody>Widget Body Content</WidgetBody>
            <WidgetFooter>
                <WidgetFooterText>Widget Footer Content</WidgetFooterText>
            </WidgetFooter>
        </Widget>
    ),
};