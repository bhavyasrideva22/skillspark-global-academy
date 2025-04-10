
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import CourseHighlights from '@/components/home/CourseHighlights';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import HackathonBanner from '@/components/home/HackathonBanner';
import PartnersSection from '@/components/home/PartnersSection';
import CTASection from '@/components/home/CTASection';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <CourseHighlights />
        <TestimonialsSection />
        <HackathonBanner />
        <PartnersSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
