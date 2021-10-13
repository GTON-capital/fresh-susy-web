<template>
  <svg-icon :name="name" class="icon"/>
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

<style lang="postcss">
.icon {
  overflow: hidden;
  display: inline-block;
  flex-shrink: 0;
  pointer-events: none;
  width: 1em;
  height: 1em;
  vertical-align: baseline;
}
</style>
