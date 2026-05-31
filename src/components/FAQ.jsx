import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What technologies do you use for development?",
      a: "I primarily specialize in the MERN & Next.js ecosystem. For frontends, I engineer highly interactive layouts using JavaScript (ES6+), React, Next.js, Tailwind CSS, and Hero UI. For backends, I write production-ready server logic using Node.js and Express.js, mapped with MongoDB and Mongoose ODM models. I also implement advanced features like BetterAuth setups, Stripe integrations, and Role-Based Access Controls."
    },
    {
      q: "Do you take on freelance or contract work?",
      a: "Yes, I am actively available and completely open to high-impact freelance projects, remote full-time positions, and contract roles. Whether you need a scalable MVP built entirely from scratch or modern secure feature integrations added to your ongoing system, I am ready to collaborate."
    },
    {
      q: "What is your typical project timeline?",
      a: "Project timelines depend heavily on the internal technical requirements and complexity. A premium fully responsive landing page or single-page application takes around 1-2 weeks. A comprehensive full-stack platform with secure authentication, payment routing, and full database CRUD workflows typically takes 4-8 weeks."
    },
    {
      q: "How do we get started on a project?",
      a: "It is simple! You can use the 'Start a Project' button or scroll down directly to the Contact section and send over your project breakdown. I will review your requirements and reach out within 24 hours to schedule a deep-dive discovery call to map out the complete architecture roadmaps."
    }
  ];

  return (
    <section id="faq" className="w-full px-4 sm:px-6 py-16 sm:py-20 bg-indigo-100 relative z-10 font-['Plus_Jakarta_Sans']">
      <div className="max-w-4xl mx-auto">
        
        {/* সেকশন হেডার */}
        <div className="text-center space-y-3 mb-12" data-aos="fade-down">
          <span className="text-[10px] font-bold text-indigo-600 tracking-[0.4em] uppercase bg-white border border-indigo-200 px-4 py-1.5 rounded-full inline-block shadow-sm">
            F.A.Q
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-indigo-950 tracking-tight leading-tight">
            Common Questions
          </h2>
        </div>

        {/* একর্ডিয়ন কন্টেইনার */}
        <div className="space-y-4" data-aos="fade-up">
          {faqs.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-indigo-50/60 rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-8 shadow-sm hover:shadow-[0_15px_30px_rgba(99,102,241,0.06)] transition-all duration-300"
            >
              {/* কোয়েশ্চন টগল বাটন */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left font-black text-indigo-950 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm sm:text-lg tracking-tight group cursor-pointer"
              >
                <span className="pr-4 leading-snug">{item.q}</span>
                <span className={`text-indigo-600 text-xs sm:text-sm transition-transform duration-300 transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  <i className="fa-solid fa-chevron-down"></i>
                </span>
              </button>
              
              {/* অ্যানিমেটেড আনসার ঙ্ক */}
              <div className={`transition-all duration-300 overflow-hidden ${openIndex === index ? 'max-h-[500px] mt-4' : 'max-h-0'}`}>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium pt-1 border-t border-indigo-50/50">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
