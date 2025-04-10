
import React from 'react';
import { Button } from '@/components/ui/button';
import { Medal, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HackathonBanner = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-teal opacity-10"></div>
      
      <div className="container-section relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-1.5 bg-brand-purple bg-opacity-10 rounded-full text-brand-purple font-medium text-sm">
              <Medal size={16} className="mr-2" />
              Upcoming Hackathon
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
              Cloud Innovation Challenge: Build the Future
            </h2>
            <p className="text-lg text-gray-600">
              Showcase your skills, solve real industry problems, and win exciting prizes. Top performers get direct placement opportunities with our corporate partners.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-2">
              <div className="flex items-center gap-2">
                <Calendar size={20} className="text-brand-purple" />
                <span className="text-gray-700">April 15-17, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} className="text-brand-purple" />
                <span className="text-gray-700">48 Hours</span>
              </div>
            </div>
            
            <div className="pt-2 space-y-4">
              <h3 className="text-lg font-semibold text-brand-dark">Top Prizes</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="text-brand-purple font-bold text-2xl mb-1">₹1,00,000</div>
                  <div className="text-gray-600 text-sm">First Prize</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="text-brand-purple font-bold text-2xl mb-1">₹50,000</div>
                  <div className="text-gray-600 text-sm">Second Prize</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="text-brand-purple font-bold text-2xl mb-1">₹25,000</div>
                  <div className="text-gray-600 text-sm">Third Prize</div>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <Link to="/hackathons">
                <Button className="btn-primary flex items-center gap-2">
                  Register Now <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-brand-dark mb-4">Current Leaderboard</h3>
              
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-gray-50 rounded-md">
                  <div className="text-brand-purple font-bold">1</div>
                  <div className="ml-4">
                    <div className="text-gray-900 font-medium">Team Innovators</div>
                    <div className="text-gray-600 text-sm">IIT Bombay</div>
                  </div>
                  <div className="ml-auto text-brand-purple font-semibold">95.8</div>
                </div>
                
                <div className="flex items-center p-3 bg-gray-50 rounded-md">
                  <div className="text-brand-purple font-bold">2</div>
                  <div className="ml-4">
                    <div className="text-gray-900 font-medium">Cloud Crusaders</div>
                    <div className="text-gray-600 text-sm">BITS Pilani</div>
                  </div>
                  <div className="ml-auto text-brand-purple font-semibold">93.2</div>
                </div>
                
                <div className="flex items-center p-3 bg-gray-50 rounded-md">
                  <div className="text-brand-purple font-bold">3</div>
                  <div className="ml-4">
                    <div className="text-gray-900 font-medium">DevOps Dynamos</div>
                    <div className="text-gray-600 text-sm">NIT Trichy</div>
                  </div>
                  <div className="ml-auto text-brand-purple font-semibold">91.7</div>
                </div>
                
                <div className="flex items-center p-3 bg-gray-50 rounded-md">
                  <div className="text-brand-purple font-bold">4</div>
                  <div className="ml-4">
                    <div className="text-gray-900 font-medium">Tech Titans</div>
                    <div className="text-gray-600 text-sm">VIT Vellore</div>
                  </div>
                  <div className="ml-auto text-brand-purple font-semibold">89.4</div>
                </div>
                
                <div className="flex items-center p-3 bg-gray-50 rounded-md">
                  <div className="text-brand-purple font-bold">5</div>
                  <div className="ml-4">
                    <div className="text-gray-900 font-medium">CodeCraft</div>
                    <div className="text-gray-600 text-sm">Delhi Technological University</div>
                  </div>
                  <div className="ml-auto text-brand-purple font-semibold">87.9</div>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <Link to="/hackathons" className="text-brand-purple font-medium flex items-center justify-center">
                  View Full Leaderboard <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonBanner;
