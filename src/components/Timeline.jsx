import React from 'react';

export default function Timeline() {
  const milestones = [
    {
      year: "HSC GRADUATE",
      title: "🏛️ Humanities & Analytical Foundation",
      institute: "Brahmanbaria Government Women's College",
      board: "Higher Secondary Certificate (HSC) · Arts Background",
      result: "DISTINCTION",
      desc: "Developed strong critical thinking, comprehensive research methodologies, and analytical reasoning capabilities. This background laid the core baseline for structured logic and complex rule-based systematic thinking.",
      tags: ["ANALYTICAL LOGIC", "CRITICAL THINKING", "HUMANITIES"],
      color: "purple"
    },
    {
      year: "UNDERGRADUATE",
      title: "⚖️ Bachelor of Laws (LLB) Honours",
      institute: "Jatiya Kabi Kazi Nazrul Islam University",
      board: "Legal Architecture · Systematic Analysis",
      result: "LEGAL MIND",
      desc: "Pursuing LLB Honours, mastering corporate laws, statutory interpretations, and structural logic algorithms. Legal training excels my capacity to interpret complex system rules and enforce airtight logic flow constraints in software engineering.",
      tags: ["LEGAL ARCHITECTURE", "SYSTEMATIC ANALYSIS", "COMPLIANCE"],
      color: "blue"
    },
    {
      year: "ENGINEERING",
      title: "💻 Full-Stack Software Engineering Training",
      institute: "Advanced Development Workflow Pipelines",
      board: "Core MERN & Next.js Ecosystem",
      result: "30+ PROJECTS",
      desc: "Engineered a bridge into heavy full-stack programming. Successfully mastered React, Next.js App Router, Node.js, Express, and complex MongoDB document schemas, transforming conceptual ideas into fully production-ready live web systems.",
      tags: ["NEXT.JS", "NODE.JS", "MONGO DB", "STRIPE API", "HERO UI"],
      color: "purple"
    },
    {
      year: "2025 — Present",
      title: "🚀 Full Stack Engineer",
      institute: "Freelance & Personal Projects",
      board: "Next.js · TypeScript · System Design",
      result: "AVAILABLE FOR WORK",
      desc: "Focused on building scalable full-stack applications with modern frontend architecture and backend systems.",
      tags: ["NEXT.JS", "TYPESCRIPT", "SYSTEM DESIGN", "OPEN SOURCE"],
      color: "purple"
    }
  ];

  return (
    <section id="timeline" className="w-full px-4 sm:px-6 py-16 sm:py-20 bg-indigo-100 relative z-10 font-['Plus_Jakarta_Sans']">
      <div className="max-w-5xl mx-auto">
        
        {/* সেকশন হেডার */}
        <div className="text-left space-y-3 mb-12 sm:mb-16" data-aos="fade-up">
          <span className="text-[10px] font-bold text-indigo-600 tracking-[0.4em] uppercase bg-white border border-indigo-200 px-3 py-1 rounded-full inline-block shadow-sm">
            EVOLUTION
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-indigo-950 tracking-tight leading-tight">
            Journey & Milestones
          </h2>
        </div>

        {/* টাইমলাইন মেইন কন্টেইনার (মোবাইল ও ডেক্সটপ দুই ভিউতেই স্টেবল লেআউট) */}
        <div className="relative border-l-2 border-indigo-200 dark:border-indigo-300/40 ml-3 md:ml-6 space-y-12">
          {milestones.map((item, index) => (
            <div 
              key={index} 
              className="relative pl-6 md:pl-10 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 group"
            >
              
              {/* টাইমলাইন ডট নোড */}
              <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-4 bg-white transition-all duration-300 ${
                item.color === 'blue' ? 'border-indigo-600 group-hover:bg-indigo-600' : 'border-purple-600 group-hover:bg-purple-600'
              }`}></div>

              {/* বাম কলাম: মেটাডাটা ও টাইটেল (৪ কলাম) */}
              <div className="lg:col-span-4 space-y-1" data-aos="fade-right">
                <span className={`text-[10px] sm:text-xs font-black tracking-widest block uppercase ${item.color === 'blue' ? 'text-indigo-700' : 'text-purple-700'}`}>
                  {item.year}
                </span>
                <h3 className="text-base sm:text-lg font-black text-indigo-950 tracking-tight leading-snug group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 font-bold">{item.institute}</p>
                <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium leading-relaxed">{item.board}</p>
                
                <span className={`inline-flex text-[9px] font-black tracking-wider uppercase px-2.5 py-0.5 rounded-full border mt-2 ${
                  item.color === 'blue' ? 'bg-indigo-50 text-indigo-700 border-indigo-200' : 'bg-purple-50 text-purple-700 border-purple-200'
                }`}>
                  ★ {item.result}
                </span>
              </div>

              {/* ডান কলাম: ডেসক্রিপশন ও ট্যাগ কার্ড ব্লক (৮ কলাম) */}
              <div className="lg:col-span-8" data-aos="fade-left">
                <div className="bg-white border border-indigo-50 p-5 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] shadow-sm hover:shadow-[0_20px_40px_rgba(99,102,241,0.12)] hover:-translate-y-1 transition-all duration-300">
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium mb-4">
                    {item.desc}
                  </p>
                  
                  {/* ক্যাপসুল ট্যাগ প্যানেল (হাই কনট্রাস্ট ও রিডেবল) */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="text-[9px] font-extrabold text-slate-600 border border-indigo-100 px-2.5 py-1 rounded-full uppercase tracking-wider bg-indigo-50/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


