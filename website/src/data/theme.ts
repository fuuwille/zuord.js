import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    components: {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: '#2e2e2ef1',
                    border: '1.5px solid #444950',
                    borderRadius: '8px',
                },
                arrow: {
                    color: '#2E2E2E'
                },
            },
            defaultProps: {
                arrow: true,
            },
        },
    },
});