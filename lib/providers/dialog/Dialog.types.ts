import { Breakpoint, DialogProps } from '@mui/material';

export type DialogOpenFnc = (
	dialogKey: string,
	dialogProps?: Omit<DialogProps, 'open'>
) => void;

export type DialogCloseFnc = () => void;

export type DialogIsOpenFnc = (id: string) => boolean;

export type DialogContextProps = {
	open: DialogOpenFnc;
	close: DialogCloseFnc;
	isOpen: DialogIsOpenFnc;
	isOpenId: string | null;
};

export type DialogProviderProps = {
	children: React.ReactNode;
};
