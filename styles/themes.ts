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
    typography: {
        bigTitle: {
            fontSize: "6rem",
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
    [theme.breakpoints.up("xl")]: {
        fontSize: "6rem",
        maxWidth: "90%",
        fontWeigt: "800",
    },
    [theme.breakpoints.down("xl")]: {
        fontSize: "3.4rem",
        maxWidth: "65%",
    },
    [theme.breakpoints.down("lg")]: {
        maxWidth: "85%",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "1.8rem",
        maxWidth: "100%",
    },
};

theme = responsiveFontSizes(theme);
