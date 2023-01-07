import "../styles/globals.css";
import type { AppProps } from "next/app";
import ThemeProvider from "../components/ThemeProvider";
import ThemeCSSWrap from "../components/ThemeCSSWrap";
import LanguageProvider from "../components/LanguageProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <ThemeCSSWrap>
          <Component {...pageProps} />
        </ThemeCSSWrap>
      </ThemeProvider>
    </LanguageProvider>
  );
}
