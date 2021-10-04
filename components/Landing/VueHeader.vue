<template>
  <header class="flex-shrink-0 py-4 xl:py-[36px]">
    <div class="container block sm:flex flex-row items-center">
      <div class="lg:w-[150px] flex sm:block justify-between mr-auto">
        <nuxt-link to="/" class="text-[46px] sm:text-[76px]">
          <img src="~/assets/img/logo.svg" class="w-[1em] h-[1em]" alt="Susy" width="76" height="76">
        </nuxt-link>
        <button type="button" class="bg-transparent border-none text-magenta hover:text-maastricht-blue sm:hidden -my-1"
                :class="{'opacity-0': open}"
                @click="toggleMenu">
          <icon name="mono/menu" class="text-[52px] fill-current stroke-current" />
        </button>
      </div>

      <div class="bg-[#72979C] h-[1px] w-full sm:hidden my-[13px]"></div>

      <div class="hidden sm:flex flex-row justify-end mx-[-25px] lg:w-[150px]">
        <component-link
          v-for="(item, key) in navigation"
          :key="key"
          :route="item.route"
          :href="item.href"
          :class="{ 'underline hover:no-underline': $route.name !== item.route }"
          class="text-maastricht-blue px-[25px] font-heading text-lg whitespace-nowrap">
          {{ item.label }}
        </component-link>
      </div>
      <div class="w-[50px] hidden sm:block"></div>
      <div class="hidden sm:flex flex-row -mx-5">
        <div v-for="(social, socialKey) in socials" :key="socialKey" class="text-xl px-5">
          <social-link :href="social.href" :icon="social.icon" class="text-desaturated-cyan hover:text-magenta" />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import ComponentLink from "~/components/ComponentLink.vue";

export default Vue.extend({
  components: {ComponentLink},
  computed: {
    open() {
      return this.$store.getters["app/menu"].open;
    },
    navigation() {
      return this.$store.getters["app/menu"].landingNavigation;
    },
    socials() {
      return this.$store.getters["app/menu"].socials;
    }
  },
  methods: {
    toggleMenu() {
      this.$store.commit('app/TOGGLE_MENU');
    }
  }
})
</script>
