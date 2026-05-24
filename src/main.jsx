import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 👑 অফিশিয়াল AOS প্যাকেজ এবং তার সিএসএস ইম্পোর্ট (Vite v4 ফ্রেন্ডলি)
import AOS from 'aos'
import 'aos/dist/aos.css'

// প্রজেক্ট লোড হওয়ার সাথে সাথে এখানে পারফেক্টলি ইনিশিয়ালাইজ হবে
AOS.init({
  duration: 1000, // অ্যানিমেশন ১ সেকেন্ড ধরে স্মুথলি চলবে
  once: false,    // ওপরে-নিচে স্ক্রোল করলে অ্যানিমেশন বারবার রিভিল হবে
  offset: 100,    // স্ক্রিন থেকে ১০০ পিক্সেল বাকি থাকতেই রিভিল শুরু হবে
  delay: 50       // প্রতিটি উপাদানের মাঝে ৫০ মিলি-সেকেন্ডের নিখুঁত গ্যাপ থাকবে
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
