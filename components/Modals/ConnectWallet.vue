/* eslint-disable no-case-declarations */
<template>
  <modal name="connect-wallet" @close="$store.commit('app/CLOSE_MODAL')">
    <div class="relative h-full w-full bg-white rounded-[18px] min-h-[300px] py-[34px] px-[20px] md:px-[70px] max-w-card">
      <button
        type="button"
        class="absolute left-0 top-0 sm:left-[54px] sm:top-[24px] bg-transparent text-magenta no-underline hover:underline inline-block text-[12px] p-4 font-bold"
        @click="$store.commit('app/CLOSE_MODAL')"
      >
        <icon name="mono/arrow-wide" class="fill-current mr-1 text-[18px] text-maastricht-blue h-[10px] w-[18px]" />
        Back
      </button>

      <button
        class="absolute z-10 right-0 top-0 sm:right-[10px] sm:top-0 bg-transparent text-desaturated-cyan hover:text-magenta text-[12px] p-4"
        aria-label="Close the modal window"
        @click="$store.commit('app/CLOSE_MODAL')"
      >
        <icon name="mono/close" class="fill-current stroke-current" />
      </button>

      <div class="mb-[20px] sm:mb-[45px] font-heading text-[28px] leading-none text-center font-semibold mt-[8px] sm:mt-0">Connect wallet</div>
      <div class="mx-auto text-center mt-[16px] mb-[24px]">To transfer assets from EVM chain to Solana, you should be connected to two corresponding wallets</div>

      <div class="sm:relative bg-[#F3F9F9] px-[20px] pt-[22px] pb-[32px] sm:py-[34px] rounded-[8px]">
        <div class="flex flex-wrap mx-[-10px]">
          <div class="w-full sm:w-1/2 px-[10px] mb-4 sm:mb-0">
            <div class="w-full bg-[#E7F2F1] rounded-[8px] flex items-center justify-start px-[13px] py-[4px] text-[14px] h-field">
              <img class="w-[20px] h-[20px] object-contain object-center mr-[5px]" src="~/assets/img/icons/phantom.svg" alt="" width="30" height="30" />
              Phantom
            </div>
          </div>
          <div class="w-full sm:w-1/2 px-[10px]">
            <template v-if="phantomConnected">
              <div class="w-full bg-[#E7F2F1] rounded-[8px] flex items-center justify-start px-[13px] py-[4px] text-[14px] h-field">
                <div class="font-semibold text-[13px] text-magenta mr-auto">{{ phantomAddress }}</div>
                <button class="text-magenta underline text-magenta hover:no-underline inline-block bg-transparent border-none text-[12px]" @click="disconnectPhantom">Change</button>
                <button
                  class="btn btn-block rounded-full btn-outline-solana2 ml-[14px] h-[23px] w-[23px] min-w-[23px] leading-[23px] text-desaturated-cyan hover:text-white"
                  @click="disconnectPhantom"
                >
                  <icon name="mono/logout" class="fill-current stroke-current text-[8px] relative left-[0.5px] top-[-1px]" />
                </button>
              </div>
            </template>
            <template v-else>
              <button type="button" class="btn btn-outline-solana2 btn-block" @click="connectPhantom">Connect</button>
            </template>
          </div>
        </div>
        <div class="flex flex-wrap mx-[-10px] mt-[42px]">
          <div class="w-full sm:w-1/2 px-[10px] mb-4 sm:mb-0">
            <div class="w-full bg-[#E7F2F1] rounded-[8px] flex items-center justify-start px-[13px] py-[4px] text-[14px] h-field">
              <img class="w-[20px] h-[20px] object-contain object-center mr-[5px]" src="/icons/legacy/metamask.svg" alt="" width="30" height="30" />
              Metamask
            </div>
          </div>
          <div class="w-full sm:w-1/2 px-[10px]">
            <template v-if="metamaskConnected">
              <div class="w-full bg-[#E7F2F1] rounded-[8px] flex items-center justify-start px-[13px] py-[4px] text-[14px] h-field">
                <div class="font-semibold text-[13px] text-magenta mr-auto">{{ metamaskAddress }}</div>
                <button class="text-magenta underline text-magenta hover:no-underline inline-block bg-transparent border-none text-[12px]" @click="disconnectMetamask">Change</button>
                <button
                  class="btn btn-block rounded-full btn-outline-solana2 ml-[14px] h-[23px] w-[23px] min-w-[23px] leading-[23px] text-desaturated-cyan hover:text-white"
                  @click="disconnectMetamask"
                >
                  <icon name="mono/logout" class="fill-current stroke-current text-[8px] relative left-[0.5px] top-[-1px]" />
                </button>
              </div>
            </template>
            <template v-else>
              <button type="button" class="btn btn-outline-solana2 btn-block" @click="connectMetamask">Connect</button>
            </template>
          </div>
        </div>
      </div>

      <div v-if="phantomConnected && metamaskConnected" class="mt-[24px] text-center left-0 w-full">
        <button
          class="btn btn-outline-solana2 btn-block sm:h-auto sm:w-auto sm:inline-block sm:underline hover:no-underline sm:leading-none sm:bg-none sm:hover:text-magenta"
          @click="handleConnectWallet"
        >
          Continue
        </button>
      </div>
    </div>
  </modal>
