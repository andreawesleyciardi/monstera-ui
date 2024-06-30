import React, { useState, useMemo } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Table as TableComponent } from './Table';
import {
	Action,
	Box,
	CopyAction,
	EditAction,
	Icon,
} from './../../../components';
import { ThemeProvider } from '../../../providers';

const Template = (args) => {
	console.log(args);

	const data = useMemo(
		() => [
			{
				name: 'Mehmet',
				surname: 'Baran',
				birthYear: 1987,
				birthCity: 'Marrakesh',
				status: 'testx',
			},
			{
				name: 'John',
				surname: 'Smith',
				birthYear: 1988,
				birthCity: 'London',
				status: 'testy',
			},
		],
		[]
	);

	const columns = useMemo(
		() => [
			{ header: 'Name', accessorKey: 'name' },
			{ header: 'Surname', accessorKey: 'surname' },
			{
				header: 'Birth Year',
				accessorKey: 'birthYear',
				category: 'number',
				type: 'number',
			},
			{ header: 'Birth City', accessorKey: 'birthCity' },
			{
				header: 'Status',
				accessorKey: 'status',
				type: 'status',
				statusProps: { typesMap: { testx: 'success', testy: 'error' } },
			},
		],
		[]
	);

	const options = {
		renderRowActions: ({ cell, row, staticRowIndex, table }) => {
			return (
				<>
					<EditAction
						onClick={() => {
							console.log(row);
						}}
					/>
					<Action
						title="Delete"
						onClick={() => {
							console.log(row);
						}}
					>
						<Icon type="delete" />
					</Action>
					<CopyAction
						onClick={() => {
							console.log(row);
						}}
					/>
				</>
			);
		},
	};

	return (
		<Box
			sx={{
				p: 3,
				bgcolor: '#F3F3F5',
				display: 'grid',
				gridTemplateColumns: { md: '1fr' },
				gap: 3,
				minHeight: '200px',
			}}
		>
			<Box sx={{ bgcolor: '#FFFFFF', padding: '1rem' }}>
				<TableComponent data={data} columns={columns} {...options} />
			</Box>
		</Box>
	);
};

const meta: Meta<typeof TableComponent> = {
	title: 'UI/Components/Atoms',
	component: TableComponent,
	decorators: [
		(Story) => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		),
	],
};

export default meta;

type Story = StoryObj<typeof TableComponent>;

export const Table = Template.bind({});
