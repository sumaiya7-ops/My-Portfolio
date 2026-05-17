import React from 'react';

export default function FinalCTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 mb-16 relative z-10">
      {/* Glow Effect Background Card */}
      <div className="bg-gradient-to-br from-white/80 to-slate-50/50 dark:from-slate-900/60 dark:to-slate-800/40 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/30 p-12 md:p-16 rounded-[2.5rem] shadow-xl shadow-slate-100/20 dark:shadow-none text-center space-y-6 relative overflow-hidden group">
        
        {/* Decorative background light glow */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition duration-700"></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition duration-700"></div>

        {/* Content */}
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-none transition-transform duration-500 group-hover:scale-[1.01]">
          Your vision, my expertise
        </h2>
        
        <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
          Let's collaborate to build something that pushes the boundaries of what's possible on the web.
        </p>

        {/* Interactive Button with Glowing Shadow Drop */}
        <div className="pt-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-base shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/50 hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
          >
            <span>Hire Me Now</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">🚀</span>
          </a>
        </div>
      </div>
    </section>
  );
}
