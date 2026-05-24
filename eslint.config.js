import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // প্রোডাকশন বিল্ড ফোল্ডারকে ইগনোর করা হলো
  globalIgnores(['dist', 'node_modules']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 'latest', // আধুনিক ES6+ এর ফুল সাপোর্ট নিশ্চিত করবে
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node, // ব্যাকএন্ড স্ক্রিপ্ট হ্যান্ডলিং বা নোড এনভায়রনমেন্টের জন্য সেফটি গার্ড
        AOS: 'readonly', // AOS গ্লোবাল অবজেক্টের জন্য লি পোকার এরর প্রোটেকশন
      },
      parserOptions: { 
        ecmaFeatures: { jsx: true } 
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // প্রো-লেভেল ফিক্স: ডেভেলপমেন্টের সময় কিছু অবজেক্ট আনইউজড থাকলেও যাতে বিল্ড ক্র্যাশ না করে
      'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
      'no-undef': 'error',
    },
  },
])
