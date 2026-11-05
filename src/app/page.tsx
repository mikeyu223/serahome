import { PromoBanner } from "@/components/PromoBanner";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Featured } from "@/components/Featured";
import { Method } from "@/components/Method";
import { Experiences } from "@/components/Experiences";
import { Stories } from "@/components/Stories";
import { Split } from "@/components/Split";
import { Book } from "@/components/Book";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
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
        <Book />
      </main>
      <Footer />
    </>
  );
}
