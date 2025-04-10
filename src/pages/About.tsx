
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Award, Users, Target, Heart,
  Rocket, Book, Lightbulb, Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Founder & CEO",
      bio: "Former Tech Lead at Google with 15+ years of experience in cloud technologies and AI.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Priya Sharma",
      position: "Head of Education",
      bio: "PhD in Computer Science with expertise in developing curriculum for technical education.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Michael Chen",
      position: "CTO",
      bio: "Full-stack developer and cloud architect with extensive experience in enterprise solutions.",
      image: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    {
      name: "Anita Patel",
      position: "Head of Corporate Relations",
      bio: "Former HR Director at Infosys with deep connections in the tech industry.",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header Banner */}
        <section className="py-16 bg-gradient-to-r from-brand-purple to-brand-teal relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="container-section relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Us</h1>
            <p className="text-white text-xl max-w-2xl mx-auto">
              Empowering the next generation of tech talent with cutting-edge skills and industry connections.
            </p>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-1.5 bg-brand-purple bg-opacity-10 rounded-full text-brand-purple font-medium text-sm mb-4">
                  Our Story
                </div>
                <h2 className="text-3xl font-bold text-brand-dark mb-6">
                  Bridging the Gap Between Education and Industry
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Founded in 2020, SkillSpark Global Academy was born out of a simple observation: traditional education wasn't keeping pace with rapidly evolving tech industry requirements.
                  </p>
                  <p>
                    Our founder, Dr. Rajesh Kumar, after years of working in Silicon Valley, returned to establish a training center that would focus specifically on high-demand niche technologies that are often overlooked in conventional curriculum.
                  </p>
                  <p>
                    What started as a small training program with 30 students has now grown into a global academy with over 5,000 alumni working in leading tech companies worldwide.
                  </p>
                  <p>
                    Our vision is to become the premier destination for specialized tech education, known for producing job-ready professionals who excel in the most in-demand technical roles.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-brand-purple rounded-2xl opacity-5 transform rotate-6"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Team meeting" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission, Vision, Values */}
        <section className="py-16 bg-gray-50">
          <div className="container-section">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1.5 bg-brand-purple bg-opacity-10 rounded-full text-brand-purple font-medium text-sm mb-4">
                Our Foundation
              </div>
              <h2 className="text-3xl font-bold text-brand-dark mb-4">
                Mission, Vision & Values
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do at SkillSpark Global Academy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="h-full card-hover">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-brand-purple bg-opacity-10 text-brand-purple flex items-center justify-center mb-4">
                    <Target size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">Our Mission</h3>
                  <p className="text-gray-600">
                    To bridge the gap between academic education and industry requirements by providing specialized training in high-demand technologies, ensuring our students are job-ready from day one.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="h-full card-hover">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-brand-purple bg-opacity-10 text-brand-purple flex items-center justify-center mb-4">
                    <Rocket size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">Our Vision</h3>
                  <p className="text-gray-600">
                    To become the global leader in specialized tech education, recognized for producing skilled professionals who drive innovation in the technology sector worldwide.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="h-full card-hover">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-brand-purple bg-opacity-10 text-brand-purple flex items-center justify-center mb-4">
                    <Heart size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-4">Our Values</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-brand-purple mr-2">•</span>
                      <span>Excellence in all we do</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-purple mr-2">•</span>
                      <span>Innovation at the core</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-purple mr-2">•</span>
                      <span>Industry-focused education</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-purple mr-2">•</span>
                      <span>Commitment to student success</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-purple mr-2">•</span>
                      <span>Ethical and inclusive practices</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-16">
          <div className="container-section">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1.5 bg-brand-purple bg-opacity-10 rounded-full text-brand-purple font-medium text-sm mb-4">
                The People
              </div>
              <h2 className="text-3xl font-bold text-brand-dark mb-4">
                Meet Our Team
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The experts and industry veterans behind SkillSpark's success.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="h-full card-hover">
                  <CardContent className="p-6 h-full flex flex-col items-center text-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-6">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-dark mb-2">{member.name}</h3>
                    <div className="text-brand-purple font-medium mb-4">{member.position}</div>
                    <p className="text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container-section">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1.5 bg-brand-purple bg-opacity-10 rounded-full text-brand-purple font-medium text-sm mb-4">
                Our Difference
              </div>
              <h2 className="text-3xl font-bold text-brand-dark mb-4">
                Why Choose SkillSpark?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                What sets us apart from traditional educational institutions and other training centers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-start">
                <div className="w-12 h-12 rounded-lg bg-brand-purple bg-opacity-10 text-brand-purple flex-shrink-0 flex items-center justify-center mr-4">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">Industry Expert Instructors</h3>
                  <p className="text-gray-600">
                    Learn from professionals with real-world experience in leading tech companies, not just academic knowledge.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-start">
                <div className="w-12 h-12 rounded-lg bg-brand-purple bg-opacity-10 text-brand-purple flex-shrink-0 flex items-center justify-center mr-4">
                  <Book size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">Specialized Curriculum</h3>
                  <p className="text-gray-600">
                    Our courses focus on niche, high-demand technologies often overlooked in traditional education.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-start">
                <div className="w-12 h-12 rounded-lg bg-brand-purple bg-opacity-10 text-brand-purple flex-shrink-0 flex items-center justify-center mr-4">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">Practical Learning</h3>
                  <p className="text-gray-600">
                    Hands-on projects, hackathons, and real-world problem solving instead of theoretical learning only.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-start">
                <div className="w-12 h-12 rounded-lg bg-brand-purple bg-opacity-10 text-brand-purple flex-shrink-0 flex items-center justify-center mr-4">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">Industry Connections</h3>
                  <p className="text-gray-600">
                    Direct placement opportunities with our network of 100+ partner companies.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-start">
                <div className="w-12 h-12 rounded-lg bg-brand-purple bg-opacity-10 text-brand-purple flex-shrink-0 flex items-center justify-center mr-4">
                  <Globe size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">Global Recognition</h3>
                  <p className="text-gray-600">
                    Our certifications are recognized by leading tech companies worldwide.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-start">
                <div className="w-12 h-12 rounded-lg bg-brand-purple bg-opacity-10 text-brand-purple flex-shrink-0 flex items-center justify-center mr-4">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-2">Community Support</h3>
                  <p className="text-gray-600">
                    Join a thriving community of alumni and industry professionals for networking and growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Impact */}
        <section className="py-16">
          <div className="container-section">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1.5 bg-brand-purple bg-opacity-10 rounded-full text-brand-purple font-medium text-sm mb-4">
                Our Impact
              </div>
              <h2 className="text-3xl font-bold text-brand-dark mb-4">
                Making a Difference
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The impact we've had on students, businesses, and the tech ecosystem.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <Card className="h-full text-center card-hover">
                <CardContent className="p-6 h-full flex flex-col items-center">
                  <div className="text-4xl font-bold text-brand-purple mb-2">5,000+</div>
                  <p className="text-gray-600">Students Trained</p>
                </CardContent>
              </Card>
              
              <Card className="h-full text-center card-hover">
                <CardContent className="p-6 h-full flex flex-col items-center">
                  <div className="text-4xl font-bold text-brand-purple mb-2">92%</div>
                  <p className="text-gray-600">Placement Rate</p>
                </CardContent>
              </Card>
              
              <Card className="h-full text-center card-hover">
                <CardContent className="p-6 h-full flex flex-col items-center">
                  <div className="text-4xl font-bold text-brand-purple mb-2">100+</div>
                  <p className="text-gray-600">Corporate Partners</p>
                </CardContent>
              </Card>
              
              <Card className="h-full text-center card-hover">
                <CardContent className="p-6 h-full flex flex-col items-center">
                  <div className="text-4xl font-bold text-brand-purple mb-2">20+</div>
                  <p className="text-gray-600">Global Locations</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/courses" className="btn-primary inline-block">
                Join Our Community
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
