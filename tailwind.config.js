const defaultTheme = require('tailwindcss/defaultTheme');

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
}
