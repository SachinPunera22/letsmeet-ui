/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgImg': "url('/src/asset/img/bg_img.png')",
        'logo': "url('/asset/img/lets_meet_logo.png')",
        'centralIcon': "url('/asset/img/centralIcon.png')",
      }
    }
  },
  plugins: [],
}