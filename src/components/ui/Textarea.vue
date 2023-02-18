<script setup></script>

<template>
  <textarea
    :type="$props.type"
    :placeholder="$props.placeholder"
    @change="$emit('onChange')"
  />
</template>

<style lang="stylus" scoped>
textarea
  border: 1px solid #ccc
  width 100%
  height: 96px
  padding: 1rem
  font-size: 1rem
  margin-top: 1rem
</style>
