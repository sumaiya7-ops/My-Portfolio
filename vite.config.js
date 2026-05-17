import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // v4 এর অফিসিয়াল প্লাগইন

// vitejs.dev
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // এখানে প্লাগইনটি যুক্ত করা হলো
  ],
})

