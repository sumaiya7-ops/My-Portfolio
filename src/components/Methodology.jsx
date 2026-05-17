import React from 'react';

export default function Methodology() {
  const steps = [
    { num: "01", name: "Discovery", desc: "Deep diving into your goals and audience roadmap.", color: "bg-blue-50 text-blue-600" },
    { num: "02", name: "Design", desc: "Creating high-fidelity mockups with seamless UX.", color: "bg-cyan-50 text-cyan-500" },
    { num: "03", name: "Development", desc: "Writing clean, scalable code using modern stacks.", color: "bg-purple-50 text-purple-500" },
    { num: "04", name: "Launch", desc: "Rigorous testing and smooth production optimization.", color: "bg-emerald-50 text-emerald-500" }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 mb-16 relative z-10">
      <div className="space-y-4 text-center mb-16">
        <span className="text-[10px] font-bold text-blue-600 tracking-[0.2em] uppercase block">Methodology</span>
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">How I Bring Ideas to Life</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-white/60 border border-slate-200/50 rounded-[2rem] p-8 space-y-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative z-10 group">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black ${step.color} group-hover:rotate-12 transition-transform`}>
              {step.num}
            </div>
            <h3 className="text-xl font-black text-slate-900">{step.name}</h3>
            <p className="text-slate-500 text-xs font-semibold leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
