<template>
  <div class="mb-[120px]">
    <div class="mb-[20px] sm:mb-[50px] font-medium text-[28px] leading-[34px] sm:text-[55px] sm:leading-[75px]">
      SuSy is a <span class="text-magenta font-heading italic text-[28px] sm:text-[75px]">multichain</span> bridge leveraging the Wormhole protocol
    </div>

    <div class="rounded-xl bg-white pt-[7px] sm:pt-[13px] pb-[20px] sm:pb-[55px] px-[30px] mb-[21px]" style="box-shadow: 0 8px 20px rgba(106, 102, 102, 0.25);">
      <aspect class="max-w-[438px] mx-auto" :aspect="(484 / 438 * 100) + '%'">
        <img class="w-full h-full" src="~/assets/img/landing/1.svg" width="438" height="484" alt="">
      </aspect>
    </div>

    <div class="text-center text-base sm:text-[20px]">
      function wrap_token&lt;T = EVM | nonEVM, R = EVM | nonEVM&gt;(origin: T): R
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>
