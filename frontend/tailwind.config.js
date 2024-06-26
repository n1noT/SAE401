/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist:["bg-neutral-500", "bg-button-bg", "bg-button-hover"],
  theme: {
    extend: {
      colors:{
        'clr-T-base' : "var(--text-base)",
        'main-bg' : "var(--global-bg)",
        'secondary-bg' : "var(--secondary-bg)",
        'login-bg' : "var(--login-bg)",
        'button-bg' : "var(--button-bg)",
        'button-text' : "var(--button-text)",
        'button-hover' : "var(--button-link-hover)",
        'button-secondary-bg' : "var(--button-secondary-bg)",
        'button-secondary-hover' : "var(--button-secondary-hover)",
        'button-info-hover' : "var(--button-info-hover)",
      },
      fontFamily:{
        'button': 'var(--ff)',
        'button-secondary': 'var(--ff-little)'
      },
      padding:{
        'navbar': 'var(--p-nav)'
      },
      maxWidth:{
        'bar': '40rem'
      },
      backgroundImage: {
        'card-bg' : 'var(--card-movie-bg)'
      }
    },
  },
  plugins: [],
};
