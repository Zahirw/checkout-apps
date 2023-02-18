<script setup></script>

<template>
  <button :class="`btn ${$props.active}`" @click="$emit('onClick')">
    <slot></slot>
  </button>
</template>

<style lang="stylus" scoped>
.btn
  border: 1px solid #ccc
  width: 100px;
  height: 50px;
  border-radius: 5px
  color: #666
  text-align: center
  font-size: 0.7rem
  background: #fff
.active
  background: #e8fbf1
  border: 1px solid #3dde8e
</style>
