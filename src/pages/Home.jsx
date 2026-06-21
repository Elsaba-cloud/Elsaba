import React from 'react';
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import AboutSection from '@/components/landing/AboutSection';
import ServicesSection from '@/components/landing/ServicesSection';
import PortfolioSection from '@/components/landing/PortfolioSection';
import WhySection from '@/components/landing/WhySection';
import CorporateSection from '@/components/landing/CorporateSection';
import LocationSection from '@/components/landing/LocationSection';
import ContactForm from '@/components/landing/ContactForm';
import Footer from '@/components/landing/Footer';
import FloatingWhatsApp from '@/components/landing/FloatingWhatsApp';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <WhySection />
      <CorporateSection />
      <LocationSection />
      <ContactForm />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}