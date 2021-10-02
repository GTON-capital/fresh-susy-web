const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
        heading: ['Cormorant', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'body': 'linear-gradient(180deg, #FFFFFF 0%, #F3FFFB 90.48%)',
        'solana2': 'linear-gradient(269.45deg, #00FFA3 10.33%, #DC1FFF 97.14%)',
      },
      colors: {
        magenta: '#FF0097',
        'desaturated-cyan': '#73979C',
        'maastricht-blue': '#001A34',
      }
    },
  },
}


// const defaultTheme = require('tailwindcss/defaultTheme');
//
// module.exports = {
//   mode: 'jit',
//
//   theme: {
//     container: {
//       center: true,
//       padding: {
//         DEFAULT: '1.5rem',
//       },
//     },
//     extend: {
//       lineHeight: {
//         7.5: '1.875rem', // 30px
//       },
//       height: {
//         7: '1.75rem', // 28px
//         7.5: '1.875rem', // 30px
//         9: '2.25rem', // 36px
//         18: '4.5rem', // 72px
//         'fix-smooth-scroll-mobile': 'calc(100% + 15rem)',
//       },
//       width: {
//         7: '1.75rem', // 28px
//         7.5: '1.875rem', // 30px
//         9: '2.25rem', // 36px
//         18: '4.5rem', // 72px
//       },
//       maxWidth: {
//         '1.9xl': '41rem', // 656px
//         '3.2xl': '50rem', // 800px
//         'main-minus-navbar': 'calc(100% - 11rem)',
//       },
//       padding: {
//         4.5: '1.125rem', // 18px
//         5.5: '1.375rem', // 22px
//         7: '1.75rem', // 28px
//         7.5: '1.875rem', // 30px
//         'fix-smooth-scroll-mobile': '15rem',
//       },
//       margin: {
//         4.5: '1.125rem', // 18px
//         5.5: '1.375rem', // 22px
//         7: '1.75rem', // 28px
//         7.5: '1.875rem', // 30px
//       },
//       fontSize: {
//         xxxs: '0.625rem', // 10px
//         xxs: '0.6875rem', // 11px
//         xsm: '0.8125rem', // 13px
//         xbase: '0.9375rem', // 15px
//         '1.5xl': '1.375rem', // 22px
//         '1.6xl': '1.4375rem', // 23px
//         '4.2xl': '2.375rem', // 38px
//         '4.5xl': '2.5rem', // 40px
//       },
//       backgroundImage: {
//         'landing-circle': 'radial-gradient(80.72% 67.74% at 74.31% 79.86%, #DCDFE9 0%, #FFFFFF 100%)',
//       },
//       boxShadow: {
//         'block-1': '-6px -6px 8px #FFFFFF, 6px 6px 8px rgba(174, 174, 192, 0.44)',
//         'landing-circle': '-5px -5px 10px #FFFFFF, 5px 5px 10px rgba(174, 174, 192, 0.9)',
//         'landing-icon-btn': '4px 4px 8px rgba(174, 174, 192, 0.44)',
//         'landing-btn': '-9px -9px 15px #FFFFFF, 9px 9px 15px rgba(174, 174, 192, 0.44)',
//         'circle-btn': '-4px -4px 6px #4A4A72, 4px 4px 6px rgba(46, 46, 85, 0.94)',
//         'btn': '-6px -6px 8px #FFFFFF, 6px 6px 8px rgba(174, 174, 192, 0.44)',
//         'btn-inset': 'inset -2px -2px 4px rgba(255, 255, 255, 0.7), inset 2px 2px 4px rgba(109, 109, 130, 0.35)',
//       },
//       dropShadow: {
//         accept: '9px 9px 15px #ECD400',
//         btn: ['-2px -2px 4px #FFFFFF', '2px 2px 4px rgba(174, 174, 192, 0.44)'],
//         'btn-slim': ['-2px -2px 2px #FFFFFF', '2px 2px 2px rgba(174, 174, 192, 0.44)'],
//       },
//       filter: {
//         //     filter: invert(58%) sepia(8%) saturate(1325%) hue-rotate(
//         // 202deg) brightness(91%) contrast(82%);
//         // filter: grayscale(1) invert(1);
//       },
//       colors: {
//         accept: '#FFEB38',
//         'accept-900': '#FEE82E',
//         'green-450': '#07DA9E',
//         'green-455': '#16CD80',
//         'red-455': '#FF1818',
//         // green: {
//         //   50: '#f0fdf4',
//         //   100: '#dcfce7',
//         //   200: '#bbf7d0',
//         //   300: '#86efac',
//         //   400: '#4ade80',
//         //   500: '#22c55e',
//         //   600: '#16a34a',
//         //   700: '#15803d',
//         //   800: '#166534',
//         //   900: '#14532d',
//         // },
//         'indigo-black': '#41416E',
//         'indigo-dark': '#3D3D63',
//         'indigo-dark-500': '#4B4B79',
//         'indigo-white': '#8787AE',
//         'indigo-white-500': '#9997B0',
//         'black-500': '#1D273B',
//         'black-600': '#22213D',
//         'black-900': '#060517',
//         gray: {
//           20: '#FDFDFF',
//           30: '#F9F9FD',
//           49: '#F7F7FB',
//           50: '#F3F4F7',
//           60: '#EAEAF9',
//           150: '#F9F9FE',
//           250: '#E0E0E0', // #EDEDF4 <- заменен на #E0E0E0
//         },
//       },
//       fontFamily: {
//         sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
//       },
//     },
//   },
//
// }
