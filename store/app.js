export const state = () => ({
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
})

export const getters = {
  socials: (state) => state.socials,
  navigation: (state) => state.navigation,
}
