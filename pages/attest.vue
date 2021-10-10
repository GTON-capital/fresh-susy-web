<template>
  <div class="container">
    <div
      v-if="step === '1'"
      class="rounded-[18px] border-[#EAF1F3] border bg-white px-[20px] sm:px-[40px] md:px-[70px] py-[18px] sm:pt-[38px] sm:pb-[60px] max-w-card mx-auto"
      style="box-shadow: 0 1px 25px #e2f1f6"
    >
      <div class="mb-[28px] font-semibold text-[28px] leading-none text-center font-heading">Attest</div>

      <!-- <div
        class="
          sm:bg-[#F3F9F9] sm:py-4 sm:px-5 sm:rounded-[8px]
          mt-[14px]
          sm:mt-4
        "
      > -->
      <div class="">
        <div class="w-full">
          <div class="text-[13px] font-semibold mb-[8px] sm:mb-[10px]">Origin Chain</div>
          <button type="button" class="form-select w-full text-left flex items-center justify-start" @click="handleSelectToken">
            <span
              class="border-[#EAF1F3] border rounded-full h-[32px] w-[32px] min-w-[32px] flex justify-center items-center mr-[6px] bg-white"
              style="box-shadow: rgb(226, 241, 246) 0 1px 25px"
            >
              <img class="w-[18px] h-[18px] object-contain object-center" :src="item.img" alt="" width="30" height="30" />
            </span>
            <span class="text-[14px]">{{ item.label }}</span>
          </button>
        </div>
        <div class="mb-[14px] mt-[14px]">
          <div class="text-[13px] font-semibold mb-[8px] sm:mb-[10px]">Origin Asset ID</div>
          <div class="w-full relative">
            <input type="text" class="form-input w-full" placeholder="" :class="{ 'pr-[70px]': true }" />
          </div>
        </div>
        <div class="w-full">
          <div class="text-[13px] font-semibold mb-[8px] sm:mb-[10px]">Destination Chain</div>
          <button type="button" class="form-select w-full text-left flex items-center justify-start" @click="handleSelectToken">
            <span
              class="border-[#EAF1F3] border rounded-full h-[32px] w-[32px] min-w-[32px] flex justify-center items-center mr-[6px] bg-white"
              style="box-shadow: rgb(226, 241, 246) 0 1px 25px"
            >
              <img class="w-[18px] h-[18px] object-contain object-center" :src="item.img" alt="" width="30" height="30" />
            </span>
            <span class="text-[14px]">{{ item.label }}</span>
          </button>
        </div>
        <!-- <div class="mb-[14px] mt-[14px]">
          <div class="text-[13px] font-semibold mb-[8px] sm:mb-[10px]">
            
          </div>
          <div class="w-full relative">
            <input
              type="text"
              class="form-input w-full"
              placeholder=""
              :class="{ 'pr-[70px]': true }"
            />
          </div>
        </div> -->
      </div>

      <button class="btn btn-solana2 btn-block mt-[34px]" @click="handleAttest">Attest</button>
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
import detectEthereumProvider from '@metamask/detect-provider'

import { attestFromSolana, CHAIN_ID_SOLANA, createWrappedOnEth, getEmitterAddressSolana, getSignedVAA, parseSequenceFromLogSolana } from '@certusone/wormhole-sdk'
import { Connection, clusterApiUrl } from '@solana/web3.js'
// import Anchor from '@project-serum/anchor'

// const anchor = require('@project-serum/anchor')
// const BN = anchor.BN



export default Vue.extend({
  data: () => ({
    step: '1',
    amount: '0',
    item: {
      img: require('~/assets/img/icons/ray.svg'),
      label: 'RAY'
    },
    connectWallet: false
  }),
  methods: {
    async handleAttest() {
      const getProvider = () => {
        if ('solana' in window) {
          // @ts-ignore
          const provider = window.solana
          if (provider.isPhantom) {
            return provider
          }
        }
        window.open('https://phantom.app/', '_blank')
      }
      const network = clusterApiUrl('devnet')
      // const network = 'https://dawn-nameless-bush.solana-mainnet.quiknode.pro/05c403fb121e8e3b4aa92e3aaed610d70ef2bfa9/'

      const connection = new Connection(network, 'confirmed')

      const SOL_BRIDGE_ADDRESS = ''
      const SOL_TOKEN_BRIDGE_ADDRESS = ''

      const WORMHOLE_RPC_HOST = ''
      const ETH_TOKEN_BRIDGE_ADDRESS = ''

      const payerAddress = ''
      const mintAddress = ''

      // const wallet = getProvider()

      // @ts-ignore
      const wallet = await window.solana.connect()
      // resp.publicKey.toString()
      const evmProvider = await detectEthereumProvider()

      // @ts-ignore
      const signer = evmProvider.getSigner()

      try {
        const transaction = await attestFromSolana(connection, SOL_BRIDGE_ADDRESS, SOL_TOKEN_BRIDGE_ADDRESS, payerAddress, mintAddress)
        const signed = await wallet.signTransaction(transaction)
        const txid = await connection.sendRawTransaction(signed.serialize())
        await connection.confirmTransaction(txid)
        // Get the sequence number and emitter address required to fetch the signedVAA of our message
        const info = await connection.getTransaction(txid)
        const sequence = parseSequenceFromLogSolana(info!)
        const emitterAddress = await getEmitterAddressSolana(SOL_TOKEN_BRIDGE_ADDRESS)
        // Fetch the signedVAA from the Wormhole Network (this may require retries while you wait for confirmation)

        const { signedVAA } = await getSignedVAA(WORMHOLE_RPC_HOST, CHAIN_ID_SOLANA, emitterAddress, sequence)
        console.log({ signedVAA })
        // Create the wrapped token on Ethereum
        await createWrappedOnEth(ETH_TOKEN_BRIDGE_ADDRESS, signer, signedVAA)
      } catch (err) {
        console.log({ err })
      }

      console.log('attest passed')
    },
    handleTransfer() {
      //   // Deep copy object
      //   const modal = JSON.parse(JSON.stringify(this.$store.getters["app/exampleModals"].transaction));
      //   this.$store.commit('app/PUSH_MODAL', modal)
      //   setTimeout(() => {
      //     const data = JSON.parse(JSON.stringify(modal.data));
      //     data.step1 = true;
      //     this.$store.commit('app/SET_DATA_MODAL', {name: modal.name, index: modal.index, data})
      //     setTimeout(() => {
      //       const data = JSON.parse(JSON.stringify(modal.data));
      //       data.step1 = true;
      //       data.step2 = true;
      //       this.$store.commit('app/SET_DATA_MODAL', {name: modal.name, index: modal.index, data})
      //       setTimeout(() => {
      //         const data = JSON.parse(JSON.stringify(modal.data));
      //         data.step1 = true;
      //         data.step2 = true;
      //         data.step3 = true;
      //         this.$store.commit('app/SET_DATA_MODAL', {name: modal.name, index: modal.index, data})
      //       }, 500)
      //     }, 1000)
      //   }, 1500)
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
      //   const modal = JSON.parse(JSON.stringify(this.$store.getters["app/exampleModals"].connectWallet));
      //   modal.data.callbackConnect = () => {
      //     this.connectWallet = true
      //     this.$store.commit('app/CLOSE_MODAL')
      //   }
      //   this.$store.commit('app/PUSH_MODAL', modal)
    }
  }
})
</script>
