<template>
  <svg-icon :name="name" :class="customSize?'':'icon-inline'"/>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true
    },
    customSize: {
      type: Boolean,
      default: false
    }
  }
})
</script>
