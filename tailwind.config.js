/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
          DEFAULT: '1rem',
          sm: '0.5rem',
          lg: '2rem',
          xl: '3rem',
      },
    },
    extend: {
      colors:{
        'main-bg':'#F5F5F9',
        "main-blue":"#548ADB",
        'secondary':'#326ABD',
        'sidebar':'#363740',
        'sidebar-item':"#DDE2FF",
        'sidebar-active':"#9FA2B4",
        'ticket-head':'#212135',
        'confirm':'#59B638',
        'deny':'#E02424',
        'custom-yellow':'#BD630F',
        'text-main':'#033673',
        'text-title-bar':'#344ECE',
        'text':'#101828',
        'text-gray':'#8A92A6'
      },
      fontFamily:{
        sans: ['yekanbakh'],
      },
      borderColor:{
        'main-color':'#D1D1D1'
      },
      boxShadow:{
        'main':'0px 10px 30px rgba(17, 38, 146, 0.05)'
      }
    },
  },
  plugins: [],
}