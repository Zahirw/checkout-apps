<script setup>
import Finish from "../components/finish/Finish.vue";
import Summary from "../components/summary/Summary.vue";
</script>

<template>
  <div class="container">
    <div class="content">
      <Finish />
      <Summary />
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.container
  background: white
  margin-top: 50px
  width: 93%
  margin-bottom: 1rem
  padding 3rem 1.5rem

@media screen and (min-width: 480px)
  .content
    width: 100%
    height: 100%
    display: flex
    align-items: center
</style>
