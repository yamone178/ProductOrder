/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          'sm': '400px', // Phones (portrait mode)
          // => @media (min-width: 640px) { ... }
    
          'md': '768px', // Tablets
          // => @media (min-width: 768px) { ... }
    
          'lg': '1024px', // Laptops (small screens)
          // => @media (min-width: 1024px) { ... }
    
          'xl': '1280px', // Desktops (medium screens)
          // => @media (min-width: 1280px) { ... }
    
          '2xl': '1536px', // Large desktops or high-resolution displays
          // => @media (min-width: 1536px) { ... }
        },
      },
      extend: {
       
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
  
  