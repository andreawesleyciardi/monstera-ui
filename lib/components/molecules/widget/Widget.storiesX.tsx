import type { Meta, StoryObj } from '@storybook/react';

import { Widget as WidgetComponent } from './Widget';
import { WidgetActions } from './WidgetActions';
import { WidgetBody } from './WidgetBody';
import { WidgetHeader } from './WidgetHeader';
import { ThemeProvider } from '../../../providers';
import {
	Action,
	Box,
	DeleteAction,
	EditAction,
	Icon,
	Typography,
} from '../..';

const Template = (args) => {
	console.log(args);
	return (
		<Box
			sx={{
				p: 3,
				bgcolor: '#f3f3f5',
				display: 'grid',
				gridTemplateColumns: { md: '1fr 1fr' },
				gap: 3,
				minHeight: '200px',
				paddingBottom: '400px',
			}}
		>
			<WidgetComponent {...args}>
				<WidgetHeader title="Widget Header 1">
					<WidgetActions>
						<EditAction
							onClick={() => {
								console.log('Edit');
							}}
						/>
						<DeleteAction
							onClick={() => {
								console.log('Delete');
							}}
							disabled={true}
						/>
					</WidgetActions>
				</WidgetHeader>
				<WidgetBody>Widget Body 1</WidgetBody>
			</WidgetComponent>

			<WidgetComponent {...args}>
				<WidgetHeader
					variant="dark"
					title="Widget Header 1"
					titleProps={{ variant: 'h5' }}
				>
					<Typography variant="body1">Extra</Typography>
					<WidgetActions>
						<EditAction
							onClick={() => {
								console.log('Edit');
							}}
						/>
					</WidgetActions>
				</WidgetHeader>
				<WidgetBody
					color="primary"
					fullArea={true}
					sx={{ alignItems: 'flex-end' }}
				>
					Widget Body 2
				</WidgetBody>
			</WidgetComponent>
		</Box>
	);
};

const meta: Meta<typeof WidgetComponent> = {
	title: 'UI/Components/Molecules',
	component: WidgetComponent,
	decorators: [
		(Story) => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		),
	],
};

export default meta;

type Story = StoryObj<typeof WidgetComponent>;

export const Widget = Template.bind({});
