/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
          DEFAULT: '0.5rem',
          sm: '0.5rem',
          lg: '1rem',
          xl: '1rem',
      },
    },
    extend: {
      colors:{
        'main-bg':'#F5F5F9',
        "main-blue":"#548ADB",
        'secondary':'#4E5FFF',
        'sidebar':'#363740',
        'sidebar-item':"#DDE2FF",
        'sidebar-active':"#9FA2B4",
        'ticket-head':'#212135',
        'confirm':'#38B94D',
        'deny':'#E02424',
        'custom-yellow':'#BD630F',
        'text-main':'#033673',
        'text-title-bar':'#344ECE',
        'text':'#101828',
        'custom-gray':'#667085',
        'text-gray':'#8A92A6'
      },
      fontFamily:{
        sans: ['yekanbakh'],
      },
      borderColor:{
        'main-color':'#D1D1D1'
      },
      boxShadow:{
        'main':'0px 10px 30px rgba(17, 38, 146, 0.05)',
        'inner':' inset -3px 7px 10px rgba(0, 0, 0, 0.29)'
      }
    },
  },
  plugins: [],
}