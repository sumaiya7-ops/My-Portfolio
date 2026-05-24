import React from 'react';

export default function Methodology() {
  const steps = [
    { num: "01", name: "Discovery", desc: "Deep diving into your project goals and user audience roadmap.", color: "bg-indigo-50 text-indigo-600" },
    { num: "02", name: "Architecture", desc: "Designing structured schema mapping with secure backend endpoints.", color: "bg-purple-50 text-purple-600" },
    { num: "03", name: "Development", desc: "Writing clean, scalable code using feature-rich full-stack setups.", color: "bg-emerald-50 text-emerald-600" },
    { num: "04", name: "Deployment", desc: "Rigorous system testing followed by smooth production optimization.", color: "bg-amber-50 text-amber-600" }
  ];

  return (
    <section id="methodology" className="w-full px-4 sm:px-6 py-16 sm:py-20 bg-indigo-100 relative z-10 font-['Plus_Jakarta_Sans']">
      <div className="max-w-7xl mx-auto">
        
        {/* সেকশন হেডার (AOS অ্যানিমেশনসহ) */}
        <div className="space-y-3 text-center mb-12 sm:mb-16" data-aos="fade-down">
          <span className="text-[10px] font-bold text-indigo-600 tracking-[0.2em] uppercase bg-white border border-indigo-200 px-4 py-1.5 rounded-full inline-block shadow-sm">
            Methodology
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-indigo-950 tracking-tight leading-tight">
            How I Bring Ideas to Life
          </h2>
          <div className="h-1 w-16 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* কার্ড গ্রিড লেআউট: মোবাইলে ১ কলাম, ট্যাবে ২ কলাম, ডেক্সটপে ৪ কলাম */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              data-aos="fade-up"
              data-aos-delay={idx * 100} // প্রতিটি কার্ড ১০০ মিলি-সেকেন্ড পর পর সিরিয়ালি ভেসে উঠবে
              className="bg-white border border-indigo-50 p-6 sm:p-8 rounded-[2rem] space-y-4 shadow-sm hover:shadow-[0_20px_40px_rgba(99,102,241,0.1)] hover:-translate-y-2 transition-all duration-300 relative z-10 group cursor-pointer"
            >
              {/* নম্বর ব্যাজ */}
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-base ${step.color} group-hover:rotate-12 transition-transform duration-300 shadow-inner`}>
                {step.num}
              </div>
              
              {/* স্টেপ নাম ও ডেসক্রিপশন */}
              <div className="space-y-1.5">
                <h3 className="text-xl font-black text-indigo-950 group-hover:text-indigo-600 transition-colors duration-200">
                  {step.name}
                </h3>
                <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
