import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="w-full px-4 sm:px-6 pt-12 pb-20 sm:pb-24 bg-indigo-100 relative min-h-[85vh] flex items-center font-['Plus_Jakarta_Sans']">
      
      {/* ব্যাকগ্রাউন্ড ওয়াটারমার্ক টাইপোগ্রাফি - আপনার নাম SUMAIYA করা হয়েছে */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0 overflow-hidden">
        <h1 className="text-[14vw] font-extrabold text-indigo-950/[0.015] tracking-widest uppercase">
          SUMAIYA
        </h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full relative z-10">
        
        {/* বাম কলাম: কন্টেন্ট টেক্সট এবং অ্যাকশন বাটনসমূহ (AOS অ্যানিমেশনসহ) */}
        <div className="lg:col-span-7 space-y-6 text-left" data-aos="fade-right">
          
          {/* অ্যাক্টিভ স্ট্যাটাস ব্যাজ */}
          <div className="inline-flex items-center gap-2 bg-white border border-indigo-200 text-indigo-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for New Projects
          </div>
          
          {/* মেইন টাইটেল এবং ইন্ট্রোডাকশন */}
          <div className="space-y-3">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-indigo-950 tracking-tight leading-tight">
              Building Modern <br className="hidden sm:block" /> Digital Experiences
            </h2>
            <h3 className="text-xs sm:text-sm font-bold text-slate-400 tracking-widest uppercase block pt-1">
              Full-Stack Developer From Bangladesh
            </h3>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
              I'm <span className="text-indigo-600 border-b-4 border-indigo-200">Sumaiya Sorhad Marjiya</span>
            </h1>
          </div>
          
          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed font-medium">
            I specialize in engineering high-performance, scalable web applications using the modern MERN & Next.js ecosystems, with a deep focus on responsive layout stability and secure data workflows.
          </p>
          
          {/* ইন্টারঅ্যাক্টিভ বাটনসমূহ */}
          <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
            <a
              href="#projects"
              className="bg-indigo-600 text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm shadow-md shadow-indigo-100 hover:bg-indigo-700 hover:scale-105 active:scale-98 transition-all duration-300 cursor-pointer"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="bg-white border border-indigo-100 text-indigo-950 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm shadow-sm hover:border-indigo-400 hover:text-indigo-600 hover:scale-105 active:scale-98 transition-all duration-300 cursor-pointer"
            >
              Hire Me
            </a>
          </div>

          {/* স্ট্যাটস মেট্রিক্স প্যানেল */}
          <div className="flex flex-row items-center gap-6 sm:gap-10 pt-6 border-t border-indigo-200/40 max-w-md">
            <div>
              <h4 className="text-xl sm:text-2xl font-black text-indigo-950">20+</h4>
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 font-bold mt-0.5">
                Projects Built
              </p>
            </div>

            <div>
              <h4 className="text-xl sm:text-2xl font-black text-indigo-950">100%</h4>
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 font-bold mt-0.5">
                Commitment
              </p>
            </div>

            <div>
              <h4 className="text-xl sm:text-2xl font-black text-indigo-950">B-13</h4>
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 font-bold mt-0.5">
                Expert Core
              </p>
            </div>
          </div>
        </div>


{/* 💻 ডান কলাম: প্রোফাইল ইমেজ ফ্রেম প্যানেল (AOS অ্যানিমেশনসহ) */}
<div className="lg:col-span-5 flex justify-center w-full mt-6 lg:mt-0" data-aos="fade-left">
  <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-white p-3 shadow-[0_20px_50px_rgba(165,180,252,0.2)] border border-indigo-50 flex items-center justify-center transition-transform duration-500 hover:scale-103">
    
    {/* আপনার আসল প্রোফাইল ইমেজ */}
    <div className="w-full h-full rounded-full overflow-hidden bg-indigo-50/50 border border-indigo-100 relative group shadow-inner">
      <img 
        src="/profile.jpg" 
        alt="Sumaiya Sorhad Marjiya" 
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
      />
    </div>
    
    {/* 👑 বাম ফ্লোটিং ব্যাজ: B-13 মুছে প্রফেশনাল স্ট্যাটাস দেওয়া হলো */}
    <div className="absolute -left-4 sm:-left-6 top-1/4 bg-white/95 border border-indigo-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-md text-center min-w-[80px] sm:min-w-[95px] hover:scale-110 transition-transform duration-300 select-none">
      <span className="block text-indigo-600 text-lg sm:text-xl"><i className="fa-solid fa-briefcase"></i></span>
      <span className="text-[9px] sm:text-[10px] font-black text-indigo-950 uppercase tracking-wider block mt-1">Full-Time</span>
    </div>
    
    {/* 👑 ডান ফ্লোটিং ব্যাজ: প্রজেক্ট সংখ্যার বদলে কোয়ালিটি অ্যাসিওরেন্স দেওয়া হলো */}
    <div className="absolute -right-4 sm:-right-6 bottom-1/4 bg-white/95 border border-indigo-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-md text-center min-w-[80px] sm:min-w-[95px] hover:scale-110 transition-transform duration-300 select-none">
      <span className="block text-amber-500 text-lg sm:text-xl"><i className="fa-solid fa-star"></i></span>
      <span className="text-[9px] sm:text-[10px] font-black text-indigo-950 uppercase tracking-wider block mt-1">Top Elite</span>
    </div>

  </div>
</div>


      </div>
    </section>
  );
}