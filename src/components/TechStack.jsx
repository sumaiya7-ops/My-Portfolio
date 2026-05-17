import React from 'react';

export default function TechStack() {
  const stacks = [
    { name: "JavaScript", desc: "ES6+ Modern Syntax & Dom Handling", bg: "bg-amber-50 text-amber-600" },
    { name: "TypeScript", desc: "Type Safety System & Scalable Code", bg: "bg-blue-50 text-blue-600" },
    { name: "React & Next.js", desc: "Component Architecture & Hooks", bg: "bg-sky-50 text-sky-600" },
    { name: "Node.js & Express", desc: "Backend RESTful API Layout design", bg: "bg-emerald-50 text-emerald-600" },
    { name: "MongoDB & SQL", desc: "NoSQL Schema Design & Optimized Querying", bg: "bg-green-50 text-green-600" },
    { name: "Deployment & DevOps", desc: "CI/CD Pipeline workflow setup", bg: "bg-purple-50 text-purple-600" },
    { name: "Python & OOP", desc: "Automation scripting modules", bg: "bg-cyan-50 text-cyan-600" },
    { name: "C & C++", desc: "Algorithms and core logical structures", bg: "bg-rose-50 text-rose-600" }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 mb-16 relative z-10">
      <div className="space-y-4 text-center mb-16">
        <span className="text-[10px] font-bold text-blue-600 tracking-[0.2em] uppercase block">Technical Expertise</span>
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">My Tech Stack</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stacks.map((tech, idx) => (
          <div key={idx} className="bg-white/60 border border-slate-200/50 rounded-[2rem] p-6 flex flex-col justify-between shadow-sm hover:border-blue-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
            <div className="space-y-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${tech.bg} group-hover:scale-110 transition-transform`}>✓</div>
              <h3 className="text-lg font-black text-slate-900">{tech.name}</h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">{tech.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
