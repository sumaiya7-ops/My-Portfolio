import React from 'react';

export default function Stats() {
  // আপনার প্রোভাইড করা আসল ইমেইল এড্রেস
  const myInfo = {
    email: "sumaiyakookie3072@gmail.com"
  };

  // ফাংশনাল অ্যাকশন বাটন লিংকসমূহ - সম্পূর্ণ ইনডিগো থিমে অপ্টিমাইজড
  const ctaButtons = [
    { text: "Start a Project", href: "#contact", class: "bg-indigo-600 text-white shadow-indigo-200 hover:bg-indigo-700" },
    { text: "View Projects", href: "#projects", class: "bg-white border border-indigo-100 text-indigo-950 hover:border-indigo-400 hover:text-indigo-600 shadow-sm" },
    { text: "Email Me", href: `mailto:${myInfo.email}?subject=Inquiry%20From%20Portfolio`, class: "bg-white border border-indigo-100 text-slate-600 hover:border-indigo-400 hover:text-indigo-600 shadow-sm" }
  ];

  // B-13 কনটেক্সট এবং ডুপ্লিকেট রিমুভড ৮টি লাক্সারি মেট্রিক আইটেমস
  const statItems = [
    { val: "20+", title: "Completed Projects", color: "text-indigo-600", bg: "bg-indigo-50/60", border: "border-indigo-100", icon: "fa-solid fa-laptop-code" },
    { val: "100%", title: "Client Satisfaction", color: "text-emerald-600", bg: "bg-emerald-50/60", border: "border-emerald-100", icon: "fa-solid fa-circle-check" },
    { val: "50k+", title: "Lines of Clean Code", color: "text-purple-600", bg: "bg-purple-50/60", border: "border-purple-100", icon: "fa-solid fa-code" },
    { val: "B-13", title: "Batch Core Expert", color: "text-amber-600", bg: "bg-amber-50/60", border: "border-amber-100", icon: "fa-solid fa-graduation-cap" },
    { val: "15+", title: "Tech Stack Mastered", color: "text-rose-600", bg: "bg-rose-50/60", border: "border-rose-100", icon: "fa-solid fa-cubes" },
    { val: "99.8%", title: "Assignment Accuracy", color: "text-cyan-600", bg: "bg-cyan-50/60", border: "border-cyan-100", icon: "fa-solid fa-chart-line" },
    { val: "24/7", title: "Remote Availability", color: "text-teal-600", bg: "bg-teal-50/60", border: "border-teal-100", icon: "fa-solid fa-headset" },
    { val: "2+", title: "Years Coding Journey", color: "text-fuchsia-600", bg: "bg-fuchsia-50/60", border: "border-fuchsia-100", icon: "fa-solid fa-bolt" }
  ];

  return (
    <section id="stats" className="w-full px-4 sm:px-6 py-12 bg-indigo-100 relative z-10 font-['Plus_Jakarta_Sans'] space-y-16">
      <div className="max-w-7xl mx-auto space-y-14">
        
        {/* টপ কন্টাক্ট অ্যাকশন বাটন প্যানেল (AOS অ্যানিমেশনসহ) */}
        <div 
          className="flex flex-wrap gap-3 sm:gap-4 items-center justify-start"
          data-aos="fade-up"
        >
          {ctaButtons.map((btn, idx) => (
            <a 
              key={idx} 
              href={btn.href}
              className={`px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm shadow-md transition-all duration-300 hover:scale-105 active:scale-98 cursor-pointer text-center inline-block ${btn.class}`}
            >
              {btn.text}
            </a>
          ))}
        </div>

        {/* ৮টি মেট্রিক কাউন্টার গ্রিড (AOS অ্যানিমেশন এবং সিরিয়াল ডিলে সহ) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 sm:gap-x-8 gap-y-10 sm:gap-y-12 items-center text-center">
          {statItems.map((item, idx) => (
            <div 
              key={idx} 
              className="space-y-3 group cursor-pointer"
              data-aos="zoom-in"
              data-aos-delay={idx * 50} // প্রতিটি মেট্রিক বক্স একটার পর একটা স্মুথ টাইমিংয়ে পপ-আপ হবে
            >
              {/* মডার্ন ফন্ট-অসাম আইকন বাবল */}
              <div className={`mx-auto w-12 h-12 rounded-2xl ${item.bg} border ${item.border} flex items-center justify-center ${item.color} shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <i className={`${item.icon} text-base`}></i>
              </div>
              
              {/* ভ্যালু ও মেটা টাইটেল */}
              <div className="space-y-1">
                <h3 className="text-2xl sm:text-4xl font-black text-indigo-950 tracking-tight">
                  {item.val}
                </h3>
                <p className="text-[9px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1 px-1 leading-snug">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
