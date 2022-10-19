import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Introduction from "../components/intro";
import WhatIDO from "../components/whatIDo";

const Home: NextPage = () => {
  return (
    <div className="bg-appBg-light decoration-clone bg-fixed bg_image">
       {/* <style jsx>{`
        .bg_image {
          background-image: url(../assets/images/bg.svg)
        }
      `}</style> */}
      <Head>
        <title>Banu's Portfolio</title>
        <meta name="description" content="I'm loving playing basket ball in the Softwares" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Introduction />
      <WhatIDO />
    </div>
  );
};

export default Home;
