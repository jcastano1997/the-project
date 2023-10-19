/** @type {import('tailwindcss').Config} */

module.exports = ({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-light': {
          'bg-body': 'var(--color-theme-light-bg-body)',
          'bg': 'var(--color-theme-light-bg)',
          text: 'var(--color-theme-light-text)',
          'text-secondary': 'var(--color-theme-light-text-secondary)',
          primary: 'var(--color-theme-light-primary)',
          'primary-darkness': 'var(--color-theme-light-primary-darkness)',
          secondary: 'var(--color-theme-light-secondary)',
          'secondary-darkness': 'var(--color-theme-light-secondary-darkness)',
          warning: 'var(--color-theme-light-warning)',
        },
        'theme-dark': {
          'bg-body': 'var(--color-theme-dark-bg-body)',
          'bg': 'var(--color-theme-dark-bg)',
          text: 'var(--color-theme-dark-text)',
          'text-secondary': 'var(--color-theme-dark-text-secondary)',
          primary: 'var(--color-theme-dark-primary)',
          'primary-darkness': 'var(--color-theme-dark-primary-darkness)',
          secondary: 'var(--color-theme-dark-secondary)',
          'secondary-darkness': 'var(--color-theme-dark-secondary-darkness)',
          warning: 'var(--color-theme-dark-warning)',
        }
      }
    }
  },
  plugins: [],
  safelist: [
    {
      pattern: /(text|border|bg)-(theme-light|theme-dark)-(bg-body|bg|text|text-secondary|primary|primary-darkness|secondary|secondary-darkness|warning)/,
      variants: ['focus','peer-focus']
    }
  ]
})
