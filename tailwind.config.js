/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            'mobile-sm': '320px',
            'mobile-md': '375px',
            'mobile-lg': '425px',
            'tablet': '768px',
            'laptop': '1024px',
            'laptop-lg': '1440px',
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1.5rem',
            },
            screens: {
                'laptop-lg': '1280px',
            },
        },
        colors: {
            inherit: 'inherit',
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            primary: {
                300: '#e61e4e',
                400: '#d80566'
            },
            neutral: {
                200: '#f7f7f7',
                400: '#f0efe9',
                600: '#717171',
                700: '#222222',
            }
        },
        extend: {},
    },
    plugins: [],
}

