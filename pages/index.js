import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Detail from "../components/detail";
import Survey from "../components/survey";
import Footer from "../components/footer";
import Head from "next/head";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Head>
        <title>Pengkajian Phlebitis</title>
        <meta property="og:title" content="Pengkajian Phlebitis" key="title" />
      </Head>
      <Hero />
      <Detail />
      <Survey />
      <Footer />
    </div>
  );
}
