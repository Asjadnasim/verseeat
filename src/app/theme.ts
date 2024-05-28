import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Guisol', sans-serif`,
    body: `'INDOSCREEN', sans-serif`,
  },
  colors: {
    primary: {
      50: "#F0F5FF",
      100: "#D0E2FF",
      200: "#A1C4FF",
      300: "#73A8FF",
      400: "#4589FF",
      500: "#2563EB",
      600: "#1D4ED8",
      700: "#1E40AF",
      800: "#1E3A8A",
      900: "#1E3A8A",
    },
    secondary: {
      // define your secondary color shades here
    },
    yellow: {
      100: "#DFAB45",
      200: "#E6D8C3",
    },
    purple: {
      100: "#331D2E",
      200: "#7500CB",
    },
    red: {
      100: "#F05C5C",
    },
  },

  shadows: {
    card: "7px 7px 0px 0px rgba(51,29,46,1)",
    "card-light": "7px 7px 0px 0px #DFAB45",
    "card-dark": "7px 7px 0px 0px #331D2E",
  },

  textStyles: {
    "header-link": {
      fontSize: "18px",
      fontWeight: "900",
      lineHeight: "30px",
      fontFamily: "Guisol",
      color: "purple.100",
      textTransform: "uppercase",
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontSize: { base: "35px", md: "70px" },
      },
    },
    Text: {
      baseStyle: {
        fontSize: { base: "14px", md: "16px" },
      },
    },
  },
});

export default theme;
