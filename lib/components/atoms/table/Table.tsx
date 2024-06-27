import React from 'react';
import _ from 'lodash';
import { styled, useThemeProps } from '@mui/material/styles';
import {
	Box,
	Table as MuiBaseTable,
	TableBody as MuiBaseTableBody,
	TableCell as MuiBaseTableCell,
	TableContainer as MuiBaseTableContainer,
	TableFooter as MuiBaseTableFooter,
	TableHead as MuiBaseTableHead,
	TablePagination as MuiBaseTablePagination,
	TableRow as MuiBaseTableRow,
	TableSortLabel as MuiBaseTableSortLabel,
} from '@mui/material';
import {
	MaterialReactTable,
	useMaterialReactTable,
	type MRT_ColumnDef,
	type MRT_RowData,
	type MRT_TableInstance,
} from 'material-react-table';

import { TableInProps } from './Table.types';

const Root = styled(Box, {
	name: 'MuiFullTable',
	slot: 'root',
})<any>(({}) => ({
	width: '100%',
	height: '100%',
}));

export const Table = <TData extends MRT_RowData>({
	columns: originalColumns,
	data,
	...inProps
}: TableInProps<TData>) => {
	const {
		columnsAlignDefault,
		columnsCategoriesAlignMap,
		columnsTypesRender,
		columnsTypesSizeMap,
		enableRowActions,
		renderRowActionsWrapper: RenderRowActionsWrapper,
		renderRowActions: RenderRowActions = null,
		...props
	} = useThemeProps({
		props: inProps,
		name: 'MuiFullTable',
	});

	let initialState = props.initialState ?? {};

	console.log('originalColumns');
	console.log(originalColumns);

	const columns: MRT_ColumnDef<TData, any>[] = originalColumns.map(
		({ category, sort, type, ...item }, index) => {
			item.muiTableBodyCellProps = _.merge(
				{
					align:
						columnsCategoriesAlignMap?.[category ?? type] ??
						columnsAlignDefault,
				},
				item?.muiTableBodyCellProps ?? {}
			);
			item.muiTableHeadCellProps = _.merge(
				{
					align:
						columnsCategoriesAlignMap?.[category ?? type] ??
						columnsAlignDefault,
				},
				item?.muiTableHeadCellProps ?? {}
			);
			item.size = item?.size ?? columnsTypesSizeMap?.[type]; // ADD AUTO OPTION
			if (sort != null && data != null && data.length != 0) {
				if (initialState?.sorting == null) {
					initialState.sorting = [];
				}
				initialState.sorting.push({
					id: item.accessorKey as string,
					desc: sort == 'desc',
				});
			}
			if (
				item?.Cell == null &&
				type != null &&
				columnsTypesRender?.[type] != null
			) {
				item.Cell = columnsTypesRender[type];
			}
			console.log(item);
			return item;
		}
	);

	console.log('columns');
	console.log(columns);

	const table: MRT_TableInstance<TData> = useMaterialReactTable<TData>({
		columns,
		data,
		enableRowActions: enableRowActions == true && RenderRowActions != null,
		initialState,
		renderRowActions: (rowActionsProps) => (
			<RenderRowActionsWrapper>
				{RenderRowActions != null ? (
					<RenderRowActions {...rowActionsProps} />
				) : null}
			</RenderRowActionsWrapper>
		),
		...props,
	});

	// console.log(table.getState());               Console Log All Internal Table State
	// console.log(table.getRowModel().rows);       Console Log Current Rendering Rows

	return (
		<Root className="MuiTableExternalContainer">
			<MaterialReactTable table={table} />
		</Root>
	);
};

// Original Material-UI components

export const BaseTable = styled(MuiBaseTable, {
	name: 'MuiBaseTable',
	slot: 'root',
})(({}) => ({}));

export const BaseTableBody = styled(MuiBaseTableBody, {
	name: 'MuiBaseTable',
	slot: 'root',
})(({}) => ({}));

export const BaseTableCell = styled(MuiBaseTableCell, {
	name: 'MuiBaseTable',
	slot: 'root',
})(({}) => ({}));

export const BaseTableContainer = styled(MuiBaseTableContainer, {
	name: 'MuiBaseTable',
	slot: 'root',
})(({}) => ({}));

export const BaseTableFooter = styled(MuiBaseTableFooter, {
	name: 'MuiBaseTable',
	slot: 'root',
})(({}) => ({}));

export const BaseTableHead = styled(MuiBaseTableHead, {
	name: 'MuiBaseTable',
	slot: 'root',
})(({}) => ({}));

export const BaseTablePagination = styled(MuiBaseTablePagination, {
	name: 'MuiBaseTable',
	slot: 'root',
})(({}) => ({}));

export const BaseTableRow = styled(MuiBaseTableRow, {
	name: 'MuiBaseTable',
	slot: 'root',
})(({}) => ({}));

export const BaseTableSortLabel = styled(MuiBaseTableSortLabel, {
	name: 'MuiBaseTable',
	slot: 'root',
})(({}) => ({}));
