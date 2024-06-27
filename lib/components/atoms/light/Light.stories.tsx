import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/material';

import { Light as LightComponent } from './Light';
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
				<LightComponent label="Default" />
				<LightComponent label="Primary" color="primary" />
				<LightComponent label="Secondary" color="secondary" />
				<LightComponent label="Error" color="error" />
				<LightComponent label="Info" color="info" />
				<LightComponent label="Success" color="success" />
				<LightComponent label="Warning" color="warning" />
				<LightComponent label="Custom" color={{ main: 'purple' }} />
				<LightComponent label="Type Language" type="language" />
				<LightComponent
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
				<LightComponent label="Default" size="medium" />
				<LightComponent label="Primary" color="primary" size="medium" />
				<LightComponent
					label="Secondary"
					color="secondary"
					size="medium"
				/>
				<LightComponent label="Error" color="error" size="medium" />
				<LightComponent label="Info" color="info" size="medium" />
				<LightComponent label="Success" color="success" size="medium" />
				<LightComponent label="Warning" color="warning" size="medium" />
				<LightComponent
					label="Custom"
					color={{ main: 'purple' }}
					size="medium"
				/>
				<LightComponent
					label="Type Language"
					type="language"
					size="medium"
				/>
				<LightComponent
					label="testMap"
					labelsMap={{ testMap: 'Test Label Map' }}
					size="medium"
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
				<LightComponent label="Default" variant="outlined" />
				<LightComponent
					label="Primary"
					color="primary"
					variant="outlined"
				/>
				<LightComponent
					label="Secondary"
					color="secondary"
					variant="outlined"
				/>
				<LightComponent
					label="Error"
					color="error"
					variant="outlined"
				/>
				<LightComponent label="Info" color="info" variant="outlined" />
				<LightComponent
					label="Success"
					color="success"
					variant="outlined"
				/>
				<LightComponent
					label="Warning"
					color="warning"
					variant="outlined"
				/>
				<LightComponent
					label="Custom"
					color={{ main: 'purple' }}
					variant="outlined"
				/>
				<LightComponent
					label="Type Language"
					type="language"
					variant="outlined"
				/>
				<LightComponent
					label="testMap"
					labelsMap={{ testMap: 'Test Label Map' }}
					type="language"
					variant="outlined"
				/>
			</Box>
		</Box>
	);
};

const meta: Meta<typeof LightComponent> = {
	title: 'UI/Components/Atoms',
	component: LightComponent,
	decorators: [
		(Story) => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		),
	],
};

export default meta;

type Story = StoryObj<typeof LightComponent>;

export const Light = Template.bind({});
