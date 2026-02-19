/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Space Grotesk', 'sans-serif'],
            },
            colors: {
                primary: '#00f2ff',
                secondary: '#00f2ff',
                brandRed: '#e50914',
                spaceBlue: '#0a192f',
            },
            borderRadius: {
                'custom': '8px',
            },
            backgroundImage: {
                'teal-gloss': 'linear-gradient(135deg, rgba(0,242,255,0.8) 0%, rgba(255,255,255,0.4) 50%, rgba(0,242,255,0.8) 100%)',
            }
        },
    },
    plugins: [],
}
