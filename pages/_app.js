import useSWR from "swr";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import Layout from "@/components/Layout";

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "cyan",
});

const API_URL = "https://example-apis.vercel.app/api/art";
const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(API_URL, fetcher);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;

  return (
    <>
      <MantineProvider theme={theme}>
        <Component {...pageProps} globalData={data} />
        <Layout />
      </MantineProvider>
    </>
  );
}
