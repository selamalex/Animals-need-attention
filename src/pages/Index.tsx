import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import ImpactSection from "@/components/ImpactSection";
import GallerySection from "@/components/GallerySection";
import DonateSection from "@/components/DonateSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="bg-background text-foreground font-sans antialiased">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <WhatWeDoSection />
    <ImpactSection />
    <GallerySection />
    <DonateSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
