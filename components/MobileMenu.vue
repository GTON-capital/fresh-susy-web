<template>
  <div class="fixed inset-0 w-full h-full z-40 sm:hidden"
       :class="{
    'hidden': !open,
  }">
    <button type="button"
            class="mobile-menu__backdrop bg-solana2 rotate-180 z-[-1] absolute inset-0 w-full h-full border-none text-white"
            aria-label="Close" @click="toggleMenu"/>

    <nav class="mobile-menu__nav absolute left-0 top-0 bottom-0 h-full bg-white container pt-4">

      <div class="flex justify-between">
        <nuxt-link to="/" class="text-[46px] sm:text-[66px]">
          <img src="~/assets/img/logo.svg" class="w-[1em] h-[1em]" alt="Susy" width="66" height="66">
        </nuxt-link>
        <button type="button" class="mobile-menu__close bg-transparent border-none" @click="toggleMenu">
          <icon name="mono/close" class="text-[18px] fill-current stroke-current"/>
        </button>
      </div>

      <div class="bg-solana2 h-[1px] w-full sm:hidden my-[13px]"></div>


    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    open() {
      // @ts-ignore
      return this.$store.getters["app/menu"].open;
    },
    navigation() {
      // @ts-ignore
      return this.$store.getters["app/menu"].navigation;
    }
  },
  methods: {
    toggleMenu() {
      this.$store.commit('app/TOGGLE_MENU');
    }
  }
})
</script>

<style lang="postcss">
.mobile-menu__nav {
  @apply w-full;
}

.mobile-menu__close {
  @apply hover:text-magenta;
}

@media (min-width: 360px) {
  .mobile-menu__nav {
    @apply w-[300px];
  }

  .mobile-menu__close {
    @apply translate-x-16 text-white;
  }
}

@media (min-width: 430px) {
  .mobile-menu__backdrop {
    @apply opacity-70 bg-black bg-none;
  }
}
</style>
