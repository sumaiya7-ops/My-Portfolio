import React from 'react';

export default function FinalCTA() {
  return (
    <section id="final-cta" className="w-full px-4 sm:px-6 py-12 bg-indigo-100 relative z-10 font-['Plus_Jakarta_Sans']">
      
      {/* গ্লো ইফেক্ট ব্যাকগ্রাউন্ড কার্ড */}
      <div 
        className="max-w-5xl mx-auto bg-white border border-indigo-50 p-8 sm:p-12 md:p-16 rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_25px_60px_rgba(165,180,252,0.25)] text-center space-y-6 relative overflow-hidden group"
        data-aos="zoom-in"
      >
        
        {/* ডেকোরেティブ ইনডিగో লাক্সারি ব্যাকগ্রাউন্ড লাইট গ্লো ইফেক্ট */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>

        {/* ইউনিক কন্টেন্ট টেক্সট এরিয়া (ডুপ্লিকেট রিমুভড) */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-indigo-950 tracking-tight leading-tight">
          Ready to Bring Your <br />
          <span className="text-indigo-600">Next Big Idea</span> to Life?
        </h2>
        
        <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
          Whether you need a robust MERN stack architecture, an enterprise Next.js application, or a seamless custom software solution—I'm ready to engineer it for you.
        </p>

        {/* ইন্টারঅ্যাক্টিভ অ্যাকশন বাটন */}
        <div className="pt-2">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-7 py-4 sm:px-9 sm:py-4.5 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-300/50 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 cursor-pointer group/btn"
          >
            <span>Let's Start a Project</span>
            <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5">🚀</span>
          </a>
        </div>
        
      </div>
    </section>
  );
}
