
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calendar, Code, Database, Cloud, 
  Brain, Users, Search, Filter,
  Clock, MapPin, ChevronRight, Wrench
} from 'lucide-react';

const allWorkshops = [
  {
    id: 1,
    title: 'ServiceNow Development Bootcamp',
    description: 'Intensive hands-on workshop covering ServiceNow platform development, scripting, and best practices.',
    icon: Database,
    category: 'Platform',
    duration: '3 days',
    date: '2024-02-15',
    location: 'Online',
    price: '$299',
    capacity: 25,
    color: 'from-purple-500 to-indigo-600',
  },
  {
    id: 2,
    title: 'AWS Cloud Fundamentals',
    description: 'Learn AWS core services through practical exercises and real-world scenarios.',
    icon: Cloud,
    category: 'Cloud',
    duration: '2 days',
    date: '2024-02-20',
    location: 'San Francisco, CA',
    price: '$199',
    capacity: 30,
    color: 'from-orange-500 to-yellow-600',
  },
  {
    id: 3,
    title: 'AI/ML with Python',
    description: 'Build your first machine learning models using Python, TensorFlow, and real datasets.',
    icon: Brain,
    category: 'AI',
    duration: '2 days',
    date: '2024-02-25',
    location: 'Online',
    price: '$249',
    capacity: 20,
    color: 'from-red-500 to-pink-600',
  },
  {
    id: 4,
    title: 'DevOps with Docker & Kubernetes',
    description: 'Master containerization and orchestration with hands-on Docker and Kubernetes exercises.',
    icon: Code,
    category: 'DevOps',
    duration: '3 days',
    date: '2024-03-01',
    location: 'New York, NY',
    price: '$349',
    capacity: 15,
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 5,
    title: 'Salesforce Lightning Development',
    description: 'Build modern Salesforce applications using Lightning Web Components and Apex.',
    icon: Database,
    category: 'Platform',
    duration: '2 days',
    date: '2024-03-05',
    location: 'Online',
    price: '$229',
    capacity: 25,
    color: 'from-blue-500 to-cyan-600',
  },
  {
    id: 6,
    title: 'Agile Project Management',
    description: 'Learn Scrum, Kanban, and modern project management methodologies through interactive sessions.',
    icon: Users,
    category: 'Management',
    duration: '1 day',
    date: '2024-03-10',
    location: 'Chicago, IL',
    price: '$149',
    capacity: 40,
    color: 'from-brand-purple to-brand-teal',
  },
  {
    id: 7,
    title: 'Cybersecurity Fundamentals',
    description: 'Essential cybersecurity concepts, threat detection, and security best practices.',
    icon: Code,
    category: 'Security',
    duration: '2 days',
    date: '2024-03-15',
    location: 'Online',
    price: '$199',
    capacity: 30,
    color: 'from-gray-600 to-gray-800',
  },
  {
    id: 8,
    title: 'React & Modern JavaScript',
    description: 'Build dynamic web applications with React, hooks, and modern JavaScript features.',
    icon: Code,
    category: 'Development',
    duration: '3 days',
    date: '2024-03-20',
    location: 'Austin, TX',
    price: '$299',
    capacity: 20,
    color: 'from-blue-400 to-blue-600',
  }
];

const Workshops = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDuration, setSelectedDuration] = useState('All');

  const categories = ['All', 'Platform', 'Cloud', 'AI', 'DevOps', 'Management', 'Security', 'Development'];
  const durations = ['All', '1 day', '2 days', '3 days'];

  const filteredWorkshops = allWorkshops.filter(workshop => {
    const matchesSearch = workshop.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           workshop.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || workshop.category === selectedCategory;
    const matchesDuration = selectedDuration === 'All' || workshop.duration === selectedDuration;
    
    return matchesSearch && matchesCategory && matchesDuration;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header Banner */}
        <section className="py-16 bg-gradient-to-r from-brand-purple to-brand-teal relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="container-section relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Workshops</h1>
            <p className="text-white text-xl max-w-2xl mx-auto">
              Join our intensive 1-3 day workshops for hands-on learning and practical skills development.
            </p>
          </div>
        </section>
        
        {/* Filters */}
        <section className="py-8 bg-gray-50 border-b">
          <div className="container-section">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="w-full md:w-1/3 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Search workshops..." 
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-brand-purple" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-3 items-center">
                <div className="flex items-center gap-2">
                  <Filter size={18} className="text-gray-500" />
                  <span className="text-gray-700">Filter:</span>
                </div>
                
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                
                <select 
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-purple"
                >
                  {durations.map(duration => (
                    <option key={duration} value={duration}>{duration}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>
        
        {/* Workshop Listings */}
        <section className="py-16">
          <div className="container-section">
            {filteredWorkshops.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredWorkshops.map((workshop) => (
                  <Card key={workshop.id} className="h-full card-hover">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${workshop.color} text-white flex items-center justify-center mb-4`}>
                        <workshop.icon size={24} />
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="bg-brand-purple bg-opacity-10 text-brand-purple text-xs font-medium px-2.5 py-0.5 rounded">
                          {workshop.category}
                        </span>
                        <span className="text-brand-purple font-bold text-lg">
                          {workshop.price}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-brand-dark mb-2">{workshop.title}</h3>
                      <p className="text-gray-600 mb-4 flex-grow">{workshop.description}</p>
                      <div className="mt-auto pt-4 space-y-3 border-t border-gray-100">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Clock size={16} className="text-gray-500 mr-2" />
                            <span className="text-gray-700">{workshop.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar size={16} className="text-gray-500 mr-2" />
                            <span className="text-gray-700">{new Date(workshop.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <MapPin size={16} className="text-gray-500 mr-2" />
                            <span className="text-gray-700">{workshop.location}</span>
                          </div>
                          <span className="text-sm text-gray-600">{workshop.capacity} spots</span>
                        </div>
                        <Link to={`/workshops/${workshop.id}`}>
                          <Button className="w-full bg-brand-purple">
                            View Details <ChevronRight size={16} className="ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Wrench size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">No workshops found</h3>
                <p className="text-gray-600">Try adjusting your search or filters.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Workshops;
