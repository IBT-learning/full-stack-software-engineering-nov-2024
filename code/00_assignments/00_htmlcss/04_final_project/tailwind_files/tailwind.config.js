/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../*.html", "../assets/pages/*.html"],
  theme: {
    extend: {
      colors: {
        'primary-color': '#3F6FF3',
        'primary-color-a': 'rgba(63, 111, 243, 0.9)',
        'nav-color-a': 'rgba(89, 97, 113, 1.0)',
        'form-bg': 'rgba(248, 249, 252, 1.0)',
        'fonts-color': '#7B8CAE'
      },

      screens: {
        'max-xl': {'max':'1400px'},
        'max-xl1': {'max':'1330px'},
        'max-lg': {'max':'1130px'},
        'max-md': {'max':'880px'},
        'max-sm': {'max':'640px'},
      }


    },
  },
  plugins: [],
}

