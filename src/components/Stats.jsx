import React from 'react';

export default function Stats() {
  const ctaButtons = [
    { text: "Start a Project", class: "bg-blue-600 text-white shadow-blue-600/30 hover:bg-blue-700" },
    { text: "View Resume", class: "bg-blue-50/50 border border-blue-100 text-blue-600 hover:bg-blue-50" },
    { text: "View Projects", class: "bg-slate-50 border border-slate-200/60 text-slate-800 hover:bg-slate-100" }
  ];

  const statItems = [
    { val: "30+", title: "Completed Projects", color: "text-blue-600", bg: "bg-blue-50" },
    { val: "15+", title: "Satisfied Clients", color: "text-blue-600", bg: "bg-blue-50" },
    { val: "50k+", title: "Lines of Code", color: "text-blue-600", bg: "bg-blue-50" },
    { val: "200+ ", title: "Cups of Coffee", color: "text-blue-600", bg: "bg-blue-50" },
    { val: "40+", title: "Projects Completed", color: "text-cyan-500", bg: "bg-cyan-50" },
    { val: "25+", title: "Course Success", color: "text-emerald-500", bg: "bg-emerald-50" },
    { val: "15+", title: "Tech Mastered", color: "text-amber-500", bg: "bg-amber-50" },
    { val: "02+", title: "Years Experience", color: "text-purple-500", bg: "bg-purple-50" }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 mb-24 relative z-10 space-y-16">
      <div className="flex flex-wrap gap-4 items-center justify-start">
        {ctaButtons.map((btn, idx) => (
          <button key={idx} className={`px-8 py-4 rounded-2xl font-bold text-sm shadow-lg transition-all duration-300 hover:scale-105 ${btn.class}`}>
            {btn.text}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 items-center text-center">
        {statItems.map((item, idx) => (
          <div key={idx} className="space-y-3 group cursor-pointer">
            <div className={`mx-auto w-12 h-12 rounded-xl ${item.bg} border flex items-center justify-center ${item.color} shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
              <span className="font-bold">#</span>
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">{item.val}</h3>
              <p className="text-[9px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
