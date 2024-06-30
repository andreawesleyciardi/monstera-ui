import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/material';

import { Score as ScoreComponent } from './Score';
import { ThemeProvider } from '../../../providers/theme/Theme';

const Template = (args) => {
	return (
		<Box
			sx={{
				p: 3,
				bgcolor: '#f3f3f5',
				display: 'flex',
				// gridTemplateColumns: { md: '1fr 1fr' },
				alignItems: 'flex-end',
				justifyContent: 'flex-start',
				gap: '5rem',
				minHeight: '200px',
				paddingBottom: '400px',
			}}
		>
			<Box
				sx={{
					p: 3,
					bgcolor: '#FFFFFF',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<ScoreComponent
					value={80}
					label="Overall score"
				></ScoreComponent>
			</Box>
			<Box
				sx={{
					p: 3,
					bgcolor: '#FFFFFF',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<ScoreComponent
					value={80}
					label="Overall score"
					size="big"
				></ScoreComponent>
			</Box>
		</Box>
	);
};

const meta: Meta<typeof ScoreComponent> = {
	title: 'UI/Components/Atoms',
	component: ScoreComponent,
	decorators: [
		(Story) => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		),
	],
};

export default meta;

type Story = StoryObj<typeof ScoreComponent>;

export const Score = Template.bind({});
