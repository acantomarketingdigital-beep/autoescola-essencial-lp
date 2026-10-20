import { About } from "@/components/About";
import { Automatic } from "@/components/Automatic";
import { Categories } from "@/components/Categories";
import { Differentials } from "@/components/Differentials";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Location } from "@/components/Location";
import { Packages } from "@/components/Packages";
import { Payment } from "@/components/Payment";
import { Reviews } from "@/components/Reviews";
import { StatsBar } from "@/components/StatsBar";
import { Structure } from "@/components/Structure";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Categories />
        <Automatic />
        <Differentials />
        <HowItWorks />
        <Packages />
        <Structure />
        <Reviews />
        <Payment />
        <Faq />
        <Location />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
