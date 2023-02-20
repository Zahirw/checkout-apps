<script setup>
import { computed } from "vue";
import { useCartStore } from "@/stores/cart";
import BackNav from "../navigation/BackNav.vue";

const store = useCartStore();
const { cart } = store;

const generateOrderId = computed(() => {
  const allowedChars = "23456789abcdefghjkmnpqrstuvwxyz";
  let result = "";
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    result += allowedChars.charAt(randomIndex);
  }
  return result.toUpperCase();
});
</script>

<template>
  <div class="finish">
    <h1 class="title">Thank you</h1>
    <h4>Order ID: {{ generateOrderId }}</h4>
    <p>Your order will be delivered today with {{ cart.shipment?.name }}</p>
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
