
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "The ServiceNow training completely transformed my career prospects. Within two months of certification, I received multiple job offers with a 40% salary increase.",
    author: "Priya Sharma",
    position: "ServiceNow Developer",
    company: "TCS",
    type: "student"
  },
  {
    id: 2,
    content: "As a college student with no prior tech experience, I was worried about job prospects. The AWS Cloud course gave me practical skills that helped me land my dream job.",
    author: "Alexander Lee",
    position: "Cloud Engineer",
    company: "Deloitte",
    type: "student"
  },
  {
    id: 3,
    content: "Our team's productivity increased by 30% after the customized Salesforce training. The ROI has been exceptional and the continuing support is highly valuable.",
    author: "Sarah Williams",
    position: "CTO",
    company: "GreenTech Solutions",
    type: "corporate"
  },
  {
    id: 4,
    content: "The hackathon organized by SkillSpark was challenging and rewarding. Not only did I learn new skills, but I also got placed through the event.",
    author: "Rahul Patel",
    position: "Software Engineer",
    company: "Microsoft",
    type: "student"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20">
      <div className="container-section">
        <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-brand-purple bg-opacity-10 rounded-full text-brand-purple font-medium text-sm">
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
            What Our Students & Partners Say
          </h2>
          <p className="text-lg text-gray-600">
            Discover how our training programs have transformed careers and businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full card-hover">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="mb-6">
                  <div className="text-brand-purple">
                    <Quote size={32} />
                  </div>
                </div>
                <p className="text-gray-700 mb-6 flex-grow italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center mt-auto">
                  <div className="h-12 w-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-gray-600 font-semibold">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-dark">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${testimonial.type === 'student' ? 'bg-brand-purple bg-opacity-10 text-brand-purple' : 'bg-brand-teal bg-opacity-10 text-brand-teal'}`}>
                      {testimonial.type === 'student' ? 'Student' : 'Corporate'}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
