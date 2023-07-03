/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx,ts}'],
    theme: {
        extend: {
            keyframes: {
                slideDown: { '0%': { transform: 'translateY(-100%)' }, '100%': { transform: 'translateY(0)' } },
                fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
            },
            animation: {
                slideDown: 'slideDown .5s ease-in-out',
                fadeIn: 'fadeIn .5s ease-in-out',
            },
        },
    },
    plugins: [],
};
