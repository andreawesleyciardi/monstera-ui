import { Components } from '@mui/material/styles';

export const InputsTheme: Components = {
	MuiFormLabel: {
		styleOverrides: {
			root: {
				fontSize: '1rem',
				fontWeight: 600,
			},
		},
	},
	MuiInput: {
		defaultProps: {
			disableUnderline: true,
		},
		styleOverrides: {
			root: ({ theme }: { theme: any }) => ({
				borderBottomColor: theme.palette.borders.main,
				borderBottomWidth: '1px',
				borderBottomStyle: 'solid',
			}),
		},
	},
	MuiInputLabel: {
		styleOverrides: {
			root: {
				'&.Mui-focused': {
					color: 'inherit',
				},
			},
		},
	},
	MuiTextField: {
		defaultProps: {
			fullWidth: true,
			InputLabelProps: {
				shrink: true,
			},
			size: 'small',
			variant: 'standard',
		},
		styleOverrides: {
			root: {},
		},
	},
};
