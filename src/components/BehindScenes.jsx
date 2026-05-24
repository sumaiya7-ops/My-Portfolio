import { useState } from 'react';

export default function BehindScenes() {
  const [activeTab, setActiveTab] = useState('auth');

  const tabs = {
    auth: {
      title: "BetterAuth Flow",
      desc: "Production-ready, highly secure session management and authentication architecture setup.",
      filename: "better-auth.ts",
      code: `// BetterAuth Edge-Ready Configuration
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

export const auth = betterAuth({
  database: mongodbAdapter(db),
  emailAndPassword: {  
    enabled: true 
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }
  }
});`
    },
    rbac: {
      title: "Role Based Access (RBAC)",
      desc: "Robust user authorization matrix restricting system endpoints based on custom access roles.",
      filename: "rbac-middleware.js",
      code: `// Advanced Authorization Middleware
const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ 
        success: false, 
        message: "Access Denied: Insufficient Permissions" 
      });
    }
    next();
  };
};

// Usage Example: router.get('/admin', authorizeRoles('Admin'), getDashboardData);`
    },
    schema: {
      title: "Mongoose & Database Models",
      desc: "Strictly typed Mongo DB relational document structural designs mapped with schema timestamps.",
      filename: "product-model.js",
      code: `// Comprehensive Mongoose E-Commerce Schema
import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0 },
  stock: { type: Number, default: 0 },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }
}, { timestamps: true });

export const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);`
    }
  };

  return (
    <section id="behind-scenes" className="w-full px-4 sm:px-6 py-16 sm:py-20 bg-indigo-100 relative z-10 font-['Plus_Jakarta_Sans']">
      <div className="max-w-7xl mx-auto">
        
        {/* সেকশন হেডার (AOS অ্যানিমেশনসহ) */}
        <div className="text-left space-y-3 mb-10 sm:mb-12" data-aos="fade-up">
          <span className="text-[10px] font-bold text-indigo-600 tracking-[0.4em] uppercase bg-white border border-indigo-200 px-3 py-1 rounded-full inline-block shadow-sm">
            TECHNICAL DEPTH
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-indigo-950 tracking-tight leading-tight">
            Behind the Scenes
          </h2>
        </div>

        {/* ইন্টারঅ্যাক্টিভ সেকশন লেআউট: মোবাইলে উপর-নিচ, ডেক্সটপে পাশাপাশি ১২ কলাম গ্রিড */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* বাম পাশ: ট্যাব বাটনসমূহ (মোবাইল ফ্রেন্ডলি হরাইজন্টাল স্ক্রোল লেআউট) */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 custom-scrollbar snap-x touch-pan-x" data-aos="fade-right">
            {Object.keys(tabs).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`p-4 sm:p-6 text-left rounded-2xl sm:rounded-[1.5rem] border transition-all duration-300 group/btn cursor-pointer min-w-[260px] sm:min-w-[300px] lg:min-w-0 snap-center flex-shrink-0 ${
                  activeTab === key
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-600/20'
                    : 'bg-white border-indigo-50 hover:border-indigo-300 hover:bg-indigo-50/20 shadow-sm'
                }`}
              >
                <h3 className="text-base sm:text-lg font-black tracking-tight mb-1 sm:mb-2 group-hover/btn:translate-x-1 transition-transform duration-200">
                  {tabs[key].title}
                </h3>
                <p className={`text-[11px] sm:text-xs leading-relaxed font-medium line-clamp-2 lg:line-clamp-none ${activeTab === key ? 'text-indigo-100' : 'text-slate-500'}`}>
                  {tabs[key].desc}
                </p>
              </button>
            ))}
          </div>

          {/* ডান পাশ: মডার্ন কোড-এডিটর স্ন্যাপশট (মোবাইল স্ক্রিন ব্রেক প্রোটেকশনসহ) */}
          <div className="lg:col-span-8 bg-slate-950 text-slate-300 rounded-2xl sm:rounded-[2rem] p-4 sm:p-6 font-mono text-[11px] sm:text-sm relative border border-slate-800 shadow-xl overflow-hidden flex flex-col justify-between" data-aos="fade-left">
            
            {/* কোড উইন্ডো হেডার কন্ট্রোলস */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-900 mb-4 select-none">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500"></span>
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500"></span>
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500"></span>
                <span className="text-[10px] sm:text-xs text-slate-500 ml-1.5 sm:ml-2 font-semibold tracking-wide">
                  {tabs[activeTab].filename}
                </span>
              </div>
              <div className="text-slate-600 text-xs sm:text-sm">
                <i className="fa-regular fa-copy hover:text-slate-400 transition-colors cursor-pointer p-1"></i>
              </div>
            </div>

            {/* কোড ডিসপ্লে এরিয়া (নিখুঁত টাচ স্ক্রোল ও ইন্ডেন্টেশন প্রোটেকশন) */}
            <div className="flex-1 overflow-x-auto custom-scrollbar touch-pan-x bg-slate-950">
              <pre className="whitespace-pre min-w-full leading-relaxed p-1">
                <code className="text-emerald-400 block tracking-wide">{tabs[activeTab].code}</code>
              </pre>
            </div>
            
          </div>

        </div>

      </div>
    </section>
  );
}
