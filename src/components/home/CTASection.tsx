
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container-section">
        <div className="relative overflow-hidden rounded-2xl p-8 md:p-12 lg:p-16 bg-gradient-to-r from-brand-purple to-brand-teal">
          {/* Abstract shapes in background */}
          <div className="absolute top-0 right-0 h-64 w-64 bg-white opacity-10 rounded-full translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 h-40 w-40 bg-white opacity-10 rounded-full -translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Accelerate Your Tech Career?
            </h2>
            <p className="text-white text-opacity-90 text-lg mb-8">
              Join SkillSpark Global Academy today and gain the skills that are in high demand across the tech industry. Start your journey towards a successful tech career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses">
                <Button className="bg-white text-brand-purple hover:bg-opacity-90 text-base px-8 py-6">
                  Explore Courses
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-purple text-base px-8 py-6">
                  Contact Us <ChevronRight size={16} className="ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
