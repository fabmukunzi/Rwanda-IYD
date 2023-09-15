import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sanz: 'Josefin Sans'
      },
      colors: {
        primary: '#041A57',
      },
      variants: {
        extend: {
          scale: ['group-hover'], // Enable group-hover variant for scale
        },
      },
    },
  },
  plugins: [],
};
export default config;
