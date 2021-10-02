export const state = () => ({
  menu: {
    open: false,
    navigation: [
      {
        route: 'logs',
        label: 'Logs',
      },
      {
        route: 'transfer',
        label: 'Transfer',
      },
    ],
    partners: [
      {
        href: '/',
        label: 'Graviton',
      },
      {
        href: '/',
        label: 'Gravity',
      },
    ],
    socials: [
      {
        href: '/',
        icon: 'mono/twitter',
      },
      {
        href: '/',
        icon: 'mono/medium',
      },
      {
        href: '/',
        icon: 'mono/github',
      },
    ]
  },
})

export const mutations = {
  TOGGLE_MENU(state) {
    state.menu.open = !state.menu.open;
  }
}

export const getters = {
  menu: (state) => state.menu,
}
