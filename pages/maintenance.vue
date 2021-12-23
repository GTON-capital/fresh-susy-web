<template>
  <div class="container">
    <div class="relative mt-[-40px] lg:pt-[200px] mt-[50px] mb-[50px] md:mb-[110px]">
      <div class="font-heading font-bold italic leading-none -mb-4">
        <div class="mt-[-60px] mb-[20px] font-medium text-[28px] md:text-[28px] w-[50%]">
          <div class="leading-[82px] text-magenta font-heading italic text-[28px] md:text-[75px]">SuSy Solana-BSC bridge is suspended</div>
          <br />
          <span class="leading-[52px]"> Due to testing integrations of new networks into SuSy, we have temporarily suspended the Solana-BSC bridge.</span>
        </div>
      </div>

      <picture>
        <source :srcset="require('~/assets/img/landing/mobile-first-rabbit.svg')" media="(max-width: 1023px)" />
        <source :srcset="require('~/assets/img/landing/first-rabbit.svg')" media="(min-width: 1024px)" />

        <img
          class="md:absolute md:top-[40px] md:left-[70%] md:w-[30%] lg:top-0 xl:-top-14 lg:left-[62%] xl:left-[68%] w-full lg:w-[50%] xl:w-[81%] lg:-translate-x-1/2 pointer-events-none"
          width="943"
          height="661"
          src="~/assets/img/landing/mobile-first-rabbit.svg"
          alt=""
        />
      </picture>

      <!-- <div class="font-medium leading-tight text-[28px] sm:text-[55px] mb-4 lg:mb-0">Seamless <br class="hidden md:block" />multichain transfers</div> -->
      <!-- 
      <landing-buy-block
        class="sm:flex sm:justify-center text-center text-[15px] lg:block lg:fixed lg:right-1/2 lg:translate-x-[30rem] xl:translate-x-[36rem] lg:top-[245px] xl:top-[292px]"
      /> -->
    </div>
  </div>
</template>

<script lang="ts">
// @ts-nocheck
import Vue from 'vue'

export default Vue.extend({
  name: 'MaintenancePage',
  layout: 'maintenance',
  data() {
    return {}
  },
  methods: {}
})
</script>
