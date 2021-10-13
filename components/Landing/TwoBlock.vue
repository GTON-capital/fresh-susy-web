<template>
  <div class="mb-[55px] md:mb-[120px]">

    <div class="mb-[20px] md:mb-[50px] font-medium text-[28px] leading-[34px] md:text-[55px] md:leading-[75px]">
      SuSy is a <span class="text-magenta font-heading italic text-[28px] md:text-[75px]">multichain</span> bridge leveraging the Wormhole protocol
    </div>

    <div class="rounded-xl bg-white pt-[7px] md:pt-[13px] px-[30px] mb-[21px]" style="box-shadow: 0 8px 20px rgba(106, 102, 102, 0.25);">
      <aspect class="max-w-[439px] mx-auto" :aspect="(526 / 439 * 100) + '%'">
        <img class="w-full h-full" src="~/assets/img/landing/1.svg" width="439" height="526" alt="" loading="lazy">
      </aspect>
    </div>

    <div class="text-center text-base md:text-[20px]">
      function wrap_token&lt;T = EVM | nonEVM, R = EVM | nonEVM&gt;(origin: T): R
    </div>

    <landing-buy-block class="sm:flex sm:justify-center text-center text-[15px] lg:hidden mt-8" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>
