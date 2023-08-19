import Head from "next/head";
import Header from "../components/Header";
import LotteryEntrance from "../components/LotteryEntrance";
export default function Home() {
  return (
    <>
      <Head>
        <title>YaRaffle</title>
        <meta name="description" content="our lottery DAPP" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <LotteryEntrance />
    </>
  );
}
