import React, { useState, useRef, useEffect } from 'react';

export default function ChatAI() {
  const myInfo = {
    name: "Sumaiya Sorhad Marjiya",
    email: "sumaiyakookie307@gmail.com",
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
      let aiText = "Thanks for your interest! Sumaiya is a highly dedicated full-stack software engineer with expertise in core development workflows.";
      const cleanText = text.toLowerCase();

      if (cleanText.includes('skills') || cleanText.includes('tech')) {
        aiText = "Sumaiya is specialized in Full-Stack development. Her tech stack includes HTML5, CSS3, Tailwind CSS, JavaScript (ES6+), React, Next.js, Hero UI, BetterAuth, Node.js, Express.js, and MongoDB.";
      } else if (cleanText.includes('projects') || cleanText.includes('builds')) {
        aiText = "She has developed feature-rich production applications specializing in modular patterns, secure API integrations, payment processing setups via Stripe, and Role-Based Access Control (RBAC) layers.";
      } else if (cleanText.includes('available') || cleanText.includes('work') || cleanText.includes('freelance')) {
        aiText = "Yes! Sumaiya is completely ready and available for full-time remote roles, contract development, and freelance industry-focused collaborations.";
      } else if (cleanText.includes('contact') || cleanText.includes('call') || cleanText.includes('email')) {
        aiText = `You can instantly contact her by firing an Email to ${myInfo.email} or call/text directly on her phone at ${myInfo.number}.`;
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'ai', text: aiText }]);
    }, 800);

    if (text === inputValue) setInputValue('');
  };

  return (
    <section id="ai-chat" className="w-full px-4 sm:px-6 py-16 sm:py-20 bg-indigo-100 relative z-10 font-['Plus_Jakarta_Sans']">
      <div className="max-w-4xl mx-auto">
        
        {/* সেকশন হেডার (AOS অ্যানিমেশনসহ) */}
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

        {/* মেইন চ্যাট উইন্ডো কন্টেইনার - মোবাইলের জন্য হাইট অপ্টিমাইজড */}
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

          {/* চ্যাট ফিড মেসেজ বাবল এরিয়া (টাচ স্ক্রোল অপ্টিমাইজড) */}
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

          {/* সাজেস্টেড প্রশ্ন চিপস (মোবাইলের জন্য নো-র‍্যাপ হরাইজন্টাল সোয়াইপ লেআউট) */}
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

          {/* বটম মেসেজ ইনপুট ফর্ম (মোবাইল ফ্রেন্ডলি প্যাডিং) */}
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
