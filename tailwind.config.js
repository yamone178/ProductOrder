/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { transf },
          },
        },
        animation: {
          'fade-in': 'fadeIn 0.5s ease-in-out',
        },
        fontFamily:{
          sans: ["Poppins", "sans-serif"],  
          },
        colors: {

            primary: "#3AA39F", 
            secondary: "#17183B",
            border_light: "#A2A3B1",
            border: "#e5e7eb",
            border_light: "#D1D1D8",
            input: "#d1d5db",
            ring: "#93c5fd",
            light_gray: "rgba(0, 0, 0, 0.49)",
            alert_bg: "rgba(58, 163, 159, 0.13)",
            red: "#E14B4B",
          
        },
        
      
      },
    },
  }
  
  