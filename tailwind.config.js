const defaultTheme = require('tailwindcss/defaultTheme');
const svgToDataUri = require("mini-svg-data-uri");

module.exports = {
  mode: 'jit',

  important: '#__nuxt',

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
      },
    },
    extend: {
      height: {
        field: '42px',
      },
      minHeight: {
        field: '42px',
      },
      lineHeight: {
        field: '42px',
      },
      maxWidth: {
        card: '660px',
        'modal-card': '708px', // 660 + 24*2
      },
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        heading: ['Cormorant', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'body': 'linear-gradient(180deg, #FFFFFF 0%, #F3FFFB 90.48%)',
        'magenta-linear-gradient': 'linear-gradient(0deg, #FF0097 0%, #FF0097 0%)',
        'solana2': 'linear-gradient(269.45deg, #00FFA3 10.33%, #DC1FFF 97.14%)',
        'solana': 'linear-gradient(181.16deg, #FFA9DC 1.06%, #FF0097 98.05%)',
        'chevron-magenta': `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="#FF0097" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`
        )}")`,
        'chevron-magenta-muted': `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="#FF00974D" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4"/></svg>`
        )}")`,
      },
      colors: {
        magenta: '#FF0097',
        'desaturated-cyan': '#73979C',
        'maastricht-blue': '#001A34',
      },
      transitionProperty: {
        visibility: 'visibility',
        'visibility-and-transform': 'visibility, transform',
      },
      transitionDelay: {
        0: '0ms',
      },
      transitionDuration: {
        0: '0ms',
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
  ],
}
