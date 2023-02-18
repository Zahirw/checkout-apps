<script setup>
import Input from "../ui/Input.vue";
import Textarea from "../ui/Textarea.vue";
</script>

<template>
  <div class="content">
    <div>
      <h1 class="title">Delivery Details</h1>
      <Input type="email" placeholder="Email" />
      <Input type="text" placeholder="Phone Number" />
      <Textarea type="textarea" placeholder="Delivery Address" />
    </div>
    <div class="dropshipper">
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
      <label class="label" for="vehicle1">Send as dropshipper</label><br />
      <Input type="text" placeholder="Dropshipper Name" />
      <Input type="text" placeholder="Dropshipper Phone Number" />
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.content
  width: 100%
  height: 100%

.title
  color: #FF8A00
  font-weight: bold
.dropshipper
  margin-top: 1rem
  label
    margin-left: 0.5rem


@media screen and (min-width: 480px)
  .content
    width: 100%
    height: 100%
    display: flex
</style>
