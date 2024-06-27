// Built on top of react-chartjs-2  -->  https://react-chartjs-2.js.org/components

import React, { useState, useEffect, useRef } from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	ArcElement,
	Tooltip,
	Legend,
	registerables as registerablesJS,
} from 'chart.js';
import { Chart as ReactChart } from 'react-chartjs-2';
import _ from 'lodash';
import { Box } from '@mui/material';
import { styled, useTheme, useThemeProps } from '@mui/material/styles';

import {
	ChartGenericProps,
	ChartRootProps,
	ChartRootOwnerState,
} from './Chart.types';

ChartJS.register(...registerablesJS);

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	ArcElement,
	Tooltip,
	Legend
);

const Root = styled(Box, {
	name: 'MuiChart',
	slot: 'root',
})<{ ownerState: ChartRootOwnerState }>(
	({ theme, ownerState: { variation = 'line' } }) => ({
		position: 'relative',
		margin: 'auto',
		width: '100%',
		maxWidth: ['doughnut', 'pie'].includes(variation) ? '75%' : '100%',
		maxHeight: '100%',
		aspectRatio: ['doughnut', 'pie'].includes(variation) ? '1' : '2/1',
	})
);

export const Chart = React.forwardRef<ChartJS | undefined, ChartRootProps>(
	function Chart(inProps, ref) {
		const theme = useTheme();
		const props = useThemeProps({
			props: inProps,
			name: 'MuiChart',
		});
		const {
			className,
			data,
			datasetIdKey,
			defaultOptions,
			fallbackContent,
			options = {},
			plugins,
			redraw,
			updateMode,
			variation = 'line',
			...other
		} = props;

		const ownerState = { variation };

		return (
			<Root
				className={`MuiChart ${className}`}
				ownerState={ownerState}
				{...other}
				role="chart"
			>
				<ReactChart
					data={data}
					datasetIdKey={datasetIdKey}
					fallbackContent={fallbackContent}
					options={_.merge(
						{},
						defaultOptions
							? defaultOptions(theme.typography.fontFamily)
							: {},
						options
					)}
					plugins={plugins}
					redraw={redraw}
					style={{ maxWidth: '100%' }}
					type={variation}
					updateMode={updateMode}
					ref={ref}
				/>
			</Root>
		);
	}
);

const Line = styled(Chart, {
	name: 'MuiChartLine',
	slot: 'root',
})(({ theme }) => ({}));

export const ChartLine = (inProps: ChartGenericProps) => {
	const chartRef = useRef<ChartJS | undefined>(null);

	const props = useThemeProps({
		props: inProps,
		name: 'MuiChartLine',
	});
	const {
		datasets,
		defaultOptions = {},
		labels,
		options = {},
		...other
	} = props;

	return (
		<Line
			className="MuiChartLine"
			{...other}
			data={{ datasets: datasets, labels: labels }}
			options={_.merge({}, defaultOptions, options)}
			variation="line"
			ref={chartRef}
		/>
	);
};

const Bar = styled(Chart, {
	name: 'MuiChartBar',
	slot: 'root',
})(({ theme }) => ({}));

export const ChartBar = (inProps: ChartGenericProps) => {
	const chartRef = useRef<ChartJS<'bar'> | undefined>(null);

	const props = useThemeProps({
		props: inProps,
		name: 'MuiChartBar',
	});
	const {
		datasets,
		defaultOptions = {},
		labels,
		options = {},
		...other
	} = props;

	return (
		<Bar
			className="MuiChartBar"
			{...other}
			data={{ datasets: datasets, labels: labels }}
			options={_.merge({}, defaultOptions, options)}
			variation="bar"
			ref={chartRef}
		/>
	);
};

const Doughnut = styled(Chart, {
	name: 'MuiChartDoughnut',
	slot: 'root',
})(({ theme }) => ({}));

export const ChartDoughnut = (inProps: ChartGenericProps) => {
	const chartRef = useRef<ChartJS<'doughnut'> | undefined>(null);

	const props = useThemeProps({
		props: inProps,
		name: 'MuiChartDoughnut',
	});
	const {
		datasets,
		defaultOptions: {
			placeholder = { color: '', dataset: () => [], options: {} },
			...defaultOptions
		} = {},
		labels = [''],
		options = {},
		...other
	} = props;

	return (
		<Doughnut
			className="MuiChartDoughnut"
			{...other}
			data={{
				datasets:
					datasets ??
					(placeholder?.dataset
						? placeholder.dataset(labels, placeholder.color)
						: []),
				labels: labels,
			}}
			options={_.merge(
				{},
				defaultOptions,
				options,
				datasets == null ? placeholder?.options ?? {} : {}
			)}
			variation="doughnut"
			// ref={chartRef}       // Type building error
		/>
	);
};

// export const useChartsColors = () => {
// 	const theme = useTheme();
// 	return theme.chartsColors;
// };
