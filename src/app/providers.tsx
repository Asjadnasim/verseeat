"use client";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { CSSReset } from "@chakra-ui/react";
import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Guisol';
        src: url('/fonts/Guisol.ttf') format('truetype');
        font-weight: bold;
        font-style: normal;
      }
      @font-face {
        font-family: 'INDOSCREEN';
        src: url('/fonts/INDOSCREEN.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
      }
    `}
  />
);

const GlobalStyle = () => (
  <Global
    styles={`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'INDOSCREEN', sans-serif;
  }
`}
  />
);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts /> <CSSReset />
      <GlobalStyle /> {children}
    </ChakraProvider>
  );
}
