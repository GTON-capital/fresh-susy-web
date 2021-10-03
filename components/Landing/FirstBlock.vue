<template>
  <div class="relative mt-[-40px] lg:pt-[200px] mb-[50px] md:mb-[110px]">

    <div class="text-[35vw] sm:text-[250px] font-heading font-bold italic leading-none -mb-4">
      <span class="bg-clip-text text-transparent bg-solana">SuSy</span>
    </div>

    <picture>
      <source :srcset="require('~/assets/img/landing/mobile-first-rabbit.svg')"
              media="(max-width: 1023px)">
      <source :srcset="require('~/assets/img/landing/first-rabbit.svg')"
              media="(min-width: 1024px)">

      <img class="md:absolute md:top-[40px] md:left-[70%] md:w-[30%] lg:top-0 xl:-top-14 lg:left-[52%] xl:left-[58%] w-full lg:w-[50%] xl:w-[81%] lg:-translate-x-1/2 pointer-events-none" width="943" height="661" src="~/assets/img/landing/mobile-first-rabbit.svg" alt="">

    </picture>

    <div class="font-medium leading-tight text-[28px] sm:text-[55px] mb-4 lg:mb-0">
      Seamless <br class="hidden md:block">multichain transfers
    </div>

    <landing-buy-block class="sm:flex sm:justify-center lg:block lg:absolute lg:right-0 lg:top-[188px] xl:top-[140px] text-center text-[15px]" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>
