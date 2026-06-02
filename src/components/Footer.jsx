import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="relative bg-indigo-100 text-slate-800 border-t border-indigo-200/60 mt-20 overflow-hidden font-['Plus_Jakarta_Sans']">
     
            {/* 🔮 ব্যাকগ্রাউন্ড গ্লোয়িং ইফেক্ট যা bg-indigo-100 এর সাথে প্রফেশনাল লাগবে */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-200 blur-3xl opacity-40 rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-300 blur-3xl opacity-30 rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">

                {/* 👑 কলাম ১: ব্র্যান্ডিং ও সোশ্যাল প্রোফাইল */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-black tracking-tight text-slate-900">
                        Sumaiya<span className="text-indigo-600">.dev</span>
                    </h2>

                    <p className="text-sm text-slate-600 leading-relaxed max-w-sm font-medium">
                        Engineering high-performance, scalable web applications using MERN & Next.js ecosystems. Let's build something extraordinary.
                    </p>

                    {/* মডার্ন সোশ্যাল আইকন প্যানেল */}
                    <div className="flex gap-3 pt-2">
                        <a href="https://github.com/sumaiya7-ops"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white text-slate-700 rounded-xl shadow-sm hover:bg-slate-900 hover:text-white hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <FaGithub className="text-lg" />
                        </a>

                        <a href="https://www.linkedin.com/in/sumaiya-sorhad"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white text-indigo-600 rounded-xl shadow-sm hover:bg-indigo-600 hover:text-white hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <FaLinkedinIn className="text-lg" />
                        </a>

                        <a href="#"
                            className="p-3 bg-white text-blue-600 rounded-xl shadow-sm hover:bg-blue-600 hover:text-white hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <FaFacebookF className="text-lg" />
                        </a>

                        <a href="#"
                            className="p-3 bg-white text-pink-600 rounded-xl shadow-sm hover:bg-gradient-to-r hover:from-pink-500 hover:to-gradient-yellow-500 hover:text-white hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <FaInstagram className="text-lg" />
                        </a>
                    </div>
                </div>

                {/* 🔗 কলাম ২: কুইক নেভিগেশন (পোর্টফোলিও ফ্রেন্ডলি) */}
                <div>
                    <h3 className="font-extrabold text-slate-900 text-base uppercase tracking-wider mb-5">Quick Links</h3>
                    <ul className="space-y-3 text-sm font-semibold text-slate-600">
                        <li><a className="hover:text-indigo-600 transition-colors" href="#home">Home</a></li>
                        <li><a className="hover:text-indigo-600 transition-colors" href="#about">About Me</a></li>
                        <li><a className="hover:text-indigo-600 transition-colors" href="#projects">Projects</a></li>
                        <li><a className="hover:text-indigo-600 transition-colors" href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* 📞 কলাম ৩: প্রফেশনাল কন্টাক্ট ইনফো */}
                <div className="space-y-4">
                    <h3 className="font-extrabold text-slate-900 text-base uppercase tracking-wider mb-5">Get In Touch</h3>

                    <div className="space-y-3 text-sm font-medium text-slate-600">
                        <p className="flex items-center gap-2.5">
                            <FaMapMarkerAlt className="text-indigo-500 shrink-0" /> 
                            <span>Chattogram, Bangladesh</span>
                        </p>
                        <p className="flex items-center gap-2.5">
                            <FaEnvelope className="text-indigo-500 shrink-0" /> 
                            <a href="mailto:sumaiyakookie307@gmail.com" className="hover:text-indigo-600 transition-colors">sumaiyakookie307@gmail.com</a>
                        </p>
                        <p className="flex items-center gap-2.5">
                            <FaPhoneAlt className="text-indigo-500 shrink-0" /> 
                            <a href="tel:01826459605" className="hover:text-indigo-600 transition-colors">01826459605</a>
                        </p>
                    </div>

                    <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200/60 text-indigo-700 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider shadow-inner mt-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
                        </span>
                        Open for collaborations 💙
                    </div>
                </div>

            </div>

            {/* 🔒 বটম কপিরাইট প্যানেল */}
            <div className="border-t border-indigo-200/40 text-center py-5 text-xs text-slate-500 font-semibold tracking-wide">
                © {new Date().getFullYear()} <span className="text-slate-800 font-bold">Sumaiya Sarhad Marjiya</span>. Built with Passion.
            </div>

        </footer>
    );
};

export default Footer;

