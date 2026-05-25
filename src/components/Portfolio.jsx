import React from 'react';

const projects = [
  {
    id: "01",
    title: "Premium Personal Portfolio",
    tags: ["NEXT.JS", "HERO UI", "AOS MOTION", "TAILWIND"],
    desc: "A high-performance modern developer portfolio engineered with Next.js App Router and Hero UI. Features advanced custom scroll-to-reveal animations, modular component design, and absolute cross-device responsiveness.",
    bg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    id: "02",
    title: "Tiles Gallery E-Commerce",
    tags: ["REACT", "NODE.JS", "MONGODB", "STRIPE API"],
    desc: "A full-featured interior design tile commercial e-commerce web platform integrating production-ready checkout funnels via Stripe. Architected with strict Mongoose database relations and comprehensive data grids.",
    bg: "https://images.unsplash.com/photo-1556740749-887f6717d7e4"
  },
  {
    id: "03",
    title: "KeenKeeper — Secure Social Hub",
    tags: ["NEXT.JS", "BETTERAUTH", "MONGODB", "RBAC LAYER"],
    desc: "A next-generation relational networking social system featuring secure session handling driven by BetterAuth Adapter layers. Enforces tight server-side route guards managed via Role-Based Access Control logic.",
    bg: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  },
  {
    id: "04",
    title: "Modern Digitools SaaS Platform",
    tags: ["REACT", "EXPRESS.JS", "MONGO DB", "RESTFUL API"],
    desc: "A full-stack productivity digital software distribution dashboard marketplace. Managed through clean object-oriented architecture, optimized aggregate query streams, and robust server middleware architectures.",
    bg: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
  }
];

export default function Portfolio() {
  return (
    <section
      id="projects"
      className="w-full px-4 sm:px-6 py-16 sm:py-20 bg-indigo-100 relative z-10 font-['Plus_Jakarta_Sans']"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* সেকশন হেডার (AOS অ্যানিমেশনসহ) */}
        <div className="text-left mb-10 sm:mb-12" data-aos="fade-up">
          <span className="text-[10px] font-bold text-indigo-600 tracking-[0.4em] uppercase block mb-2 bg-white border border-indigo-200 px-3 py-1 rounded-full inline-block shadow-sm">
            Selected Works
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-indigo-950 tracking-tight">
            Portfolio
          </h2>
        </div>

        {/* প্রজেক্টস গ্রিড: মোবাইলে ১ কলাম, ট্যাবলেটে ও ডেক্সটপে ২ কলাম */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100} // প্রতিটি প্রজেক্ট কার্ড একটার পর একটা সিরিয়ালি ভেসে উঠবে
              className="group relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-indigo-50/50 bg-white p-4 min-h-[440px] sm:min-h-[420px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-2.5 hover:shadow-[0_25px_50px_rgba(165,180,252,0.25)]"
            >
              {/* ব্যাকগ্রাউন্ড ইমেজ ও থিম কন্ট্রোল লেয়ার */}
              <div className="absolute inset-0 z-0 overflow-hidden rounded-[1.8rem] sm:rounded-[2.2rem]">
                <img
                  src={project.bg}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-[0.06] group-hover:scale-105 group-hover:opacity-15 transition-all duration-700 ease-out"
                />
                {/* ইনডিগো থিম ওভারলে গ্রেডিয়েন্ট */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
              </div>

              {/* টপ ইনফো: আইডি এবং টেকনোলজি ট্যাগসমূহ */}
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

              {/* বটম কন্টেন্ট: টাইটেল, ডেসক্রিপশন ও বাটনসমূহ */}
              <div className="relative z-10 p-3 sm:p-4 space-y-4 rounded-b-[2rem]">
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-black text-indigo-950 group-hover:text-indigo-600 transition duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                {/* অ্যাকশন বাটন লিংকসমূহ */}
                <div className="flex items-center gap-6 pt-1">
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-all duration-300 hover:gap-3 cursor-pointer"
                  >
                    Live Demo
                    <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                  </a>

                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-indigo-950 transition-all duration-300 hover:gap-3 cursor-pointer"
                  >
                    GitHub
                    <i className="fa-solid fa-code text-[10px]"></i>
                  </a>
                </div>
              </div>

              {/* হোভার ব্যাকগ্রাউন্ড লাক্সারি ইনডিগো গ্লো ইফেক্ট */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 blur-3xl rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* প্যাগিনেশন কন্ট্রোল প্যানেল (ফুল রেসপনসিভ) */}
        <div className="flex items-center justify-center gap-6 sm:gap-8 mb-12" data-aos="fade-up">
          <button className="text-[11px] sm:text-xs font-bold text-slate-400 hover:text-indigo-600 transition flex items-center gap-1.5 cursor-pointer">
            <i className="fa-solid fa-arrow-left"></i>
            PREV
          </button>
          <span className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shadow-md shadow-indigo-100">
            1
          </span>
          <button className="text-[11px] sm:text-xs font-bold text-slate-400 hover:text-indigo-600 transition flex items-center gap-1.5 cursor-pointer">
            NEXT
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        {/* ভিউ মোর আর্কাইভ বাটন */}
        <div className="text-center" data-aos="fade-up">
          <button className="inline-flex items-center gap-2 bg-indigo-950 text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm shadow-md hover:bg-indigo-600 hover:shadow-lg transition-all duration-300 cursor-pointer">
            View More Archive Projects
            <i className="fa-solid fa-arrow-right text-xs"></i>
          </button>
        </div>

      </div>
    </section>
  );
}