import React from 'react';
import { Preview } from '@storybook/react';
import _ from 'lodash';

import { ThemeProvider, useTheme, useMuiTheme } from './../lib/providers';
import { Stack } from './../lib/components';

const preview: Preview = {  
    decorators: [
        (Story, context) => {
            const Content = ({children, ...props}) => {
                const theme = useTheme();
                const muiTheme = useMuiTheme();
                return (
                    <Stack spacing={2} sx={{ minWidth: '800px', padding: '2rem 5rem', backgroundColor: muiTheme?.palette?.background?.base }}>
                        <span>{children}</span>
                        <span>
                            <Stack spacing={2} direction="row">
                                <button onClick={theme.togglePaletteMode}>Toggle Mode</button>
                                <button onClick={theme.toggleIsBranded}>Toggle Brand</button>
                            </Stack>
                        </span>
                    </Stack>
                );
            };

            const branding = {
                palette: {
                    primary: { main: '#C38A5F', contrastText: '#FFFFFF' },
                    secondary: { main: '#7A7A9D', contrastText: '#FFFFFF' },
                    error: { main: '#9B2757', contrastText: '#FFFFFF' },
                    warnings: { main: '#FF7300', contrastText: '#FFFFFF' },
                    info: { main: '#D8C193', contrastText: '#FFFFFF' },
                    success: { main: '#FF0000', contrastText: '#FFFFFF' },
                }
            };

            return (
                <ThemeProvider {...(context.args?.theme != null ? _.merge({}, context.args, { theme: { branding: branding }}, (context.args?.theme?.branding ?? {})) : {theme: { branding: branding }})}>
                    <Content>
                        <Story />
                    </Content>
                </ThemeProvider>
            )
        },
    ],   
	parameters: {
        // actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
            expanded: true,
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
