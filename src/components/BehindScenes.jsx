import { useState } from 'react';

export default function BehindScenes() {
  const [activeTab, setActiveTab] = useState('auth');

  const tabs = {
    auth: {
      title: "Optimized Auth",
      desc: "Secure, scalable authentication setup using NextAuth for modern web apps.",
      code: `// NextAuth Configuration
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
  },
};`
    },
    gsap: {
      title: "GSAP Animation",
      desc: "Creating high-end cinematic animations with scroll-based interactions.",
      code: `// GSAP ScrollTrigger Setup
gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-card", {
  scrollTrigger: {
    trigger: ".hero-container",
    start: "top center",
    scrub: true,
  },
  y: 100,
  opacity: 0,
  duration: 1.5
});`
    },
    schema: {
      title: "Mongoose Schema",
      desc: "Well-structured database schemas for complex ecommerce platforms.",
      code: `// Mongoose Product Schema
const ProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  category: { type: Schema.Types.ObjectId, ref: 'Category' }
}, { timestamps: true });`
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 mb-16 relative z-10 dark:text-white">
      <div className="text-left space-y-3 mb-12">
        <span className="text-[10px] font-bold text-blue-600 tracking-[0.4em] uppercase block">TECHNICAL DEPTH</span>
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">Behind the Scenes</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Tabs */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {Object.keys(tabs).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`p-6 text-left rounded-[1.5rem] border transition-all duration-300 ${
                activeTab === key
                  ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/20'
                  : 'bg-white/60 dark:bg-slate-800/40 border-slate-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 shadow-sm'
              }`}
            >
              <h3 className="text-lg font-black tracking-tight mb-2">{tabs[key].title}</h3>
              <p className={`text-xs leading-relaxed ${activeTab === key ? 'text-white/80' : 'text-slate-500 dark:text-slate-400'}`}>
                {tabs[key].desc}
              </p>
            </button>
          ))}
        </div>

        {/* Right Code Block */}
        <div className="lg:col-span-8 bg-slate-900 text-slate-300 rounded-[2rem] p-6 font-mono text-sm relative border border-slate-800 shadow-xl overflow-x-auto min-h-[300px] flex flex-col justify-between">
          <div className="flex items-center gap-2 pb-4 border-b border-slate-800 mb-4 select-none">
            <span className="w-3 h-3 rounded-full bg-rose-500"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            <span className="text-xs text-slate-500 ml-2">javascript.js</span>
          </div>
          <pre className="flex-1 whitespace-pre-wrap"><code>{tabs[activeTab].code}</code></pre>
        </div>
      </div>
    </section>
  );
}
