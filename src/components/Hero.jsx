import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="max-w-7xl mx-auto px-6 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative min-h-[80vh]">
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0 overflow-hidden">
        <h1 className="text-[14vw] font-extrabold text-black/[0.02] tracking-widest uppercase">SHANTO</h1>
      </div>

      <div className="lg:col-span-7 space-y-6 text-left relative z-10">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          Available for New Projects
        </div>
        <div className="space-y-2">
          <h2 className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tight">this is</h2>
          <h3 className="text-sm sm:text-base font-bold text-slate-400 tracking-widest uppercase">Full-Stack Developer From Bangladesh</h3>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800">
            I'm a <span className="text-blue-600 border-b-4 border-blue-200">Software Engineer</span>
          </h1>
        </div>
        <p className="text-slate-500 text-base sm:text-lg max-w-xl leading-relaxed font-medium">
          I build high-performance, scalable web applications with a focus on modern architectures and seamless user experiences.
        </p>
      </div>

      <div className="lg:col-span-5 flex justify-center relative z-10">
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-white p-3 shadow-xl border border-slate-100 flex items-center justify-center transition-transform duration-500 hover:scale-105">
          <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 flex items-center justify-center font-bold text-slate-400">
            [Profile Image Place]
          </div>
          <div className="absolute -left-6 top-1/4 bg-white/90 backdrop-blur-md border border-slate-100 p-4 rounded-2xl shadow-lg text-center min-w-[80px] hover:scale-110 transition-transform duration-300">
            <span className="block text-2xl font-black text-blue-600 leading-none">2+</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mt-1">Years Exp</span>
          </div>
          <div className="absolute -right-6 bottom-1/4 bg-white/90 backdrop-blur-md border border-slate-100 p-4 rounded-2xl shadow-lg text-center min-w-[80px] hover:scale-110 transition-transform duration-300">
            <span className="block text-2xl font-black text-slate-800 leading-none">30+</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mt-1">Projects</span>
          </div>
        </div>
      </div>
    </section>
  );
}
