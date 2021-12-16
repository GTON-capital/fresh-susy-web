<template>
  <footer class="flex-shrink-0 relative pb-16 pt-8 sm:py-8">
    <div class="container mb-8">
      <hr class="text-line" />
    </div>
    <div class="container flex flex-col sm:flex-row justify-between items-center font-heading whitespace-nowrap text-center sm:text-left">
      <div class="flex flex-col xl:flex-row">
        <div class="mb-2 sm:mb-0 md:px-[31px] lg:pl-0">
          <a href="https://v2.susy.one" class="text-lg text-maastricht-blue underline hover:no-underline underline-thickness-0.5"> Launch APP </a>
        </div>
        <div class="mb-2 sm:mb-0 px-[31px]">
          <a href="https://docs.susy.one/" class="text-lg text-maastricht-blue underline hover:no-underline underline-thickness-0.5"> Docs </a>
        </div>
        <div class="mb-2 sm:mb-0 px-[31px]">
          <a href="/" class="text-lg text-maastricht-blue underline hover:no-underline underline-thickness-0.5"> Privacy Policy </a>
        </div>
      </div>
      <div class="flex flex-wrap mb-[35px] sm:mb-0 px[-14px] order-first sm:order-none mx-[-25px] sm:mx-0">
        <div v-for="(social, socialKey) in socials" :key="socialKey" class="text-2xl px-[25px] sm:px-[17px]">
          <social-link :href="social.href" :icon="social.icon" class="text-desaturated-cyan hover:text-magenta" />
        </div>
      </div>
      <div class="flex flex-col xl:flex-row">
        <div class="mb-2 sm:mb-0 px-[31px]">
          <a href="https://mirror.xyz/susy.eth" target="_blank" class="text-lg text-maastricht-blue underline hover:no-underline underline-thickness-0.5"> Blog </a>
        </div>
        <div class="mb-2 sm:mb-0 px-[31px]">
          <a href="/" class="text-lg text-maastricht-blue underline hover:no-underline underline-thickness-0.5"> Terms of Service </a>
        </div>
        <div class="mb-2 sm:mb-0 md:px-[31px] lg:pr-0">
          <a href="mailto:info@susy.one" class="text-lg text-maastricht-blue underline hover:no-underline underline-thickness-0.5"> info@susy.one </a>
        </div>
      </div>
    </div>
    <div class="container mt-5 text-left">
      <span class="mb-2 sm:mb-0">Capital efficient liquidity bridge from Solana to EVM and non-EVM chains &copy;susy.one{{ new Date().getFullYear() }} </span>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    socials() {
      return this.$store.getters['app/menu'].socials
    }
  }
})
</script>
