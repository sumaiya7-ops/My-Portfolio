export default function Timeline() {
  const milestones = [
    {
      year: "2017 — 2018",
      title: "🏫 Secondary School Certificate (SSC)",
      institute: "Dhangora Model High School",
      board: "Board of Intermediate & Secondary Education, Rajshahi",
      result: "GPA 5.00",
      desc: "Completed SSC in Science with the highest distinction — GPA 5.00. Focused on Physics, Chemistry, Biology & Mathematics. Actively participated in Science Fairs, Math Olympiad training, and school debates.",
      tags: ["SCIENCE", ["MATH OLYMPIAD"], "SCIENCE FAIR"],
      color: "blue"
    },
    {
      year: "2019 — 2020",
      title: "🎓 Higher Secondary Certificate (HSC)",
      institute: "Islamia Government College",
      board: "Board of Intermediate & Secondary Education, Rajshahi",
      result: "GPA 5.00",
      desc: "Completed HSC in Science with GPA 5.00. Focused on advanced Physics, Chemistry, Biology, and Mathematics. Actively engaged in hackathons, coding contests, and science fairs.",
      tags: ["SCIENCE", "HACKATHONS", "CODING CONTESTS", "DEBATE"],
      color: "purple"
    },
    {
      year: "2025 — PRESENT",
      title: "💻 Full Stack Developer Journey",
      institute: "Self-Taught · Freelance Projects",
      board: "MERN Stack · Next.js · Problem Solving",
      result: "30+ PROJECTS",
      desc: "Started my programming journey with a deep focus on the MERN stack. Built 30+ real-world projects including ecommerce platforms, social media apps, and developer tools. Constantly leveling up.",
      tags: ["REACT", "NEXT.JS", "NODE.JS", "MONGOOSE", "TAILWIND"],
      color: "blue"
    },
    {
      year: "2026 — FUTURE",
      title: "🚀 Growing as a Software Engineer",
      institute: "Open to Opportunities · Remote & Onsite",
      board: "Next.js · TypeScript · System Design",
      result: "AVAILABLE NOW",
      desc: "Currently expanding into TypeScript, system design, and scalable SaaS architecture. Actively seeking full-time or freelance roles where I can contribute to impactful products and grow.",
      tags: ["TYPESCRIPT", "SYSTEM DESIGN", "OPEN SOURCE", "SAAS"],
      color: "purple"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 mb-16 relative z-10">
      <div className="text-left space-y-3 mb-16">
        <span className="text-[10px] font-bold text-blue-600 tracking-[0.4em] uppercase block">EVOLUTION</span>
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">Journey & Milestones</h2>
      </div>

      <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-1/2 md:translate-x-[-1px] space-y-16">
        {milestones.map((item, index) => (
          <div key={index} className="relative flex flex-col md:flex-row items-start md:justify-between group">
            
            {/* Timeline Center Dot Node */}
            <div className={`absolute -left-[9px] md:left-1/2 md:-translate-x-1/2 top-1.5 w-4 h-4 rounded-full border-4 bg-white dark:bg-slate-950 transition duration-300 ${
              item.color === 'blue' ? 'border-blue-500 group-hover:bg-blue-500' : 'border-purple-500 group-hover:bg-purple-500'
            }`}></div>

            {/* Left Column: Metadata & Degree Card */}
            <div className="w-full md:w-[44%] pl-6 md:pl-0 md:text-right space-y-2">
              <span className={`text-xs font-bold tracking-widest block ${item.color === 'blue' ? 'text-blue-600' : 'text-purple-600'}`}>
                {item.year}
              </span>
              <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">{item.title}</h3>
              <p className="text-xs text-slate-500 font-bold">{item.institute}</p>
              <p className="text-[11px] text-slate-400 font-medium">{item.board}</p>
              <span className={`inline-flex text-[10px] font-black tracking-wider uppercase px-3 py-1 rounded-full border mt-2 ${
                item.color === 'blue' ? 'bg-blue-50/50 dark:bg-blue-950/20 text-blue-600 border-blue-100' : 'bg-purple-50/50 dark:bg-purple-950/20 text-purple-600 border-purple-100'
              }`}>
                ★ {item.result}
              </span>
            </div>

            {/* Right Column: Description Card */}
            <div className="w-full md:w-[48%] mt-4 md:mt-0 pl-6 md:pl-0">
              <div className="bg-white/60 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/50 p-6 rounded-[2rem] shadow-sm hover:shadow-md transition-all duration-300">
                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed font-medium mb-4">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="text-[9px] font-extrabold text-slate-400 dark:text-slate-500 border border-slate-200/60 dark:border-slate-700/50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
