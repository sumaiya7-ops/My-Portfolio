import React from 'react';

const projects = [
  {
    id: "01",
    title: "Next-Gen Dynamic Web App", 
    tags: ["NEXT.JS", "MONGO DB", "TAILWIND", "API"],
    desc: "An advanced production-grade software system architected with cutting-edge workflows. Optimizes modern state management, high-speed query execution, and pixel-perfect interactive design components.",
    bg: "https://unsplash.com",
    liveLink: "https://glittering-kitsune-f14dd0.netlify.app", 
    gitLink: "https://github.com/sumaiya7-ops"
  },
  {
    id: "02",
    title: "Pawsome Haven — Pet Adoption Platform",
    tags: ["REACT", "NODE.JS", "MONGODB", "TAILWIND"],
    desc: "A compassionate full-stack animal welfare web application engineered for pet adoptions. Features real-time adoption status updates, robust relational data schemas, dynamic category filtering, and an intuitive user dashboard.",
    bg: "https://unsplash.com",
    liveLink: "https://pet-adoption-one-tau.vercel.app/",
    gitLink: "https://github.com/sumaiya7-ops/Pet-Adoption.git"
  },
  {
    id: "03",
    title: "The Plant Kingdom — Premium Botanic Hub",
    tags: ["HTML5", "CSS3", "JAVASCRIPT", "AOS MOTION"],
    desc: "An exquisitely designed e-commerce storefront showcasing fluid micro-interactions and organic layout balancing. Features advanced semantic styling, dynamic product filtering, and a modern aesthetic aesthetic workflow.",
    bg: "https://unsplash.com",
    liveLink: "https://sumaiya7-ops.github.io/The-Plant-Kingdom/",
    gitLink: "https://github.com/sumaiya7-ops/The-Plant-Kingdom.git"
  },
  {
    id: "04",
    title: "GitPulse — Real-time GitHub Issue Tracker",
    tags: ["JAVASCRIPT", "GITHUB API", "ASYNC AWAIT", "CSS3"],
    desc: "A production-grade developer workflow optimization tool powered directly by the official GitHub REST API. Enables seamless searching, real-time filtering, state management, and asynchronous tracking of global repository issues.",
    bg: "https://unsplash.com",
    liveLink: "https://sumaiya7-ops.github.io/Github-Issues-Tracker/",
    gitLink: "https://github.com/sumaiya7-ops/Github-Issues-Tracker.git"
  }
];

export default function Portfolio() {
  return (
    <section
      id="projects"
      className="w-full px-4 sm:px-6 py-16 sm:py-20 bg-indigo-100 relative z-10 font-['Plus_Jakarta_Sans']"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* সেকশন হেডার */}
        <div className="text-left mb-10 sm:mb-12" data-aos="fade-up">
          <span className="text-[10px] font-bold text-indigo-600 tracking-[0.4em] uppercase bg-white border border-indigo-200 px-3 py-1 rounded-full inline-block shadow-sm mb-2">
            Selected Works
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-indigo-950 tracking-tight">
            Portfolio
          </h2>
        </div>

        {/* প্রজেক্টস গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="group relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-indigo-50/50 bg-white p-4 min-h-[440px] sm:min-h-[420px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-2.5 hover:shadow-[0_25px_50px_rgba(165,180,252,0.25)]"
            >
              {/* ব্যাকগ্রাউন্ড ইমেজ ও থিম কন্ট্রোল লেয়ার */}
              <div className="absolute inset-0 z-0 overflow-hidden rounded-[1.8rem] sm:rounded-[2.2rem]">
                <img
                  src={project.bg}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-[0.06] group-hover:scale-105 group-hover:opacity-15 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
              </div>

              {/* টপ ইনফো */}
              <div className="relative z-10 p-3 sm:p-4 flex justify-between items-start gap-4">
                <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100 shadow-sm flex-shrink-0">
                  {project.id}
                </span>

                <div className="flex flex-wrap gap-1.5 max-w-[80%] justify-end">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-bold text-indigo-900/80 bg-indigo-50/60 border border-indigo-100/30 px-2.5 py-1 rounded-md tracking-wider uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* বটম কন্টেন্ট */}
              <div className="relative z-10 p-3 sm:p-4 space-y-4 rounded-b-[2rem]">
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-black text-indigo-950 group-hover:text-indigo-600 transition duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                {/* 👑 👑 ফিক্সড: এবার আপনার আসল প্রজেক্ট লিঙ্ক ডাইনামিকালি ম্যাপ করা হয়েছে */}
                <div className="flex items-center gap-6 pt-1">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-all duration-300 hover:gap-3 cursor-pointer"
                  >
                    Live Demo
                    <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                  </a>

                  <a
                    href={project.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-indigo-950 transition-all duration-300 hover:gap-3 cursor-pointer"
                  >
                    GitHub
                    <i className="fa-solid fa-code text-[10px]"></i>
                  </a>
                </div>
              </div>

              {/* হোভার ব্যাকগ্রাউন্ড লাক্সারি গ্লো */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 blur-3xl rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* প্যাগিনেশন কন্ট্রোল প্যানেল */}
        <div className="flex items-center justify-center gap-6 sm:gap-8 mb-12" data-aos="fade-up">
          <button className="text-[11px] sm:text-xs font-bold text-slate-400 hover:text-indigo-600 transition flex items-center gap-1.5 cursor-pointer">
            <i className="fa-solid fa-arrow-left"></i> PREV
          </button>
          <span className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shadow-md shadow-indigo-100">
            1
          </span>
          <button className="text-[11px] sm:text-xs font-bold text-slate-400 hover:text-indigo-600 transition flex items-center gap-1.5 cursor-pointer">
            NEXT <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        {/* 👑 ফিক্সড: কেটে যাওয়া বাটন এলিমেন্ট সম্পূর্ণ ক্লোজ করা হয়েছে */}
        <div className="text-center" data-aos="fade-up">
          <a 
            href="https://github.com/sumaiya7-ops"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-indigo-950 text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm shadow-md hover:bg-indigo-600 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            View More On GitHub <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

      </div>
    </section>
  );
}
