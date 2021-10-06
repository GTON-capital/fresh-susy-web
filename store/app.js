export const state = () => ({
  exampleModals: {
    connectWallet: {
      index: '1', // Индекс для перерисовки одного и того же меню
      name: 'connect-wallet', // Уникальное название модального меню
      data: {}, // Данные помещаемые в модальное окно
    }
  },
  modals: [],
  menu: {
    open: false,
    landingNavigation: [
      {
        route: 'logs',
        label: 'Launch APP',
      },
      {
        href: '/',
        label: 'Docs',
      },
    ],
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
      {
        href: '/',
        icon: 'mono/telegram',
      },
    ]
  },
})

export const mutations = {
  TOGGLE_MENU(state) {
    state.menu.open = !state.menu.open;
  },
  PUSH_MODAL(state, modal) {
    state.modals.push(modal);
  },
  PUSH_MODALS(state, modals) {
    state.modals = [...state.modals, ...modals];
  },
  CLOSE_ALL_MODALS(state) {
    state.modals = [];
  },
  CLOSE_MODAL(state) {
    state.modals.pop();
  }
}

export const getters = {
  exampleModals: (state) => state.exampleModals,
  modals: (state) => state.modals,
  menu: (state) => state.menu,
}
