import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                background: '#F4F5F7',
                surface: '#FFFFFF',
                primary: '#172B4D',
                accent: '#0052CC',
                secondary: '#FFAB00',
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
                mono: ['var(--font-jetbrains-mono)'],
            }
        },
    },
    plugins: [
        require('tailwind-scrollbar-hide')
    ],
}

export default config;