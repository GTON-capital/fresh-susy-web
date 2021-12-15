export const state = () => ({
  exampleModals: {
    connectWallet: {
      index: '1', // Индекс для перерисовки одного и того же модального окна
      name: 'connect-wallet', // Уникальное название модального окна
      data: {} // Данные помещаемые в модальное окно
    },
    selectToken: {
      index: '1',
      name: 'select-token',
      data: {}
    },
    transaction: {
      index: '1',
      name: 'transaction',
      data: {
        amount: '99',
        item: {
          img: require('~/assets/img/icons/ray.svg'),
          label: 'RAY'
        },
        step1: false,
        step2: false,
        step3: false
      }
    }
  },
  modals: [],
  menu: {
    open: false,
    landingNavigation: [
      {
        href: 'https://v2.susy.one',
        label: 'Launch APP'
      },
      {
        href: '/',
        label: 'Docs'
      }
    ],
    navigation: [
      {
        route: 'logs',
        label: 'Logs'
      },
      {
        route: 'transfer',
        label: 'Transfer'
      }
    ],
    partners: [
      {
        href: 'https://graviton.one',
        label: 'Graviton'
      },
      {
        href: 'https://gravity.tech',
        label: 'Gravity'
      }
    ],
    socials: [
      {
        href: 'https://twitter.com/OneSusy1',
        icon: 'mono/twitter'
      },
      {
        href: 'https://medium.com/@OneSusy',
        icon: 'mono/medium'
      },
      {
        href: 'https://github.com/SuSy-One',
        icon: 'mono/github'
      },
      {
        href: 'https://t.me/susybridge_community',
        icon: 'mono/telegram'
      },
      {
        href: 'https://discord.gg/jM3y9TYR',
        icon: 'mono/discord'
      }
    ]
  }
})

export const mutations = {
  TOGGLE_MENU(state) {
    state.menu.open = !state.menu.open
  },
  PUSH_MODAL(state, modal) {
    state.modals.push(modal)
  },
  PUSH_MODALS(state, modals) {
    state.modals = [...state.modals, ...modals]
  },
  CLOSE_ALL_MODALS(state) {
    state.modals = []
  },
  CLOSE_MODAL(state) {
    state.modals.pop()
  },
  SET_DATA_MODAL(state, { name, index, data }) {
    const modals = state.modals
    for (let i = 0; i < modals.length; i++) {
      const modal = modals[i]
      if (modal.name === name && modal.index === index) {
        modal.data = data
      }
    }
  }
}

export const getters = {
  exampleModals: (state) => state.exampleModals,
  modals: (state) => state.modals,
  menu: (state) => state.menu
}
