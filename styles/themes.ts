import { createTheme, responsiveFontSizes } from "@mui/material";

export let theme = createTheme({
    // typography: {
    //     fontFamily: "MichromaRegular, Arial",
    // },
    palette: {
        primary: {
            main: "#00E6F4",
        },
        secondary: {
            main: "#FC54FF",
        },
    },

    // components: {
    //     MuiCssBaseline: {
    //         styleOverrides: `
    //         @font-face {
    //           font-family: 'MichromaRegular';
    //           font-style: normal;
    //           font-display: swap;
    //           font-weight: 400;
    //           src: local('MichromaRegular'), local('Michroma-Regular'), url(${MichromaRegular}) format('ttf');
    //           unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
    //         }
    //       `,
    //     },
    // },
});

theme.typography.bigTitle = {
    fontFamily: "Strasua",
    
    [theme.breakpoints.up("xl")]: {
        lineHeight:"8rem",
        fontSize: "8rem",
        maxWidth: "1500px",
        fontWeigt: "800",
    },
    [theme.breakpoints.down("xl")]: {
        fontSize: "3.8rem",
        maxWidth: "700px",
    },
    [theme.breakpoints.down("lg")]: {
        // maxWidth: "85%",
    },
    [theme.breakpoints.down("md")]: {
        fontSize: "2.8rem",
        maxWidth: "500px",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "1.8rem",
        maxWidth: "350px",
    },
};


theme.typography.h4Strasua = {...theme.typography.h4, fontFamily: "strasua"}

theme = responsiveFontSizes(theme);
