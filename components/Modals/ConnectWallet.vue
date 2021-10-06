<template>
  <modal name="connect-wallet"
  @close="$store.commit('app/CLOSE_MODAL')">
    <div class="relative h-full w-full bg-white rounded-[18px] min-h-[300px] py-[34px] px-[20px] md:px-[70px] max-w-card">

      <button type="button"
              class="absolute left-0 top-0 sm:left-[54px] sm:top-[24px] bg-transparent text-magenta no-underline hover:underline inline-block text-[12px] p-4 font-bold"
      @click="$store.commit('app/CLOSE_MODAL')">
        <icon name="mono/arrow-wide" class="fill-current mr-1 text-[18px] text-maastricht-blue h-[10px] w-[18px]"/>
        Back
      </button>

      <button
        class="absolute z-10 right-0 top-0 sm:right-[10px] sm:top-0 bg-transparent text-desaturated-cyan hover:text-magenta text-[12px] p-4"
        aria-label="Close the modal window"
        @click="$store.commit('app/CLOSE_MODAL')">
        <icon name="mono/close" class="fill-current stroke-current"/>
      </button>

      <div
        class="mb-[20px] sm:mb-[45px] font-heading text-[28px] leading-none text-center font-semibold mt-[8px] sm:mt-0">
        Connect wallet
      </div>

      <div class="sm:relative bg-[#F3F9F9] px-[20px] pt-[22px] pb-[32px] sm:py-[34px] rounded-[8px]">
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
            <template v-if="connected">
              <div
                class="w-full bg-[#E7F2F1] rounded-[8px] flex items-center justify-start px-[13px] py-[4px] text-[14px] h-field">
                <div class="font-semibold text-[13px] text-magenta mr-auto">
                  0x1012E...6AB9
                </div>
                <button class="text-magenta underline text-magenta hover:no-underline inline-block bg-transparent border-none text-[12px]"
                        @click="connected = false">Change</button>
                <button class="btn btn-block rounded-full btn-outline-solana2 ml-[14px] h-[23px] w-[23px] min-w-[23px] leading-[23px] text-desaturated-cyan hover:text-white"
                @click="connected = false">
                  <icon name="mono/logout" class="fill-current stroke-current text-[8px] relative left-[0.5px] top-[-1px]" />
                </button>
              </div>
            </template>
            <template v-else>
              <button type="button" class="btn btn-outline-solana2 btn-block" @click="connected = true">
                Connect
              </button>
            </template>
          </div>
        </div>

        <div v-if="connected" class="mt-[24px] text-center sm:absolute sm:bottom-[-50px] left-0 w-full">
          <button class="btn btn-outline-solana2 btn-block sm:h-auto sm:w-auto sm:inline-block sm:underline hover:no-underline sm:leading-none sm:bg-none sm:hover:text-magenta"
                  @click="handleConnectWallet">
            Continue
          </button>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    connected: true,
  }),
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
      this.modal.data.callbackConnect()
    }
  }
})
</script>

