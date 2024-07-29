/** @type {import('tailwindcss').Config} */
export default {
  content: [
"./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        // Add more gradients as needed
      },

    },
  },
  plugins: [],
}

