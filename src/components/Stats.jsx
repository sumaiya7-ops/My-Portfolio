import React from 'react';

export default function StatsSection() {
  // Production-Grade Technical Metrics Data
  const statItems = [
    { val: "20+", title: "Completed Projects", color: "text-indigo-600", bg: "bg-indigo-50/60", border: "border-indigo-100", icon: "fa-solid fa-laptop-code" },
    { val: "100%", title: "Client Satisfaction", color: "text-emerald-600", bg: "bg-emerald-50/60", border: "border-emerald-100", icon: "fa-solid fa-circle-check" },
    { val: "50k+", title: "Lines of Clean Code", color: "text-purple-600", bg: "bg-purple-50/60", border: "border-purple-100", icon: "fa-solid fa-code" },
    { val: "99.9%", title: "Server Uptime (SLA)", color: "text-amber-600", bg: "bg-amber-50/60", border: "border-amber-100", icon: "fa-solid fa-server" },
    { val: "15+", title: "Tech Stack Mastered", color: "text-rose-600", bg: "bg-rose-50/60", border: "border-rose-100", icon: "fa-solid fa-cubes" },
    { val: "100%", title: "SEO & Optimization", color: "text-cyan-600", bg: "bg-cyan-50/60", border: "border-cyan-100", icon: "fa-solid fa-gauge-high" },
    { val: "24/7", title: "Remote Availability", color: "text-teal-600", bg: "bg-teal-50/60", border: "border-teal-100", icon: "fa-solid fa-headset" },
    { val: "2+", title: "Years Coding Journey", color: "text-fuchsia-600", bg: "bg-fuchsia-50/60", border: "border-fuchsia-100", icon: "fa-solid fa-bolt" }
  ];

  return (
    <section id="stats" className="w-full px-4 sm:px-6 py-12 bg-indigo-100 relative z-10 font-['Plus_Jakarta_Sans']">
      <div className="max-w-7xl mx-auto">
        
        {/* 📊 প্রফেশনাল গ্রিড ম্যাপিং সেকশন (AOS স্ক্রোল অ্যানিমেশন সহ) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {statItems.map((item, index) => (
            <div 
              key={index} 
              data-aos="fade-up"
              data-aos-delay={index * 50} // প্রতিটি কার্ড একটার পর একটা স্মুথলি রিভিল হবে
              className={`p-5 sm:p-6 bg-white/90 backdrop-blur-sm border ${item.border} rounded-[2rem] shadow-sm hover:shadow-[0_20px_40px_rgba(99,102,241,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center group`}
            >
              {/* আইকন বক্স */}
              <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center text-xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <i className={item.icon}></i>
              </div>
              
              {/* মেইন নাম্বার/ডাটা */}
              <h4 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {item.val}
              </h4>
              
              {/* সাব-টাইটেল (হাই কনট্রাস্ট ও স্পষ্ট রিডেবিলিটি) */}
              <p className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-500 font-extrabold mt-2 leading-tight">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

