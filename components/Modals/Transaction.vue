<template>
  <modal name="connect-wallet"
  @close="$store.commit('app/CLOSE_MODAL')">
    <div class="relative h-full w-full bg-white rounded-[18px] min-h-[300px] py-[34px] px-[20px] md:px-[70px] max-w-card">

      <button
        class="absolute z-10 right-0 top-0 sm:right-[10px] sm:top-0 bg-transparent text-desaturated-cyan hover:text-magenta text-[12px] p-4"
        aria-label="Close the modal window"
        @click="$store.commit('app/CLOSE_MODAL')">
        <icon name="mono/close" class="fill-current stroke-current"/>
      </button>

      <div
        class="mb-[20px] sm:mb-[45px] font-heading text-[28px] leading-none text-center font-semibold mt-[8px] sm:mt-0">
        Transaction is processing
      </div>

      <div class="bg-[#F3F9F9] rounded-[8px] ">
123
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
    }
  },
  methods: {
    handleConnectWallet() {
      this.modal.data.callbackConnect()
      this.connected = false
    }
  }
})
</script>

