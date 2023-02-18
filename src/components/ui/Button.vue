<script setup>
import { defineProps } from "vue";

const props = defineProps({
  caption: String,
});
</script>

<template>
  <button>{{ props.caption }}</button>
</template>
