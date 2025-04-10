
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 h-96 w-96 bg-brand-purple opacity-5 rounded-full translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 h-64 w-64 bg-brand-teal opacity-5 rounded-full -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container-section relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <div className="inline-block px-4 py-1.5 bg-brand-purple bg-opacity-10 rounded-full text-brand-purple font-medium text-sm">
              Next-Gen Tech Training
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight">
              Level Up Your <span className="text-brand-purple">Tech Career</span> With Expert Coaching
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Gain in-demand skills in ServiceNow, Salesforce, AI, Cloud, and DevOps. Join thousands of students and professionals transforming their careers.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/courses">
                <Button className="btn-primary flex items-center gap-2 text-base">
                  Explore Courses <ArrowRight size={16} />
                </Button>
              </Link>
              <Link to="/hackathons">
                <Button variant="outline" className="btn-outline text-base">
                  Join Hackathon
                </Button>
              </Link>
              <Link to="/corporate">
                <Button variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white text-base">
                  Partner With Us
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-3">
                <div className="h-10 w-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-medium">JD</div>
                <div className="h-10 w-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-medium">KP</div>
                <div className="h-10 w-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-medium">MR</div>
                <div className="h-10 w-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-medium">+</div>
              </div>
              <p className="text-gray-600 text-sm">Trusted by <span className="font-semibold">2,000+</span> students & professionals</p>
            </div>
          </div>

          <div className="relative animate-slide-down">
            <div className="absolute inset-0 bg-brand-purple rounded-2xl opacity-5 transform rotate-6"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Students collaborating" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
