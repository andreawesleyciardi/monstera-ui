import React from 'react';

import { ButtonGroup, Status } from './../../../components';
import { TComponentsDefinition } from '../../../providers';

export const TableTheme: TComponentsDefinition = {
	MuiFullTable: {
		defaultProps: {
			columnsAlignDefault: 'left',
			columnsCategoriesAlignMap: {
				date: 'center',
				dateRange: 'center',
				number: 'right',
				status: 'center',
				string: 'left',
			},
			// columnsTypesRender: {
			// 	status: ({
			// 		column: {
			// 			columnDef: { statusProps },
			// 		},
			// 		renderedCellValue,
			// 	}: object) => {
			// 		// debugger;
			// 		return (
			// 			<Status
			// 				label={renderedCellValue}
			// 				type={renderedCellValue}
			// 				{...statusProps}
			// 			/>
			// 		);
			// 	},
			// },
			columnsTypesSizeMap: {
				number: 200,
			},
			displayColumnDefOptions: {
				'mrt-row-actions': {
					header: '',
					muiTableBodyCellProps: {
						align: 'right',
						sx: {
							minWidth: 'auto !important',
							width: '1% !important',
							whiteSpace: 'nowrap',
						},
					},
					muiTableHeadCellProps: {
						align: 'right',
						sx: {
							minWidth: 'auto !important',
							width: '1% !important',
							whiteSpace: 'nowrap',
						},
					},
					size: 0,
				},
			},
			enableColumnPinning: false,
			enableGrouping: false,
			enableRowActions: true,
			enableRowSelection: false,
			initialState: {
				pagination: {
					pageIndex: 0,
					pageSize: 10,
				},
			},
			muiSearchTextFieldProps: {
				size: 'small',
				variant: 'standard',
			},
			muiPaginationProps: {
				color: 'rgba(0, 0, 0, 0.6)',
				rowsPerPageOptions: [10, 20, 50],
				showFirstButton: true,
				showLastButton: true,
				size: 'small',
			},
			muiTablePaperProps: {
				elevation: 0,
				square: true,
			},
			positionActionsColumn: 'last',
			renderRowActionsWrapper: (props: any) => (
				<ButtonGroup
					className="MuiActionsGroup"
					sx={{ borderRadius: '0px' }}
				>
					{props.children}
				</ButtonGroup>
			),
		},
		styleOverrides: {
			root: {
				'&.MuiTableExternalContainer': {
					'.MuiPaper-root': {
						'.MuiTablePagination-root': {
							'.MuiFormLabel-root.MuiInputLabel-root': {
								display: 'none',
							},
							'.MuiInputBase-root': {
								borderBottom: 'none',
								fontSize: '0.875rem',
								'.MuiSelect-select::after': {
									content: '" rows"',
								},
							},
						},
						'.MuiTableBody-root': {
							'.MuiTableRow-root:nth-of-type(even)': {
								backgroundColor: '#F9F9F9 !important',
							},
							'.MuiTableCell-root': {
								paddingLeft: '0.75rem',
								paddingRight: '0.75rem',
								'&.MuiTableCell-body': {
									paddingTop: '0px',
									paddingBottom: '0px',
								},
								'&.MuiTableCell-body.MuiTableCell-sizeMedium': {
									height: '3.563rem',
								},
							},
						},
						'&>.MuiBox-root': {
							boxShadow: 'none',
						},
					},
				},
			},
		},
	},
};
