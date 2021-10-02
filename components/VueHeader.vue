<template>
  <header class="flex-shrink-0 py-4 xl:py-[40px]">
    <div class="container block sm:flex flex-row items-center">
      <div class="lg:w-[150px]">
        <nuxt-link to="/" class="text-[46px] sm:text-[66px]">
          <img src="~/assets/img/logo.svg" class="w-[1em] h-[1em]" alt="Susy" width="66" height="66">
        </nuxt-link>
      </div>

      <div class="font-heading font-light sm:text-center text-[44px] leading-none flex-grow mx-auto">
        <div class="bg-solana2 h-[1px] w-full sm:hidden my-[13px]"></div>
        <span class="bg-clip-text text-transparent bg-solana2 sm:whitespace-nowrap">
          Solana <br class="sm:hidden">cross-<br class="hidden sm:block md:hidden">chain bridge
        </span>
      </div>

      <div class="hidden sm:flex flex-row justify-end mx-[-14px] lg:w-[150px]">
        <component :is="$route.name === item.route ? 'span' : 'nuxt-link'"
                   v-for="(item, key) in navigation"
                   :key="key"
                   :class="{ 'text-magenta underline hover:no-underline': $route.name !== item.route }"
                   :to="item.route ? ({name: item.route}) : item.href"
                   class="px-[14px] font-heading text-base">
          {{ item.label }}
        </component>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    navigation(){
      return this.$store.getters["app/navigation"];
    }
  }
})
</script>
