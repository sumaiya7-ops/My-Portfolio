import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  const myInfo = {
    name: "Sumaiya Sarhand Marjiya",
    email: "sumaiyakookie307@gmail.com",
    number: "01826459605"
  };

  // 👑 ফিক্সড: নাম এবং আইডির সঠিক ম্যাপিং বাস্কেট
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'tech-stack' }, // 👑 ফিক্সড: #tech-stack আইডি ম্যাপ করা হয়েছে
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-indigo-100/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-indigo-200/50 dark:border-slate-800/50 transition-all duration-300 px-4 md:px-12 py-4 flex flex-col font-['Plus_Jakarta_Sans'] shadow-sm">
      
      {/* মেইন নেভবার কন্টেইনার বার */}
      <div className="w-full flex items-center justify-between">
        
        {/* ব্র্যান্ড লোগো এবং আপনার প্রোফাইল স্মল ইমেজ */}
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-indigo-200 dark:border-slate-800 overflow-hidden flex items-center justify-center shadow-md shadow-indigo-100 dark:shadow-none group-hover:rotate-12 group-hover:scale-105 transition-all duration-300">
            <img 
              src="/profile.jpg" 
              alt="Sumaiya Logo Avatar" 
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                e.target.style.display = 'none';
                const fallback = document.createElement('span');
                fallback.className = 'font-extrabold text-white bg-indigo-600 w-full h-full flex items-center justify-center text-sm';
                fallback.innerText = 'SSM';
                e.target.parentNode.appendChild(fallback);
              }}
            />
          </div>
          <span className="text-lg font-black text-indigo-950 dark:text-white tracking-tight">
            Sumaiya<span className="text-indigo-600 dark:text-indigo-400">.</span>
          </span>
        </div>

        {/* ডেক্সটপ মেনু লিংকসমূহ */}
        <div className="hidden md:flex items-center bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-8 py-2.5 rounded-full border border-indigo-50 dark:border-slate-850 shadow-sm gap-8 text-sm font-bold text-indigo-900/80 dark:text-slate-300">
          {navItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`} 
              className="relative hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-indigo-600 dark:before:bg-indigo-400 hover:before:w-full before:transition-all before:duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* ডান পাশের অ্যাকশন বাটনসমূহ */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* ডার্ক মোড টগল */}
          <button
            onClick={toggleDarkMode}
            className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 text-indigo-600 dark:text-amber-400 shadow-sm border border-indigo-50 dark:border-slate-800 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
            title="Toggle Theme"
          >
            <i className={`fa-solid ${darkMode ? 'fa-sun text-lg' : 'fa-moon text-lg'}`}></i>
          </button>
          
          {/* Hire Me বাটন */}
          <a 
            href={`mailto:${myInfo.email}?subject=Hiring%20Sumaiya`}
            className="hidden sm:inline-block bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md shadow-indigo-100 dark:shadow-none hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            Hire Me
          </a>

          {/* মোবাইল মেনু বাটন */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-xl bg-white dark:bg-slate-900 text-indigo-950 dark:text-white shadow-sm border border-indigo-50 dark:border-slate-800 flex items-center justify-center text-lg transition-all duration-200 cursor-pointer"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* মোবাইল ড্রপডাউন মেনু রেপার */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col gap-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-4 rounded-2xl border border-indigo-50 dark:border-slate-800 shadow-xl">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold text-indigo-950 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 px-2 py-1.5 rounded-xl hover:bg-indigo-50/50 dark:hover:bg-slate-800/50 transition-all duration-200"
            >
              {item.name}
            </a>
          ))}
          <a 
            href={`mailto:${myInfo.email}?subject=Hiring%20Sumaiya`}
            className="sm:hidden block text-center bg-indigo-600 text-white py-2.5 rounded-xl text-sm font-bold shadow-md shadow-indigo-100 mt-1"
          >
            Hire Me
          </a>
        </div>
      </div>

    </nav>
  );
}
