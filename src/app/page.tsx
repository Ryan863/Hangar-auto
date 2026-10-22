import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import DifferentialsSection from '@/components/DifferentialsSection';
import SocialProofSection from '@/components/SocialProofSection';
import FAQSection from '@/components/FAQSection';
import LocationSection from '@/components/LocationSection';
import FooterSection from '@/components/FooterSection';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#09090B] text-zinc-100 selection:bg-zinc-700 selection:text-white">
      {/* Sticky Editorial Navbar */}
      <Navbar />

      {/* 1st Fold - Full-screen Hero Section with real asset */}
      <HeroSection />

      {/* 2nd Fold - Specialized Modules: Automotive & Hangar Home Residential */}
      <ServicesSection />

      {/* 3rd Fold - Technical Differentials & Engineering Rigor */}
      <DifferentialsSection />

      {/* 4th Fold - Real Social Proof & Google 5.0 Star Reviews */}
      <SocialProofSection />

      {/* 5th Fold - Structured FAQ Accordion */}
      <FAQSection />

      {/* 6th Fold - Location, Open Hours & Direct GPS Navigation */}
      <LocationSection />

      {/* 7th Fold - Pre-footer CTA & Institutional Footer */}
      <FooterSection />

      {/* Floating Mobile WhatsApp Button */}
      <FloatingWhatsApp />
    </main>
  );
}
