import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Box } from '@mui/material';

import {
	Tab,
	TabContext,
	TabLink,
	TabList,
	TabPanel,
	Tabs as TabsComponent,
} from './Tabs';
import { ThemeProvider } from '../../../providers/theme/Theme';

const Template = (args) => {
	const [value, setValue] = React.useState('1');

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

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
			<Box
				sx={{
					p: 3,
					bgcolor: '#FFFFFF',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<TabContext value={value}>
					<TabList
						onChange={handleChange}
						aria-label="lab API tabs example"
					>
						<Tab label="Tab One" value="1" />
						<Tab label="Tab Two" value="2" />
						<Tab label="Tab Three" value="3" />
					</TabList>
					<TabPanel value="1">Content One</TabPanel>
					<TabPanel value="2">Content Two</TabPanel>
					<TabPanel value="3">Content Three</TabPanel>
				</TabContext>
			</Box>
		</Box>
	);
};

const meta: Meta<typeof TabsComponent> = {
	title: 'UI/Components/Atoms',
	component: TabsComponent,
	decorators: [
		(Story) => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		),
	],
};

export default meta;

type Story = StoryObj<typeof TabsComponent>;

export const Tabs = Template.bind({});
