import React from 'react';

const projects = [
  {
    id: "01",
    title: "Personal Portfolio",
    tags: ["NEXT.JS", "FRAMER MOTION", "GSAP", "TAILWIND"],
    desc: "My high-performance developer portfolio built with Next.js, Framer Motion, and GSAP. Features cinematic animations, glassmorphism design, and full responsiveness.",
    bg: "unsplash.com"
  },
  {
    id: "02",
    title: "Tiles Gallery Ecommerce",
    tags: ["REACT", "NODE.JS", "MONGODB", "VERCEL"],
    desc: "A full-featured tile ecommerce platform with product gallery, authentication, pricing, and a clean aesthetic design. 'Discover Your Perfect Aesthetic.'",
    bg: "unsplash.com"
  },
  {
    id: "03",
    title: "KeenKeeper — Social Media",
    tags: ["REACT", "FIREBASE", "NETLIFY"],
    desc: "Your personal shelf of meaningful connections. A relationship management app to browse, tend, and nurture the friendships that matter most.",
    bg: "unsplash.com"
  },
  {
    id: "04",
    title: "Modern Digitools Ecommerce",
    tags: ["REACT", "JAVASCRIPT", "NETLIFY"],
    desc: "A comprehensive digital tools & productivity software platform. Browse, purchase, and use powerful digital utilities designed for developers and creators.",
    bg: "unsplash.com"
  }
];

export default function Portfolio() {
  return (
    <section id="projects" class="max-w-7xl mx-auto px-6 py-16 mb-16 relative z-10">
      <div class="text-left mb-12">
        <span class="text-[10px] font-bold text-blue-600 tracking-[0.4em] uppercase block mb-2">Selected Works</span>
        <h2 class="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">Portfolio</h2>
      </div>

      {/* Projects Grid */}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {projects.map((project) => (
          <div key={project.id} class="group bg-white/60 border border-slate-200/50 rounded-[2.5rem] p-4 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between overflow-hidden relative min-h-[420px]">
            {/* Background Image Container with Zoom Effect */}
            <div class="absolute inset-0 z-0 overflow-hidden rounded-[2.2rem]">
              <img src={project.bg} alt={project.title} class="w-full h-full object-cover opacity-15 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-30 group-hover:scale-110 transition duration-700" />
            </div>

            {/* Top Info */}
            <div class="relative z-10 p-4 flex justify-between items-start">
              <span class="text-xs font-bold text-blue-600 bg-blue-50/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-blue-100">{project.id}</span>
              <div class="flex flex-wrap gap-2 max-w-[80%] justify-end">
                {project.tags.map((tag) => (
                  <span key={tag} class="text-[9px] font-bold text-slate-500 bg-slate-100/80 backdrop-blur-sm px-2.5 py-1 rounded-md tracking-wider">{tag}</span>
                ))}
              </div>
            </div>

            {/* Bottom Text content */}
            <div class="relative z-10 p-4 space-y-3 bg-gradient-to-t from-white/90 via-white/50 to-transparent rounded-b-[2rem]">
              <h3 class="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition duration-300">{project.title}</h3>
              <p class="text-slate-500 text-sm font-medium leading-relaxed">{project.desc}</p>
              <div class="flex gap-4 pt-2">
                <a href="#" class="text-xs font-bold text-blue-600 flex items-center gap-1 hover:underline">Live Demo <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i></a>
                <a href="#" class="text-xs font-bold text-slate-600 flex items-center gap-1 hover:underline">GitHub <i class="fa-solid fa-code text-[10px]"></i></a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div class="flex items-center justify-center gap-8 mb-12">
        <button class="text-xs font-bold text-slate-400 hover:text-slate-800 transition flex items-center gap-1"><i class="fa-solid fa-arrow-left"></i> PREV</button>
        <span class="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shadow-md shadow-blue-600/20">1</span>
        <button class="text-xs font-bold text-slate-400 hover:text-slate-800 transition flex items-center gap-1">NEXT <i class="fa-solid fa-arrow-right"></i></button>
      </div>

      {/* Archive Button */}
      <div class="text-center">
        <button class="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-md hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/20 transition-all duration-300">
          View More Archive Projects <i class="fa-solid fa-arrow-right text-xs"></i>
        </button>
      </div>
    </section>
  );
}
