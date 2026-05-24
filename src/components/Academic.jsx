import React from 'react';

export default function Academic() {
  const assignments = [
    { id: "01", score: 60, total: 60, label: "Perfect" },
    { id: "02", score: 60, total: 60, label: "Perfect" },
    { id: "03", score: 60, total: 60, label: "Perfect" },
    { id: "04", score: 60, total: 60, label: "Perfect" },
    { id: "05", score: 60, total: 60, label: "Perfect" },
    { id: "06", score: 60, total: 60, label: "Perfect" },
    { id: "07", score: 59, total: 60, label: "Excellent" },
    { id: "08", score: 60, total: 60, label: "Perfect" }
  ];

  return (
    <section id="academic" className="w-full px-4 sm:px-6 py-16 sm:py-20 bg-indigo-100 relative z-10 font-['Plus_Jakarta_Sans']">
      <div className="max-w-6xl mx-auto">
        
        {/* সেকশন হেডার (AOS অ্যানিমেশনসহ) */}
        <div className="text-center space-y-4 mb-12 sm:mb-16" data-aos="fade-down">
          <span className="text-[10px] font-bold text-indigo-600 tracking-[0.4em] uppercase bg-white border border-indigo-200 px-4 py-1.5 rounded-full inline-block shadow-sm">
            ACADEMIC PERFORMANCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-indigo-950 tracking-tight leading-tight">
            The Power of Consistency
          </h2>
          <div className="h-1 w-16 sm:w-20 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* গ্রিড লেআউট: মোবাইলে ১ কলাম, ডেক্সটপে ১২ কলাম গ্রিড */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* বাম পাশ: গ্লোবাল পারফরম্যান্স ওভারভিউ */}
          <div className="lg:col-span-4 bg-white border border-indigo-50 p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] shadow-sm flex flex-col justify-between space-y-6 sm:space-y-8 group hover:shadow-[0_20px_40px_rgba(99,102,241,0.1)] transition-all duration-300" data-aos="fade-right">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fa-solid fa-chart-line"></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-indigo-950 tracking-tight mb-2 sm:mb-3">
                Overall Track Record
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                A data-driven snapshot of my regular conceptual assessment evaluations throughout the intensive full-stack engineering curriculum.
              </p>
            </div>

            {/* হাইলাইট স্কোর কাউন্টার */}
            <div className="bg-indigo-50/50 rounded-2xl p-5 sm:p-6 border border-indigo-100/50 text-center">
              <span className="text-3xl sm:text-4xl font-black text-indigo-600">99.8%</span>
              <p className="text-[10px] sm:text-xs font-bold text-indigo-950 uppercase tracking-wider mt-1">Average Assignment Accuracy</p>
            </div>
          </div>

          {/* ডান পাশ: মডার্ন কম্প্যাক্ট লিস্ট ভিউ (মোবাইল ফ্রেন্ডলি টাচ-স্ক্রোল ফিক্সড) */}
          <div className="lg:col-span-8 bg-white border border-indigo-50 p-5 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] shadow-sm space-y-4 hover:shadow-[0_20px_40px_rgba(99,102,241,0.1)] transition-all duration-300" data-aos="fade-left">
            <h4 className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-widest px-2 mb-2">
              Assignment Matrix Logs
            </h4>
            
            {/* মোবাইল ফ্রেন্ডলি কন্টেইনার - টাচ স্ক্রিনে কোন ল্যাগ বা জ্যাম হবে না */}
            <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1 custom-scrollbar touch-pan-y">
              {assignments.map((item, index) => {
                const percentage = (item.score / item.total) * 100;
                return (
                  <div 
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl sm:rounded-2xl border border-slate-50 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all duration-200 group/item cursor-pointer gap-2 sm:gap-4"
                  >
                    {/* বামে: নাম ও প্রোগ্রেস বার */}
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between text-xs sm:text-sm font-bold">
                        <span className="text-indigo-950 group-hover/item:text-indigo-600 transition-colors">Assignment {item.id}</span>
                        <span className="text-slate-500">{item.score}/{item.total}</span>
                      </div>
                      {/* আধুনিক লিনিয়ার ট্র্যাক বার */}
                      <div className="w-full h-1.5 sm:h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-indigo-600 rounded-full group-hover/item:bg-indigo-500 transition-all duration-500 ease-out" 
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* ডানে: রেটিং ব্যাজ */}
                    <div className="self-start sm:self-center">
                      <span className={`text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-lg sm:rounded-xl border tracking-wide uppercase inline-block ${
                        item.score === 60 
                          ? 'bg-emerald-50 text-emerald-600 border-emerald-100' 
                          : 'bg-indigo-50 text-indigo-600 border-indigo-100'
                      }`}>
                        {item.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
