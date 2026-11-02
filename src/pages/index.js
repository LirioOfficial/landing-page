import Head from "next/head";
import Menu from "@/components/Menu";
import HomeTop from "@/components/HomeTop";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lírio | Tecnologia e desenvolvimento</title>
        <meta
          name="description"
          content="A Lírio desenvolve soluções digitais que unem criatividade, estratégia e tecnologia."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/lirio.svg" type="image/svg+xml" />
      </Head>

      <Menu />

      <main>
        <HomeTop />
        <About />
        <Services />
        <Projects />
        <Team />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
