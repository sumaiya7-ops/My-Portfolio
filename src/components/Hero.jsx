import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="w-full px-4 sm:px-6 pt-24 pb-20 sm:pb-28 bg-gradient-to-br from-indigo-50 via-white to-slate-50 relative min-h-screen flex items-center font-['Plus_Jakarta_Sans'] overflow-hidden">
      
      {/* 🔮 ব্যাকগ্রাউন্ডে প্রিমিয়াম গ্লোয়িং অরবিটস (Pro-Max Look) */}
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-indigo-200/30 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[350px] h-[350px] bg-purple-200/20 rounded-full blur-[100px] pointer-events-none"></div>

      {/* ব্যাকগ্রাউন্ড ওয়াটারমার্ক টাইপোগ্রাফি */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0 overflow-hidden">
        <h1 className="text-[16vw] font-black text-indigo-600/[0.015] tracking-[0.2em] uppercase">
          SUMAIYA
        </h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full relative z-10">
        
        {/* 📝 বাম কলাম: কন্টেন্ট এবং অ্যাকশন বাটন */}
        <div className="lg:col-span-7 space-y-7 text-left" data-aos="fade-right">
          
          {/* অ্যাক্টিভ স্ট্যাটাস ব্যাজ */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm hover:border-indigo-300 transition-colors duration-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for New Projects
          </div>
          
          {/* মেইন টাইটেল এবং ইন্ট্রোডাকশন */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Crafting Next-Gen <br />
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                Digital Experiences
              </span>
            </h2>
            <h3 className="text-xs sm:text-sm font-extrabold text-slate-400 tracking-[0.2em] uppercase block pt-1">
              🚀 Full-Stack Developer From Bangladesh
            </h3>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-700">
              I'm <span className="text-slate-900 font-extrabold relative inline-block after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-full after:h-[8px] after:bg-indigo-200/60 after:-z-10">Sumaiya Sarhad Marjiya</span>
            </h1>
          </div>
          
          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed font-medium">
            I specialize in engineering high-performance, scalable web applications using the modern <span className="text-indigo-600 font-semibold">MERN & Next.js</span> ecosystems, with a deep focus on responsive layouts and secure architectures.
          </p>
          
          {/* ইন্টারঅ্যাক্টিভ বাটনসমূহ */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="group relative bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-sm shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-indigo-300 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </span>
            </a>

            <a
              href="#contact"
              className="bg-white/80 backdrop-blur-md border border-slate-200 text-slate-800 px-8 py-4 rounded-xl font-bold text-sm shadow-sm hover:border-indigo-500 hover:text-indigo-600 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
            >
              Hire Me
            </a>
          </div>

          {/* স্ট্যাটস মেট্রিক্স প্যানেল */}
          <div className="flex flex-row items-center gap-8 sm:gap-12 pt-6 border-t border-slate-200/60 max-w-md">
            <div className="hover:scale-105 transition-transform">
              <h4 className="text-2xl sm:text-3xl font-black text-indigo-900">20+</h4>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mt-1">Projects Built</p>
            </div>

            <div className="hover:scale-105 transition-transform">
              <h4 className="text-2xl sm:text-3xl font-black text-indigo-900">100%</h4>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mt-1">Commitment</p>
            </div>

            <div className="hover:scale-105 transition-transform">
              <h4 className="text-2xl sm:text-3xl font-black text-indigo-900">15+</h4>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mt-1">Tech Stacks</p>
            </div>
          </div>
        </div>

        {/* 💻 ডান কলাম: প্রোফাইল ইমেজ ফ্রেম প্যানেল */}
        <div className="lg:col-span-5 flex justify-center w-full mt-10 lg:mt-0" data-aos="fade-left">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-white p-4 shadow-[0_30px_60px_rgba(79,70,229,0.15)] border border-indigo-50 flex items-center justify-center transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_40px_80px_rgba(79,70,229,0.25)] group">
            
            {/* ঘূর্ণায়মান বর্ডার ইফেক্ট */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-200/60 group-hover:rotate-45 transition-transform duration-1000"></div>
            
            {/* প্রোফাইল ইমেজ */}
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-50 border border-indigo-100 relative shadow-inner z-10">
              <img 
                src="/profile.jpg" 
                alt="Sumaiya Sarhand Marjiya" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            
            {/* 👑 বাম ফ্লোটিং ব্যাজ */}
            <div className="absolute -left-4 top-1/4 bg-white/90 backdrop-blur-md border border-slate-100 p-3.5 rounded-2xl shadow-lg flex flex-col items-center justify-center min-w-[100px] hover:scale-110 transition-transform duration-300 select-none z-20">
              <span className="block text-indigo-600 text-xl"><i className="fa-solid fa-briefcase"></i></span>
              <span className="text-[10px] font-extrabold text-slate-800 uppercase tracking-wider block mt-1">Full-Time</span>
            </div>
            
            {/* 👑 ডান ফ্লোটিং ব্যাজ */}
            <div className="absolute -right-4 bottom-1/4 bg-white/90 backdrop-blur-md border border-slate-100 p-3.5 rounded-2xl shadow-lg flex flex-col items-center justify-center min-w-[100px] hover:scale-110 transition-transform duration-300 select-none z-20">
              <span className="block text-amber-500 text-xl"><i className="fa-solid fa-star"></i></span>
              <span className="text-[10px] font-extrabold text-slate-800 uppercase tracking-wider block mt-1">MERN DEV</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
