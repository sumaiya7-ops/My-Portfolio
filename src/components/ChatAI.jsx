import React, { useState, useRef, useEffect } from 'react';

export default function ChatAI() {
  const myInfo = {
    name: "Sumaiya Sarhand Marjiya",
    email: "sumaiyakookie307@gmail.com", // আপনার প্রয়োজন অনুযায়ী ২ যুক্ত বা বাদ দিয়ে ম্যাচ করে নেবেন
    number: "01826459605"
  };

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: `Hi! I'm Sumaiya's AI assistant. Ask me about her technical skills, project builds, or how to hire her!`
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef(null);

  const suggestedQuestions = [
    "What are your core skills?",
    "Tell me about your projects",
    "Are you available for work?",
    "How can I contact you?"
  ];

  // 👑 প্রো-লেভেল ফিক্স: প্রথমবার প্রজেক্টে ঢুকলে স্ক্রিন নিচে টেনে নিয়ে যাওয়া বন্ধ করবে
  useEffect(() => {
    if (messages.length > 1) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = (text) => {
    if (!text.trim()) return;

    const userMsg = { id: Date.now(), sender: 'user', text };
    setMessages(prev => [...prev, userMsg]);

    setTimeout(() => {
      let aiText = "Thanks for asking! Sumaiya is a highly dedicated full-stack software engineer specialized in building optimized web solutions. Feel free to ask about her skills, projects, or contact details.";
      const cleanText = text.toLowerCase();

      // 🧠 ইন্টেলিজেন্ট কিওয়ার্ড ম্যাচিং আর্কিটেকচার
      if (cleanText.includes('skill') || cleanText.includes('tech') || cleanText.includes('know') || cleanText.includes('stack')) {
        aiText = "Sumaiya specializes in the MERN & Next.js ecosystems. Her core expertise includes JavaScript (ES6+), React.js, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS, BetterAuth, and REST API Integration.";
      } else if (cleanText.includes('project') || cleanText.includes('build') || cleanText.includes('work') || cleanText.includes('portfolio')) {
        aiText = "She has engineered high-performance web systems including 'Pawsome Haven' (a pet adoption system) and dynamic e-commerce hubs. Her builds feature secure auth layers, Stripe payments, and clean modular structures.";
      } else if (cleanText.includes('avail') || cleanText.includes('hire') || cleanText.includes('job') || cleanText.includes('freelance') || cleanText.includes('remote')) {
        aiText = "Yes, absolutely! Sumaiya is actively looking for full-time remote opportunities, open-source collaborations, and freelance projects. She is ready to join your engineering workflow immediately.";
      } else if (cleanText.includes('contact') || cleanText.includes('call') || cleanText.includes('email') || cleanText.includes('phone') || cleanText.includes('whatsapp')) {
        aiText = `You can directly reach her via Email at ${myInfo.email} or ring her up at +88${myInfo.number}. She's also highly active on LinkedIn and WhatsApp!`;
      } else if (cleanText.includes('hello') || cleanText.includes('hi ') || cleanText.includes('hey')) {
        aiText = "Hello! Great to meet you. I'm ready to answer any questions you have about Sumaiya's development career and engineering skills.";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'ai', text: aiText }]);
    }, 600);

    setInputValue('');
  };

  return (
    <section id="ai-chat" className="w-full px-4 sm:px-6 py-16 sm:py-20 bg-indigo-100 relative z-10 font-['Plus_Jakarta_Sans']">
      <div className="max-w-4xl mx-auto">
        
        {/* সেকশন হেডার */}
        <div className="text-center space-y-3 mb-10 sm:mb-12" data-aos="fade-down">
          <span className="text-[10px] font-bold text-indigo-600 tracking-[0.4em] uppercase bg-white border border-indigo-200 px-4 py-1.5 rounded-full inline-block shadow-sm">
            AI ASSISTANT
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-indigo-950 tracking-tight leading-tight">
            Chat With My AI
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium max-w-md mx-auto">
            Ask anything about my professional capabilities, development stack, or availability
          </p>
        </div>

        {/* মেইন চ্যাট উইন্ডো কন্টেইনার */}
        <div 
          className="bg-white/80 border border-indigo-50/50 backdrop-blur-xl rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_20px_50px_rgba(165,180,252,0.25)] overflow-hidden flex flex-col h-[480px] sm:h-[550px] relative"
          data-aos="zoom-in"
        >
          
          {/* টপ হেডার স্ট্যাটাস বার */}
          <div className="p-4 sm:p-6 border-b border-indigo-50 bg-indigo-50/30 flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-indigo-600 flex items-center justify-center text-lg sm:text-xl shadow-inner relative text-white">
              <i className="fa-solid fa-robot"></i>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white animate-pulse"></span>
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-black text-indigo-950 tracking-tight">Sumaiya's AI Agent</h4>
              <span className="text-[9px] sm:text-[10px] font-bold text-emerald-500 tracking-wider uppercase block">Online — Ready to Assist</span>
            </div>
          </div>

          {/* চ্যাট ফিড এরিয়া */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 custom-scrollbar bg-indigo-50/10 touch-pan-y">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] sm:max-w-[80%] rounded-2xl sm:rounded-[1.5rem] px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-medium shadow-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-indigo-600 text-white rounded-br-sm'
                    : 'bg-white text-indigo-950 border border-indigo-100 rounded-bl-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* সাজেস্টেড প্রশ্ন চিপস */}
          <div className="px-4 sm:px-6 py-2.5 flex flex-row overflow-x-auto gap-2 items-center bg-indigo-50/20 border-t border-indigo-50/50 custom-scrollbar snap-x touch-pan-x whitespace-nowrap">
            {suggestedQuestions.map((question, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(question)}
                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white border border-indigo-100 text-indigo-950 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 rounded-full text-[11px] sm:text-xs font-bold shadow-sm transition-all duration-300 snap-center flex-shrink-0 cursor-pointer"
              >
                {question}
              </button>
            ))}
          </div>

          {/* বটম মেসেজ ইনপুট ফর্ম */}
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }}
            className="p-3 sm:p-4 border-t border-indigo-50 bg-indigo-50/30 flex items-center gap-2 sm:gap-3"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about my tech stack..."
              className="flex-1 px-4 py-2.5 sm:px-5 sm:py-3.5 bg-white border border-indigo-100 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-medium text-indigo-950 placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition shadow-inner"
            />
            <button
              type="submit"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-xs sm:text-sm shadow-md shadow-indigo-100 hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer flex-shrink-0"
            >
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
