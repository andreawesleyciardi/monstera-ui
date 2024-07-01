import type { Meta, StoryObj } from '@storybook/react';

import { Widget } from './Widget';
import { WidgetHeader } from './WidgetHeader';
import { WidgetBody } from './WidgetBody';
import { WidgetFooter } from './WidgetFooter';
import { WidgetFooterText } from './WidgetTypography';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: 'Components/Molecules/Widget',
	component: Widget,
    subcomponents: { WidgetHeader, WidgetBody, WidgetFooter },
	parameters: {
		
	},
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		// children: { control: 'text' },
	},
} satisfies Meta<typeof Widget>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Success: Story = {
	args: {
        // children: 'Success Alert content',
	},
    render: (args) => (
        <div style={{ width: '800px', padding: '2rem 5rem', backgroundColor: '#F3F3F5' }}>
            <Widget {...args}>
                <WidgetHeader title="Widget Title" />
                <WidgetBody>Widget Body Content</WidgetBody>
                <WidgetFooter>
                    <WidgetFooterText>Widget Footer Content</WidgetFooterText>
                </WidgetFooter>
            </Widget>
        </div>
      ),
};