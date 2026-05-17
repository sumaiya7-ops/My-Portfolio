import React, { useState, useRef, useEffect } from 'react';

export default function ChatAI() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "Hi! I'm Shanto's AI assistant. Ask me about his skills, projects, or how to work together!"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef(null);

  const suggestedQuestions = [
    "What are your skills?",
    "Tell me about your projects",
    "Available for freelance?",
    "How to contact you?"
  ];

  // Auto scroll to bottom on new message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (text) => {
    if (!text.trim()) return;

    // Append User Message
    const userMsg = { id: Date.now(), sender: 'user', text };
    setMessages(prev => [...prev, userMsg]);

    // Simulated AI response logic
    setTimeout(() => {
      let aiText = "Thanks for asking! Shanto is highly proficient in full-stack engineering.";
      const cleanText = text.toLowerCase();

      if (cleanText.includes('skills')) {
        aiText = "Shanto specializes in TypeScript, React, Next.js, Node.js, Express, MongoDB, and SQL database optimization.";
      } else if (cleanText.includes('projects')) {
        aiText = "He has built over 30 projects, including the Personal Portfolio, Tiles Gallery Ecommerce, and KeenKeeper Social App.";
      } else if (cleanText.includes('freelance') || cleanText.includes('work')) {
        aiText = "Yes! Shanto is available right now for freelance projects, remote positions, and contract-based corporate work.";
      } else if (cleanText.includes('contact') || cleanText.includes('call')) {
        aiText = "You can connect with him via Email (mhshanto.8989.t@gmail.com) or text directly on WhatsApp at +8801871758989.";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'ai', text: aiText }]);
    }, 800);

    if (text === inputValue) setInputValue('');
  };

  return (
    <section id="ai-chat" className="max-w-4xl mx-auto px-6 py-16 mb-16 relative z-10">
      {/* Header */}
      <div className="text-center space-y-3 mb-12">
        <span className="text-[10px] font-bold text-blue-600 tracking-[0.4em] uppercase block">AI ASSISTANT</span>
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">Chat With My AI</h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Ask anything about my skills, projects, or experience</p>
      </div>

      {/* Main Chat Interface Container */}
      <div className="bg-slate-50/60 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/60 rounded-[2.5rem] shadow-xl overflow-hidden flex flex-col h-[550px] relative">
        
        {/* Top Status Bar */}
        <div className="p-6 border-b border-slate-200/40 dark:border-slate-800/50 bg-white/40 dark:bg-slate-900/30 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-xl shadow-inner relative">
            🤖
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900"></span>
          </div>
          <div>
            <h4 className="text-sm font-black text-slate-800 dark:text-white tracking-tight">Shanto's AI Assistant</h4>
            <span className="text-[10px] font-bold text-emerald-500 tracking-wider uppercase block">Online — ready to chat</span>
          </div>
        </div>

        {/* Message Bubble Feed Layer */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 custom-scrollbar bg-white/10">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-[1.5rem] px-5 py-3 text-sm font-medium shadow-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-blue-600 text-white rounded-br-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/40 dark:border-slate-700/30 rounded-bl-sm'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Dynamic Suggested Query Chips Container */}
        <div className="px-6 py-3 flex flex-wrap gap-2 items-center bg-white/20 dark:bg-slate-900/10 border-t border-slate-200/30 dark:border-slate-800/20">
          {suggestedQuestions.map((question, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(question)}
              className="px-4 py-2 bg-white dark:bg-slate-800/80 hover:bg-blue-50 dark:hover:bg-slate-700/50 border border-slate-200/60 dark:border-slate-700/60 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white rounded-full text-xs font-bold shadow-sm hover:shadow transition duration-300"
            >
              {question}
            </button>
          ))}
        </div>

        {/* Bottom Core Input Form Layout */}
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }}
          className="p-4 border-t border-slate-200/40 dark:border-slate-800/50 bg-white/40 dark:bg-slate-900/30 flex items-center gap-3"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask me anything about Shanto..."
            className="flex-1 px-5 py-3.5 bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/50 rounded-2xl text-sm font-medium text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 dark:focus:ring-blue-500/30 transition shadow-inner"
          />
          <button
            type="submit"
            className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-sm shadow-md hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </form>

      </div>
    </section>
  );
}
