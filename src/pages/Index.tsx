import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { WhatWeDo } from "@/components/WhatWeDo"
import { Programs } from "@/components/Programs"
import { Stats } from "@/components/Stats"
import { GetInvolved } from "@/components/GetInvolved"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatWeDo />
        <Programs />
        <Stats />
        <GetInvolved />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
