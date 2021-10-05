<template>
  <div class="container">
    <div class="rounded-[18px] border-[#EAF1F3] border bg-white px-[20px] sm:px-[40px] md:px-[70px] py-[18px] sm:pt-[38px] sm:pb-[60px] max-w-[600px] md:max-w-[660px] mx-auto" style="box-shadow: 0 1px 25px #E2F1F6;">
      <div class="mb-[28px] font-semibold text-[28px] leading-none text-center font-heading">
        Transfer
      </div>

      <div class="sm:bg-[#F3F9F9] sm:py-4 sm:px-5 sm:rounded-[8px] mt-[14px] sm:mt-4">
        <div class="sm:flex sm:flex-wrap sm:mx-[-9px]">

          <div class="mb-[5px] sm:mb-0 sm:w-[222px] sm:px-[9px]">
            <div class="mb-[10px] text-[13px]">
              <div class="font-semibold">Origin</div>
            </div>
            <div class="w-full bg-gray-400 h-[42px]"></div>
          </div>

          <div class="mb-[5px] sm:mb-0 sm:flex-initial sm:px-[9px] flex items-end justify-end">
            <div class="ring-[#BDDBDF] ring-inset ring-1 rounded-full w-[28px] h-[28px] sm:w-[42px] sm:h-[42px] flex items-center justify-center">
              <icon name="mono/arrow-fold" class="fill-current text-desaturated-cyan text-[12px] rotate-90 sm:rotate-0" />
            </div>
          </div>

          <div class="sm:flex-1 sm:px-[9px]">
            <div class="mb-[10px] text-[13px]">
              <div class="font-semibold">Destination</div>
            </div>
            <div class="w-full bg-gray-500 h-[42px]"></div>
          </div>

        </div>
      </div>

      <template v-if="connectWallet">

        <div class="mt-[14px] sm:flex sm:flex-wrap sm:mx-[-10px] sm:mt-4">

          <div class="mb-[14px] sm:mb-0 sm:flex-1 sm:px-[10px]">
            <div class="mb-[10px] text-[13px]">
              <div class="font-semibold">From address</div>
            </div>
            <div class="w-full bg-gray-500 h-[42px]"></div>
          </div>

          <div class="sm:flex-1 sm:px-[10px]">
            <div class="mb-[10px] text-[13px]">
              <div class="font-semibold">To address</div>
            </div>
            <div class="w-full bg-gray-500 h-[42px]"></div>
          </div>

        </div>

        <div class="mt-[14px] sm:mt-4">
          <button class="btn btn-outline-solana2 btn-block sm:h-auto sm:w-auto sm:inline-block underline hover:no-underline sm:leading-none sm:bg-none sm:hover:text-magenta" @click="connectWallet = !connectWallet">
            Change wallet
          </button>
        </div>
        <div class="mt-[24px] mb-[34px] bg-[#BDDBDF] h-[1px] w-full hidden sm:block"></div>

      </template>
      <template v-else>

        <button class="btn btn-outline-solana2 btn-block mt-4" @click="connectWallet = !connectWallet">
          Connect wallet
        </button>

      </template>

      <div class="mt-[14px] bg-[#BDDBDF] h-[1px] w-full sm:hidden"></div>

      <div class="sm:bg-[#F3F9F9] sm:py-4 sm:px-5 sm:rounded-[8px] mt-[14px] sm:mt-4">
        <div class="sm:flex sm:flex-wrap sm:mx-[-10px]">

          <div class="mb-[14px] sm:mb-0 sm:w-[222px] sm:px-[10px]">
            <div class="flex items-center mb-[10px] text-[13px]">
              <div class="mr-auto font-semibold opacity-50">Token</div>
              <div class="text-desaturated-cyan">Balance: 0</div>
            </div>
            <div class="w-full bg-gray-400 h-[42px]"></div>
          </div>

          <div class="sm:flex-1 sm:px-[10px]">
            <div class="mb-[10px] text-[13px]">
              <div class="font-semibold opacity-50">Amount</div>
            </div>
            <div class="w-full bg-gray-500 h-[42px]"></div>
          </div>

        </div>
      </div>

      <button class="btn btn-solana2 btn-block mt-[34px]">
        Next
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    connectWallet: true
  })
})
</script>
