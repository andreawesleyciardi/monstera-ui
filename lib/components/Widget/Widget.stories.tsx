import { FunctionComponent } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Widget from './Widget';
import WidgetHeader from './../WidgetHeader';
import WidgetBody from './../WidgetBody';
import WidgetFooter from './../WidgetFooter';
import { WidgetFooterText } from './../WidgetTypography';

const meta = {
	title: 'Components/Molecules/Widget',
	component: Widget,
    subcomponents: { WidgetHeader, WidgetBody, WidgetFooter },
    decorators: [
        (Story) => (
            <div style={{ width: '800px', padding: '2rem 5rem', backgroundColor: '#F3F3F5' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Widget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    render: (args) => (
            <Widget {...args}> 
                <WidgetHeader title="Widget Title" />
                <WidgetBody variant="success">Widget Body Content</WidgetBody>
                <WidgetFooter>
                    <WidgetFooterText>Widget Footer Content</WidgetFooterText>
                </WidgetFooter>
            </Widget>
    ),
};