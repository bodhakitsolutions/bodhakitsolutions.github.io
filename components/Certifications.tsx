import React from 'react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      name: 'ISO 9001:2015',
      subtitle: 'Quality Management',
      image: 'https://www.arenasolutions.com/wp-content/uploads/what-is-iso-9001-compliance.png',
    },
    {
      name: 'MSME Registered',
      subtitle: 'Govt. of India',
      image: 'https://www.sanskriti.edu.in/webimg/btech-in-collaboration.jpg',
    },
    {
      name: 'Ministry of Corporate Affairs',
      subtitle: 'Government of India',
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Emblem_of_India.svg/800px-Emblem_of_India.svg.png',
    },
  ];

  return (
    <div className="bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-center text-slate-600 font-semibold text-sm mb-10">Certifications & Recognition</h3>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {certifications.map((cert, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-28 h-28 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg border border-slate-200 flex items-center justify-center shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <img 
                  src={cert.image} 
                  alt={cert.name}
                  className="w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <p className="text-xs text-slate-600 mt-3 font-semibold text-center">{cert.name}</p>
              <p className="text-xs text-slate-400 text-center">{cert.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
