import useSWR from "swr";
import { useState } from "react";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider, GlobalStyles } from "@mantine/core";
import Layout from "@/components/Layout";
import Head from "next/head";
import { ArtPiecesProvider } from "@/context/ArtPiecesContext";

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "cyan",
  colors: {},
});

const API_URL = "https://example-apis.vercel.app/api/art";
const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(API_URL, fetcher);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;

  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Layout>
        <ArtPiecesProvider>
          <Head>
            <title>Janosch & Javier App</title>
          </Head>
          <Component {...pageProps} globalData={data} />
        </ArtPiecesProvider>
      </Layout>
    </MantineProvider>
  );
}
