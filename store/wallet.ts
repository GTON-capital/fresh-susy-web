import ethers from 'ethers'
import { WalletAdapter } from '../logic/wallet-adapters'

export enum WalletProvider {
  Metamask = 'metamask',
  Phantom = 'phantom'
}

export interface ExtensionWallet {
  wallet: {
    id: string
    label: string
    icon: string
  }
  provider: WalletProvider
  isConnected: boolean
  label: string
  address?: string
  // value?: string
  // getWalletAdapter?: () => WalletAdapter
  walletAdapter?: WalletAdapter
  web3Adapter?: ethers.providers.Web3Provider
  // checked?: boolean
  // instructionBuilder?: IBPort.InstructionBuilder
  // invoker?: Ports.Invoker
}

export type Wallets = {
  [x: string]: ExtensionWallet
  metamask: ExtensionWallet
  phantom: ExtensionWallet
}

export type WalletState = Wallets

export const walletSupportsSolana = (provider: WalletProvider): boolean => {
  // return [WalletProvider.MathWallet, WalletProvider.Phantom].includes(provider)
  return [WalletProvider.Phantom].includes(provider)
}

export const state = (): WalletState => {
  return {
    [WalletProvider.Metamask]: {
      wallet: {
        id: '1-0',
        label: 'Metamask',
        icon: '/img/icons/metamask.svg'
      },
      provider: WalletProvider.Metamask,
      isConnected: false,
      label: 'Connect with Metamask'
    },
    [WalletProvider.Phantom]: {
      wallet: {
        id: '3-0',
        label: 'Phantom',
        icon: '/img/icons/phantom.svg'
      },
      provider: WalletProvider.Phantom,
      isConnected: false,
      label: 'Connect with Phantom'
    }
  }
}

export const actions = {}

export const mutations = {
  updateWalletData(
    state: WalletState,
    {
      provider,
      body
    }: {
      provider: WalletProvider
      body: Partial<ExtensionWallet>
    }
  ) {
    for (const wallet of Object.keys(state)) {
      // state[wallet]!.checked = false

      if (provider === state[wallet]!.provider) {
        state[wallet] = {
          ...state[wallet],
          ...body
        }
      }
    }
  }
}

export const getters = {
  bothWalletsConnected: (state: WalletState): boolean => {
    return state.metamask.isConnected && state.phantom.isConnected
  }
  // currentWallet: (state: WalletState): ExtensionWallet | undefined => {
  //   for (const wallet of Object.keys(state)) {
  //     if (state[wallet]!.checked) {
  //       return state[wallet]
  //     }
  //   }
  // }
}
