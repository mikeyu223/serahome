import { PromoBanner } from "@/components/PromoBanner";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Featured } from "@/components/Featured";
import { Method } from "@/components/Method";
import { Experiences } from "@/components/Experiences";
import { Stories } from "@/components/Stories";
import { Split } from "@/components/Split";
import { Grow } from "@/components/Grow";
import { Book } from "@/components/Book";
import { Footer } from "@/components/Footer";
import { LocalBusinessJsonLd } from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />
      <PromoBanner />
      <Nav />
      <main>
        <Hero />
        <Services />
        <Featured />
        <Method />
        <Experiences />
        <Stories />
        <Split />
        <Grow />
        <Book />
      </main>
      <Footer />
    </>
  );
}
