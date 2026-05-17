import React from 'react';

export default function Services() {
  const services = [
    { title: "Full-Stack Development", desc: "Building robust, scalable applications from ground up using MERN stack.", highlight: true },
    { title: "Clean Code", desc: "Writing maintainable, well-documented code that stays scalable.", highlight: false },
    { title: "Fast Delivery", desc: "Optimized workflow ensuring quick turnaround times without quality loss.", highlight: false },
    { title: "Modern UI/UX", desc: "Creating pixel-perfect, interactive interfaces with smooth animations.", highlight: false },
    { title: "SEO Optimized", desc: "Ensuring your application ranks high and performs well on search engines.", highlight: false },
  ];

  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-16 mb-16 relative z-10">
      <div className="space-y-4 text-left mb-12">
        <span className="text-[10px] font-bold text-blue-600 tracking-[0.2em] uppercase block">Value Proposition</span>
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">Premium Services For Your Business</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((srv, idx) => (
          <div 
            key={idx} 
            className={`p-8 rounded-[2rem] border transition-all duration-300 flex flex-col justify-between min-h-[250px] group cursor-pointer hover:scale-[1.03] shadow-sm hover:shadow-xl ${
              srv.highlight 
              ? 'bg-blue-600 text-white border-blue-600' 
              : 'bg-white/60 border-slate-200/50 text-slate-800 hover:bg-blue-50/30 hover:border-blue-300'
            }`}
          >
            <div className="space-y-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${srv.highlight ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600'}`}>⚡</div>
              <h3 className="text-2xl font-black tracking-tight">{srv.title}</h3>
              <p className={`text-sm ${srv.highlight ? 'text-blue-100' : 'text-slate-500'} font-medium`}>{srv.desc}</p>
            </div>
            <span className={`text-xs font-bold uppercase tracking-wider mt-6 inline-flex items-center gap-2 group-hover:translate-x-2 transition-transform ${srv.highlight ? 'text-white' : 'text-blue-600'}`}>
              Explore More →
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
