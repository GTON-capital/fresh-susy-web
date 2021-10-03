<template>
  <div class="mb-[55px] md:mb-[120px] xl:mb-[160px]">

    <div class="mb-[29px] md:mb-[50px] text-[100px] md:text-[160px] font-heading italic leading-none font-bold">
      <span class="bg-clip-text text-transparent bg-solana">SuSy features</span>
    </div>

    <div>
      <div class="font-medium text-[28px] leading-[38px] md:text-[55px] md:leading-[75px]">
        <span class="hidden md:inline">1. </span>Bridging done in&nbsp;<span
        class="font-heading italic text-[38px] md:text-[75px] text-magenta font-medium">1&nbsp;step:</span>
      </div>

      <div class="text-lg md:text-[30px]">
        no need to interact with the destination chain due to automatic redeem
      </div>

      <div class="flex flex-wrap mx-[-23px] mb-[55px] md:mb-[80px] pt-[20px] sm:pt-[40px]">
        <div class="w-full sm:w-1/2 px-[23px]">
          <aspect class="w-full">
            <img class="w-full" width="421" height="357" src="~/assets/img/landing/2.svg" alt="" loading="lazy">
          </aspect>
        </div>
        <div class="w-full sm:w-1/2 px-[23px]">
          <aspect class="w-full">
            <img class="w-full" width="394" height="363" src="~/assets/img/landing/3.svg" alt="" loading="lazy">
          </aspect>
        </div>
      </div>
    </div>

    <div>
      <div class="font-medium text-[28px] leading-[38px] md:text-[55px] md:leading-[75px]">
        <span class="hidden md:inline">2. </span>Tokens <span
        class="font-heading italic text-[38px] md:text-[75px] text-magenta font-medium">not&nbsp;bound</span> to&nbsp;origin:
      </div>

      <div class="text-lg md:text-[30px]">
        bridging to and from any network
      </div>

      <div class="flex flex-wrap mx-[-20px] mb-[55px] md:mb-[80px] pt-[20px] sm:pt-[40px]">
        <div class="w-full sm:w-1/2 px-[20px]">
          <aspect class="w-full">
            <img class="w-full" width="445" height="439" src="~/assets/img/landing/4.svg" alt="" loading="lazy">
          </aspect>
        </div>
        <div class="w-full sm:w-1/2 px-[20px]">
          <aspect class="w-full">
            <img class="w-full" width="445" height="439" src="~/assets/img/landing/5.svg" alt="" loading="lazy">
          </aspect>
        </div>
      </div>
    </div>

    <div>
      <div class="font-medium text-[28px] leading-[38px] md:text-[55px] md:leading-[75px]">
        <span class="hidden md:inline">3. </span><span
        class="font-heading italic text-[38px] md:text-[75px] text-magenta font-medium">Trustless</span>
        bridging:
      </div>

      <div class="text-lg md:text-[30px]">
        independent network of validators
      </div>

      <div class="mb-[55px] md:mb-[80px] pt-[20px] sm:pt-[40px]">
        <aspect class="w-full max-w-[300px] lg:hidden" :aspect="(528 / 375 * 100) + '%'">
          <img class="w-full" width="375" height="528" src="~/assets/img/landing/6.mobile.svg" alt="" loading="lazy">
        </aspect>
        <aspect class="w-full max-w-[827px] hidden lg:block" :aspect="(534 / 827 * 100) + '%'">
          <img class="w-full" width="827" height="534" src="~/assets/img/landing/6.svg" alt="" loading="lazy">
        </aspect>
      </div>

    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
