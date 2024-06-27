import React from 'react';
import { styled, useThemeProps } from '@mui/material/styles';
import _ from 'lodash';

import { localization } from './../../../../services';
import {
	Box,
	LoadingButton,
	Icon,
	IconButton,
	Permissions,
	Tooltip,
} from '../../..';
import { ActionProps, ActionOwnerState, FastActionProps } from './Action.types';

const Root = styled(Box, {
	name: 'MuiAction',
	slot: 'root',
})<{ ownerState: ActionOwnerState }>(
	({ theme, ownerState: { isIconButton } }) => ({
		aspectRatio: isIconButton == true ? '1 / 1' : 'auto',
	})
);

export const Action = React.forwardRef<any, ActionProps>(function Action(
	inProps,
	ref
) {
	const props = useThemeProps({
		props: inProps,
		name: 'MuiAction',
	});
	const {
		children,
		disableElevation,
		iconProps,
		isIconButton,
		permissionsProps,
		tooltipProps,
		...buttonProps
	} = props;

	const ownerState = {
		isIconButton,
	};

	const RootButton = () => {
		const RootButtonType = () =>
			isIconButton ? (
				<IconButton {...buttonProps} ref={ref}>
					{iconProps != null ? <Icon {...iconProps} /> : children}
				</IconButton>
			) : (
				<LoadingButton
					disableElevation={disableElevation}
					{...buttonProps}
					ref={ref}
				>
					{children}
				</LoadingButton>
			);

		return (
			<Root className="MuiAction" ownerState={ownerState}>
				{tooltipProps != null && tooltipProps?.title != null ? (
					<Tooltip {...tooltipProps}>
						<span>
							<RootButtonType />
						</span>
					</Tooltip>
				) : (
					<RootButtonType />
				)}
			</Root>
		);
	};

	return permissionsProps != null && permissionsProps?.actionKey != null ? (
		<Permissions {...permissionsProps}>
			<RootButton />
		</Permissions>
	) : (
		<RootButton />
	);
});

export const createFastAction = (
	actionKey: string,
	{
		children,
		iconProps,
		permissionsProps,
		tooltipProps,
		...inProps
	}: FastActionProps,
	ref: any
) => {
	// TO MAKE LOCALIZATION DYNAMIC
	return (
		<Action
			permissionsProps={
				permissionsProps != null
					? _.merge({ actionKey: actionKey }, permissionsProps)
					: undefined
			}
			tooltipProps={
				inProps.isIconButton === false
					? undefined
					: _.merge(
							{ title: localization['en-US']?.[actionKey] },
							tooltipProps ?? {}
					  )
			}
			iconProps={
				inProps.isIconButton === false
					? undefined
					: _.merge({ type: actionKey }, iconProps ?? {})
			}
			ref={ref}
			{...inProps}
		>
			{children != null ? children : localization['en-US']?.[actionKey]}
		</Action>
	);
};

export const AddAction = React.forwardRef<any, FastActionProps>(
	function AddAction(props, ref) {
		return createFastAction('add', props, ref);
	}
);

export const CheckAction = React.forwardRef<any, FastActionProps>(
	function CheckAction(props, ref) {
		return createFastAction('check', props, ref);
	}
);

export const CloneAction = React.forwardRef<any, FastActionProps>(
	function CloneAction(props, ref) {
		return createFastAction(
			'clone',
			_.merge({}, props, { iconProps: { type: 'copy' } }),
			ref
		);
	}
);

export const CopyAction = React.forwardRef<any, FastActionProps>(
	function CopyAction(props, ref) {
		return createFastAction('copy', props, ref);
	}
);

export const DeleteAction = React.forwardRef<any, FastActionProps>(
	function DeleteAction(props, ref) {
		return createFastAction('delete', props, ref);
	}
);

export const EditAction = React.forwardRef<any, FastActionProps>(
	function EditAction(props, ref) {
		return createFastAction('edit', props, ref);
	}
);

export const ExportAction = React.forwardRef<any, FastActionProps>(
	function ExportAction(props, ref) {
		return createFastAction('export', props, ref);
	}
);

export const InfoAction = React.forwardRef<any, FastActionProps>(
	function InfoAction(props, ref) {
		return createFastAction('info', props, ref);
	}
);

export const RemoveAction = React.forwardRef<any, FastActionProps>(
	function RemoveAction(props, ref) {
		return createFastAction('remove', props, ref);
	}
);
