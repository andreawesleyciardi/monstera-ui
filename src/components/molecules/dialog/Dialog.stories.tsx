import type { Meta, StoryObj } from '@storybook/react';

import { Dialog as DialogComponent } from './Dialog';
import { DialogActions } from './DialogActions';
import { DialogBody } from './DialogBody';
import { DialogHeader } from './DialogHeader';
import { ThemeProvider } from '../../../providers';
import { Box, Typography } from './../../../components';

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
			<DialogComponent open={true} {...args}>
				<DialogHeader
					title="Dialog Header 1"
					titleProps={{ variant: 'h5' }}
				>
					<Typography variant="body1">Extra</Typography>
				</DialogHeader>
				<DialogBody sx={{ alignItems: 'flex-end' }}>
					Dialog Body 2
				</DialogBody>
			</DialogComponent>
		</Box>
	);
};

const meta: Meta<typeof DialogComponent> = {
	title: 'UI/Components/Molecules',
	component: DialogComponent,
	decorators: [
		(Story) => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		),
	],
};

export default meta;

type Story = StoryObj<typeof DialogComponent>;

export const Dialog = Template.bind({});
