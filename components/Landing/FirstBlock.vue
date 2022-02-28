<template>
  <div class="sm:flex justify-between items-center relative mt-[-40px] lg:pt-[50px] mb-[50px] md:mb-[110px]">
    <div class="block">
      <div class="text-[35vw] sm:text-[250px] font-heading font-bold italic leading-none mb-11">
        <span class="bg-clip-text text-transparent bg-solana">SuSy</span>
      </div>

      <div class="font-thin leading-tight text-[15px] sm:text-[20px] mb-4 lg:mb-0 w-full">
        Decentralized Oracle Network SuSy is a versatile <br />
        technological environment providing data feeds, <br />
        oracles and other infrastructure for simple <br />
        and effortless DeFi-building.
      </div>
      <br />
      <div class="font-thin leading-tight text-[15px] sm:text-[20px] mb-4 lg:mb-0 w-full">
        Interconnecting and bolstering Solana, Fantom,<br />
        Polygon, BSC, Ergo and Cardano.
      </div>
    </div>
    <div class="block">
      <picture>
        <source :srcset="require('~/assets/img/landing/mobile-first-rabbit.svg')" media="(max-width: 540px)" />
        <source :srcset="require('~/assets/img/landing/first-rabbit.svg')" media="(min-width: 540px)" />

        <img class="pointer-events-none" width="540" height="427" src="~/assets/img/landing/mobile-first-rabbit.svg" alt="" />
      </picture>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
