import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // আপনার কাস্টম কন্টাক্ট এবং লিঙ্ক ম্যাপিং অবজেক্ট
  const myInfo = {
    name: "SUMAIYA SARHAD MARJIYA", // 👑 নামের বানান নিখুঁত করা হয়েছে
    linkedinUrl: "https://linkedin.com",
    githubUrl: "https://github.com", // আপনার গিটহাব লিঙ্ক
    facebookUrl: "https://facebook.com" // আপনার ফেসবুক লিঙ্ক
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Skills Stack', href: '#tech-stack' }, // 👑 সঠিক আইডি লিঙ্ক সেট করা হয়েছে
    { label: 'Methodology', href: '#methodology' }, // 👑 একাডেমিক বদলে মেথডোলজি দেওয়া হয়েছে
    { label: 'Hire Me', href: '#contact' },
  ];

  const socialLinks = [
    { label: 'GITHUB', href: myInfo.githubUrl, color: 'hover:text-black hover:border-black' },
    { label: 'LINKEDIN', href: myInfo.linkedinUrl, color: 'hover:text-indigo-600 hover:border-indigo-600' },
    { label: 'FACEBOOK', href: myInfo.facebookUrl, color: 'hover:text-blue-600 hover:border-blue-600' }
  ];

  return (
    <footer 
      className="w-full bg-indigo-100 border-t border-indigo-200/60 relative z-10 font-['Plus_Jakarta_Sans']"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
        
        {/* বাম কলাম: পার্সোনালাইজড ব্র্যান্ডিং ও কপিরাইট ডিটেইলস */}
        <div className="md:col-span-5 space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-xl font-black text-indigo-950 tracking-tight">
              Sumaiya<span className="text-indigo-600">.</span>
            </span>
          </div>
          <p className="text-[11px] font-bold text-slate-500 tracking-wider uppercase leading-relaxed max-w-md">
            &copy; {currentYear} {myInfo.name}. <br />
            PROFESSIONAL FULL-STACK SOFTWARE ENGINEER. <br /> {/* 👑 ব্যাচ নম্বর সরিয়ে ইন্ডাস্ট্রি গ্রেড করা হয়েছে */}
            ARCHITECTING SECURE AND HIGH-PERFORMANCE DIGITAL ECOSYSTEMS.
          </p>
        </div>

        {/* সেন্ট্রাল কলাম: কুইক ন্যাভিগেশন লিংকসমূহ (মোবাইল ফ্রেন্ডলি ২x২ গ্রিড) */}
        <div className="md:col-span-3 grid grid-cols-2 gap-x-4 gap-y-3 text-left md:text-center">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-xs font-bold text-slate-600 uppercase tracking-widest hover:text-indigo-600 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* ডান কলাম: ডাইনামিক ক্যাপসুল সোশ্যাল ট্যাগসমূহ */}
        <div className="md:col-span-4 flex flex-wrap gap-2 md:justify-end">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 bg-white border border-indigo-100 rounded-full text-[10px] font-bold text-slate-500 tracking-widest transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-sm ${social.color}`}
            >
              {social.label}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}

