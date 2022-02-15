import { createTheme, ThemeProvider } from "@mui/material";


const AppThemeProvider = ({ children }) => {

    const theme = createTheme({
        palette: {
            primary: {
                main: "#f06100",
            },
            neutral: {
                main: "#FFF"
            },
            success: {
                main: "#07e101"
            },
            error: {
                main: "#EA3741"
            }
        },
        typography: {
            fontFamily: "Arial, sans-serif"
        }
    });

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default AppThemeProvider;