/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    daisyui: {
        themes: [
            {
                pcxtheme: {
                    primary: '#7258DB',
                    secondary: '#f77225',
                    accent: '#8c58db',
                    neutral: '#a1aebe',
                    'base-100': '#ffffff',
                },
            },
            'dark',
            'cupcake',
        ],
    },
    plugins: [require('daisyui')],
};
