import type { Meta, StoryObj } from '@storybook/react';

import Widget from './../Widget';
import WidgetHeader from './../WidgetHeader';
import WidgetBody from './../WidgetBody';
import WidgetFooter from './../WidgetFooter';
import { WidgetFooterText } from './../WidgetTypography';

const meta: Meta<typeof WidgetFooter> = {
	title: 'Components/WidgetFooter',
	component: WidgetFooter,
    decorators: [
        (Story) => (
            <div style={{ width: '800px', padding: '2rem 5rem', backgroundColor: '#F3F3F5' }}>
                <Widget>
                    <WidgetHeader title="Widget Title" sx={{backgroundColor: '#DADADA', color: '#919191' }} />
                    <WidgetBody sx={{ backgroundColor: '#DADADA', color: '#919191' }}>Widget Body Content</WidgetBody>
                    <Story />
                </Widget>
            </div>
        ),
    ],
} ;

export default meta;

type Story = StoryObj<typeof WidgetFooter>;

export const Base: Story = {
    args: {
        children: <WidgetFooterText>Widget Footer Content</WidgetFooterText>
    }
};