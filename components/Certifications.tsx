import React from 'react';

const Certifications: React.FC = () => {
  return (
    <div className="bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h3 className="text-center text-slate-600 font-semibold text-sm mb-8">Certifications & Recognition</h3>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {/* ISO Certified Logo */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg border border-slate-200 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-16 h-16 text-blue-600" fill="currentColor" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
                <text x="50" y="35" fontSize="12" fontWeight="bold" textAnchor="middle" fill="currentColor">ISO</text>
                <text x="50" y="55" fontSize="11" fontWeight="bold" textAnchor="middle" fill="currentColor">9001:2015</text>
                <text x="50" y="70" fontSize="9" textAnchor="middle" fill="currentColor" opacity="0.7">CERTIFIED</text>
              </svg>
            </div>
            <p className="text-xs text-slate-600 mt-2 font-semibold">ISO 9001:2015</p>
            <p className="text-xs text-slate-400">Quality Management</p>
          </div>

          {/* MSME Logo */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-gradient-to-br from-orange-50 to-slate-50 rounded-lg border border-slate-200 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-16 h-16 text-orange-600" fill="currentColor" viewBox="0 0 100 100">
                <path d="M50 15C30.7 15 15 30.7 15 50s15.7 35 35 35 35-15.7 35-35-15.7-35-35-35z" fill="none" stroke="currentColor" strokeWidth="2"/>
                <text x="50" y="40" fontSize="11" fontWeight="bold" textAnchor="middle" fill="currentColor">MSME</text>
                <text x="50" y="60" fontSize="10" fontWeight="bold" textAnchor="middle" fill="currentColor">REGISTERED</text>
              </svg>
            </div>
            <p className="text-xs text-slate-600 mt-2 font-semibold">MSME Registered</p>
            <p className="text-xs text-slate-400">Govt. of India</p>
          </div>

          {/* GOV India Logo */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-gradient-to-br from-amber-50 to-slate-50 rounded-lg border border-slate-200 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none">
                {/* Ashoka Chakra */}
                <circle cx="50" cy="50" r="40" stroke="#1f2937" strokeWidth="2"/>
                <circle cx="50" cy="50" r="35" stroke="#f59e0b" strokeWidth="1.5"/>
                
                {/* Center circle */}
                <circle cx="50" cy="50" r="8" fill="#1f2937"/>
                
                {/* Chakra spokes */}
                {[...Array(24)].map((_, i) => {
                  const angle = (i * 15) * Math.PI / 180;
                  const x1 = 50 + 8 * Math.cos(angle);
                  const y1 = 50 + 8 * Math.sin(angle);
                  const x2 = 50 + 30 * Math.cos(angle);
                  const y2 = 50 + 30 * Math.sin(angle);
                  return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f59e0b" strokeWidth="1"/>;
                })}
                
                {/* Text */}
                <text x="50" y="72" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#1f2937">GOV INDIA</text>
              </svg>
            </div>
            <p className="text-xs text-slate-600 mt-2 font-semibold">Government of India</p>
            <p className="text-xs text-slate-400">Verified Partner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
