<script setup></script>

<template>
  <input
    :type="$props.type"
    :placeholder="$props.placeholder"
    @change="$emit('onChange')"
  />
</template>

<style lang="stylus" scoped>
input
  border: 1px solid #ccc
  width 100%
  height: 48px
  padding: 1rem
  font-size: 1rem
  margin-top: 1rem
</style>
