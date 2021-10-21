import React  from 'react';

import { ThemeProvider, createTheme } from "@material-ui/core/styles";


export const TemplateContext = React.createContext(null);


export const TemplateProvider = ({ children }) => {
    const theme = createTheme({
        overrides: {
            MuiDrawer: {
                paperAnchorLeft: {
                    left: 62,
                    top: 19,
                    height: '95%',
                    width: '25.3%',
                    boxShadow: 'none'
                }
            }
        }
    });

    return (
        <TemplateContext.Provider>
            <ThemeProvider theme={theme}>
                {/* <CssBaseline /> */}
                {children}
            </ThemeProvider>
        </TemplateContext.Provider>
    );
}

export default TemplateProvider;
