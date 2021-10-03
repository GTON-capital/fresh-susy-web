<template>
  <div class="container">

    <div class="relative mt-[-40px] lg:pt-[200px] mb-[110px]">

      <div class="text-[35vw] sm:text-[250px] font-heading italic leading-none -mb-4">
        <span class="bg-clip-text text-transparent bg-solana">SuSy</span>
      </div>
      <picture>
        <source :srcset="require('~/assets/img/landing/mobile-first-rabbit.svg')"
                media="(max-width: 1023px)">
        <source :srcset="require('~/assets/img/landing/first-rabbit.svg')"
                media="(min-width: 1024px)">
        <img class="md:absolute md:top-[40px] md:left-[70%] md:w-[30%] lg:top-0 lg:left-[52%] xl:left-[58%] w-full lg:w-[50%] xl:w-[81%] lg:-translate-x-1/2 pointer-events-none" width="943" height="661" src="~/assets/img/landing/mobile-first-rabbit.svg" alt="">
      </picture>

      <div class="font-medium leading-tight text-[28px] sm:text-[55px] mb-4 lg:mb-0">
        Seamless <br class="hidden md:block">multichain transfers
      </div>
      <div class="sm:flex sm:justify-center lg:block lg:absolute lg:right-0 lg:top-[188px] xl:top-[140px] text-center text-[15px]">
        <div class="sm:px-4 lg:px-0 mb-[20px] sm:mb-0 lg:mb-[36px]">
          <div class="mb-[10px]">
            <div class="btn btn-square pointer-events-none ring-1 ring-inset ring-[#EAF1F3] bg-white rounded-full mr-1"
                 style="box-shadow: 0 1px 25px #E2F1F6;">
              <img class="w-[24px] h-[24px] relative -top-0.5 object-contain object-center inline" src="~/assets/img/icons/sol.svg" alt="">
            </div>
            Solana
            <icon name="mono/exchange" />
            EVM chains bridge
          </div>
          <a href="/" class="btn btn-landing w-full sm:w-[232px] rounded-full">
            Try
          </a>
        </div>
        <div class="sm:px-4 lg:px-0">
          <div class="mb-[10px]">
            <div class="btn btn-square pointer-events-none ring-1 ring-inset ring-[#EAF1F3] bg-white rounded-full mr-1"
                 style="box-shadow: 0 1px 25px #E2F1F6;">
              <img class="w-[30px] h-[30px] relative -top-0.5 object-contain object-center inline" src="~/assets/img/icons/susy.svg" alt="">
            </div>
            $SuSy waitlist
          </div>
          <a href="/" class="btn btn-landing w-full sm:w-[232px] rounded-full">
            Sign up
          </a>
        </div>
      </div>
    </div>

    <div class="max-w-[821px]">
      <div class="">
        SuSy is a multichain bridge leveraging the Wormhole protocol
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'landing'
})
</script>
