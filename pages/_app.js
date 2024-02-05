import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "cyan",
});

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  return (
    <>
      <MantineProvider theme={theme}>
        <SWRConfig value={{ fetcher }}>
          <Component {...pageProps} />
        </SWRConfig>
      </MantineProvider>
    </>
  );
}
