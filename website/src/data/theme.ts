import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    components: {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    fontFamily: 'sans-serif',
                    fontSize: '16px',
                    backgroundColor: '#292a2cf1',
                    border: '1.5px solid #444950',
                    borderRadius: '8px',
                    maxWidth: 'none',
                    padding: '0px',
                },
                arrow: {
                    color: '#2E2E2E'
                },
            },
            defaultProps: {
                arrow: true,
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: '#444950',
                },
            },
            variants: [
                {
                    props: { orientation: 'horizontal' },
                    style: {
                        height: '1.5px',
                    },
                },
                {
                    props: { orientation: 'vertical' },
                    style: {
                        width: '1.5px',
                    },
                },
            ],
        },
    },
});