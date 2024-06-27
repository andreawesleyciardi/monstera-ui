import React from 'react';
import { Preview } from '@storybook/react';

import { ThemeProvider } from '../lib/providers';

const preview: Preview = {  
    decorators: [
        (Story) => (
            <ThemeProvider>
                {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
                <Story />
            </ThemeProvider>
        ),
    ],   
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
	},
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs']
};

export default preview;
