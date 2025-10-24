import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@site/src/data/theme';

export default function Layout(props) {
    return (
        <ThemeProvider theme={theme}>
            <OriginalLayout {...props} />
        </ThemeProvider>
    );
}