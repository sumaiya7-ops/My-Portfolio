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
      year: "B-13 EXPERT",
      title: "💻 Full-Stack Software Engineering Awakening",
      institute: "Programming Hero · Core MERN & Next.js Ecosystem",
      board: "Advanced Development Workflow Pipelines",
      result: "30+ PROJECTS",
      desc: "Engineered a bridge into heavy full-stack programming. Successfully mastered React, Next.js App Router, Node.js, Express, and complex MongoDB document schemas, transforming conceptual ideas into fully production-ready live web systems.",
      tags: ["NEXT.JS", "NODE.JS", "MONGO DB", "STRIPE API", "HERO UI"],
      color: "purple"
    },
    {
      year: "PRESENT & FUTURE",
      title: "🚀 Type-Safe Architecture & Scalability",
      institute: "TypeScript Integration · SaaS Formats",
      board: "Secure Authentication & Enterprise Security Gateways",
      result: "AVAILABLE NOW",
      desc: "Expanding deep into TypeScript for absolute compile-time safety. Actively implementing production frameworks using BetterAuth adapter layers, Role-Based Access Controls (RBAC), and optimizing advanced server middleware infrastructure layouts.",
      tags: ["TYPESCRIPT", "BETTERAUTH", "RBAC SEGMENT", "SAAS ARCHITECTURE"],
      color: "blue"
    }
  ];

  return (
    <section id="timeline" className="w-full px-4 sm:px-6 py-16 sm:py-20 bg-indigo-100 relative z-10 font-['Plus_Jakarta_Sans']">
      <div className="max-w-6xl mx-auto">
        
        {/* সেকশন হেডার (AOS অ্যানিমেশনসহ) */}
        <div className="text-left space-y-3 mb-12 sm:mb-16" data-aos="fade-down">
          <span className="text-[10px] font-bold text-indigo-600 tracking-[0.4em] uppercase bg-white border border-indigo-200 px-3 py-1 rounded-full inline-block shadow-sm">
            EVOLUTION
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-indigo-950 tracking-tight leading-tight">
            Journey & Milestones
          </h2>
        </div>

        {/* টাইমলাইন মেইন কন্টেইনার - ১০০% রেসপনসিভ */}
        <div className="relative border-l-2 border-indigo-200 dark:border-indigo-900/60 ml-3 md:ml-1/2 md:translate-x-[-1px] space-y-12 sm:space-y-16">
          {milestones.map((item, index) => (
            <div 
              key={index} 
              className="relative flex flex-col md:flex-row items-start md:justify-between group"
            >
              
              {/* টাইমলাইন সেন্টার ডট নোড (মোবাইল ও ডেক্সটপ ফ্রেন্ডলি এক্সেন্ট লক) */}
              <div className={`absolute -left-[18px] md:left-1/2 md:-translate-x-1/2 top-1.5 w-4 h-4 rounded-full border-4 bg-white transition-all duration-300 ${
                item.color === 'blue' ? 'border-indigo-600 group-hover:bg-indigo-600' : 'border-purple-600 group-hover:bg-purple-600'
              }`}></div>

              {/* বাম কলাম: মেটাডাটা ও ইনফো প্যানেল (AOS স্লাইড মোশন) */}
              <div 
                className="w-full md:w-[44%] pl-6 md:pl-0 md:text-right space-y-1"
                data-aos={window.innerWidth > 768 ? "fade-right" : "fade-up"}
              >
                <span className={`text-[10px] sm:text-xs font-black tracking-widest block uppercase ${item.color === 'blue' ? 'text-indigo-600' : 'text-purple-600'}`}>
                  {item.year}
                </span>
                <h3 className="text-base sm:text-lg font-black text-indigo-950 tracking-tight leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 font-bold">{item.institute}</p>
                <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium leading-relaxed">{item.board}</p>
                
                <span className={`inline-flex text-[9px] font-black tracking-wider uppercase px-2.5 py-0.5 rounded-full border mt-2 ${
                  item.color === 'blue' ? 'bg-indigo-50 text-indigo-600 border-indigo-100' : 'bg-purple-50 text-purple-600 border-purple-100'
                }`}>
                  ★ {item.result}
                </span>
              </div>

              {/* মাঝখানের স্পেসার (শুধুমাত্র ডেক্সটপে রেসপনসিভ স্পেসিং মেইনটেইন করার জন্য) */}
              <div className="hidden md:block w-[4%]"></div>

              {/* ডান কলাম: ডেসক্রিপশন কার্ড ব্লক (AOS স্লাইড মোশন) */}
              <div 
                className="w-full md:w-[48%] mt-3 md:mt-0 pl-6 md:pl-0"
                data-aos={window.innerWidth > 768 ? "fade-left" : "fade-up"}
              >
                <div className="bg-white border border-indigo-50 p-5 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] shadow-sm hover:shadow-[0_15px_30px_rgba(99,102,241,0.08)] hover:-translate-y-1 transition-all duration-300 group">
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium mb-4">
                    {item.desc}
                  </p>
                  
                  {/* ক্যাপসুল ট্যাগ প্যানেল */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="text-[9px] font-extrabold text-slate-400 border border-slate-100 px-2.5 py-1 rounded-full uppercase tracking-wider bg-slate-50/50"
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

