// tailwind.config.js
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/reuseComps/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/reuseComps/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/resources/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        heartbeat: 'heartbeat 1s ease-in-out infinite',
      },
      backgroundImage: {
        'bgimage': "url('/background.png')", // Corrected path
      },
      screens: {
        'xs': '480px',  // Custom breakpoint for extra small screens
        '3xl': '1600px' // Custom breakpoint for very large screens
      },
      
    },
  },
  plugins: [],
};
export default config;
