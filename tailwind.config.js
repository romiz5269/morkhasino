/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
          DEFAULT: '2rem',
          sm: '1rem',
          lg: '4rem',
          xl: '6rem',
      },
    },
    extend: {
      colors:{
        'main-bg':'#F5F5F9',
        'secondary':'#326ABD',
        'sidebar':'#363740',
        'sidebar-item':"#DDE2FF",
        'ticket-head':'#212135',
        'confirm':'#59B638',
        'deny':'#E02424',
        'custom-yellow':'#BD630F',
        'text-main':'#033673',
        'text-title-bar':'#344ECE',
        'text':'#101828',
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