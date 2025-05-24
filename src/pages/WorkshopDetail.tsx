
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar, Clock, MapPin, Users, Star, 
  CheckCircle, ArrowLeft, DollarSign, Award,
  Coffee, Laptop, Wifi, ParkingCircle
} from 'lucide-react';

const WorkshopDetail = () => {
  const { workshopId } = useParams();

  // Sample workshop data - in a real app, this would come from an API
  const workshop = {
    id: 1,
    title: 'ServiceNow Development Bootcamp',
    description: 'Master ServiceNow platform development through intensive hands-on training. This comprehensive workshop covers everything from basic scripting to advanced application development.',
    fullDescription: 'Join our intensive 3-day ServiceNow Development Bootcamp designed for developers and IT professionals looking to master the ServiceNow platform. This hands-on workshop combines theoretical knowledge with practical exercises, ensuring you leave with real-world skills and confidence.',
    instructor: 'Sarah Johnson',
    instructorBio: 'Senior ServiceNow Architect with 8+ years of experience. Certified ServiceNow Application Developer and Technical Consultant.',
    instructorImage: '/placeholder.svg',
    category: 'Platform',
    duration: '3 days',
    date: '2024-02-15',
    endDate: '2024-02-17',
    time: '9:00 AM - 5:00 PM',
    location: 'Online',
    price: '$299',
    originalPrice: '$399',
    capacity: 25,
    enrolled: 18,
    rating: 4.8,
    reviews: 24,
    level: 'Intermediate',
    prerequisites: ['Basic JavaScript knowledge', 'Understanding of web technologies', 'ServiceNow platform familiarity (helpful but not required)'],
    includes: ['All workshop materials', 'Hands-on lab access', 'Certificate of completion', 'Lifetime access to recordings', '30-day Q&A support'],
    schedule: [
      {
        day: 'Day 1',
        title: 'ServiceNow Fundamentals',
        topics: ['Platform overview', 'Navigation and UI', 'Tables and forms', 'Basic scripting']
      },
      {
        day: 'Day 2',
        title: 'Advanced Development',
        topics: ['Business rules', 'Client scripts', 'UI policies', 'Workflow development']
      },
      {
        day: 'Day 3',
        title: 'Integration & Best Practices',
        topics: ['REST APIs', 'Integration patterns', 'Testing strategies', 'Deployment best practices']
      }
    ],
    facilities: ['High-speed WiFi', 'Laptop rentals available', 'Coffee & snacks', 'Parking available'],
    testimonials: [
      {
        name: 'Mike Chen',
        role: 'IT Developer',
        comment: 'Excellent workshop! The hands-on approach really helped me understand ServiceNow development.',
        rating: 5
      },
      {
        name: 'Lisa Rodriguez',
        role: 'System Administrator',
        comment: 'Sarah is an amazing instructor. The workshop was well-structured and informative.',
        rating: 5
      }
    ]
  };

  if (!workshop) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-700 mb-4">Workshop not found</h1>
            <Link to="/workshops">
              <Button>Back to Workshops</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Breadcrumb */}
        <section className="py-4 bg-gray-50 border-b">
          <div className="container-section">
            <Link to="/workshops" className="inline-flex items-center text-brand-purple hover:underline">
              <ArrowLeft size={16} className="mr-2" />
              Back to Workshops
            </Link>
          </div>
        </section>

        {/* Workshop Header */}
        <section className="py-12 bg-white">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="mb-4">
                  <span className="bg-brand-purple bg-opacity-10 text-brand-purple text-sm font-medium px-3 py-1 rounded-full">
                    {workshop.category}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">{workshop.title}</h1>
                <p className="text-xl text-gray-600 mb-6">{workshop.description}</p>
                
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center">
                    <Calendar className="text-brand-purple mr-2" size={20} />
                    <span className="text-gray-700">{new Date(workshop.date).toLocaleDateString()} - {new Date(workshop.endDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="text-brand-purple mr-2" size={20} />
                    <span className="text-gray-700">{workshop.duration} • {workshop.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-brand-purple mr-2" size={20} />
                    <span className="text-gray-700">{workshop.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="text-brand-purple mr-2" size={20} />
                    <span className="text-gray-700">{workshop.enrolled}/{workshop.capacity} enrolled</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <Star className="text-yellow-400 fill-current mr-1" size={20} />
                    <span className="font-semibold">{workshop.rating}</span>
                    <span className="text-gray-600 ml-1">({workshop.reviews} reviews)</span>
                  </div>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-700">{workshop.level} level</span>
                </div>
              </div>

              {/* Booking Card */}
              <div className="lg:col-span-1">
                <Card className="sticky top-8">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-3xl font-bold text-brand-purple">{workshop.price}</span>
                        {workshop.originalPrice && (
                          <span className="text-lg text-gray-500 line-through ml-2">{workshop.originalPrice}</span>
                        )}
                      </div>
                      <span className="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded">
                        Save ${parseInt(workshop.originalPrice?.slice(1) || '0') - parseInt(workshop.price.slice(1))}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full bg-brand-purple text-lg py-3">
                      Enroll Now
                    </Button>
                    <div className="text-center text-sm text-gray-600">
                      {workshop.capacity - workshop.enrolled} spots remaining
                    </div>
                    <div className="border-t pt-4 space-y-2">
                      <h4 className="font-semibold text-gray-700">What's included:</h4>
                      {workshop.includes.map((item, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Workshop Details */}
        <section className="py-12 bg-gray-50">
          <div className="container-section">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-brand-dark mb-4">About This Workshop</h3>
                    <p className="text-gray-600 mb-6">{workshop.fullDescription}</p>
                    
                    <h4 className="text-lg font-semibold text-brand-dark mb-3">Prerequisites</h4>
                    <ul className="space-y-2 mb-6">
                      {workshop.prerequisites.map((req, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle size={16} className="text-brand-purple mr-2" />
                          <span className="text-gray-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-brand-dark mb-3">Facilities & Amenities</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {workshop.facilities.map((facility, index) => {
                        const icons = {
                          'High-speed WiFi': Wifi,
                          'Laptop rentals available': Laptop,
                          'Coffee & snacks': Coffee,
                          'Parking available': ParkingCircle
                        };
                        const Icon = icons[facility as keyof typeof icons] || CheckCircle;
                        
                        return (
                          <div key={index} className="flex items-center">
                            <Icon size={16} className="text-brand-purple mr-2" />
                            <span className="text-sm text-gray-600">{facility}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="schedule" className="mt-8">
                <h3 className="text-2xl font-bold text-brand-dark mb-6">Workshop Schedule</h3>
                <div className="space-y-6">
                  {workshop.schedule.map((day, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg text-brand-purple">{day.day}: {day.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {day.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-center">
                              <CheckCircle size={16} className="text-green-500 mr-2" />
                              <span className="text-gray-600">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="instructor" className="mt-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <img 
                      src={workshop.instructorImage} 
                      alt={workshop.instructor}
                      className="w-32 h-32 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-brand-dark mb-2">{workshop.instructor}</h3>
                    <p className="text-gray-600 mb-4">{workshop.instructorBio}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <Star className="text-yellow-400 fill-current mr-1" size={20} />
                        <span className="font-semibold">{workshop.rating}</span>
                        <span className="text-gray-600 ml-1">instructor rating</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="text-brand-purple mr-1" size={20} />
                        <span className="text-gray-600">Certified Expert</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-8">
                <h3 className="text-2xl font-bold text-brand-dark mb-6">Student Reviews</h3>
                <div className="space-y-6">
                  {workshop.testimonials.map((testimonial, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="font-semibold text-brand-dark">{testimonial.name}</h4>
                            <p className="text-sm text-gray-600">{testimonial.role}</p>
                          </div>
                          <div className="flex">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="text-yellow-400 fill-current" size={16} />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700">{testimonial.comment}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WorkshopDetail;
