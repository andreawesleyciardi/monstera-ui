import { TComponentsDefinition } from '../../../providers';

export const ChartTheme: TComponentsDefinition = {
	MuiChart: {
		defaultProps: {
			defaultOptions: (fontFamily = 'Montserrat') => ({
				responsive: true,
				animation: false,
				layout: {
					padding: 6,
				},
				plugins: {
					legend: {
						position: 'bottom',
						labels: {
							boxWidth: 5,
							boxHeight: 5,
							font: {
								family: fontFamily,
							},
							padding: 15,
							usePointStyle: true,
						},
					},
					tooltip: {
						titleFont: {
							weight: 'normal',
							family: fontFamily,
						},
						bodyFont: {
							weight: 'normal',
							family: fontFamily,
						},
						footerFont: {
							weight: 'normal',
							family: fontFamily,
							lineHeight: 1.5,
						},
						padding: 12,
						// callbacks: {
						// 	title: (ctx: object[]) => {
						// return moment(`01 ${ctx[0].label}`)._d !==
						// 	'Invalid Date' &&
						// 	!isNaN(moment(`01 ${ctx[0].label}`)._d)
						// 	 ? Filter.Date({
						// 	  		value: `01 ${ctx[0].label}`,
						// 	  		format: 'MMG',
						// 	    })
						// 	  ctx[0].label;
						// 	},
						// },
						boxWidth: 8,
						boxHeight: 8,
						boxPadding: 5,
						usePointStyle: true,
					},
				},
				scales: {
					x: {
						grid: {
							display: false,
						},
						ticks: {
							color: 'rgba(0, 0, 0, 0.4)',
							padding: 10,
							font: {
								family: fontFamily,
							},
						},
						title: {
							color: 'rgba(0, 0, 0, 0.4)',
							family: fontFamily,
						},
					},
					y: {
						grid: {
							display: true,
							color: 'rgba(0, 0, 0, 0.05)',
						},
						border: {
							display: false,
						},
						ticks: {
							color: 'rgba(0, 0, 0, 0.4)',
							padding: 10,
							font: {
								family: fontFamily,
							},
						},
						title: {
							color: 'rgba(0, 0, 0, 0.4)',
							family: fontFamily,
						},
					},
				},
				elements: {
					point: {
						hitRadius: 10,
						radius: 0,
						borderWidth: 2,
						hoverRadius: 4,
						hoverBorderWidth: 2,
						// borderColor: '#FFFFFF',
					},
					line: {
						tension: 1,
					},
				},
			}),
		},
		styleOverrides: {},
	},
	MuiChartLine: {
		defaultProps: {
			defaultOptions: {
				datasets: {
					line: {
						pointRadius: 2,
					},
				},
			},
		},
	},
	MuiChartBar: {
		defaultProps: {
			defaultOptions: {
				datasets: {
					bar: {
						barThickness: 20,
						borderRadius: 5,
					},
				},
			},
		},
	},
	MuiChartDoughnut: {
		defaultProps: {
			defaultOptions: {
				layout: {
					padding: 0,
				},
				cutout: '60%',
				scales: null,
				hover: {
					mode: null,
				},
				plugins: {
					tooltip: {
						enabled: true,
					},
				},
				placeholder: {
					color: 'rgba(238, 239, 239, 1)',
					dataset: (labels: unknown[], color: string) => [
						{
							label: labels[0],
							data: [1],
							borderColor: color,
							backgroundColor: color,
						},
					],
					options: {
						layout: {
							padding: 14,
						},
						plugins: {
							tooltip: {
								enabled: false,
							},
						},
					},
				},
			},
		},
	},
};
