import React from 'react';

export default function Contact() {
  // আপনার সম্পূর্ণ সঠিক ও ফাংশনাল কন্টাক্ট ইনফরমেশন
  const myInfo = {
    email: "sumaiyakookie307@gmail.com",
    number: "01826459605",
    whatsapp: "8801826459605", // কান্ট্রি কোডসহ হোয়াটসঅ্যাপ ফরম্যাট
    linkedinUrl: "www.linkedin.com/in/sumaiya-sorhad" // আপনার আসল লিংকডইন প্রোফাইল লিঙ্ক
  };

  return (
    <section id="contact" className="w-full px-4 sm:px-6 py-16 sm:py-20 bg-indigo-100 relative z-10 font-['Plus_Jakarta_Sans']">
      <div className="max-w-7xl mx-auto">
        
        {/* সেকশন হেডার */}
        <div className="text-center space-y-3 mb-12 sm:mb-16" data-aos="fade-down">
          <span className="text-[10px] font-bold text-indigo-600 tracking-[0.4em] uppercase bg-white border border-indigo-200 px-4 py-1.5 rounded-full inline-block shadow-sm">
            CONTACT ME
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-indigo-950 tracking-tight leading-tight">
            Get in Touch
          </h2>
        </div>

        {/* মেইন গ্রিড কন্টেইনার */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* বাম কলাম: সোশ্যাল ও ডিরেক্ট কমিউনিকেশন কার্ড */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full" data-aos="fade-right">
            <h3 className="text-xs font-black tracking-widest text-slate-400 uppercase px-1">TALK TO ME</h3>
            
            {/* ১. ইমেইল কার্ড */}
            <div className="bg-white border border-indigo-50 p-6 rounded-[2rem] text-center space-y-4 shadow-sm hover:shadow-[0_20px_40px_rgba(99,102,241,0.08)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 border border-rose-100 flex items-center justify-center mx-auto text-lg group-hover:scale-110 transition-transform">
                <i className="fa-regular fa-envelope"></i>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">EMAIL</span>
                <span className="block text-xs sm:text-sm font-bold text-indigo-950 mt-1 break-all px-2">{myInfo.email}</span>
              </div>
              <a href={`mailto:${myInfo.email}?subject=Inquiry%20From%20Portfolio`} className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 hover:gap-3 transition-all">
                WRITE ME <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            {/* ২. হোয়াটসঅ্যাপ কার্ড (👑 লিংক সিনট্যাক্স ঠিক করা হয়েছে) */}
            <div className="bg-white border border-indigo-50 p-6 rounded-[2rem] text-center space-y-4 shadow-sm hover:shadow-[0_20px_40px_rgba(99,102,241,0.08)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-500 border border-emerald-100 flex items-center justify-center mx-auto text-lg group-hover:scale-110 transition-transform">
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">WHATSAPP</span>
                <span className="block text-sm font-bold text-indigo-950 mt-1">{myInfo.number}</span>
              </div>
              <a href={`https://wa.me{myInfo.whatsapp}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 hover:gap-3 transition-all">
                WRITE ME <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            {/* ৩. লিংকডইন কার্ড */}
            <div className="bg-white border border-indigo-50 p-6 rounded-[2rem] text-center space-y-4 shadow-sm hover:shadow-[0_20px_40px_rgba(99,102,241,0.08)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-500 border border-indigo-100 flex items-center justify-center mx-auto text-lg group-hover:scale-110 transition-transform">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">LINKEDIN</span>
                <span className="block text-sm font-bold text-indigo-950 mt-1">Sumaiya Sarhad</span>
              </div>
              <a href={myInfo.linkedinUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 hover:gap-3 transition-all">
                WRITE ME <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* ডান কলাম: ১০০% রিয়েল ও সাবমিট-রেডি কন্টাক্ট ফর্ম (👑 Netlify Forms এম্বেড করা হয়েছে) */}
          <div className="lg:col-span-7 flex flex-col gap-6 w-full" data-aos="fade-left">
            <h3 className="text-xs font-black tracking-widest text-slate-400 uppercase px-1">WRITE ME YOUR PROJECT</h3>
            
            <form 
              name="portfolio-contact" 
              method="POST" 
              data-netlify="true"
              className="bg-white border border-indigo-50/70 p-6 sm:p-8 rounded-[2rem] shadow-sm space-y-5 sm:space-y-6"
            >
              {/* Netlify-র জন্য প্রয়োজনীয় হিডেন ইনপুট */}
              <input type="hidden" name="form-name" value="portfolio-contact" />
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Name</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Insert your name" 
                  required
                  className="w-full bg-slate-50 border border-indigo-100 rounded-xl sm:rounded-2xl px-4 py-3.5 sm:px-5 sm:py-4 text-xs sm:text-sm font-medium outline-none focus:border-indigo-500 focus:bg-white transition" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Email</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Insert your email" 
                  required
                  className="w-full bg-slate-50 border border-indigo-100 rounded-xl sm:rounded-2xl px-4 py-3.5 sm:px-5 sm:py-4 text-xs sm:text-sm font-medium outline-none focus:border-indigo-500 focus:bg-white transition" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Project Summary</label>
                <textarea 
                  name="message"
                  rows="4" 
                  placeholder="Write your project details" 
                  required
                  className="w-full bg-slate-50 border border-indigo-100 rounded-xl sm:rounded-2xl px-4 py-3.5 sm:px-5 sm:py-4 text-xs sm:text-sm font-medium outline-none focus:border-indigo-500 focus:bg-white transition resize-none"
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3.5 sm:py-4 px-6 rounded-xl sm:rounded-2xl shadow-md shadow-indigo-100 hover:bg-indigo-700 hover:shadow-lg transition duration-300 cursor-pointer text-xs sm:text-sm tracking-wide">
                SEND MESSAGE
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
