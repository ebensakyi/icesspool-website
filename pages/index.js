import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-greem">
      <NextSeo
        title="Home: nine4"
        description="Welcome to ICESSPOOL."
        canonical="https://icesspool.net/"
        openGraph={{
          url: "https://icesspool.net/",
        }}
      />
      <Head>
        <title>ICESSPOOL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
