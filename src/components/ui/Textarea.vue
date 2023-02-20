<script setup></script>

<template>
  <textarea
    :class="$props.class"
    :type="$props.type"
    :placeholder="$props.placeholder"
    maxlength="120"
    @input="$emit('onInput', $event)"
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

textarea:focus
  outline: 1px solid #FF8A00
.invalid
  border: 1px solid #FF8A00
.valid
  outline: 1px solid #1fd97d
.valid:focus
  outline: 1px solid #1fd97d
</style>
