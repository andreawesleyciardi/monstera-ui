import type { Meta, StoryObj } from '@storybook/react';

import ThemeProvider, { useTheme } from './Theme';
import { Chip } from './../../components';

const meta: Meta<typeof ThemeProvider> = {
	title: 'Providers/Theme',
	component: ThemeProvider,
};

export default meta;

type Story = StoryObj<typeof ThemeProvider>;

export const Base: Story = {
    args: {
        theme: {}
    },
    render: (args) => (
        <ThemeProvider>
            <Chip label="Teeeeest" onDelete={(e) => { alert('closing'); }} color="primary" />
        </ThemeProvider>
    ),
};

export const Dark: Story = {
    args: {
        mode: 'dark',
        theme: {}
    },
    render: (args) => (
        <Chip label="Teeeeest" onDelete={(e) => { alert('closing'); }} color="primary" />
    ),
};

export const Branded: Story = {
    args: {
        isBranded: true,
        theme: {
            branding: {
                palette: {
                    primary: { main: '#C38A5F', contrastText: '#FFFFFF' },
                    secondary: { main: '#7A7A9D', contrastText: '#FFFFFF' },
                    error: { main: '#9B2757', contrastText: '#FFFFFF' },
                    warnings: { main: '#FF7300', contrastText: '#FFFFFF' },
                    info: { main: '#D8C193', contrastText: '#FFFFFF' },
                    success: { main: '#96D5D0', contrastText: '#FFFFFF' },
                }
            }
        }
    },
    render: (args) => (
        <Chip label="Teeeeest" onDelete={(e) => { alert('closing'); }} color="primary" />
    ),
};





// const StyledPanel = styled.div`
// 	width: 100%;
// 	height: 100%;
// 	background-color: ${({ theme }) => theme.colors.bodyBackground};
// `;

// const Template = (args) => {
// 	const gigjoPalette: TPaletteDefinition = {
// 		primary: '#C38A5F',
// 		secondary: '#7A7A9D',
// 		error: '#9B2757',
// 		warning: '#FF7300',
// 		info: '#D8C193',
// 		success: '#96D5D0',

// 		alert: '#9B2757',
// 		background: '#F5F5F5',
// 		highlight: '#C38A5F',
// 		low: '#FFB400',
// 		main: '#121453',
// 		medium: '#FF7300',
// 		secondaryOne: '#7A7A9D',
// 		secondaryTwo: '#B6B5CB',
// 		// success: '#96D5D0',
// 		support: '#D8C193',
// 		tabBarCover: '#121453',
// 		tabBarCoverTwo: '#FFFFFF',
// 		widgetsNegTexts: '#FFFFFF',
// 	};

// 	const gigjoBrand: TBrandDefinition = {
// 		palette: {
// 			tabBarCover: '#121453',
// 			primary: '#C38A5F',
// 		},
// 		isBranded: true,
// 		logo: { main: 'web_mobile_logo.png' },
// 		logosRootUrl: 'https://dev-gigjo.oseven.io/branding/gigdrive/',
// 		safeMiles: { name: null },
// 	};

// 	const Content = () => {
// 		const theme = useTheme();
// 		// debugger;
// 		return (
// 			<div style={{ backgroundColor: theme.palette.background.paper }}>
// 				<p>Current mode {theme.palette.mode}</p>
// 				<Chip
// 					label="Teeeeest"
// 					onDelete={(e) => {
// 						alert('closing');
// 					}}
// 					color="primary"
// 				/>
// 				<br />
// 				<img
// 					src={`${theme?.brand?.logosRootUrl ?? ''}${
// 						theme?.brand?.logo?.main ?? ''
// 					}`}
// 					style={{ maxHeight: '5rem' }}
// 					alt="logo"
// 				/>
// 				{theme?.modeIsToggable === true && (
// 					<button type="button" onClick={() => theme.toggleMode()}>
// 						Toggle mode
// 					</button>
// 				)}
// 			</div>
// 		);
// 	};

// 	return (
// 		<div
// 			style={{
// 				display: 'flex',
// 				flexDirection: 'column',
// 				alignItems: 'center',
// 				justifyContent: 'center',
// 			}}
// 		>
// 			<h3>Base</h3>
// 			<ThemeProvider>
// 				<Content />
// 			</ThemeProvider>
// 			<br />
// 			<br />
// 			<h3>Branded</h3>
// 			<ThemeProvider brand={gigjoBrand}>
// 				<Content />
// 			</ThemeProvider>
// 			<br />
// 			<br />
// 			<h3>Dark mode</h3>
// 			<ThemeProvider
// 				mode="dark"
// 				darkPalette={{ primary: { main: '#FF0000' } }}
// 				darkBrand={{ palette: { primary: '#FF00FF' } }}
// 			>
// 				<Content />
// 			</ThemeProvider>
// 			<br />
// 			<br />
// 			<h3>Auto mode</h3>
// 			<ThemeProvider
// 				mode="auto"
// 				darkPalette={{ primary: { main: '#FF0000' } }}
// 				darkBrand={{ palette: { primary: '#FF0000' } }}
// 			>
// 				<Content />
// 			</ThemeProvider>
// 		</div>
// 	);
// };

// const meta: Meta<typeof ThemeProvider> = {
// 	title: 'UI/Providers/Theme',
// 	component: ThemeProvider,
// 	// decorators: [
// 	// 	(Story) => (
// 	// 		<ThemeProvider>
// 	// 			<Story />
// 	// 		</ThemeProvider>
// 	// 	),
// 	// ],
// };
// export default meta;

// type Story = StoryObj<typeof ThemeProvider>;

// export const Theme = Template.bind({});
