import "../styles/globals.css";
import type { AppProps } from "next/app";
import ThemeProvider from "../components/ThemeProvider";
import ThemeCSSWrap from "../components/ThemeCSSWrap";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ThemeCSSWrap>
        <Component {...pageProps} />
      </ThemeCSSWrap>
    </ThemeProvider>
  );
}
