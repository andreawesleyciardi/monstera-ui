import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { ScoreProps, ScoreOwnerState } from './Score.types';

const Root = styled(Stack, {
	name: 'MuiScore',
	slot: 'root',
})(({ theme }) => ({}));

const Value = styled(Typography, {
	name: 'MuiScore',
	slot: 'value',
})<{ ownerState: ScoreOwnerState }>(({ theme, ownerState: { size } }) => ({
	fontSize: size == 'big' ? '2.917rem' : '1.563rem',
}));

const Unit = styled(Typography, {
	name: 'MuiScore',
	slot: 'unit',
})<{ ownerState: ScoreOwnerState }>(({ theme, ownerState: { size } }) => ({
	fontSize: size == 'big' ? '1.042rem' : '0.625rem',
}));

const Label = styled(Typography, {
	name: 'MuiScore',
	slot: 'label',
})(({ theme }) => ({
	...theme.typography.label,
}));

export const Score = React.forwardRef<HTMLDivElement, ScoreProps>(
	function Score(props, ref) {
		const {
			label,
			nullSymbol = '-',
			size = 'default',
			unit = 100,
			value,
			...other
		} = props;

		const ownerState = { ...props, size };

		return (
			<Root
				ref={ref}
				alignItems="flex-start"
				spacing="0.208rem"
				{...other}
			>
				{/* <Stack direction="row" alignItems="flex-end"> */}
				<div>
					<Value className="MuiScoreValue" ownerState={ownerState}>
						{value ?? nullSymbol}
					</Value>
					<Unit className="MuiScoreUnit" ownerState={ownerState}>
						{`/ ${unit}`}
					</Unit>
				</div>
				{/* </Stack> */}
				{label != null && <Label variant="label">{label}</Label>}
			</Root>
		);
	}
);
