<script setup>
import BackNav from "../navigation/BackNav.vue";
</script>

<template>
  <div class="finish">
    <h1 class="title">Thank you</h1>
    <h4>Order ID: 12ASD</h4>
    <p>Your order will be delivered today with GO-SEND</p>
    <BackNav />
  </div>
</template>

<style lang="stylus" scoped>
.finish
  width: 100%
  height: 100%
  display: flex
  flex-direction: column
  justify-finish: center
  align-items: center
.title
  color: #FF8A00
  font-weight: bold
h4
  font-weight: bold
  margin-top: 1rem
p
  font-size: 0.8rem
  margin-bottom: 2rem
@media screen and (min-width: 480px)
  .finish
    width: 100%
    height: 100%
</style>
