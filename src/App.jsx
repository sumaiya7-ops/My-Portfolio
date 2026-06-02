import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import EngineRoom from './components/EngineRoom';

import TechStack from './components/TechStack';
import Expertise from './components/Expertise';
import Portfolio from './components/Portfolio';
import BehindScenes from './components/BehindScenes';

import Timeline from './components/Timeline';

import Contact from './components/Contact';
import ChatAI from './components/ChatAI';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  
  // পেজে প্রথমবার ঢোকার সময় স্ক্রিন যাতে ওপরে (Hero Section) থাকে
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // 👑 প্রমেক্স ফিক্স: h-auto সেট করে স্ক্রোলিং চেইন ওপেন করা হয়েছে যাতে স্টিকি নেভবার স্বাধীনভাবে কাজ করতে পারে
    <div className="bg-indigo-100 dark:bg-[#0F172A] min-h-screen h-auto w-full relative overflow-x-hidden text-slate-800 dark:text-slate-200 transition-colors duration-300 scroll-smooth font-['Plus_Jakarta_Sans'] selection:bg-indigo-600 selection:text-white">
      
      {/* Background Floating Accent Layer */}
      <div className="absolute top-0 inset-0 flex items-center justify-center select-none pointer-events-none z-0 overflow-hidden">
        <h1 className="text-[12vw] font-extrabold text-indigo-950/[0.015] dark:text-white/[0.01] tracking-widest uppercase sticky top-1/3">
          SUMAIYA
        </h1>
      </div>

      {/* ১. স্টিকি নেভিগেশন বার - এখন এটি সবসময় স্ক্রিনের ওপরে ফিক্সড থাকবে */}
      <Navbar />
      
      {/* ২. মেইন কন্টেন্ট কন্টেইনার - ফুল রেসপনসিভ ও ওভারফ্লো প্রটেকশন */}
      <main className="relative z-20 w-full flex flex-col">
        
        {/* প্রতিটি সেকশন এখন রেসপনসিভ এবং স্ক্রোল রিভিল ফ্রেন্ডলি */}
        <div className="w-full max-w-full" data-aos="fade-up"><Hero /></div>
        <div className="w-full max-w-full" data-aos="fade-up"><Stats /></div>
        <div className="w-full max-w-full" data-aos="fade-up"><About /></div>
        <div className="w-full max-w-full" data-aos="fade-up"><Services /></div>
        <div className="w-full max-w-full" data-aos="fade-up"><EngineRoom /></div>

        <div className="w-full max-w-full" data-aos="fade-up"><TechStack /></div>
        <div className="w-full max-w-full" data-aos="fade-up"><Expertise /></div>
        <div className="w-full max-w-full" data-aos="fade-up"><Portfolio /></div>
        <div className="w-full max-w-full" data-aos="fade-up"><BehindScenes /></div>

        <div className="w-full max-w-full" data-aos="fade-up"><Timeline /></div>

        <div className="w-full max-w-full" data-aos="fade-up"><ChatAI /></div>
        <div className="w-full max-w-full" data-aos="fade-up"><Contact /></div>
        <div className="w-full max-w-full" data-aos="fade-up"><FinalCTA /></div>
        
      </main>

      {/* ৩. ফুটার */}
      <Footer />
      
    </div>
  );
}
