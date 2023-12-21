import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        worksans: ['var(--font-quicksand)'],
      },
      colors: {
        neutral: {
          100: '#FDFDFD',
          200: '#F3F3F3',
          300: '#E9EAE9',
          400: '#D5D5D5',
          500: '#B8B8B8',
          600: '#7D7D7D',
          700: '#212121',
        },
        'light-green': {
          100: '#E3F9B8',
          200: '#D1F588',
          300: '#B2D46E',
          400: '#93B354',
        },
        green: {
          100: '#054030',
        },
        other: {
          100: '#3969FF',
          200: '#EEB200',
          300: '#FF5638',
        },
      },
    },
  },
  plugins: [],
}
export default config
