import React from 'react';

export default function Expertise() {
  const frontFeat = ["Architecting complex SPAs with React & Next.js", "Design System implementation with Tailwind CSS", "Performance profiling & Core Web Vitals optimization"];
  const backFeat = ["Microservices with Node.js & Go", "Database design (PostgreSQL, MongoDB, Redis)", "Cloud integration (AWS, Docker, Kubernetes)"];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 mb-16 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white/60 border border-slate-200/50 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">F</div>
          <div>
            <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest block">Expertise</span>
            <h3 className="text-xl font-black text-slate-900">Frontend Engineering</h3>
          </div>
        </div>
        <ul className="space-y-3">
          {frontFeat.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
              <span className="text-blue-500 font-bold mt-0.5">✓</span> {f}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white/60 border border-slate-200/50 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">B</div>
          <div>
            <span className="text-[10px] font-bold text-purple-500 uppercase tracking-widest block">Infrastructure</span>
            <h3 className="text-xl font-black text-slate-900">Backend Architecture</h3>
          </div>
        </div>
        <ul className="space-y-3">
          {backFeat.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
              <span className="text-purple-500 font-bold mt-0.5">✓</span> {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
