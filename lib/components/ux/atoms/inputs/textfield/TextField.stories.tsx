import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { TextField } from './TextField';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: 'Components/Atoms/UX/TextField',
	component: TextField,
    decorators: [
        (Story) => {
            const { handleSubmit, control, formState, watch } = useForm({ mode: 'onChange', defaultValues: { test: 'xxx' }});
            return (
                <form
                    method={'post'}
                    onSubmit={(event) => {
                        // const target = event.currentTarget;
                        handleSubmit(() => {
                            debugger;
                            // submit(target, { method: method });
                        })(event);
                    }}
                >
                        <Story control={control} />
                        <br />
                        <br />Field current value: { JSON.stringify(watch('test'), null, "\t") }
                        <br />Form dirty fields: { JSON.stringify(formState.dirtyFields, null, "\t") }
                        <br />Form errors: { JSON.stringify(formState.errors, null, "\t") }
                </form>
        )},
    ],
	parameters: {
		
	},
    args: {
        label: 'Test',
        name: 'test',
        placeholder: 'Placeholder'
    },
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
        label: { control: 'text' },
		name: { control: 'text' },
		placeholder: { control: 'text' },
	},
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Base: Story = {
	args: {
        // defaultValue: 'default value'
	},
    render: function Render(args, context) {
        return <TextField {...args} control={context.control} />;
    },
};