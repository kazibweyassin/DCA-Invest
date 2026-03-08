import Nav from "./components/Nav";
import Hero from "./components/Hero";
import WhyDCA from "./components/WhyDCA";
import WhatWeOffer from "./components/WhatWeOffer";
import HowItWorks from "./components/HowItWorks";
import WhoItsFor from "./components/WhoItsFor";
import ContactCTA from "./components/ContactCTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home() {
  return (
    <div className="bg-[#fdfbf7]">
      <Nav />
      <Hero />
      <WhyDCA />
      <WhatWeOffer />
      <HowItWorks />
      <WhoItsFor />
      <FAQ />
      <ContactCTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
