
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Cloud, Database, Server, Code, Brain, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const courseData = [
  {
    id: 1,
    title: 'ServiceNow Development',
    description: 'Master the ServiceNow platform and become a certified developer.',
    icon: Server,
    category: 'Platform',
    level: 'Intermediate',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    id: 2,
    title: 'Salesforce Administration',
    description: 'Learn to manage and customize Salesforce for enterprise needs.',
    icon: Database,
    category: 'Platform',
    level: 'Beginner',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    id: 3,
    title: 'AWS Cloud Architecture',
    description: 'Design and implement scalable systems using AWS services.',
    icon: Cloud,
    category: 'Cloud',
    level: 'Advanced',
    color: 'from-orange-500 to-yellow-600',
  },
  {
    id: 4,
    title: 'DevOps Engineering',
    description: 'Master CI/CD pipelines, containers, and infrastructure as code.',
    icon: Code,
    category: 'Engineering',
    level: 'Advanced',
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 5,
    title: 'AI & Machine Learning',
    description: 'Build intelligent applications with modern AI frameworks.',
    icon: Brain,
    category: 'AI',
    level: 'Intermediate',
    color: 'from-red-500 to-pink-600',
  },
  {
    id: 6,
    title: 'Corporate Innovation',
    description: 'Customized training programs for enterprises and teams.',
    icon: Users,
    category: 'Business',
    level: 'All Levels',
    color: 'from-brand-purple to-brand-teal',
  },
];

const CourseHighlights = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-section">
        <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-brand-purple bg-opacity-10 rounded-full text-brand-purple font-medium text-sm">
            In-demand Skills
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
            Future-Proof Your Skills With Our Expert-Led Courses
          </h2>
          <p className="text-lg text-gray-600">
            Join our industry-aligned training programs designed to make you job-ready for the fastest-growing tech sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseData.map((course) => (
            <Link to="/courses" key={course.id}>
              <Card className="card-hover h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${course.color} text-white flex items-center justify-center mb-4`}>
                    <course.icon size={24} />
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-brand-purple bg-opacity-10 text-brand-purple text-xs font-medium px-2.5 py-0.5 rounded">
                      {course.category}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {course.level}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="mt-auto pt-4 flex justify-between items-center border-t border-gray-100">
                    <span className="text-brand-purple font-medium">Learn More</span>
                    <span className="text-gray-500 text-sm">8-12 weeks</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/courses">
            <button className="btn-outline inline-flex items-center">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CourseHighlights;
