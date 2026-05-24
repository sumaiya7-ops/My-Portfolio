import React from 'react';

export default function FinalCTA() {
  return (
    <section id="final-cta" className="w-full px-4 sm:px-6 py-12 bg-indigo-100 relative z-10 font-['Plus_Jakarta_Sans']">
      
      {/* গ্লো ইফেক্ট ব্যাকগ্রাউন্ড কার্ড (AOS অ্যানিমেশনসহ) */}
      <div 
        className="max-w-5xl mx-auto bg-white border border-indigo-50 p-8 sm:p-12 md:p-16 rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_25px_60px_rgba(165,180,252,0.3)] text-center space-y-6 relative overflow-hidden group cursor-pointer"
        data-aos="zoom-in"
      >
        
        {/* ডেকোরেটিভ ইনডিগো লাক্সারি ব্যাকগ্রাউন্ড লাইট গ্লো ইফেক্ট */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:scale-175 transition duration-700"></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none group-hover:scale-175 transition duration-700"></div>

        {/* কোর কন্টেন্ট টেক্সট এরিয়া */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-indigo-950 tracking-tight leading-tight transition-transform duration-500 group-hover:scale-[1.01]">
          Your Vision, My Expertise
        </h2>
        
        <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
          Let's collaborate to engineer something remarkable that pushes the absolute boundaries of full-stack performance and flawless user experience on the web.
        </p>

        {/* ইন্টারঅ্যাক্টিভ অ্যাকশন বাটন */}
        <div className="pt-2">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-300/50 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 cursor-pointer"
          >
            <span>Hire Me Now</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">🚀</span>
          </a>
        </div>
        
      </div>
    </section>
  );
}
