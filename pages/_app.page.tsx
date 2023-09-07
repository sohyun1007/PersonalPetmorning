import GlobalStyle from "styles/GlobalStyle";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "../styles/fonts.css";
import { OverlayProvider } from "@toss/use-overlay";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "styles/PMDS";
import { useState } from "react";
import { SessionProvider } from "next-auth/react";
import BottomNav from "components/common/BottomNav";
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(lightTheme);

  // const toggleTheme = () => {
  //   if (theme === lightTheme) {
  //     setTheme(darkTheme);
  //   } else {
  //     setTheme(lightTheme);
  //   }
  // };

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Petmourning</title>
      </Head>
      <SessionProvider session={pageProps.session}>
        <GlobalStyle>
          <RecoilRoot>
            <OverlayProvider>
              <div id="global-portal"></div>
              <Component {...pageProps} />
              <BottomNav />
            </OverlayProvider>
          </RecoilRoot>
        </GlobalStyle>
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
