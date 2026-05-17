import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import EngineRoom from './components/EngineRoom';
import Methodology from './components/Methodology';
import TechStack from './components/TechStack';
import Expertise from './components/Expertise';
import Portfolio from './components/Portfolio';
import BehindScenes from './components/BehindScenes';
import Academic from './components/Academic';
import Timeline from './components/Timeline';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import ChatAI from './components/ChatAI';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#F8FAFC] dark:bg-[#0F172A] min-h-screen relative overflow-x-hidden text-slate-800 dark:text-slate-200 transition-colors duration-300">
      
      {/* Floating Background Accent Layer for Elite UI Looks */}
      <div className="absolute top-0 inset-0 flex items-center justify-center select-none pointer-events-none z-0 overflow-hidden">
        <h1 className="text-[14vw] font-extrabold text-black/[0.02] dark:text-white/[0.01] tracking-widest uppercase sticky top-1/3">
          SHANTO
        </h1>
      </div>

      {/* Synchronized Portfolio Tree Components */}
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <EngineRoom />
      <Methodology />
      <TechStack />
      <Expertise />
      <Portfolio />
      <BehindScenes />
      <Academic />
      <Timeline />
      <FAQ />
      <ChatAI />
      <Contact />
      <FinalCTA />
      <Footer />
      
    </div>
  );
}
