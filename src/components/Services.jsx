import React from 'react';

export default function Services() {
  // আপনার বি-১৩ ব্যাচের দক্ষতাসমূহ ফুটিয়ে তোলার জন্য মডিফাইড সার্ভিসেস ডেটা
  const services = [
    { title: "Full-Stack Engineering", desc: "Building robust, production-ready full stack web applications driven by Next.js and secure MongoDB architectures.", highlight: true },
    { title: "Modern UI/UX Systems", desc: "Creating pixel-perfect, accessible, and interactive user interfaces using Tailwind CSS and Hero UI kits.", highlight: false },
    { title: "Secure Ecosystems", desc: "Implementing absolute session architectures via BetterAuth and advanced role authorization grids.", highlight: false },
    { title: "Commercial E-Commerce", desc: "Engineering feature-rich merchant portals embedded with secure Stripe payment routing channels.", highlight: false },
    { title: "SEO Baseline & Logic", desc: "Optimizing server-side rendering parameters ensuring peak search ranking and lightning fast load speeds.", highlight: false },
  ];

  return (
    <section id="services" className="w-full px-4 sm:px-6 py-16 sm:py-20 bg-indigo-100 relative z-10 font-['Plus_Jakarta_Sans']">
      <div className="max-w-7xl mx-auto">
        
        {/* সেকশন হেডার (AOS অ্যানিমেশনসহ) */}
        <div className="space-y-3 text-left mb-12" data-aos="fade-up">
          <span className="text-[10px] font-bold text-indigo-600 tracking-[0.2em] uppercase bg-white border border-indigo-200 px-3 py-1.5 rounded-full inline-block shadow-sm">
            Value Proposition
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-indigo-950 tracking-tight leading-tight">
            Premium Services For Your Business
          </h2>
        </div>

        {/* সার্ভিসেস গ্রিড লেআউট: মোবাইলে ১ কলাম, ট্যাবলেটে ২ কলাম, ডেক্সটপে ৩ কলাম */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => (
            <div 
              key={idx} 
              data-aos="fade-up"
              data-aos-delay={idx * 100} // প্রতিটি সার্ভিস কার্ড একটার পর একটা সিরিয়ালি ভেসে উঠবে
              className={`p-6 sm:p-8 rounded-[2rem] border transition-all duration-300 flex flex-col justify-between min-h-[260px] sm:min-h-[250px] group cursor-pointer hover:-translate-y-2 shadow-sm ${
                srv.highlight 
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-[0_20px_40px_rgba(79,70,229,0.25)]' 
                : 'bg-white border-indigo-50 text-indigo-950 hover:shadow-[0_20px_40px_rgba(165,180,252,0.15)] hover:border-indigo-400'
              }`}
            >
              <div className="space-y-4">
                {/* আইকন বক্স */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg transition-transform duration-300 group-hover:scale-110 shadow-inner ${srv.highlight ? 'bg-white/20 text-white' : 'bg-indigo-50 text-indigo-600'}`}>
                  <i className="fa-solid fa-bolt"></i>
                </div>
                
                {/* টাইটেল ও ডেসক্রিপশন */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-tight">{srv.title}</h3>
                  <p className={`text-xs sm:text-sm font-medium leading-relaxed ${srv.highlight ? 'text-indigo-100' : 'text-slate-500'}`}>{srv.desc}</p>
                </div>
              </div>
              
              {/* অ্যাকশন বাটন ট্যাগ */}
              <span className={`text-[11px] sm:text-xs font-bold uppercase tracking-wider mt-6 inline-flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300 ${srv.highlight ? 'text-white' : 'text-indigo-600'}`}>
                Explore More <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

