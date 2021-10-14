<template>
  <div class="container">
    <div
      v-if="step === '1'"
      class="rounded-[18px] border-[#EAF1F3] border bg-white px-[20px] sm:px-[40px] md:px-[70px] py-[18px] sm:pt-[38px] sm:pb-[60px] max-w-card mx-auto"
      style="box-shadow: 0 1px 25px #e2f1f6"
    >
      <div class="mb-[28px] font-semibold text-[28px] leading-none text-center font-heading">Transfer</div>

      <div class="sm:bg-[#F3F9F9] sm:py-4 sm:px-5 sm:rounded-[8px] mt-[14px] sm:mt-4">
        <div class="sm:flex sm:flex-wrap sm:mx-[-9px]">
          <div class="mb-[5px] sm:mb-0 sm:w-[222px] sm:px-[9px]">
            <div class="mb-[10px] text-[13px]">
              <div class="font-semibold">Origin</div>
            </div>

            <div class="ring-[#BDDBDF] ring-inset ring-1 w-full h-field bg-white rounded-[8px] py-[4px] px-[12px] flex items-center justify-start">
              <div class="rounded-full bg-white border-[#EAF1F3] border flex items-center justify-center mr-[6px] h-[32px] w-[32px] min-w-[32px]" style="box-shadow: 0 1px 25px #e2f1f6">
                <img class="w-[18px] h-[18px] object-center object-contain" src="~/assets/img/icons/sol.svg" alt="" width="30" height="30" />
              </div>
              <div class="text-[14px]">Solana</div>
            </div>
          </div>

          <div class="mb-[5px] sm:mb-0 sm:flex-initial sm:px-[9px] flex items-end justify-end">
            <div @click="inverseTransferDirection" class="ring-[#BDDBDF] ring-inset ring-1 rounded-full w-[28px] h-[28px] sm:w-[42px] sm:h-field flex items-center justify-center bg-white">
              <icon name="mono/arrow-fold" class="fill-current text-desaturated-cyan text-[12px] rotate-90 sm:rotate-0" />
            </div>
          </div>

          <div class="sm:flex-1 sm:px-[9px]">
            <div class="mb-[10px] text-[13px]">
              <div class="font-semibold">Destination</div>
            </div>
            <div class="ring-[#BDDBDF] ring-inset ring-1 w-full h-field bg-white rounded-[8px] py-[4px] px-[12px] flex items-center justify-start">
              <div class="rounded-full bg-white border-[#EAF1F3] border flex items-center justify-center mr-[6px] h-[32px] w-[32px] min-w-[32px]" style="box-shadow: 0 1px 25px #e2f1f6">
                <img class="w-[18px] h-[18px] object-center object-contain" src="~/assets/img/icons/poligon.svg" alt="" width="30" height="30" />
              </div>
              <div class="text-[14px]">Polygon</div>
            </div>
          </div>
        </div>
      </div>

      <template v-if="bothWalletsConnected">
        <div class="mt-[14px] sm:flex sm:flex-wrap sm:mx-[-10px] sm:mt-4">
          <div class="mb-[14px] sm:mb-0 sm:flex-1 sm:px-[10px]">
            <div class="mb-[10px] text-[13px]">
              <div class="font-semibold">From address</div>
            </div>
            <div class="w-full relative">
              <input type="text" class="form-input w-full bg-[#F3F9F9] border-[#F3F9F9] pr-[50px]" :value="originAddress" readonly />
              <img class="absolute -translate-y-1/2 top-1/2 right-[18px] w-[28px] h-[28px] object-contain object-center" :src="chainsCfg.origin.icon" alt="" />
            </div>
            <div class="mt-[14px] sm:mt-4">
              <button
                class="btn btn-outline-solana2 btn-block sm:h-auto sm:w-auto sm:inline-block underline hover:no-underline sm:leading-none sm:bg-none sm:hover:text-magenta"
                @click="connectWallet = !connectWallet"
              >
                Change wallet
              </button>
            </div>
          </div>
          <div class="sm:flex-1 sm:px-[10px]">
            <div class="mb-[10px] text-[13px]">
              <div class="font-semibold">To address</div>
            </div>
            <div class="w-full relative">
              <input type="text" class="form-input w-full bg-[#F3F9F9] border-[#F3F9F9] pr-[50px]" :value="dstAddress" readonly />
              <img class="absolute -translate-y-1/2 top-1/2 right-[18px] w-[28px] h-[28px] object-contain object-center" :src="chainsCfg.dst.icon" alt="" />
            </div>

            <div class="mt-[14px] sm:mt-4">
              <button
                class="btn btn-outline-solana2 btn-block sm:h-auto sm:w-auto sm:inline-block underline hover:no-underline sm:leading-none sm:bg-none sm:hover:text-magenta"
                @click="connectWallet = !connectWallet"
              >
                Change wallet
              </button>
            </div>
          </div>
        </div>

        <div class="mt-[24px] mb-[34px] bg-[#BDDBDF] h-[1px] w-full hidden sm:block"></div>
      </template>
      <template v-else>
        <button class="btn btn-outline-solana2 btn-block mt-4" @click="handleConnectWallet">Connect wallets</button>
      </template>

      <div class="mt-[14px] bg-[#BDDBDF] h-[1px] w-full sm:hidden"></div>

      <div class="sm:bg-[#F3F9F9] sm:py-4 sm:px-5 sm:rounded-[8px] mt-[14px] sm:mt-4">
        <div class="sm:flex sm:flex-wrap sm:mx-[-10px]">
          <div class="mb-[14px] sm:mb-0 sm:w-[222px] sm:px-[10px]">
            <div class="flex items-center mb-[10px] text-[13px]">
              <div class="mr-auto font-semibold" :class="{ 'opacity-50': !connectWallet }">Token</div>
              <div class="text-desaturated-cyan text-[11px]">Balance: {{ connectWallet ? '0.220955' : '0' }}</div>
            </div>
            <div class="w-full">
              <button type="button" class="form-select w-full text-left flex items-center justify-start" :disabled="!connectWallet" @click="handleSelectToken">
                <span
                  class="border-[#EAF1F3] border rounded-full h-[32px] w-[32px] min-w-[32px] flex justify-center items-center mr-[6px] bg-white"
                  style="box-shadow: rgb(226, 241, 246) 0 1px 25px"
                >
                  <img class="w-[18px] h-[18px] object-contain object-center" :src="item.img" alt="" width="30" height="30" />
                </span>
                <span class="text-[14px]">{{ item.label }}</span>
              </button>
            </div>
          </div>

          <div class="sm:flex-1 sm:px-[10px]">
            <div class="mb-[10px] text-[13px]">
              <div class="font-semibold" :class="{ 'opacity-50': !connectWallet }">Amount</div>
            </div>
            <div class="w-full relative">
              <input v-model="amount" type="number" class="form-input w-full" placeholder="0" :class="{ 'pr-[70px]': connectWallet }" :disabled="!connectWallet" />
              <button
                v-if="connectWallet"
                type="button"
                class="absolute rounded-tl-none rounded-bl-none right-0 top-0 form-input flex items-center justify-center text-magenta underline hover:no-underline"
                @click="amount = '99'"
              >
                Max
              </button>
            </div>
          </div>
        </div>
      </div>

      <button class="btn btn-solana2 btn-block mt-[34px]" :disabled="!connectWallet || Number.isNaN(Number(amount)) || Number(amount) <= 0" @click="step = '2'">Next</button>
    </div>
    <div
      v-if="step === '2'"
      class="rounded-[18px] border-[#EAF1F3] border bg-white px-[20px] sm:px-[40px] md:px-[70px] py-[18px] sm:pt-[38px] sm:pb-[60px] max-w-card mx-auto"
      style="box-shadow: 0 1px 25px #e2f1f6"
    >
      <div class="mb-[28px] font-semibold text-[28px] leading-none text-center font-heading">Approve transfer transaction</div>

      <div class="sm:bg-[#F3F9F9] sm:rounded-[8px] sm:px-[30px] sm:py-[20px]">
        <div class="flex justify-center items-start mb-[24px] sm:mb-[20px]">
          <div class="flex flex-col items-center justify-start w-[60px]">
            <div class="border-[#EAF1F3] border rounded-full h-[32px] w-[32px] min-w-[32px] flex justify-center items-center bg-white" style="box-shadow: rgb(226, 241, 246) 0 1px 25px">
              <img class="w-[18px] h-[18px] object-contain object-center" src="~/assets/img/icons/sol.svg" alt="" width="30" height="30" />
            </div>
            <div class="text-[14px]">Solana</div>
          </div>
          <div class="w-[74px] text-center text-desaturated-cyan pt-4">
            <icon name="mono/double-arrow" class="fill-current text-[20px]" />
          </div>
          <div class="flex flex-col items-center justify-start w-[60px]">
            <div class="rounded-full bg-white border-[#EAF1F3] border flex items-center justify-center h-[32px] w-[32px] min-w-[32px]" style="box-shadow: 0 1px 25px #e2f1f6">
              <img class="w-[18px] h-[18px] object-center object-contain" src="~/assets/img/icons/poligon.svg" alt="" width="30" height="30" />
            </div>
            <div class="text-[14px]">Polygon</div>
          </div>
        </div>

        <div class="mb-[24px] bg-[#E4EDEF] h-[1px] w-full hidden sm:block"></div>

        <div class="mb-[14px] sm:mb-[20px]">
          <div class="text-[13px] font-semibold mb-[8px] sm:mb-[10px]">From address</div>
          <div class="max-w-full whitespace-nowrap overflow-hidden text-[14px]">0xEA3ed91a668B6a56751729016EBafc214dFBeB65</div>
        </div>

        <div class="mb-[14px] sm:mb-[20px]">
          <div class="text-[13px] font-semibold mb-[8px] sm:mb-[10px]">To address</div>
          <div class="max-w-full whitespace-nowrap overflow-hidden text-[14px]">3PAASSqnygiyYoQuqmXpwaSUJmRkqytwPaw</div>
        </div>

        <div class="mb-[14px] sm:mb-[20px]">
          <div class="text-[13px] font-semibold mb-[8px] sm:mb-[10px]">Amount</div>
          <div class="max-w-full">
            <input type="text" readonly class="form-input w-full sm:text-[20px] bg-[#E7F2F1] border-[#E7F2F1]" :value="amount" />
          </div>
        </div>

        <div class="sm:flex sm:mx-[-11px]">
          <div class="mb-[14px] sm:mb-0 sm:w-1/2 sm:px-[11px]">
            <div class="flex items-center mb-[10px] text-[13px]">
              <div class="mr-auto font-semibold">Token</div>
              <div class="text-desaturated-cyan text-[11px]">Balance: 0.220955</div>
            </div>

            <div class="w-full">
              <div class="form-input bg-[#E7F2F1] border-[#E7F2F1] w-full text-left flex items-center justify-start">
                <div
                  class="border-[#EAF1F3] border rounded-full h-[32px] w-[32px] min-w-[32px] flex justify-center items-center mr-[6px] bg-white"
                  style="box-shadow: rgb(226, 241, 246) 0 1px 25px"
                >
                  <img class="w-[18px] h-[18px] object-contain object-center" :src="item.img" alt="" width="30" height="30" />
                </div>
                <div class="text-[14px]">{{ item.label }}</div>
              </div>
            </div>
          </div>

          <div class="mb-[14px] sm:mb-0 sm:w-1/2 sm:px-[11px]">
            <div class="flex items-center mb-[10px] text-[13px]">
              <div class="mr-auto font-semibold">You receive</div>
            </div>

            <div class="w-full">
              <div class="form-input bg-[#E7F2F1] border-[#E7F2F1] w-full text-left flex items-center justify-start">
                <div
                  class="border-magenta border-[1.5px] rounded-full h-[32px] w-[32px] min-w-[32px] flex justify-center items-center mr-[6px] bg-white relative"
                  style="box-shadow: rgb(226, 241, 246) 0 1px 25px"
                >
                  <img class="w-[18px] h-[18px] object-contain object-center" :src="item.img" alt="" width="30" height="30" />
                  <img
                    class="absolute z-[1] left-1/2 top-0 w-[18px] h-[18px] object-contain object-center"
                    src="~/assets/img/icons/susy.svg"
                    alt=""
                    width="30"
                    height="30"
                    style="transform: rotate(-15deg) translate(-56%, -26%)"
                  />
                </div>
                <div class="text-[14px]">su{{ item.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button class="btn btn-solana2 btn-block mt-[24px]" @click="handleTransfer">Transfer</button>

      <div class="text-center mt-[20px]">
        <button type="button" class="inline-block underline hover:no-underline text-magenta text-[14px] font-bold" @click="step = '1'">Back</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { isNil } from 'lodash-es'

import { AvailableTokens, Token } from '~/logic/chains/token'
import { Chain } from '~/logic/chains/chain'
import { WalletProvider } from '~/store/wallet'
import { Wallet } from '@ethersproject/wallet'

type EnhancedChain = {
  address?: string
} & Chain

type ChainsCfg = {
  origin: EnhancedChain
  dst: EnhancedChain
}

type TransferProps = {
  isDirect: boolean
  currentToken: Token
} & ChainsCfg

type State = {
  transfer: TransferProps
}

export default Vue.extend<State>({
  // @ts-ignore
  data() {
    return {
      step: '1',
      amount: '0',
      item: {
        img: require('~/assets/img/icons/ray.svg'),
        label: 'RAY'
      },
      // connectWallet: false,
      transfer: {
        isDirect: false,
        currentToken: AvailableTokens.SUSY,
        origin: AvailableTokens.SUSY.gateway.origin,
        dst: AvailableTokens.SUSY.gateway.destination[0]
      }
      // originWallet:
    }
  },
  computed: {
    bothWalletsConnected(): boolean {
      // @ts-ignore
      return this.$store.getters['wallet/bothWalletsConnected']
    },
    connectWallet(): boolean {
      // @ts-ignore
      return this.bothWalletsConnected
    },
    isTransferDirect(): boolean {
      return this.transfer.isDirect
    },
    wpsPair(): [WalletProvider, WalletProvider] | null {
      return this.bothWalletsConnected ? [this.$store.state.wallet.phantom, this.$store.state.wallet.metamask] : null
    },
    chainToAddress(): { [x: string]: string } | null {
      return this.bothWalletsConnected
        ? {
            phantom: this.$store.state.wallet.phantom.address,
            metamask: this.$store.state.wallet.metamask.address
          }
        : null
    },
    originAddress(): string {
      return this.chainToAddress[this.chainsCfg.origin.walletProviders[0]]
    },
    dstAddress(): string {
      return this.chainToAddress[this.chainsCfg.dst.walletProviders[0]]
    },
    chainsCfg(): ChainsCfg {
      const { origin, dst } = this.transfer

      // if (!isNil(this.addressPair)) {
      //   const populate = (ch: EnhancedChain, addresses: [string, string], prs: [WalletProvider, WalletProvider]) => {
      //     if (chainSupportsProvider(ch, prs)) {
      //       return addresses[0]
      //     } else {
      //       return addresses[1]
      //     }
      //   }

      //   origin.address = populate(origin, this.addressPair, this.wpsPair)
      //   dst.address = populate(dst, this.addressPair, this.wpsPair)
      // }

      const directed = () => {
        if (this.isTransferDirect) {
          return {
            origin: dst,
            dst: origin
          }
        }

        return { origin, dst }
      }

      return directed()
    }
  },
  mounted() {
    console.log({ store: this.$store })
  },
  methods: {
    inverseTransferDirection() {
      this.transfer.isDirect = !this.transfer.isDirect
    },
    handleTransfer() {
      // Deep copy object
      const modal = JSON.parse(JSON.stringify(this.$store.getters['app/exampleModals'].transaction))

      this.$store.commit('app/PUSH_MODAL', modal)

      setTimeout(() => {
        const data = JSON.parse(JSON.stringify(modal.data))
        data.step1 = true
        this.$store.commit('app/SET_DATA_MODAL', { name: modal.name, index: modal.index, data })

        setTimeout(() => {
          const data = JSON.parse(JSON.stringify(modal.data))
          data.step1 = true
          data.step2 = true
          this.$store.commit('app/SET_DATA_MODAL', { name: modal.name, index: modal.index, data })

          setTimeout(() => {
            const data = JSON.parse(JSON.stringify(modal.data))
            data.step1 = true
            data.step2 = true
            data.step3 = true
            this.$store.commit('app/SET_DATA_MODAL', { name: modal.name, index: modal.index, data })
          }, 500)
        }, 1000)
      }, 1500)
    },
    handleSelectToken() {
      // Deep copy object
      const modal = JSON.parse(JSON.stringify(this.$store.getters['app/exampleModals'].selectToken))

      modal.data.callbackSelectToken = (item: any) => {
        this.item = item
        this.$store.commit('app/CLOSE_MODAL')
      }
      this.$store.commit('app/PUSH_MODAL', modal)
    },
    handleConnectWallet() {
      // Deep copy object
      const modal = JSON.parse(JSON.stringify(this.$store.getters['app/exampleModals'].connectWallet))

      modal.data.callbackConnect = () => {
        this.connectWallet = true
        this.$store.commit('app/CLOSE_MODAL')
      }
      this.$store.commit('app/PUSH_MODAL', modal)
    }
  }
})
</script>
