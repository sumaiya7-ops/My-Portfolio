import React from 'react';

export default function EngineRoom() {
  const engineItems = [
    { title: "Scalable APIs", desc: "Architecting RESTful and GraphQL APIs designed for high traffic." },
    { title: "Secure Auth", desc: "Implementing JWT, OAuth2, and multi-factor authentication." },
    { title: "Data Modeling", desc: "Optimizing database schemas in MongoDB and PostgreSQL." },
    { title: "Performance", desc: "Caching strategies with Redis and server-side optimizations." }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 mb-16 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6 text-left">
          <span className="text-[10px] font-bold text-blue-600 tracking-[0.2em] uppercase block">Server-Side Mastery</span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">Building the Engine Room</h2>
          <p className="text-slate-500 font-medium leading-relaxed">
            I don't just build websites; I engineer high-performance backends. From complex architectures to secure layers, I ensure stability.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {engineItems.map((item, idx) => (
              <div key={idx} className="p-5 bg-white/70 border border-slate-200/50 rounded-2xl hover:border-blue-500 hover:shadow-md transition-all duration-300">
                <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                <p className="text-xs text-slate-500 mt-1 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 bg-[#0F172A] rounded-[2rem] p-8 text-white space-y-4 shadow-xl border border-slate-800 hover:scale-[1.01] transition-transform duration-300">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-4">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="text-xs text-slate-500 font-mono ml-2">architecture-diagram.svg</span>
          </div>
          <div className="font-mono text-xs sm:text-sm space-y-3 py-4 text-slate-400">
            <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/40 text-blue-400">Frontend Client (React/Next.js)</div>
            <div className="text-center text-slate-600">⬇ REST / GraphQL API Gateway</div>
            <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
              <div className="bg-slate-800/50 p-2 rounded-lg border border-slate-700/40">Auth Service</div>
              <div className="bg-slate-800/50 p-2 rounded-lg border border-slate-700/40">Data Logic</div>
              <div className="bg-slate-800/50 p-2 rounded-lg border border-slate-700/40">File Storage</div>
            </div>
            <div className="text-center text-slate-600">⬇ Queries / Streams</div>
            <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/40 text-emerald-400">Database (MongoDB / PostgreSQL)</div>
          </div>
        </div>
      </div>
    </section>
  );
}
