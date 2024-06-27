import React from 'react';
import {
	type MRT_ColumnDef,
	type MRT_RowData,
	type MRT_TableOptions,
} from 'material-react-table';

type Aligns = 'left' | 'center' | 'right';

interface Custom_MRT_ColumnDef<TData extends MRT_RowData>
	extends MRT_ColumnDef<TData> {
	category: string;
	sort: 'asc' | 'desc';
	type: string;
}

export interface TableInProps<TData extends MRT_RowData>
	extends MRT_TableOptions<TData> {
	columns: Custom_MRT_ColumnDef<TData>[];
	columnsAlignDefault: Aligns;
	columnsCategoriesAlignMap: {
		[key: string]: Aligns;
	};
	columnsTypesRender: {
		[key: string]: (props: object) => React.ReactNode;
	};
	columnsTypesSizeMap: {
		[key: string]: number;
	};
	data: TData[];
	renderRowActionsWrapper: React.FunctionComponent<{
		children?: any | undefined;
	}>;
}

// * Category column is a grouping for type column => example: types "date", "datetime", "daterange", "time" are all in the "date" category
