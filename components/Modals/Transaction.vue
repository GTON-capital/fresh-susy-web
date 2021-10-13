<template>
  <modal name="transaction"
         @close="$store.commit('app/CLOSE_MODAL')">
    <div
      class="relative h-full w-full bg-white rounded-[18px] min-h-[300px] py-[34px] px-[20px] md:px-[70px] max-w-card">

      <button
        class="absolute z-10 right-0 top-0 sm:right-[10px] sm:top-0 bg-transparent text-desaturated-cyan hover:text-magenta text-[12px] p-4"
        aria-label="Close the modal window"
        @click="$store.commit('app/CLOSE_MODAL')">
        <icon name="mono/close" class="fill-current stroke-current"/>
      </button>

      <div
        class="mb-[20px] sm:mb-[45px] font-heading text-[28px] leading-none text-center font-semibold mt-[8px] sm:mt-0">
        <div v-if="step3">
          Completed
        </div>
        <div v-else>
          Transaction is processing
        </div>
      </div>

      <div class="bg-[#F3F9F9] rounded-[8px] p-[22px]">

        <div v-if="step3">

          <div class="mb-[10px] w-[106px] h-[106px] flex justify-center items-center bg-white rounded-full mx-auto">
            <img class="w-[54px] h-[54px]" src="~/assets/img/icons/completed.svg" alt="">
          </div>
          <div class="text-[13px] text-center">Transfer has been successfully completed</div>
        </div>
        <div v-else>
          <div class="flex justify-center items-center mb-[15px]">
            <div class="flex flex-row items-center justify-start">
              <div
                class="border-[#EAF1F3] border rounded-full h-[32px] w-[32px] min-w-[32px] flex justify-center items-center bg-white mr-[6px]"
                style="box-shadow: rgb(226, 241, 246) 0 1px 25px;">
                <img class="w-[18px] h-[18px] object-contain object-center" src="~/assets/img/icons/sol.svg" alt=""
                     width="30" height="30">
              </div>
              Solana
            </div>
            <div
              class="min-w-[30px] max-w-[80px] w-full text-center text-desaturated-cyan flex flex-row items-center justify-center">
              <icon name="mono/double-arrow" class="fill-current text-[20px]"/>
            </div>
            <div class="flex flex-row items-center justify-center">
              <div
                class="rounded-full bg-white border-[#EAF1F3] border flex items-center justify-center mr-[6px] h-[32px] w-[32px] min-w-[32px]"
                style="box-shadow: 0 1px 25px #E2F1F6;">
                <img class="w-[18px] h-[18px] object-center object-contain" src="~/assets/img/icons/poligon.svg" alt=""
                     width="30" height="30">
              </div>
              <div class="text-[14px]">
                Polygon
              </div>
            </div>
          </div>

          <div v-if="item" class="flex justify-center items-center">
            <div class="flex flex-row items-center justify-start">
              <span class="text-[22px] mr-[6px]">{{ amount }}</span>
              <div
                class="border-[#EAF1F3] border rounded-full h-[32px] w-[32px] min-w-[32px] flex justify-center items-center bg-white mr-[6px]"
                style="box-shadow: rgb(226, 241, 246) 0 1px 25px;">
                <img class="w-[18px] h-[18px] object-contain object-center"
                     :src="item.img"
                     alt=""
                     width="30" height="30">
              </div>
              <div class="text-[14px]">
                {{ item.label }}
              </div>
            </div>
            <div
              class="min-w-[20px] max-w-[60px] w-full text-center text-desaturated-cyan flex flex-row items-center justify-center">
              <span class="font-light text-[22px] relative -top-0.5">|</span>
            </div>
            <div class="flex flex-row items-center justify-center">
              <span class="text-[22px] mr-[6px]">{{ amount }}</span>
              <div
                class="border-magenta border-[1.5px] rounded-full h-[32px] w-[32px] min-w-[32px] flex justify-center items-center bg-white relative mr-[6px]"
                style="box-shadow: rgb(226, 241, 246) 0 1px 25px;">
                <img class="w-[18px] h-[18px] object-contain object-center"
                     :src="item.img"
                     alt=""
                     width="30"
                     height="30">
                <img class="absolute z-[1] left-1/2 top-0 w-[18px] h-[18px] object-contain object-center"
                     src="~/assets/img/icons/susy.svg" alt=""
                     width="30"
                     height="30"
                     style="transform: rotate(-15deg) translate(-56%, -26%)">
              </div>
              <div class="text-[14px]">
                su{{ item.label }}
              </div>
            </div>
          </div>
        </div>

      </div>

      <div v-if="!step3" class="bg-[#F3F9F9] rounded-[8px] py-[20px] mt-[12px] px-4 sm:px-[44px]">

        <div class="bg-[#E7F2F1] px-[46px] py-[8px] rounded-[8px] min-h-field text-center relative leading-none">

          <div
            v-if="step1"
            class="w-[24px] h-[24px] ring-1 ring-inset ring-current text-[#2DC47E] absolute left-[18px] top-1/2 -translate-y-1/2 rounded-full flex items-center justify-center">
            <icon name="mono/check" class="fill-current text-[13px]"/>
          </div>
          <loader v-else class="w-[24px] text-desaturated-cyan absolute left-[18px] top-2.5"/>

          <span class="text-[12px]">Locking RAY transaction is completed</span>

          <a
            v-if="step1" href="https://etherscan.io/tx/0xe6e0c33b32d451adf58bd0d43606d9b3623b7af82b5372d86282920073bb2eb9" target="_blank">
            <img class="w-[20px] h-[20px] absolute right-[22px] top-1/2 -translate-y-1/2"
                 src="~/assets/img/icons/blank-link.svg" alt="">
          </a>
        </div>

        <div class="bg-[#E7F2F1] px-[46px] py-[8px] rounded-[8px] min-h-field text-center relative mt-[8px] leading-none">
          <div
            v-if="step2"
            class="w-[24px] h-[24px] ring-1 ring-inset ring-current text-[#2DC47E] absolute left-[18px] top-1/2 -translate-y-1/2 rounded-full flex items-center justify-center">
            <icon name="mono/check" class="fill-current text-[13px]"/>
          </div>
          <loader v-else class="w-[24px] text-desaturated-cyan absolute left-[18px] top-2.5"/>

          <span class="text-[12px]">Minting suRAY transaction is pending</span>

          <a
            v-if="step2" href="https://etherscan.io/tx/0xe6e0c33b32d451adf58bd0d43606d9b3623b7af82b5372d86282920073bb2eb9" target="_blank">
            <img class="w-[20px] h-[20px] absolute right-[22px] top-1/2 -translate-y-1/2"
                 src="~/assets/img/icons/blank-link.svg" alt="">
          </a>
        </div>

      </div>
    </div>
  </modal>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    connected: false,
  }),
  computed: {
    modals() {
      return this.$store.getters['app/modals'];
    },
    modal() {
      return this.modals[this.modals.length - 1];
    },
    amount() {
      return this.modal?.data?.amount;
    },
    item() {
      return this.modal?.data?.item;
    },
    step1() {
      return this.modal?.data?.step1 || false;
    },
    step2() {
      return this.modal?.data?.step2 || false;
    },
    step3() {
      return this.modal?.data?.step3 || false;
    },
  },
  methods: {
    handleConnectWallet() {
      this.modal.data.callbackConnect()
      this.connected = false
    }
  }
})
</script>

