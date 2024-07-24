import type { Meta, StoryObj } from '@storybook/react';

import Widget from './../Widget';
import WidgetHeader from './WidgetHeader';
import WidgetBody from './../WidgetBody';
import WidgetFooter from './../WidgetFooter';
import { WidgetFooterText } from './../WidgetTypography';

const meta: Meta<typeof WidgetHeader> = {
	title: 'Components/WidgetHeader',
	component: WidgetHeader,
    decorators: [
        (Story) => (
            <div style={{ width: '800px', padding: '2rem 5rem', backgroundColor: '#F3F3F5' }}>
                <Widget>
                    <Story />
                    <WidgetBody sx={{ backgroundColor: '#DADADA', color: '#919191' }}>Widget Body Content</WidgetBody>
                    <WidgetFooter sx={{backgroundColor: '#DADADA', color: '#919191' }}>
                        <WidgetFooterText>Widget Footer Content</WidgetFooterText>
                    </WidgetFooter>
                </Widget>
            </div>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof WidgetHeader>;

export const Base: Story = {
    args: {
        title: 'Widget Title'
    }
};