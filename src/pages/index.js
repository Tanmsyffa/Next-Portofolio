import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { personalInfo } from "../data/portfolioData";

export default function Home() {
  return (
    <>
      <Head>
        <title>{`${personalInfo.name} — ${personalInfo.role}`}</title>
        <meta
          name="description"
          content={`${personalInfo.name} - ${personalInfo.role}. ${personalInfo.bio}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`${personalInfo.name} — ${personalInfo.role}`} />
        <meta
          property="og:description"
          content={`${personalInfo.name} - Portofolio Web & Android Developer.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={personalInfo.profileImage} />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>

      <div className="min-h-screen flex flex-col text-foreground">
        <Header />
        <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}