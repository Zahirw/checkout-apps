<script setup>
import ArrowLeft from "../icons/ArrowLeft.vue";
</script>

<template>
  <div class="nav">
    <ArrowLeft :style="{ width: '1rem' }" />
    <p>Back to</p>
  </div>
</template>

<style lang="stylus">
.nav
  display: flex
  align-items: center
  p
    margin-left: 10px
</style>
