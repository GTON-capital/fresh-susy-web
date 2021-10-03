<template>
  <div class="mb-[55px] md:mb-[80px] xl:mb-[160px]">
    <div
      class="font-semibold md:font-medium text-[28px] leading-[34px] md:text-[60px] md:leading-[80px] mb-[20px] md:mb-[42px]">
      Tokens are <span class="text-[34px] md:text-[80px] text-magenta italic font-heading">transferred</span> via the
      SuSy bridge in three steps:
    </div>

    <div class="max-w-[826px] rounded-xl bg-white">
      <div v-for="(item, key) in items" :key="key" class="flex min-h-[82px] lg:min-h-[164px]">
        <div
          class="flex items-center font-heading font-bold italic text-[58px] lg:text-[160px] leading-none pl-[18px] pr-[9px] w-[60px] lg:pl-[37px] lg:pr-[15px] lg:w-[153px]">
          <div class="relative -top-2 lg:-top-4 bg-clip-text text-transparent bg-solana">
            {{ item.number }}
          </div>
        </div>
        <div class="relative flex items-center flex-grow text-[18px] lg:text-[30px] pr-[28px] lg:pr-[48px]">
          <div class="lg:pr-[22px] py-[20px]">
            {{ item.text }}
          </div>
          <div v-if="key < (items.length - 1)" class="h-[1px] bg-desaturated-cyan absolute bottom-0 left-0 right-[28px] lg:right-[70px]"></div>
        </div>
      </div>
    </div>

    <landing-buy-block class="sm:hidden mt-8" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    items: [
      {
        number: '1',
        text: 'Locking tokens in the source blockchain',
      },
      {
        number: '2',
        text: 'Verifying lock finality by the validator network',
      },
      {
        number: '3',
        text: 'Transferring tokens into the destination blockchain',
      },
    ]
  })
})
</script>
