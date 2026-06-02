import React from 'react';

export default function TechStack() {
  // Production-Ready Enterprise Technical Skillset Data
  const stacks = [
    { name: "TypeScript", desc: "Strict type safety systems, custom interfaces, generic components, and scalable architecture.", bg: "bg-blue-50 text-blue-600", icon: "fa-solid fa-code" },
    { name: "JavaScript (ES6+)", desc: "Asynchronous programming models, functional DOM handling, and external REST API stream mappings.", bg: "bg-amber-50 text-amber-600", icon: "fa-brands fa-js" },
    { name: "Tailwind CSS", desc: "Utility-first rapid workflows, custom screen-size configs, and dynamic interface rules.", bg: "bg-cyan-50 text-cyan-600", icon: "fa-solid fa-wind" },
    { name: "React / Router", desc: "Modular component states, context data flows, hooks management, and React Router configurations.", bg: "bg-sky-50 text-sky-600", icon: "fa-brands fa-react" },
    { name: "Next.js Framework", desc: "Server-Side Rendering (SSR), App Router hierarchies, and full stack deployment pipelines.", bg: "bg-slate-100 text-slate-900", icon: "fa-solid fa-terminal" }, // 👑 ফিক্সড: ব্র্যান্ডিং কালার এবং আইকন প্রফেশনাল করা হয়েছে
    { name: "Hero UI & Motion", desc: "Accessible UI building blocks, interactive animation engines, and clean user experience designs.", bg: "bg-purple-50 text-purple-600", icon: "fa-solid fa-wand-magic-sparkles" },
    { name: "Node.js & Express", desc: "Scalable server environments, RESTful route handlers, and secure custom request middleware layers.", bg: "bg-emerald-50 text-emerald-600", icon: "fa-brands fa-node-js" },
    { name: "BetterAuth & DB", desc: "MongoDB Mongoose strict document schemas integrated with production-ready BetterAuth session protocols.", bg: "bg-green-50 text-green-600", icon: "fa-solid fa-shield-halved" }
  ];

  return (
    <section id="tech-stack" className="w-full px-4 sm:px-6 py-16 sm:py-20 bg-indigo-100 relative z-10 font-['Plus_Jakarta_Sans']">
      <div className="max-w-7xl mx-auto">
        
        {/* সেকশন হেডার */}
        <div className="space-y-3 text-center mb-12 sm:mb-16" data-aos="fade-down">
          <span className="text-[10px] font-bold text-indigo-600 tracking-[0.2em] uppercase bg-white border border-indigo-200 px-4 py-1.5 rounded-full inline-block shadow-sm">
            Technical Expertise
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-indigo-950 tracking-tight leading-tight">
            My Tech Stack
          </h2>
          <div className="h-1 w-16 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* টেক-কার্ড গ্রিড লেআউট */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stacks.map((tech, idx) => (
            <div 
              key={idx} 
              data-aos="fade-up"
              data-aos-delay={idx * 50}
              className="bg-white border border-indigo-50 p-6 flex flex-col justify-between rounded-[2rem] shadow-sm border border-transparent hover:shadow-[0_20px_40px_rgba(99,102,241,0.12)] hover:border-indigo-300 hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
            >
              <div className="space-y-4">
                {/* আইকন বাবল */}
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-bold shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 ${tech.bg}`}>
                  <i className={`${tech.icon} text-lg`}></i>
                </div>
                
                {/* টাইটেল ও সাব-ডেসক্রিপশন */}
                <div className="space-y-1.5">
                  <h3 className="text-lg font-black text-indigo-950 group-hover:text-indigo-600 transition-colors duration-200">
                    {tech.name}
                  </h3>
                  <p className="text-slate-600 text-xs font-semibold leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
