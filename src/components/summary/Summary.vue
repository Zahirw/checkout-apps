<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useCartStore } from "@/stores/cart";

// component
import Button from "../ui/Button.vue";

const route = useRoute();
const router = useRouter();
const store = useCartStore();
const { cart } = store;

const handleNextPage = () => {
  switch (route.name) {
    case "home":
      if (cart.isDropship) {
        if (
          cart.status.isEmailValid &&
          cart.status.isPhoneValid &&
          cart.status.isAddressValid &&
          cart.status.isDropshipNameValid &&
          cart.status.isDropshipPhoneValid
        ) {
          router.push("shipment");
        } else {
          cart.error = Object.keys(cart.status).filter(
            (key) => cart.status[key] === false
          );
        }
      } else if (
        cart.status.isEmailValid &&
        cart.status.isPhoneValid &&
        cart.status.isAddressValid
      ) {
        router.push("shipment");
      } else {
        cart.error = Object.keys(cart.status).filter(
          (key) =>
            cart.status[key] === false &&
            !["isDropshipNameValid", "isDropshipPhoneValid"].includes(key)
        );
      }
      break;
    case "shipment":
      router.push("finish");
      break;

    default:
      break;
  }
};
const currency = (param) => {
  return Number(param).toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });
};
const total = computed(() => {
  let sum = 0;
  sum += 500000;
  if (cart.shipment) {
    sum += cart.shipment.price;
  }
  if (cart.isDropship) {
    sum += 5900;
  }
  return currency(sum);
});
</script>

<template>
  <div class="summary">
    <div class="header">
      <h1 class="title">Summary</h1>
      <p>10 items purchased</p>
      <div class="separator"></div>
    </div>
    <div v-if="cart.shipment?.value" class="delivery">
      <p>Delivery Estimation</p>
      <h3>Today by {{ cart.shipment.name }}</h3>
      <div class="separator"></div>
    </div>
    <div v-if="cart.payment?.value" class="payment">
      <p>Payment Method</p>
      <h3>{{ cart.payment.name }}</h3>
    </div>
    <div class="total">
      <div class="total_group1">
        <p>Cost Of goods</p>
        <p v-if="cart.isDropship">Dropshipping Fee</p>
        <p v-if="cart.shipment?.value">{{ cart.shipment?.name }} shipment</p>
        <h2 class="total_amount">Total</h2>
      </div>
      <div class="total_group2">
        <h4>
          {{ currency("500000") }}
        </h4>
        <h4 v-if="cart.isDropship">
          {{
            Number("5900").toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })
          }}
        </h4>
        <h4 v-if="cart.shipment?.value">
          {{
            Number(cart.shipment?.price).toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })
          }}
        </h4>
        <h2 class="total_amount">{{ total }}</h2>
      </div>
    </div>
    <div class="btn">
      <Button @onClick="handleNextPage">Pay With e-wallet</Button>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.summary
  margin-top: 1rem

.title
  color: #FF8A00
  font-weight: bold
.header
.delivery
  margin-top: 1.5rem
  h3
    color: #1bd97b
.payment
  margin-top: 1.5rem
  h3
    color: #1bd97b
.total
  display: grid
  margin-top: 3rem
  .total_group1
    grid-column: 1
  .total_group2
    grid-column: 2
    justify-self: end
    h4
      text-align: right
      font-weight: bold
.total_amount
  color: #FF8A00
  font-weight: bold
  margin-top: 1rem
.separator
  width: 30%
  border: 1px solid
  color: #ccc
  margin-top: 1.5rem
.btn
  text-align: center
  margin-top: 1rem
</style>
