import React from 'react';
import { styled } from '@mui/material/styles';
import { Tab, Tabs } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

const TabLink = styled(Tab, {
	name: 'MuiTabLink',
})(({ theme }) => ({}));

export { Tab, TabContext, TabLink, TabList, TabPanel, Tabs };
