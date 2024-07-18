import type { Meta, StoryObj } from '@storybook/react';

import Widget from './Widget';
import WidgetHeader from './WidgetHeader';
import WidgetBody from './WidgetBody';
import WidgetFooter from './WidgetFooter';
import { WidgetFooterText } from './WidgetTypography';

const meta = {
	title: 'Components/Molecules/Widget/Body',
	component: WidgetBody,
    decorators: [
        (Story) => (
            <div style={{ width: '800px', padding: '2rem 5rem', backgroundColor: '#F3F3F5' }}>
                <Widget>
                    <WidgetHeader title="Widget Title" sx={{ backgroundColor: '#DADADA', color: '#919191' }} />
                    <Story />
                    <WidgetFooter sx={{backgroundColor: '#DADADA', color: '#919191' }}>
                        <WidgetFooterText>Widget Footer Content</WidgetFooterText>
                    </WidgetFooter>
                </Widget>
            </div>
        ),
    ],
} satisfies Meta<typeof WidgetBody>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        children: <>Widget Body Content</>
    }
};