import React from 'react';

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-16 mb-16 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-6 space-y-6 text-left">
          <span className="text-[10px] font-bold text-blue-600 tracking-[0.2em] uppercase block">The Architect</span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">About Me</h2>
          <p className="text-slate-800 text-lg sm:text-xl font-bold leading-relaxed max-w-xl">
            I'm Mehedi Hasan Shanto (MH Shanto), a Full-Stack Developer based in Bangladesh with a passion for high-performance digital experiences.
          </p>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
            I specialize in Frontend and Backend development, bridging the gap between complex logic and intuitive interfaces.
          </p>
        </div>

        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="sm:col-span-2 glass-card border border-slate-200/50 p-8 rounded-[2rem] shadow-sm hover:shadow-md hover:border-blue-400/40 transition-all duration-300 group">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">Problem Solver</h3>
            <p className="text-slate-500 text-sm font-semibold mt-2">Turning complex ideas into elegant, scalable solutions.</p>
          </div>
          {[{title: "Clean Code", desc: "Architecture", bg: "bg-blue-50", text: "text-blue-600"}, {title: "Lightning Fast", desc: "Performance", bg: "bg-amber-50", text: "text-amber-500"}].map((card, i) => (
            <div key={i} className="glass-card border border-slate-200/50 p-8 rounded-[2rem] shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 text-center space-y-4">
              <div className={`mx-auto w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center ${card.text} font-bold`}>★</div>
              <div>
                <h3 className="text-lg font-black text-slate-900 tracking-tight">{card.title}</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
