import React from 'react';
import { Award, Building2, CheckCircle } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      name: 'ISO 9001:2015',
      subtitle: 'Quality Management',
      icon: Award,
      color: 'text-blue-600',
    },
    {
      name: 'MSME Registered',
      subtitle: 'Government of India',
      icon: CheckCircle,
      color: 'text-orange-600',
    },
    {
      name: 'Ministry of Corporate Affairs',
      subtitle: 'Government of India',
      icon: Building2,
      color: 'text-amber-600',
    },
  ];

  return (
    <div className="bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-center text-slate-600 font-semibold text-sm mb-10">Certifications & Recognition</h3>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-28 h-28 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg border border-slate-200 flex items-center justify-center shadow-sm hover:shadow-lg transition-all duration-300 group`}>
                  <IconComponent className={`w-16 h-16 ${cert.color} group-hover:scale-110 transition-transform duration-300 opacity-70`} />
                </div>
                <p className="text-xs text-slate-600 mt-3 font-semibold text-center">{cert.name}</p>
                <p className="text-xs text-slate-400 text-center">{cert.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
