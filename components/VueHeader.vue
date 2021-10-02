<template>
  <header class="flex-shrink-0 py-[40px]">
    <div class="container flex flex-row items-center">
      <div class="w-1/4">
        <nuxt-link to="/" class="text-[66px]">
          <img src="~/assets/img/logo.svg" class="w-[66px] h-[66px]" alt="Susy" width="66" height="66">
        </nuxt-link>
      </div>
      <div class="font-heading font-light text-center text-[44px] w-2/4">
        <span class="bg-clip-text text-transparent bg-solana2">
          Solana cross-chain bridge
        </span>
      </div>
      <div class="flex flex-row justify-end mx-[-14px] w-1/4">
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
