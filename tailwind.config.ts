import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {       
        "brand-color": "#ffb81d",
        "primary-brand-color": "#252525",
      },
      maxWidth: {
        '518': '32.375rem'
      }
    },
  },
  plugins: [],
}
export default config
