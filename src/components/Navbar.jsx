import React from 'react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 max-w-7xl mx-auto px-6 py-4 flex items-center justify-between bg-white/60 backdrop-blur-md border-b border-slate-100">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border border-gray-100 shadow-sm">
          <div className="w-full h-full bg-slate-400 flex items-center justify-center font-bold text-white">MH</div>
        </div>
        <span className="text-xl font-black text-slate-800 tracking-tight">MH<span className="text-blue-600">.</span></span>
      </div>
      
      <div className="hidden md:flex items-center bg-white/80 backdrop-blur-md px-8 py-3 rounded-full border border-slate-100 shadow-sm gap-8 text-sm font-semibold text-slate-600">
        {['Home', 'About', 'Services', 'Code', 'Projects', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-600 transition-colors duration-300">
            {item}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button className="text-slate-400 hover:text-slate-600 text-lg transition-colors duration-300">
          <i className="fa-regular fa-moon"></i>
        </button>
        <a href="#contact" className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md hover:bg-blue-600 hover:scale-105 transition-all duration-300">
          Hire Me
        </a>
      </div>
    </nav>
  );
}
