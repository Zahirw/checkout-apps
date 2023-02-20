<script setup>
import { ref } from "vue";
import { useCartStore } from "@/stores/cart";
import ButtonRadio from "../ui/ButtonRadio.vue";

const store = useCartStore();
const { cart } = store;

const shipment = ref([
  {
    id: "gosend",
    name: "GO-SEND",
    price: 15000,
    value: false,
  },
  {
    id: "jne",
    name: "JNE",
    price: 9000,
    value: false,
  },
  {
    id: "personal",
    name: "Personal Courier",
    price: 29000,
    value: false,
  },
]);
const payment = ref([
  {
    id: "ewallet",
    name: "E-Wallet",
    value: false,
  },
  {
    id: "bank",
    name: "Bank Transfer",
    value: false,
  },
  {
    id: "va",
    name: "Virtual Account",
    value: false,
  },
]);

const handleShipment = (param) => {
  shipment.value = shipment.value.map((item) => {
    if (item.id == param) {
      const data = {
        ...item,
        value: !item.value,
      };
      cart.shipment = data;
      return data;
    } else {
      return { ...item, value: false };
    }
  });
};

const handlePayment = (param) => {
  payment.value = payment.value.map((item) => {
    if (item.id == param) {
      const data = {
        ...item,
        value: !item.value,
      };
      cart.payment = data;
      return data;
    } else {
      return { ...item, value: false };
    }
  });
};
</script>

<template>
  <div class="content">
    <div>
      <h1 class="title">Shipment</h1>
      <div class="group_btn">
        <ButtonRadio
          v-for="item in shipment"
          :key="item.id"
          :class="item.value && 'active'"
          :onClick="() => handleShipment(item.id)"
        >
          <p>{{ item.name }}</p>
          <p>{{ item.price }}</p>
        </ButtonRadio>
      </div>
      <div>
        <h1 class="title">Payment</h1>
        <div class="group_btn">
          <ButtonRadio
            v-for="item in payment"
            :key="item.id"
            :class="item.value && 'active'"
            :onClick="() => handlePayment(item.id)"
          >
            <p>{{ item.name }}</p>
          </ButtonRadio>
        </div>
      </div>
    </div>
    <!-- <div class="dropshipper">
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
      <label class="label" for="vehicle1">Send as dropshipper</label><br />
      <Input type="text" placeholder="Dropshipper Name" />
      <Input type="text" placeholder="Dropshipper Phone Number" />
    </div> -->
  </div>
</template>

<style lang="stylus" scoped>
.content
  width: 100%
  height: 100%

.title
  color: #FF8A00
  font-weight: bold
.group_btn
  display: flex
  justify-content: space-between
  margin-bottom: 1.5rem

@media screen and (min-width: 480px)
  .content
    width: 100%
    height: 100%
    display: flex
</style>
