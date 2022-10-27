import "../styles/tailwind.css";
import Head from "next/head";
import dynamic from "next/dynamic";
import NextNProgress from "nextjs-progressbar";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Noted. | Simple notes app.</title>
        <meta name="description" content="Simple notes app." />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NextNProgress color="#FFF" />
      <AnimatedCursor />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
