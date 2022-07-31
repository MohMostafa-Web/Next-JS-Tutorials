import "../styles/globals.css"; // import global css file
import "bootstrap/dist/css/bootstrap.min.css"; // import bootstrap minified css file
import { ThemeProvider } from "styled-components"; // import Component "ThemeProvider" from Styled Components

/* Create customized theme of colors */
const theme = {
  colors: {
    primary: "#355c7d",
    secondary: "#738733"
  }
}

function MyApp({ Component, pageProps }) {
  return (
    /* Wrapping <Component/> with <ThemeProvider /> */
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
