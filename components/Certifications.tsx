import React, { useState } from 'react';
import { Building2 } from 'lucide-react';

const Certifications: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

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
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Ministry_of_Corporate_Affairs%2C_GoI_logo.png/200px-Ministry_of_Corporate_Affairs%2C_GoI_logo.png',
      fallback: true,
    },
  ];

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  return (
    <div className="bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-center text-slate-600 font-semibold text-sm mb-10">Certifications & Recognition</h3>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {certifications.map((cert, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-28 h-28 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg border border-slate-200 flex items-center justify-center shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
                {imageErrors[index] ? (
                  <div className="flex flex-col items-center justify-center text-slate-400">
                    <Building2 className="w-12 h-12 mb-1" />
                    <p className="text-xs font-semibold text-center px-2">{cert.name}</p>
                  </div>
                ) : (
                  <img 
                    src={cert.image} 
                    alt={cert.name}
                    className="w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-300"
                    onError={() => handleImageError(index)}
                  />
                )}
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
