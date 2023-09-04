/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        skin: {
          background: "var(--color-background)",
          base: "var(--color-base)",
          secondary: "var(--color-secondary)",
          muted: "var(--color-muted)",
          inverted: "var(--color-inverted)",
          hover: "var(--color-hover)",
          placeholder: "var(--color-placeholder)",
        },
      },
      backgroundColor: {
        skin: {
          background: "var(--color-background)",
          base: "var(--color-base)",
          secondary: "var(--color-secondary)",
          muted: "var(--color-muted)",
          inverted: "var(--color-inverted)",
          hover: "var(--color-hover)",
          placeholder: "var(--color-placeholder)",
        },
      },
      borderColor: {
        skin: {
          background: "var(--color-background)",
          base: "var(--color-base)",
          secondary: "var(--color-secondary)",
          muted: "var(--color-muted)",
          inverted: "var(--color-inverted)",
          hover: "var(--color-hover)",
          placeholder: "var(--color-placeholder)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [],
}
