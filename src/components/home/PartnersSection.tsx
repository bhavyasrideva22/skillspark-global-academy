
import React from 'react';

const partners = [
  { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
  { name: "Amazon Web Services", logo: "https://logo.clearbit.com/aws.amazon.com" },
  { name: "Google Cloud", logo: "https://logo.clearbit.com/cloud.google.com" },
  { name: "Salesforce", logo: "https://logo.clearbit.com/salesforce.com" },
  { name: "ServiceNow", logo: "https://logo.clearbit.com/servicenow.com" },
  { name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
  { name: "Oracle", logo: "https://logo.clearbit.com/oracle.com" },
  { name: "Infosys", logo: "https://logo.clearbit.com/infosys.com" }
];

const universities = [
  { name: "Stanford University", logo: "https://logo.clearbit.com/stanford.edu" },
  { name: "MIT", logo: "https://logo.clearbit.com/mit.edu" },
  { name: "Harvard University", logo: "https://logo.clearbit.com/harvard.edu" },
  { name: "IIT Delhi", logo: "https://logo.clearbit.com/iitd.ac.in" },
  { name: "ETH Zurich", logo: "https://logo.clearbit.com/ethz.ch" },
  { name: "NTU Singapore", logo: "https://logo.clearbit.com/ntu.edu.sg" }
];

const PartnersSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-section">
        <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-brand-purple bg-opacity-10 rounded-full text-brand-purple font-medium text-sm">
            Our Ecosystem
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
            Trusted By Leading Organizations
          </h2>
          <p className="text-lg text-gray-600">
            We collaborate with top tech companies and educational institutions to deliver industry-relevant training.
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold text-brand-dark mb-6 text-center">Corporate Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {partners.map((partner) => (
                <div key={partner.name} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24">
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

          <div>
            <h3 className="text-xl font-semibold text-brand-dark mb-6 text-center">Academic Collaborators</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {universities.map((university) => (
                <div key={university.name} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24">
                  <img 
                    src={university.logo} 
                    alt={university.name} 
                    className="max-h-10 max-w-[120px] object-contain"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/120x40?text=" + university.name;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
