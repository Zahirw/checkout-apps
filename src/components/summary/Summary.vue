<script setup>
import Button from "../ui/Button.vue";
</script>

<template>
  <div class="summary">
    <div class="header">
      <h1 class="title">Summary</h1>
      <p>10 items purchased</p>
      <div class="separator"></div>
    </div>
    <div class="delivery">
      <p>delivery Estimation</p>
      <h3>Today by GO-SEND</h3>
      <div class="separator"></div>
    </div>
    <div class="payment">
      <p>Payment Method</p>
      <h3>Bank Transfer</h3>
    </div>
    <div class="total">
      <div class="total_group1">
        <p>Cost Of goods</p>
        <p>Dropshipping Fee</p>
        <p>GO-SEND shipment</p>
        <h2 class="total_amount">Total</h2>
      </div>
      <div class="total_group2">
        <h4>500.000</h4>
        <h4>5.900</h4>
        <h4>15.000</h4>
        <h2 class="total_amount">505.900</h2>
      </div>
    </div>
    <div class="btn">
      <Button>Pay With e-wallet</Button>
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
