import React from 'react';

export default function Expertise() {
  // আপনার B-13 সিলেবাস এবং স্কিলসেট অনুযায়ী ফ্রন্টএন্ড ফিচারসমূহ
  const frontFeat = [
    "Architecting complex web apps with React & Next.js Frameworks.",
    "Design System implementation using Tailwind CSS & Hero UI.",
    "Dynamic routing setup via React Router DOM and App Router loops."
  ];

  // আপনার B-13 সিলেবাস এবং স্কিলসেট অনুযায়ী ব্যাকএন্ড ফিচারসমূহ
  const backFeat = [
    "Developing production-ready RESTful APIs with Node.js & Express.js.",
    "Database structural schema mapping using MongoDB & Mongoose ODM.",
    "Implementing secure BetterAuth layers & Role-Based Access Controls."
  ];

  return (
    <section id="expertise" className="w-full px-4 sm:px-6 py-12 bg-indigo-100 relative z-10 font-['Plus_Jakarta_Sans']">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
        
        {/* বাম কার্ড: ফ্রন্টএন্ড ইঞ্জিনিয়ারিং (AOS অ্যানিমেশনসহ) */}
        <div 
          className="bg-white border border-indigo-50 p-6 sm:p-8 rounded-[2rem] shadow-sm hover:shadow-[0_20px_40px_rgba(99,102,241,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          data-aos="fade-right"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-extrabold text-lg shadow-sm">
                <i className="fa-solid fa-code"></i>
              </div>
              <div>
                <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest block">Expertise</span>
                <h3 className="text-xl font-black text-indigo-950">Frontend Engineering</h3>
              </div>
            </div>
            
            <ul className="space-y-3.5">
              {frontFeat.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  <span className="text-indigo-600 font-black text-sm mt-0.5"><i className="fa-solid fa-circle-check"></i></span> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ডান কার্ড: ব্যাকএন্ড আর্কিটেকচার (AOS অ্যানিমেশনসহ) */}
        <div 
          className="bg-white border border-indigo-50 p-6 sm:p-8 rounded-[2rem] shadow-sm hover:shadow-[0_20px_40px_rgba(99,102,241,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          data-aos="fade-left"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-extrabold text-lg shadow-sm">
                <i className="fa-solid fa-server"></i>
              </div>
              <div>
                <span className="text-[10px] font-bold text-purple-500 uppercase tracking-widest block">Infrastructure</span>
                <h3 className="text-xl font-black text-indigo-950">Backend Architecture</h3>
              </div>
            </div>
            
            <ul className="space-y-3.5">
              {backFeat.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  <span className="text-purple-600 font-black text-sm mt-0.5"><i className="fa-solid fa-circle-check"></i></span> {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
