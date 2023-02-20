<script setup></script>

<template>
  <button type="submit" class="btn" @click="$emit('onClick')">
    <slot></slot>
  </button>
</template>

<style lang="stylus" scoped>
.btn
  border: unset
  background: #FF8A00
  width: 100%;
  height: 60px;
  border-radius: 5px
  color: #fff
  text-align: center
  font-size: 1rem

@media screen and (min-width: 480px)
  .btn
    font-size 0.8rem
</style>
