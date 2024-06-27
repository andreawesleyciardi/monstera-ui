import React, { ReactNode } from 'react';
import {
	ChartData,
	ChartOptions as ChartJsOptions,
	ChartType,
	ChartDataset as ChartJsDataset,
	Plugin as ChartJsPlugin,
} from 'chart.js';
import { BoxProps } from '@mui/material/Box';

export type ChartDataset = {
	data: string | number;
	label: string | number;
};
export type ChartDatasets = null | ChartDataset[];

type ChartLabels = unknown[] | undefined;

export type ChartOptions = null | ChartJsOptions;

export interface ChartGenericProps {
	datasets: ChartJsDataset[];
	datasetIdKey?: string;
	defaultOptions?: {
		placeholder?: {
			color?: string;
			dataset?(labels: unknown[], color?: string): object[];
			options?: object;
		};
		[key: string]: any;
	};
	labels: ChartLabels;
	options?: ChartOptions;
}

export interface ChartRootProps extends BoxProps {
	data: ChartData;
	datasetIdKey?: string;
	defaultOptions?: (fontFamily?: string) => object;
	fallbackContent?: null | ReactNode;
	options?: ChartOptions;
	plugins?: ChartJsPlugin[];
	redraw?: boolean;
	updateMode?:
		| 'reset'
		| 'resize'
		| 'none'
		| 'hide'
		| 'show'
		| 'active'
		| 'default';
	variation?: ChartType;
}

export interface ChartRootOwnerState {
	variation?: ChartType;
}
