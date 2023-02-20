<script setup></script>

<template>
  <input
    :class="$props.class"
    :type="$props.type"
    :placeholder="$props.placeholder"
    :value="$props.value"
    @input="$emit('onInput', $event)"
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

input:focus
  outline: 1px solid #FF8A00
.invalid
  border: 1px solid #FF8A00
.valid
  outline: 1px solid #1fd97d
.valid:focus
  outline: 1px solid #1fd97d
</style>
