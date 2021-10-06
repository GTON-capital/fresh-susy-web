<template>
  <div class="container">
    <div class="rounded-[18px] border-[#EAF1F3] border bg-white px-[20px] sm:px-[40px] md:px-[70px] py-[18px] sm:pt-[38px] sm:pb-[60px] max-w-card mx-auto" style="box-shadow: 0 1px 25px #E2F1F6;">
      <div class="mb-[28px] font-semibold text-[28px] leading-none text-center font-heading">
        Transfer
      </div>

      <div class="sm:bg-[#F3F9F9] sm:py-4 sm:px-5 sm:rounded-[8px] mt-[14px] sm:mt-4">
        <div class="sm:flex sm:flex-wrap sm:mx-[-9px]">

          <div class="mb-[5px] sm:mb-0 sm:w-[222px] sm:px-[9px]">
            <div class="mb-[10px] text-[13px]">
              <div class="font-semibold">Origin</div>
            </div>

            <div class="ring-[#BDDBDF] ring-inset ring-1 w-full h-field bg-white rounded-[8px] py-[4px] px-[12px] flex items-center justify-start">
              <div class="rounded-full bg-white border-[#EAF1F3] border flex items-center justify-center mr-[6px] h-[32px] w-[32px] min-w-[32px]" style="box-shadow: 0 1px 25px #E2F1F6;">
                <img class="w-[18px] h-[18px] object-center object-contain" src="~/assets/img/icons/sol.svg" alt="" width="30" height="30">
              </div>
              <div class="text-[14px]">
                Solana
              </div>
            </div>

          </div>

          <div class="mb-[5px] sm:mb-0 sm:flex-initial sm:px-[9px] flex items-end justify-end">
            <div class="ring-[#BDDBDF] ring-inset ring-1 rounded-full w-[28px] h-[28px] sm:w-[42px] sm:h-field flex items-center justify-center bg-white">
              <icon name="mono/arrow-fold" class="fill-current text-desaturated-cyan text-[12px] rotate-90 sm:rotate-0" />
            </div>
          </div>

          <div class="sm:flex-1 sm:px-[9px]">
            <div class="mb-[10px] text-[13px]">
              <div class="font-semibold">Destination</div>
            </div>
            <div class="ring-[#BDDBDF] ring-inset ring-1 w-full h-field bg-white rounded-[8px] py-[4px] px-[12px] flex items-center justify-start">
              <div class="rounded-full bg-white border-[#EAF1F3] border flex items-center justify-center mr-[6px] h-[32px] w-[32px] min-w-[32px]" style="box-shadow: 0 1px 25px #E2F1F6;">
                <img class="w-[18px] h-[18px] object-center object-contain" src="~/assets/img/icons/poligon.svg" alt="" width="30" height="30">
              </div>
              <div class="text-[14px]">
                Polygon
              </div>
            </div>
          </div>

        </div>
      </div>

      <template v-if="connectWallet">

        <div class="mt-[14px] sm:flex sm:flex-wrap sm:mx-[-10px] sm:mt-4">

          <div class="mb-[14px] sm:mb-0 sm:flex-1 sm:px-[10px]">
            <div class="mb-[10px] text-[13px]">
              <div class="font-semibold">From address</div>
            </div>
            <div class="w-full relative">
              <input type="text" class="form-input w-full bg-[#F3F9F9] border-[#F3F9F9] pr-[50px]" value="0x1015e2E...6AD26FB9" readonly>
              <img class="absolute -translate-y-1/2 top-1/2 right-[18px] w-[28px] h-[28px] object-contain object-center" src="~/assets/img/icons/phantom.svg" alt="">
            </div>
          </div>

          <div class="sm:flex-1 sm:px-[10px]">
            <div class="mb-[10px] text-[13px]">
              <div class="font-semibold">To address</div>
            </div>
            <div class="w-full">
              <input type="text" class="form-input w-full" value="3PAAS...SRktwPaw" readonly>
            </div>
          </div>

        </div>

        <div class="mt-[14px] sm:mt-4">
          <button class="btn btn-outline-solana2 btn-block sm:h-auto sm:w-auto sm:inline-block underline hover:no-underline sm:leading-none sm:bg-none sm:hover:text-magenta" @click="connectWallet = !connectWallet">
            Change wallet
          </button>
        </div>
        <div class="mt-[24px] mb-[34px] bg-[#BDDBDF] h-[1px] w-full hidden sm:block"></div>

      </template>
      <template v-else>

        <button class="btn btn-outline-solana2 btn-block mt-4" @click="handleConnectWallet">
          Connect wallet
        </button>

      </template>

      <div class="mt-[14px] bg-[#BDDBDF] h-[1px] w-full sm:hidden"></div>

      <div class="sm:bg-[#F3F9F9] sm:py-4 sm:px-5 sm:rounded-[8px] mt-[14px] sm:mt-4">
        <div class="sm:flex sm:flex-wrap sm:mx-[-10px]">

          <div class="mb-[14px] sm:mb-0 sm:w-[222px] sm:px-[10px]">
            <div class="flex items-center mb-[10px] text-[13px]">
              <div class="mr-auto font-semibold"
                   :class="{'opacity-50': !connectWallet}">Token</div>
              <div class="text-desaturated-cyan text-[11px]">Balance: {{ connectWallet?'0.220955':'0' }}</div>
            </div>
            <div class="w-full">
              <button type="button" class="form-select w-full text-left flex items-center justify-start" :disabled="!connectWallet"
                      @click="handleSelectToken">
                <span class="border-[#EAF1F3] border rounded-full h-[32px] w-[32px] min-w-[32px] flex justify-center items-center mr-[6px] bg-white" style="box-shadow: rgb(226, 241, 246) 0 1px 25px;">
                  <img class="w-[18px] h-[18px] object-contain object-center" :src="item.img" alt="" width="30" height="30">
                </span>
                {{ item.label }}
              </button>
            </div>
          </div>

          <div class="sm:flex-1 sm:px-[10px]">
            <div class="mb-[10px] text-[13px]">
              <div class="font-semibold"
              :class="{'opacity-50': !connectWallet}">Amount</div>
            </div>
            <div class="w-full relative">
              <input v-model="amount" type="number" class="form-input w-full"
                     placeholder="0"
                     :class="{'pr-[70px]': connectWallet}"
                     :disabled="!connectWallet">
              <button v-if="connectWallet" type="button" class="absolute rounded-tl-none rounded-bl-none right-0 top-0 form-input flex items-center justify-center text-magenta underline hover:no-underline"
              @click="amount = '999999999'">
                Max
              </button>
            </div>
          </div>

        </div>
      </div>

      <button class="btn btn-solana2 btn-block mt-[34px]"
      :disabled="!connectWallet">
        Next
      </button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    amount: '',
    item: {
      img: require('~/assets/img/icons/ray.svg'),
      label: 'Ray',
    },
    connectWallet: false
  }),
  methods: {
    handleSelectToken(){
      // Deep copy object
      const selectToken = JSON.parse(JSON.stringify(this.$store.getters["app/exampleModals"].selectToken));

      selectToken.data.callbackSelectToken = (item) => {
        this.item = item
        this.$store.commit('app/CLOSE_MODAL')
      }
      this.$store.commit('app/PUSH_MODAL', selectToken)
    },
    handleConnectWallet(){
      // Deep copy object
      const connectWallet = JSON.parse(JSON.stringify(this.$store.getters["app/exampleModals"].connectWallet));

      connectWallet.data.callbackConnect = () => {
        this.connectWallet = true
        this.$store.commit('app/CLOSE_MODAL')
      }
      this.$store.commit('app/PUSH_MODAL', connectWallet)
    }
  }
})
</script>
