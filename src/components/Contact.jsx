export default function Contact() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 mb-16 relative z-10">
      <div className="text-center space-y-3 mb-16">
        <span className="text-[10px] font-bold text-blue-600 tracking-[0.4em] uppercase block">CONTACT ME</span>
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">Get in Touch</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Social Contacts */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <h3 className="text-xs font-black tracking-widest text-slate-400 uppercase">TALK TO ME</h3>
          
          {/* Email Card */}
          <div className="bg-white/60 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/50 p-6 rounded-[2rem] text-center space-y-4 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950/20 text-rose-500 border border-rose-100 dark:border-rose-900/40 flex items-center justify-center mx-auto text-lg">
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div>
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">EMAIL</span>
              <span className="block text-sm font-bold text-slate-800 dark:text-white mt-1">mhshanto.8989.t@gmail.com</span>
            </div>
            <a href="mailto:mhshanto.8989.t@gmail.com" className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:gap-3 transition-all">
              WRITE ME <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-white/60 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/50 p-6 rounded-[2rem] text-center space-y-4 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 text-emerald-500 border border-emerald-100 dark:border-emerald-900/40 flex items-center justify-center mx-auto text-lg">
              <i className="fa-brands fa-whatsapp"></i>
            </div>
            <div>
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">WHATSAPP</span>
              <span className="block text-sm font-bold text-slate-800 dark:text-white mt-1">+8801871758989</span>
            </div>
            <a href="wa.me" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:gap-3 transition-all">
              WRITE ME <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          {/* LinkedIn Card */}
          <div className="bg-white/60 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/50 p-6 rounded-[2rem] text-center space-y-4 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/20 text-blue-500 border border-blue-100 dark:border-blue-900/40 flex items-center justify-center mx-auto text-lg">
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
            <div>
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">LINKEDIN</span>
              <span className="block text-sm font-bold text-slate-800 dark:text-white mt-1">mh-shanto</span>
            </div>
            <a href="linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:gap-3 transition-all">
              WRITE ME <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 flex flex-col gap-6 w-full">
          <h3 className="text-xs font-black tracking-widest text-slate-400 uppercase">WRITE ME YOUR PROJECT</h3>
          <form onSubmit={(e) => e.preventDefault()} className="bg-white/60 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/50 p-8 rounded-[2rem] shadow-sm space-y-6">
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Name</label>
              <input type="text" placeholder="Insert your Name" className="w-full bg-slate-50/50 dark:bg-slate-900/30 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl px-5 py-4 text-sm font-medium outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 transition" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Email</label>
              <input type="email" placeholder="Insert your email" className="w-full bg-slate-50/50 dark:bg-slate-900/30 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl px-5 py-4 text-sm font-medium outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 transition" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Project</label>
              <textarea rows="5" placeholder="Write your project" className="w-full bg-slate-50/50 dark:bg-slate-900/30 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl px-5 py-4 text-sm font-medium outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 transition resize-none"></textarea>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition duration-300">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
