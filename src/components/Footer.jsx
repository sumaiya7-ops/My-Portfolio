import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Projects Archive', href: '#archive' },
    { label: 'Hire Me', href: '#contact' },
    { label: 'Resume', href: '#resume' },
  ];

  const socialLinks = [
    { label: 'GITHUB', href: 'https://github.com', color: 'hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white' },
    { label: 'LINKEDIN', href: 'https://linkedin.com', color: 'hover:text-blue-600 hover:border-blue-600' },
    { label: 'FACEBOOK', href: 'https://facebook.com', color: 'hover:text-blue-500 hover:border-blue-500' },
    { label: 'X (TWITTER)', href: 'https://twitter.com', color: 'hover:text-slate-700 dark:hover:text-slate-300 hover:border-slate-700 dark:hover:border-slate-300' },
  ];

  return (
    <footer className="border-t border-slate-100 dark:border-slate-800/60 bg-white/40 dark:bg-slate-900/20 backdrop-blur-md relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
        
        {/* Left Column: Brand & Copyright Details */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xl font-black text-slate-800 dark:text-white tracking-tight">
              MH<span className="text-amber-500">.</span>
            </span>
          </div>
          <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 tracking-wider uppercase leading-relaxed max-w-sm">
            © {currentYear} MH SHANTO. FULL-STACK DEVELOPER FROM BANGLADESH. <br />
            DESIGNING HIGH-PERFORMANCE SOLUTIONS.
          </p>
        </div>

        {/* Center Column: Quick Navigation Links (2x2 Grid Form) */}
        <div className="md:col-span-3 grid grid-cols-2 gap-x-4 gap-y-2 text-left md:text-center">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Column: Dynamic Capsule Social Tags */}
        <div className="md:col-span-4 flex flex-wrap gap-2 md:justify-end">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 border border-slate-200/60 dark:border-slate-800 rounded-full text-[10px] font-bold text-slate-400 dark:text-slate-500 tracking-widest transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${social.color}`}
            >
              {social.label}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
