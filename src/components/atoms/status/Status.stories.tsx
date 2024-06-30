import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/material';

import { Status as StatusComponent } from './Status';
import { ThemeProvider } from '../../../providers/theme/Theme';

const Template = (args) => {
	return (
		<Box
			sx={{
				p: 3,
				bgcolor: '#f3f3f5',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'flex-start',
				gap: '3rem',
				minHeight: '200px',
				paddingBottom: '400px',
			}}
		>
			<Box
				sx={{
					p: 3,
					bgcolor: '#FFFFFF',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					gap: '2.5rem',
				}}
			>
				<StatusComponent label="Default" />
				<StatusComponent label="Primary" color="primary" />
				<StatusComponent label="Secondary" color="secondary" />
				<StatusComponent label="Error" color="error" />
				<StatusComponent label="Info" color="info" />
				<StatusComponent label="Success" color="success" />
				<StatusComponent label="Warning" color="warning" />
				<StatusComponent label="Custom" color={{ main: 'purple' }} />
				<StatusComponent label="Type Language" type="language" />
				<StatusComponent
					label="testMap"
					labelsMap={{ testMap: 'Test Label Map' }}
					type="language"
				/>
			</Box>
			<Box
				sx={{
					p: 3,
					bgcolor: '#FFFFFF',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					gap: '2.5rem',
				}}
			>
				<StatusComponent label="Default" variant="outlined" />
				<StatusComponent
					label="Primary"
					color="primary"
					variant="outlined"
				/>
				<StatusComponent
					label="Secondary"
					color="secondary"
					variant="outlined"
				/>
				<StatusComponent
					label="Error"
					color="error"
					variant="outlined"
				/>
				<StatusComponent label="Info" color="info" variant="outlined" />
				<StatusComponent
					label="Success"
					color="success"
					variant="outlined"
				/>
				<StatusComponent
					label="Warning"
					color="warning"
					variant="outlined"
				/>
				<StatusComponent
					label="Custom"
					color={{ main: 'purple' }}
					variant="outlined"
				/>
				<StatusComponent
					label="Type Language"
					type="language"
					variant="outlined"
				/>
				<StatusComponent
					label="testMap"
					labelsMap={{ testMap: 'Test Label Map' }}
					type="language"
					variant="outlined"
				/>
			</Box>
		</Box>
	);
};

const meta: Meta<typeof StatusComponent> = {
	title: 'UI/Components/Atoms',
	component: StatusComponent,
	decorators: [
		(Story) => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		),
	],
};

export default meta;

type Story = StoryObj<typeof StatusComponent>;

export const Status = Template.bind({});
