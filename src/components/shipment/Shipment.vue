<script setup>
// import Input from "../ui/Input.vue";
import ButtonRadio from "../ui/ButtonRadio.vue";

const shipment = [
  {
    id: "gosend",
    name: "GO-SEND",
    price: 15000,
  },
  {
    id: "jne",
    name: "JNE",
    price: 9000,
  },
  {
    id: "personal",
    name: "Personal Courier",
    price: 29000,
  },
];
const payment = [
  {
    id: "ewallet",
    name: "E-Wallet",
  },
  {
    id: "bank",
    name: "Bank Transfer",
  },
  {
    id: "va",
    name: "Virtual Account",
  },
];
</script>

<template>
  <div class="content">
    <div>
      <h1 class="title">Shipment</h1>
      <div class="group_btn">
        <ButtonRadio v-for="item in shipment" :key="item.id">
          <p>{{ item.name }}</p>
          <p>{{ item.price }}</p>
        </ButtonRadio>
      </div>
      <div>
        <h1 class="title">Payment</h1>
        <div class="group_btn">
          <ButtonRadio v-for="item in payment" :key="item.id">
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
