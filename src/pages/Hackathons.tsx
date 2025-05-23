
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calendar, Trophy, Users, Clock, 
  ArrowRight, ChevronRight, MapPin, 
  Monitor, Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Hackathons = () => {
  const upcomingHackathons = [
    {
      id: 1,
      title: "Cloud Innovation Challenge",
      date: "April 15-17, 2025",
      description: "Build innovative cloud-native solutions that solve real business problems.",
      location: "Online",
      mode: "Virtual",
      duration: "48 Hours",
      registration: "Open",
      prizes: ["₹1,00,000", "₹50,000", "₹25,000"],
      sponsors: ["AWS", "Google Cloud", "Azure"]
    },
    {
      id: 2,
      title: "AI for Good Hackathon",
      date: "May 5-7, 2025",
      description: "Use artificial intelligence to create solutions for social impact and sustainability.",
      location: "Mumbai",
      mode: "Hybrid",
      duration: "72 Hours",
      registration: "Opening Soon",
      prizes: ["₹1,50,000", "₹75,000", "₹30,000"],
      sponsors: ["IBM", "Microsoft", "Intel"]
    }
  ];

  const pastHackathons = [
    {
      id: 1,
      title: "ServiceNow Innovation Challenge",
      date: "January 10-12, 2025",
      winners: ["Team TechStar (IIT Delhi)", "NowNinjas (BITS Pilani)", "ServiceMasters (VIT)"],
      participants: 500,
      placements: 15
    },
    {
      id: 2,
      title: "Salesforce App Builder Contest",
      date: "November 5-7, 2024",
      winners: ["CloudForce (IIT Bombay)", "SalesGurus (NIT Trichy)", "ForceField (IIIT Hyderabad)"],
      participants: 450,
      placements: 12
    },
    {
      id: 3,
      title: "DevOps Automation Challenge",
      date: "September 15-17, 2024",
      winners: ["Pipeline Pros (DTU)", "ContainerKings (IIT Kanpur)", "GitMasters (COEP)"],
      participants: 350,
      placements: 8
    }
  ];

  const placementPartners = [
    { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
    { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
    { name: "Google", logo: "https://logo.clearbit.com/google.com" },
    { name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
    { name: "Infosys", logo: "https://logo.clearbit.com/infosys.com" },
    { name: "TCS", logo: "https://logo.clearbit.com/tcs.com" },
    { name: "Cognizant", logo: "https://logo.clearbit.com/cognizant.com" },
    { name: "Wipro", logo: "https://logo.clearbit.com/wipro.com" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header Banner */}
        <section className="py-16 bg-gradient-to-r from-brand-purple to-brand-teal relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="container-section relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Hackathons & Placements</h1>
            <p className="text-white text-xl max-w-2xl mx-auto">
              Showcase your skills, solve real-world problems, and get placed at top tech companies.
            </p>
          </div>
        </section>
        
        {/* Upcoming Hackathons */}
        <section className="py-16">
          <div className="container-section">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-dark mb-4">Upcoming Hackathons</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Register for our upcoming hackathons and get a chance to win exciting prizes and placement opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingHackathons.map((hackathon) => (
                <Card key={hackathon.id} className="h-full card-hover">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div className="inline-flex items-center px-3 py-1 bg-brand-purple bg-opacity-10 rounded-full text-brand-purple font-medium text-sm">
                        <Calendar size={16} className="mr-2" />
                        {hackathon.date}
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${hackathon.registration === 'Open' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {hackathon.registration}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-brand-dark mb-3">{hackathon.title}</h3>
                    <p className="text-gray-600 mb-6">{hackathon.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center">
                        <MapPin size={16} className="text-gray-500 mr-2" />
                        <span className="text-gray-700">{hackathon.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Monitor size={16} className="text-gray-500 mr-2" />
                        <span className="text-gray-700">{hackathon.mode}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="text-gray-500 mr-2" />
                        <span className="text-gray-700">{hackathon.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users size={16} className="text-gray-500 mr-2" />
                        <span className="text-gray-700">Team of 2-4</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-brand-dark mb-2">Prizes</h4>
                      <div className="flex space-x-4">
                        {hackathon.prizes.map((prize, index) => (
                          <div key={index} className="flex flex-col items-center">
                            <Trophy size={16} className={`${index === 0 ? 'text-yellow-500' : index === 1 ? 'text-gray-400' : 'text-amber-700'} mb-1`} />
                            <span className="text-brand-dark font-semibold">{prize}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-brand-dark mb-2">Sponsored by</h4>
                      <div className="flex space-x-4">
                        {hackathon.sponsors.map((sponsor, index) => (
                          <span key={index} className="text-gray-600">{sponsor}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <Button className="w-full bg-brand-purple">
                        {hackathon.registration === 'Open' ? 'Register Now' : 'Get Notified'}
                        <ChevronRight size={16} className="ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Leaderboard */}
        <section className="py-16 bg-gray-50">
          <div className="container-section">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-dark mb-4">Current Leaderboard</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Top performing teams from our ongoing Cloud Innovation Challenge.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-brand-purple bg-opacity-5 rounded-md">
                  <div className="text-brand-purple font-bold w-6">1</div>
                  <div className="ml-4 flex-grow">
                    <div className="text-gray-900 font-medium">Team Innovators</div>
                    <div className="text-gray-600 text-sm">IIT Bombay</div>
                  </div>
                  <div className="ml-auto text-brand-purple font-semibold">95.8</div>
                </div>
                
                <div className="flex items-center p-3 bg-gray-50 rounded-md">
                  <div className="text-brand-purple font-bold w-6">2</div>
                  <div className="ml-4 flex-grow">
                    <div className="text-gray-900 font-medium">Cloud Crusaders</div>
                    <div className="text-gray-600 text-sm">BITS Pilani</div>
                  </div>
                  <div className="ml-auto text-brand-purple font-semibold">93.2</div>
                </div>
                
                <div className="flex items-center p-3 bg-gray-50 rounded-md">
                  <div className="text-brand-purple font-bold w-6">3</div>
                  <div className="ml-4 flex-grow">
                    <div className="text-gray-900 font-medium">DevOps Dynamos</div>
                    <div className="text-gray-600 text-sm">NIT Trichy</div>
                  </div>
                  <div className="ml-auto text-brand-purple font-semibold">91.7</div>
                </div>
                
                <div className="flex items-center p-3 bg-gray-50 rounded-md">
                  <div className="text-brand-purple font-bold w-6">4</div>
                  <div className="ml-4 flex-grow">
                    <div className="text-gray-900 font-medium">Tech Titans</div>
                    <div className="text-gray-600 text-sm">VIT Vellore</div>
                  </div>
                  <div className="ml-auto text-brand-purple font-semibold">89.4</div>
                </div>
                
                <div className="flex items-center p-3 bg-gray-50 rounded-md">
                  <div className="text-brand-purple font-bold w-6">5</div>
                  <div className="ml-4 flex-grow">
                    <div className="text-gray-900 font-medium">CodeCraft</div>
                    <div className="text-gray-600 text-sm">Delhi Technological University</div>
                  </div>
                  <div className="ml-auto text-brand-purple font-semibold">87.9</div>
                </div>
                
                <div className="flex items-center p-3 bg-gray-50 rounded-md">
                  <div className="text-brand-purple font-bold w-6">6</div>
                  <div className="ml-4 flex-grow">
                    <div className="text-gray-900 font-medium">CloudNative</div>
                    <div className="text-gray-600 text-sm">IIT Madras</div>
                  </div>
                  <div className="ml-auto text-brand-purple font-semibold">86.3</div>
                </div>
                
                <div className="flex items-center p-3 bg-gray-50 rounded-md">
                  <div className="text-brand-purple font-bold w-6">7</div>
                  <div className="ml-4 flex-grow">
                    <div className="text-gray-900 font-medium">ServerlessNinjas</div>
                    <div className="text-gray-600 text-sm">IIIT Hyderabad</div>
                  </div>
                  <div className="ml-auto text-brand-purple font-semibold">84.7</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Past Hackathons */}
        <section className="py-16">
          <div className="container-section">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-dark mb-4">Past Hackathons</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Check out the results from our previous hackathons and the teams that secured placements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pastHackathons.map((hackathon) => (
                <Card key={hackathon.id} className="h-full card-hover">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <Calendar size={18} className="text-brand-purple mr-2" />
                      <span className="text-gray-600">{hackathon.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-brand-dark mb-4">{hackathon.title}</h3>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-700 mb-2">Winners:</h4>
                      <ol className="space-y-1">
                        {hackathon.winners.map((winner, index) => (
                          <li key={index} className="flex items-start">
                            <span className={`mr-2 ${index === 0 ? 'text-yellow-500' : index === 1 ? 'text-gray-400' : 'text-amber-700'}`}>
                              {index + 1}.
                            </span>
                            <span className="text-gray-700">{winner}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                    
                    <div className="mt-auto space-y-2 pt-3 border-t border-gray-100">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Participants:</span>
                        <span className="font-medium text-brand-dark">{hackathon.participants}+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Placements:</span>
                        <span className="font-medium text-brand-purple">{hackathon.placements} students</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Placement Partners */}
        <section className="py-16 bg-gray-50">
          <div className="container-section">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-dark mb-4">Placement Partners</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Top companies that hire talent directly through our hackathons and training programs.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {placementPartners.map((partner) => (
                <div key={partner.name} className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-10 max-w-[120px] object-contain"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/120x40?text=" + partner.name;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Success Stories */}
        <section className="py-16">
          <div className="container-section">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-dark mb-4">Success Stories</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet some of our students who secured placements through our hackathons.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="h-full card-hover">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="mx-auto w-20 h-20 bg-gray-200 rounded-full mb-4"></div>
                  <h3 className="text-xl font-semibold text-brand-dark text-center mb-2">Rahul Patel</h3>
                  <div className="flex items-center justify-center mb-4">
                    <Award size={16} className="text-brand-purple mr-1" />
                    <span className="text-brand-purple">Placed at Microsoft</span>
                  </div>
                  <p className="text-gray-600 text-center mb-4">
                    "Participating in the DevOps Automation Challenge helped me develop practical skills that impressed recruiters. I received an offer from Microsoft within weeks!"
                  </p>
                  <div className="mt-auto text-center">
                    <span className="text-gray-500 text-sm">DevOps Automation Challenge 2024</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="h-full card-hover">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="mx-auto w-20 h-20 bg-gray-200 rounded-full mb-4"></div>
                  <h3 className="text-xl font-semibold text-brand-dark text-center mb-2">Priya Sharma</h3>
                  <div className="flex items-center justify-center mb-4">
                    <Award size={16} className="text-brand-purple mr-1" />
                    <span className="text-brand-purple">Placed at Infosys</span>
                  </div>
                  <p className="text-gray-600 text-center mb-4">
                    "The ServiceNow Innovation Challenge was my gateway to a career in ITSM. The training and mentorship I received helped me stand out during interviews."
                  </p>
                  <div className="mt-auto text-center">
                    <span className="text-gray-500 text-sm">ServiceNow Innovation Challenge 2025</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="h-full card-hover">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="mx-auto w-20 h-20 bg-gray-200 rounded-full mb-4"></div>
                  <h3 className="text-xl font-semibold text-brand-dark text-center mb-2">Aditya Verma</h3>
                  <div className="flex items-center justify-center mb-4">
                    <Award size={16} className="text-brand-purple mr-1" />
                    <span className="text-brand-purple">Placed at Amazon</span>
                  </div>
                  <p className="text-gray-600 text-center mb-4">
                    "Being part of the winning team in the Cloud Innovation Challenge was a life-changing experience. The exposure to real-world problems prepared me for my role at Amazon."
                  </p>
                  <div className="mt-auto text-center">
                    <span className="text-gray-500 text-sm">Cloud Innovation Challenge 2024</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-brand-purple">
          <div className="container-section text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Showcase Your Skills?</h2>
            <p className="text-white text-opacity-90 text-lg max-w-2xl mx-auto mb-8">
              Join our upcoming hackathons and take the first step towards an exciting tech career with top companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/hackathons">
                <Button className="bg-white text-brand-purple hover:bg-opacity-90 text-base px-8 py-6">
                  Register for Hackathon
                </Button>
              </Link>
              <Link to="/courses">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-purple text-base px-8 py-6">
                  Explore Courses <ArrowRight size={16} className="ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Hackathons;
