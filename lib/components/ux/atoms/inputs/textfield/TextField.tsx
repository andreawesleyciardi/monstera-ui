import React from 'react';
import { Controller } from 'react-hook-form';
import { useThemeProps } from '@mui/material/styles';
import {
	TextField as MonsteraUiTextField,
} from './../../../../../components';
import _ from 'lodash';

import { ControlledTextFieldProps } from './TextField.types';

export const TextField = ({
	control,
	defaultValue = '',
	disabled = false,
	name,
	onChange,
	onChangeValue,
	onChangingValue,
	rules = {},
	shouldUnregister = false,
	...fieldProps
}: ControlledTextFieldProps) => {
	const props = useThemeProps({
		props: fieldProps,
		name: 'MuiTextField',
	});
	return (
		<Controller
			control={control}
			defaultValue={defaultValue}
			disabled={disabled}
			name={name}
			rules={_.merge({ required: fieldProps.required }, rules)}
			render={({ field }) => {
			// render={({ field, fieldState }) => {
				return (
					<MonsteraUiTextField
						data-qa={name}
						disabled={disabled}
						name={name as string}
						{...props}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							let value = e.target.value;
							if (onChangingValue != null) {
								value = onChangingValue(value);
							}
							field.onChange(value);
							if (onChangeValue != null) {
								onChangeValue(value);
							}
							if (onChange != null) {
								onChange(e);
							}
						}}
						ref={field.ref}
                        value={field.value ?? defaultValue ?? ''}
					/>
				);
			}}
			shouldUnregister={shouldUnregister}
		/>
	);
};