import React, {
	useContext,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';
import { styled, useThemeProps } from '@mui/material/styles';
import { DialogProps } from '@mui/material';
import { Portal } from '@mui/base';
import _ from 'lodash';

import { Dialog } from 'components';
import {
	DialogCloseFnc,
	DialogContextProps,
	DialogIsOpenFnc,
	DialogOpenFnc,
	DialogProviderProps,
} from './Dialog.types';

// Provider

const DialogContext = React.createContext<DialogContextProps | null>(null);

export const DialogProvider: any = ({
	children,
	...props
}: DialogProviderProps) => {
	const [show, setShow] = useState<boolean>(false);
	const [isOpenId, setIsOpenId] = useState<string | null>(null);
	const [customDialogProps, setCustomDialogProps] = useState<
		DialogProps | null | undefined | { [key: string]: any }
	>({});
	const refIsOpenKey = useRef<string | null>(null);

	const { dialogContainerId } = useThemeProps({
		props: { dialogContainerId: undefined },
		name: 'MuiDialogPortal',
	});

	const themedDialogProps = _.merge(
		{
			PaperProps: { id: dialogContainerId },
			TransitionProps: {
				onEntered: () => {
					setIsOpenId(refIsOpenKey.current);
				},
			},
		},
		useThemeProps({
			props: {},
			name: 'MuiDialog',
		}),
		customDialogProps ?? {}
	);

	const handleOpen: DialogOpenFnc = (dialogKey, dialogProps) => {
		refIsOpenKey.current = dialogKey;
		if (dialogProps != null) {
			setCustomDialogProps(dialogProps);
		}
		setShow(true);
	};

	const handleClose: DialogCloseFnc = () => {
		setCustomDialogProps({});
		refIsOpenKey.current = null;
		setIsOpenId(null);
		setShow(false);
	};

	const isOpen: DialogIsOpenFnc = (id) => {
		if (id != null && id != '') {
			return id == isOpenId;
		}
		return false;
	};

	return (
		<DialogContext.Provider
			value={{
				open: handleOpen,
				close: handleClose,
				isOpen: isOpen,
				isOpenId: isOpenId,
			}}
		>
			{children}
			<Dialog {...themedDialogProps} open={show}></Dialog>
		</DialogContext.Provider>
	);
};

// Hooks

export const useDialog = () => {
	let dialogContext = useContext(DialogContext);
	return dialogContext;
};
