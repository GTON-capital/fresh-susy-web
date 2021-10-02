<template>
  <div class="min-h-screen font-sans bg-body relative flex flex-col text-maastricht-blue">
    <vue-header />

    <main class="flex-grow">
      <nuxt />
    </main>

    <vue-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>
