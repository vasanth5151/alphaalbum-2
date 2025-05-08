
module.exports = {
    // Core Tailwind configuration
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Files where Tailwind classes are used
      "./public/index.html"         // HTML file that needs styling
    ],
    theme: {
      extend: {
        
        fontFamily: {
          
          'display': [
            '"Playfair Display"', 
            'Georgia',           
            'serif'            
          ],
           
        },
        
       
        fontSize: {
        
          'wedding-hero': ['5rem', {
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            fontWeight: '700'
          }],
          
          
          'lead': ['1.25rem', {
            lineHeight: '1.6'
          }]
        }
      },
    },
    
    plugins: [
      require('@tailwindcss/typography'), 
      require('@tailwindcss/forms'),      
    ],
    
   
  }