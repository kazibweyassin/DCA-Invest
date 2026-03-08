import Nav from "./components/Nav";
import Hero from "./components/Hero";
import WhyDCA from "./components/WhyDCA";
import WhatWeOffer from "./components/WhatWeOffer";
import HowItWorks from "./components/HowItWorks";
import WhoItsFor from "./components/WhoItsFor";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-[#fdfbf7]">
      <Nav />
      <Hero />
      <WhyDCA />
      <WhatWeOffer />
      <HowItWorks />
      <WhoItsFor />
      <ContactCTA />
      <Footer />
    </div>
  );
}
