<template>
  <div class="container">

    <landing-first-block />

    <div class="lg:max-w-[670px] xl:max-w-[821px]">

      <landing-two-block />

      <landing-three-block />

      <landing-fourth-block />

      <landing-fifth-block />

    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'landing'
})
</script>
