import { ControllerProps } from 'react-hook-form';
import { TextFieldProps } from '@mui/material';
// import { TextFieldProps } from 'monstera-ui';

export type ControlledTextFieldProps = Omit<ControllerProps, 'render'> &
	Omit<TextFieldProps, 'name'> & {
		onChangingValue?: (value?: any) => any;
		onChangeValue?: (value?: any) => any;
	};
