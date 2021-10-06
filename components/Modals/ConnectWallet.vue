<template>
  <modal name="connect-wallet" box-class="max-w-card"
  @close="$store.commit('app/CLOSE_MODAL')">
    <div class="relative h-full w-full bg-white rounded-[18px] min-h-[284px] py-[34px] px-[20px] md:px-[70px]">

      <button type="button"
              class="absolute left-0 top-0 sm:left-[54px] sm:top-[24px] bg-transparent text-magenta no-underline hover:underline inline-block text-[12px] p-4 font-bold"
      @click="$store.commit('app/CLOSE_MODAL')">
        <icon name="mono/arrow-wide" class="fill-current mr-1 text-[18px] text-maastricht-blue h-[10px] w-[18px]"/>
        Back
      </button>

      <button
        class="absolute z-10 right-[24px] top-[24px] sm:right-[34px] sm:top-[24px] bg-transparent text-desaturated-cyan hover:text-magenta text-[12px] p-4"
        aria-label="Close the modal window"
        @click="$store.commit('app/CLOSE_MODAL')">
        <icon name="mono/close" class="fill-current stroke-current"/>
      </button>

      <div
        class="mb-[20px] sm:mb-[45px] font-heading text-[28px] leading-none text-center font-semibold mt-[8px] sm:mt-0">
        Connect wallet
      </div>

      <div class="bg-[#F3F9F9] px-[20px] pt-[22px] pb-[32px] sm:py-[34px] rounded-[8px]">
        <div class="flex flex-wrap mx-[-10px]">
          <div class="w-full sm:w-1/2 px-[10px] mb-4 sm:mb-0">
            <div
              class="w-full bg-[#E7F2F1] rounded-[8px] flex items-center justify-start px-[13px] py-[4px] text-[14px] h-field">
              <img class="w-[20px] h-[20px] object-contain object-center mr-[5px]" src="~/assets/img/icons/phantom.svg"
                   alt="" width="30" height="30">
              Phantom
            </div>
          </div>
          <div class="w-full sm:w-1/2 px-[10px]">
            <button type="button" class="btn btn-outline-solana2 btn-block"
            @click="handleConnectWallet">
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  computed: {
    modals() {
      return this.$store.getters['app/modals'];
    },
    modal() {
      return this.modals[this.modals.length - 1];
    }
  },
  methods: {
    handleConnectWallet() {
      if(this.modal){
        this.modal.data.callbackConnect()
      }
    }
  }
})
</script>

