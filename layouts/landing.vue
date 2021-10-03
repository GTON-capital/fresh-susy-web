<template>
  <div class="min-h-screen font-sans bg-body relative flex flex-col text-maastricht-blue">
    <landing-vue-header />
    <mobile-menu is-landing />

    <main class="flex-grow relative z-[1]">
      <nuxt />
    </main>

    <landing-vue-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>
