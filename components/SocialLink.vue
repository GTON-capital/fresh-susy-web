<template>
  <a :href="href" target="_blank" class="inline-block">
    <icon :name="icon" class="fill-current stroke-current sm:fill-inherit" :class="{ 'scale-150': icon === 'mono/medium' }" />
  </a>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    href: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  }
})
</script>
