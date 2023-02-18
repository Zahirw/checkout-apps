<script setup></script>
<template>
  <div class="layout">
    <div class="stepper">
      <div class="stepper_el">
        <div class="icon_el active">1</div>
        <p>Delivery</p>
      </div>
      <p>></p>
      <div class="stepper_el">
        <div class="icon_el">2</div>
        <p>Payment</p>
      </div>
      <p>></p>
      <div class="stepper_el">
        <div class="icon_el">3</div>
        <p>Finish</p>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<style lang="stylus" scoped>
.layout
  display: flex
  flex-direction: column
  align-items: center
.stepper
  display: flex
  justify-content: space-evenly
  border: 1px solid transparent
  border-radius: 20px
  background: #FFFAE6
  width: 85%
  padding: 10px
  position: fixed
  top: 25px
  z-index: 5
  p
    color: #FF8A00
.stepper_el
  display: flex
  align-items: center
.icon_el
  width: 20px
  height: 20px
  color: #FF8A00
  background: #ffe4b8
  border-radius: 50%
  margin-right: 10px
  display: flex
  justify-content: center
  align-items: center
.active
  background: #FF8A00
  color: #fff
</style>
