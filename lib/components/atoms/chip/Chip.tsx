import React from 'react';
import { styled, useThemeProps } from '@mui/material/styles';
import { Chip as MuiChip } from '@mui/material';

import { ChipProps, ChipOwnProps } from './Chip.types';

declare module '@mui/material/Chip' {
    interface ChipPropsOverrides {
      square: true;
    }
}

const Root = styled(MuiChip, {
	name: 'MuiChip',
	slot: 'root',
})<{ ownerState: ChipOwnProps }>(
	({ ownerState: { square = 'false' } }) => ({...(square == 'true' ? {
        borderRadius: '5px'} : {})
	})
);

export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(function Chip(
	inProps,
	ref
) {
	const themedProps = useThemeProps({
		props: inProps,
		name: 'MuiChip',
	});
	const {
		index,
        onClick,
        onDelete,
        square,
		...props
	} = themedProps;

	const ownerState = {
		square: square == null ? 'false' : square.toString(),
	};

    return (
		<Root
			{...props}
			onClick={
				onClick != null
					? (e) => {
							onClick(e, index ?? (props.label as string));
					  }
					: undefined
			}
			onDelete={
				onDelete != null ? (e) => onDelete(e, index ?? (props.label as string)) : undefined
			}
            ownerState={ownerState}
            ref={ref}
		/>
	);
});