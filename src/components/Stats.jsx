import React from 'react';

export default function StatsSection() {
  // প্রো-ম্যাক্স প্রফেশনাল ডাটা অ্যারে
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
    <section className="w-full px-4 sm:px-6 py-16 bg-indigo-100 font-['Plus_Jakarta_Sans']">
      <div className="max-w-7xl mx-auto">
        
        {/* 🔘 ১. প্রো-ম্যাক্স অ্যাকশন বাটন প্যানেল */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          {/* Start a Project - কন্টাক্ট সেকশনে স্মুথলি স্ক্রোল করবে */}
          <a
            href="#contact"
            className="bg-indigo-600 text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-md shadow-indigo-100 hover:bg-indigo-700 hover:scale-105 active:scale-98 transition-all duration-300 cursor-pointer text-center min-w-[140px]"
          >
            Start a Project
          </a>

          {/* View Projects - প্রজেক্ট সেকশনে স্মুথলি স্ক্রোল করবে */}
          <a
            href="#projects"
            className="bg-white border border-indigo-100 text-indigo-950 px-7 py-3.5 rounded-xl font-bold text-sm shadow-sm hover:border-indigo-400 hover:text-indigo-600 hover:scale-105 active:scale-98 transition-all duration-300 cursor-pointer text-center min-w-[140px]"
          >
            View Projects
          </a>

          {/* Email Me - সরাসরি ইউজারের ইমেইল অ্যাপ ওপেন করবে */}
          <a
            href="mailto:sumaiyakookie307@gmail.com" 
            className="bg-white border border-indigo-100 text-indigo-950 px-7 py-3.5 rounded-xl font-bold text-sm shadow-sm hover:border-indigo-400 hover:text-indigo-600 hover:scale-105 active:scale-98 transition-all duration-300 cursor-pointer text-center min-w-[140px]"
          >
            Email Me
          </a>
        </div>

        {/* 📊 ২. গ্রিড ম্যাপিং সেকশন */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {statItems.map((item, index) => (
            <div 
              key={index} 
              className={`p-5 sm:p-6 bg-white border ${item.border} rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group`}
            >
              {/* আইকন বক্স */}
              <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <i className={item.icon}></i>
              </div>
              
              {/* মেইন নাম্বার/ডাটা */}
              <h4 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {item.val}
              </h4>
              
              {/* সাব-টাইটেল */}
              <p className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-400 font-bold mt-1.5 leading-tight">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
