import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Prueba práctica de himnos</title>
        <meta name="description" content="Prueba práctica de himnos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/x-icon"
          href="https://www.churchofjesuschrist.org/services/platform/v4/resources/static/image/favicon.ico"
        ></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
