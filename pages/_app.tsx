import "../styles/globals.css";
import type { AppProps } from "next/app";
import ThemeProvider from "../components/ThemeProvider";
import ThemeCSSWrap from "../components/ThemeCSSWrap";
import LanguageProvider from "../components/LanguageProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect } from "react";

const client = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <ThemeCSSWrap>
          <QueryClientProvider client={client}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </ThemeCSSWrap>
      </ThemeProvider>
    </LanguageProvider>
  );
}
