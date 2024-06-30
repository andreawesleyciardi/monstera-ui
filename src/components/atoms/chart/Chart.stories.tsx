import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@mui/material';

import {
	Chart as ChartComponent,
	ChartBar,
	ChartDoughnut,
	ChartLine,
} from './Chart';
import { ThemeProvider } from '../../../providers/theme/Theme';

const Template = (args) => {
	console.log(args);
	return (
		<Box
			sx={{
				p: 3,
				bgcolor: '#F3F3F5',
				display: 'grid',
				gridTemplateColumns: { md: '1fr 1fr' },
				gap: 3,
				minHeight: '200px',
			}}
		>
			<Box sx={{ bgcolor: '#FFFFFF', padding: '1rem' }}>
				<ChartLine
					datasets={[{ data: [10, 34, 54, 23, 7], label: 'Test' }]}
					labels={[
						'January',
						'February',
						'March',
						'April',
						'May',
						'June',
						'July',
					]}
					{...args}
				/>
			</Box>
			<Box sx={{ bgcolor: '#FFFFFF', padding: '1rem' }}>
				<ChartBar
					datasets={[{ data: [10, 34, 54, 23, 7], label: 'Test' }]}
					labels={[
						'January',
						'February',
						'March',
						'April',
						'May',
						'June',
						'July',
					]}
					{...args}
				/>
			</Box>
			<Box sx={{ bgcolor: '#FFFFFF', padding: '1rem' }}>
				<ChartDoughnut
					datasets={[{ data: [10, 34, 54, 23, 7], label: 'Test' }]}
					labels={[
						'January',
						'February',
						'March',
						'April',
						'May',
						'June',
						'July',
					]}
					{...args}
				/>
			</Box>
			<Box sx={{ bgcolor: '#FFFFFF', padding: '1rem' }}>
				<ChartDoughnut
					datasets={null}
					labels={[
						'January',
						'February',
						'March',
						'April',
						'May',
						'June',
						'July',
					]}
					{...args}
				/>
			</Box>
		</Box>
	);
};

const meta: Meta<typeof ChartComponent> = {
	title: 'UI/Components/Atoms',
	component: ChartComponent,
	decorators: [
		(Story) => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		),
	],
};

export default meta;

type Story = StoryObj<typeof ChartComponent>;

export const Chart = Template.bind({});
