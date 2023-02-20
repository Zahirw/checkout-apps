<script setup>
import { useRoute, useRouter } from "vue-router";
import ArrowLeft from "../icons/ArrowLeft.vue";

const route = useRoute();
const router = useRouter();
const handleBack = () => {
  switch (route.name) {
    case "shipment":
      router.back();
      break;
    case "finish":
      router.push("/");
      setTimeout(() => {
        window.location.reload();
      });
      break;

    default:
      break;
  }
};
const captionBack = () => {
  switch (route.name) {
    case "shipment":
      return "Delivery";
    case "finish":
      return "HomePage";
    default:
      break;
  }
};
</script>

<template>
  <div class="nav" @click="handleBack">
    <ArrowLeft :style="{ width: '1rem' }" />
    <p>Back to {{ captionBack() }}</p>
  </div>
</template>

<style lang="stylus">
.nav
  display: flex
  align-items: center
  p
    margin-left: 10px
</style>
