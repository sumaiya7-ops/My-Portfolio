import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What technologies do you use for development?",
      a: "I primarily use TypeScript with React or Next.js for the frontend, and Node.js with PostgreSQL or MongoDB for the backend. I'm also proficient in Docker, AWS, and modern CI/CD practices."
    },
    {
      q: "Do you take on freelance or contract work?",
      a: "Yes, I am open to selective high-impact freelance projects and contract roles. Whether you need an MVP built from scratch or code architecture refactoring, I am ready to collaborate."
    },
    {
      q: "What is your typical project timeline?",
      a: "Timelines depend heavily on complexity. A premium static page takes 1-2 weeks, a core full-stack application (MVP) takes 4-8 weeks, while large enterprise-grade systems can stretch from 3-6 months."
    }
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-16 mb-16 relative z-10">
      <div className="text-center space-y-3 mb-12">
        <span className="text-[10px] font-bold text-blue-600 tracking-[0.4em] uppercase block">F.A.Q</span>
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">Common Questions</h2>
      </div>

      <div className="space-y-4">
        {faqs.map((item, index) => (
          <div key={index} className="bg-white/60 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/50 rounded-[2rem] p-6 sm:p-8 shadow-sm transition-all duration-300">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between text-left font-black text-slate-800 dark:text-white text-base sm:text-lg tracking-tight group"
            >
              <span>{item.q}</span>
              <span className={`text-blue-600 text-xs transition-transform duration-300 transform ${openIndex === index ? 'rotate-180' : ''}`}>
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </button>
            
            <div className={`transition-all duration-300 overflow-hidden ${openIndex === index ? 'max-h-[500px] mt-4' : 'max-h-0'}`}>
              <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-medium">
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
