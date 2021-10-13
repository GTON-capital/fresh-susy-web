<template>
  <footer class="flex-shrink-0 relative py-4">

    <div class="container flex flex-col sm:flex-row justify-between items-center font-heading">
      <div class="text-[12px] order-4 sm:order-1">
        ©susy.one 2021
      </div>
      <div class="flex order-2 mb-2 sm:mb-0">
        <div v-for="(social, socialKey) in socials" :key="socialKey" class="text-2xl px-5">
          <social-link :href="social.href" :icon="social.icon" class="text-desaturated-cyan hover:text-magenta" />
        </div>
      </div>
      <div class="text-base order-1 sm:order-3 hidden sm:block">
        <div class="relative group cursor-pointer">
          <div class="group-focus-within:block hidden absolute z-20 bottom-full -translate-y-2 left-0 border-[#FF1EA3] border rounded-[8px] bg-[#F5FAFB] py-[3px] min-w-[160px]">
            <a href="/" target="_blank" class="py-[5px] px-[20px] block no-underline text-maastricht-blue hover:text-magenta font-heading">
              Graviton
            </a>
            <a href="/" target="_blank" class="py-[5px] px-[20px] block no-underline text-maastricht-blue hover:text-magenta font-heading">
              Gravity
            </a>
          </div>
          <span tabindex="-1">
            Partners
            <icon name="mono/chevron" class="group-focus-within:rotate-180 fill-current text-[10px] text-desaturated-cyan" />
          </span>
        </div>
      </div>
      <div class="order-3 sm:order-4 mb-2 sm:mb-0">
        <a href="mailto:info@susy.one" class="text-base text-magenta underline hover:no-underline">
          info@susy.one
        </a>
      </div>
    </div>

    <div class="bg-solana2 h-[6px] w-full left-0 bottom-0 absolute"></div>
    <div class="h-[6px] w-full"></div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    socials() {
      return this.$store.getters["app/menu"].socials;
    }
  }
})
</script>