</template>

<script lang="ts">
import Vue from 'vue'

import { PhantomWalletAdapter } from '~/logic/wallet-adapters'
import { ExtensionWallet, WalletState, WalletProvider, walletSupportsSolana } from '~/store/wallet'

type State = {
  phantomConnected: boolean
  metamaskConnected: boolean
}

function clipAddress(addr: string): string {
  return addr.slice(0, 6) + '...' + addr.slice(addr.length - 4)
}

export default Vue.extend<State>({
  // @ts-ignore
  data(): State {
    return {
      // connected: false,
      phantomConnected: false,
      metamaskConnected: false
    }
  },
  computed: {
    modals<T>(): T[] {
      return this.$store.getters['app/modals']
    },
    modal<T>(): T {
      return this.modals[this.modals.length - 1]
    },

    wallets(): WalletState {
      // @ts-ignore
      return this.$store.state.wallet
    },
    // walletPicked(): ExtensionWallet {
    //   // wallets.metamask
    //   return this.wallets[this.swapProps.inputWallet]
    // }
    metamaskAddress(): string {
      return this.metamaskConnected ? clipAddress(this.wallets.metamask.address) : ""
    },
    phantomAddress(): string {
      return this.phantomConnected ? clipAddress(this.wallets.phantom.address) : ""
    }
  },
  methods: {
    async connectPhantom() {
      await this.handleLogin(WalletProvider.Phantom)

      this.phantomConnected = true
    },
    disconnectPhantom() {
      this.phantomConnected = false
    },
    async connectMetamask() {
      await this.handleLogin(WalletProvider.Metamask)

      this.metamaskConnected = true
    },
    disconnectMetamask() {
      this.metamaskConnected = false
    },
    handleConnectWallet() {
      // @ts-ignore
      this.modal.data.callbackConnect()
    },
    async handleLogin(provider: WalletProvider) {
      const body: Partial<ExtensionWallet> = {}

      switch (provider) {
        case WalletProvider.Phantom:
          body.walletAdapter = new PhantomWalletAdapter()

          await body.walletAdapter.connect()
          body.address = body.walletAdapter.publicKey.toBase58()
          body.isConnected = true

          break
        case WalletProvider.Metamask:
          // @ts-ignore
          // eslint-disable-next-line no-case-declarations
          const accounts = await ethereum.request({ method: 'eth_accounts' })
          body.address = accounts[0]
          body.isConnected = true

          break
      }

      this.$store.commit('wallet/updateWalletData', {
        provider: provider as WalletProvider,
        body
      })
    },
    async handleLogout(wallet: ExtensionWallet) {
      // console.log({ wallet })
      const existing = Object.keys(this.wallets)
      let walletToEnable: WalletProvider | undefined

      for (const existingWallet of existing) {
        if (wallet.provider !== existingWallet) {
          walletToEnable = existingWallet as WalletProvider
          break
        }
      }

      this.$store.commit('wallet/updateWalletData', {
        provider: wallet.provider as WalletProvider,
        body: { checked: false, isConnected: false, value: '' }
      })

      if (walletSupportsSolana(wallet.provider as WalletProvider)) {
        const walletAdapter = wallet.walletAdapter

        this.$store.commit('wallet/updateWalletData', {
          provider: wallet.provider as WalletProvider,
          body: { walletAdapter: null }
        })

        await walletAdapter?.disconnect()
      }

      if (!walletToEnable) {
        return
      }

      this.$store.commit('wallet/updateWalletData', {
        provider: walletToEnable,
        body: { checked: true }
      })
    },
    goBack() {
      // @ts-ignore
      this.$modal.pop()
    }
  }
})
</script>
