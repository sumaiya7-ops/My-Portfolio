import React from 'react';

export default function About() {
  // আপনার ব্যক্তিগত ইনফরমেশন অবজেক্ট
  const myInfo = {
    name: "Sumaiya Sorhad Marjiya",
    email: "sumaiyakookie3072@gmail.com",
    number: "01826459605"
  };

  return (
    <section id="about" className="w-full px-6 py-20 bg-indigo-100 relative z-10 font-['Plus_Jakarta_Sans']">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content Side */}
        <div className="lg:col-span-6 space-y-6 text-left" data-aos="fade-right">
          <span className="text-[10px] font-bold text-indigo-600 tracking-[0.2em] uppercase bg-white border border-indigo-200 px-4 py-1.5 rounded-full inline-block shadow-sm">
            The Architect
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-indigo-950 tracking-tight">
            About Me
          </h2>
          <p className="text-slate-800 text-lg sm:text-xl font-bold leading-relaxed max-w-xl">
            I'm <span className="text-indigo-600">{myInfo.name}</span>, a Full-Stack Web Developer specializing in building high-performance digital experiences.
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
            I specialize in bridging the gap between complex backend logic and fluid, intuitive user interfaces. With a solid foundation in modern JavaScript frameworks, responsive layouts, and robust database architectures, I engineer clean code that scales seamlessly.
          </p>
          
          {/* Functional Call Button */}
          <div className="pt-2">
            <a 
              href={`tel:${myInfo.number}`}
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3.5 rounded-full shadow-lg shadow-indigo-200/50 hover:shadow-xl hover:shadow-indigo-300/50 hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
            >
              <i className="fa-solid fa-phone"></i> Call Me Now
            </a>
          </div>
        </div>

        {/* Right Feature Cards Side */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6" data-aos="fade-left">
          
          {/* Large Main Feature Card */}
          <div className="sm:col-span-2 bg-white border border-indigo-50 p-8 rounded-[2rem] shadow-sm hover:shadow-[0_20px_40px_rgba(99,102,241,0.12)] hover:border-indigo-400/50 transition-all duration-300 group cursor-pointer">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <i className="fa-solid fa-lightbulb"></i>
              </div>
              <h3 className="text-2xl font-black text-indigo-950 tracking-tight transition-colors">
                Problem Solver
              </h3>
            </div>
            <p className="text-slate-500 text-sm font-semibold pl-16 leading-relaxed">
              Turning complex concepts and algorithmic requirements into elegant, fast, and scalable production-ready solutions.
            </p>
          </div>

          {/* Grid Sub Cards */}
          {[
            {
              title: "Clean Code", 
              desc: "Architecture", 
              bg: "bg-emerald-50", 
              text: "text-emerald-600", 
              icon: "fa-solid fa-code"
            }, 
            {
              title: "Lightning Fast", 
              desc: "Performance", 
              bg: "bg-amber-50", 
              text: "text-amber-500", 
              icon: "fa-solid fa-bolt"
            }
          ].map((card, i) => (
            <div key={i} className="bg-white border border-indigo-50 p-8 rounded-[2rem] shadow-sm hover:shadow-[0_20px_40px_rgba(99,102,241,0.12)] hover:scale-[1.03] hover:border-indigo-400/50 transition-all duration-300 text-center space-y-4 group cursor-pointer">
              <div className={`mx-auto w-12 h-12 rounded-2xl ${card.bg} flex items-center justify-center ${card.text} text-xl font-bold group-hover:scale-110 transition-transform duration-300`}>
                <i className={card.icon}></i>
              </div>
              <div>
                <h3 className="text-lg font-black text-indigo-950 tracking-tight">{card.title}</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{card.desc}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

