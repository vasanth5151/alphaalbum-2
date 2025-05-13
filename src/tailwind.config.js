
module.exports = {
    // Core Tailwind configuration
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Files where Tailwind classes are used
      "./public/index.html"         // HTML file that needs styling
    ],
    theme: {
      extend: {
       
        boxShadow: {
          'luxury': '0 20px 50px -10px rgba(0, 0, 0, 0.1)',
        }, 
        fontFamily: {
          
          display: ['Outfit', 'sans-serif'],
           
        },
        fontSize: {
        
          'wedding-hero': ['5rem', {
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            fontWeight: '700'
          }],
          
          
          
        }
      },
    },
    
    plugins: [
      require('@tailwindcss/typography'), 
      require('@tailwindcss/forms'),      
    ],
    
   
  }