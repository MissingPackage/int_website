import withMT from '@material-tailwind/react/utils/withMT'

/** @type {import('tailwindcss').Config} */

export default withMT({
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./src/components/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
})

