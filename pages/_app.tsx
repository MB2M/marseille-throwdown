import { theme } from "@/styles/themes";
import { ThemeProvider } from "@mui/system";
import type { AppProps } from "next/app";
import "styles/globals.css";
import "styles/cardAnimation.css"


export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
