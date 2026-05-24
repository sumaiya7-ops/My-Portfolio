import React from 'react';

export default function EngineRoom() {
  // আপনার B-13 ব্যাচের সিলেবাস অনুযায়ী মডিফাইড ব্যাকএন্ড আইটেমসমূহ
  const engineItems = [
    { title: "Scalable APIs", desc: "Architecting robust RESTful API structures using Node.js and Express.js frameworks." },
    { title: "BetterAuth Layer", desc: "Implementing absolute secure multi-provider session auth systems for edge cases." },
    { title: "Mongoose Modeling", desc: "Optimizing database schemas and aggregate queries seamlessly in MongoDB." },
    { title: "RBAC & Stripe Gates", desc: "Enforcing safe Role-Based Authorization paths integrated with Stripe checkouts." }
  ];

  return (
    <section id="engine-room" className="w-full px-4 sm:px-6 py-16 sm:py-20 bg-indigo-100 relative z-10 font-['Plus_Jakarta_Sans']">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* বাম কলাম: কন্টেন্ট ও স্কিল গ্রিড (AOS অ্যানিমেশনসহ) */}
        <div className="lg:col-span-6 space-y-6 text-left" data-aos="fade-right">
          <span className="text-[10px] font-bold text-indigo-600 tracking-[0.2em] uppercase bg-white border border-indigo-200 px-3 py-1.5 rounded-full inline-block shadow-sm">
            Server-Side Mastery
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-indigo-950 tracking-tight leading-tight">
            Building the Engine Room
          </h2>
          <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
            I don't just build modern responsive frontends; I engineer high-performance backend pipelines. From strict relational data setups to robust middleware guards, I ensure production stability.
          </p>
          
          {/* ছোট চার কোণা কার্ড গ্রিড - সম্পূর্ণ রেসপনসিভ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {engineItems.map((item, idx) => (
              <div 
                key={idx} 
                className="p-5 bg-white border border-indigo-50 rounded-2xl hover:border-indigo-400 hover:shadow-[0_15px_30px_rgba(99,102,241,0.1)] transition-all duration-300 cursor-pointer group"
              >
                <h4 className="font-bold text-indigo-950 text-base sm:text-lg group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 mt-1 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ডান কলাম: লাইভ ডাটা-ফ্লো ডায়াগ্রাম কনসোল (AOS অ্যানিমেশনসহ) */}
        <div 
          className="lg:col-span-6 bg-slate-950 rounded-[2rem] p-5 sm:p-8 text-white space-y-4 shadow-2xl border border-slate-800 hover:scale-[1.01] transition-transform duration-300 w-full overflow-hidden" 
          data-aos="fade-left"
        >
          {/* কনসোল উইন্ডো হেডার */}
          <div className="flex items-center gap-2 border-b border-slate-900 pb-4 select-none">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-[10px] sm:text-xs text-slate-500 font-mono ml-2">architecture-flow.svg</span>
          </div>

          {/* আর্কিটেকচার ডায়াগ্রামের রেসপনসিভ ব্লক */}
          <div className="font-mono text-xs sm:text-sm space-y-3.5 py-2 text-slate-400">
            
            <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 text-indigo-400 font-bold text-center tracking-wide">
              Frontend UI (Next.js / Hero UI)
            </div>
            
            <div className="text-center text-slate-600 text-[10px] sm:text-xs font-bold animate-pulse">
              ⬇ SECURE HTTPS ENCRYPTED FLOW
            </div>
            
            {/* ৩ কলাম বিশিষ্ট মিডল সার্ভিস ব্লক - মোবাইলে অটো-ফিট হওয়ার জন্য টেক্সট অপ্টিমাইজড */}
            <div className="grid grid-cols-3 gap-2 text-center text-[10px] sm:text-xs font-semibold">
              <div className="bg-slate-900/60 p-2 rounded-lg border border-slate-800 text-amber-400">
                BetterAuth
              </div>
              <div className="bg-slate-900/60 p-2 rounded-lg border border-slate-800 text-indigo-300">
                RBAC Gate
              </div>
              <div className="bg-slate-900/60 p-2 rounded-lg border border-slate-800 text-purple-400">
                Stripe API
              </div>
            </div>
            
            <div className="text-center text-slate-600 text-[10px] sm:text-xs font-bold">
              ⬇ CRUD / REQ QUERIES
            </div>
            
            <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 text-emerald-400 font-bold text-center tracking-wide">
              Database Cluster (MongoDB Mongoose)
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
