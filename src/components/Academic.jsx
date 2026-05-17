export default function Academic() {
  const assignments = [
    { id: "01", score: "60/60", badge: "Perfect", color: "bg-emerald-50 text-emerald-600 border-emerald-100" },
    { id: "02", score: "60/60", badge: "Perfect", color: "bg-emerald-50 text-emerald-600 border-emerald-100" },
    { id: "03", score: "60/60", badge: "Perfect", color: "bg-emerald-50 text-emerald-600 border-emerald-100" },
    { id: "04", score: "60/60", badge: "Perfect", color: "bg-emerald-50 text-emerald-600 border-emerald-100" },
    { id: "05", score: "60/60", badge: "Perfect", color: "bg-emerald-50 text-emerald-600 border-emerald-100" },
    { id: "06", score: "60/60", badge: "Perfect", color: "bg-emerald-50 text-emerald-600 border-emerald-100" },
    { id: "07", score: "59/60", badge: "Excellent", color: "bg-blue-50 text-blue-600 border-blue-100" },
    { id: "08", score: "60/60", badge: "Perfect", color: "bg-emerald-50 text-emerald-600 border-emerald-100" }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 mb-16 relative z-10">
      <div className="text-left space-y-3 mb-12">
        <span className="text-[10px] font-bold text-blue-600 tracking-[0.4em] uppercase block">ACADEMIC EXCELLENCE</span>
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">Consistency is Key</h2>
      </div>

      {/* Grid containing 8 score cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
        {assignments.map((item, index) => (
          <div key={index} className="bg-white/60 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/50 p-4 rounded-2xl shadow-sm text-center flex flex-col justify-between space-y-3 hover:scale-105 transition-all duration-300 group">
            <span className="text-[10px] font-bold text-slate-400 group-hover:text-blue-500 transition">Assignment {item.id}</span>
            <h3 className="text-xl font-black text-slate-800 dark:text-white">{item.score}</h3>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border inline-block mx-auto ${item.color}`}>
              {item.badge}
            </span>
          </div>
        ))}
      </div>

      {/* Programming Hero Journey Banner Card */}
      <div className="bg-white/60 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/50 p-6 sm:p-8 rounded-[2rem] shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:shadow-md transition-all duration-300">
        <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center text-blue-600 text-2xl flex-shrink-0">
          <i className="fa-solid fa-trophy"></i>
        </div>
        <div className="space-y-1">
          <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">Programming Hero Journey</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-4xl font-medium">
            Throughout my journey at Programming Hero, I maintained a near-perfect track record in all conceptual assignments. This consistency reflects my commitment to mastering every technology I touch, from core JavaScript to complex Full-Stack architectures.
          </p>
        </div>
      </div>
    </section>
  );
}
