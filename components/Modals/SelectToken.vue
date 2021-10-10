<template>
  <modal name="select-token" @close="$store.commit('app/CLOSE_MODAL')">
    <div class="relative h-full w-full bg-white rounded-[18px] min-h-[300px] py-[34px] px-[20px] md:px-[70px] max-w-card">
      <button
        class="absolute z-10 right-0 top-0 sm:right-[10px] sm:top-0 bg-transparent text-desaturated-cyan hover:text-magenta text-[12px] p-4"
        aria-label="Close the modal window"
        @click="$store.commit('app/CLOSE_MODAL')"
      >
        <icon name="mono/close" class="fill-current stroke-current" />
      </button>

      <div class="mb-[20px] sm:mb-[45px] font-heading text-[28px] leading-none text-center font-semibold mt-[8px] sm:mt-0">Select a token</div>

      <div class="max-w-[480px] mx-auto">
        <div class="bg-[#F3F9F9] rounded-[8px] px-[20px] py-4 mb-[12px]">
          <div class="text-[13px] font-semibold mb-[10px]">Search name</div>
          <div class="relative">
            <icon name="mono/search" class="fill-current text-magenta absolute top-1/2 -translate-y-1/2 left-4 text-[18px]" />
            <input type="text" class="form-input w-full pl-[44px]" />
          </div>
        </div>
        <div class="pb-4">
          <button
            v-for="(item, key) in items"
            :key="key"
            class="py-[6px] bg-transparent border-none flex items-center justify-start w-full text-left text-[14px] hover:font-bold hover:text-magenta"
            type="button"
            @click="handleSelectToken(item)"
          >
            <span class="bg-white border-[#EAF1F3] border flex justify-center items-center h-[42px] w-[42px] min-w-[42px] mr-2 rounded-full" style="box-shadow: 0 1px 25px #e2f1f6">
              <img class="w-[24px] h-[24px] object-center object-contain" :src="item.img" alt="" />
            </span>
            {{ item.label }}
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
    items: [
      {
        img: require('~/assets/img/icons/ray.svg'),
        label: 'RAY'
      },
      {
        img: require('~/assets/img/icons/step.svg'),
        label: 'STEP'
      }
    ]
  }),
  computed: {
    modals() {
      return this.$store.getters['app/modals']
    },
    modal() {
      return this.modals[this.modals.length - 1]
    }
  },
  methods: {
    handleSelectToken(item) {
      this.modal.data.callbackSelectToken(item)
    }
  }
})
</script>
