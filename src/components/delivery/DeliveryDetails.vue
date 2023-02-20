<script setup>
import { computed } from "vue";
import { useCartStore } from "@/stores/cart";

// components
import Input from "../ui/Input.vue";
import Textarea from "../ui/Textarea.vue";

const store = useCartStore();

const { cart } = store;

const addressLength = computed(() => {
  return cart.address.length;
});

const handleEmail = (e) => {
  const index = cart.error?.indexOf("isEmailValid");
  cart.email = e.target.value;
  if (cart.email.includes("@")) {
    cart.status.isEmailValid = true;
    cart.error.splice(index, 1);
  } else {
    cart.status.isEmailValid = false;
  }
};

const handlePhone = (e) => {
  const index = cart.error?.indexOf("isPhoneValid");
  e.target.value = e.target.value.replace(/[^0-9]+/g, "");
  cart.phone = e.target.value;
  if (cart.phone[0] == "0" && cart.phone.length > 6 && cart.phone.length < 20) {
    cart.status.isPhoneValid = true;
    cart.error.splice(index, 1);
  } else {
    cart.status.isPhoneValid = false;
  }
};

const handleAddress = (e) => {
  const index = cart.error?.indexOf("isAddressValid");
  cart.address = e.target.value;
  if (cart.address.length > 6) {
    cart.status.isAddressValid = true;
    cart.error.splice(index, 1);
  } else {
    cart.status.isAddressValid = false;
  }
};

const handleDropshipName = (e) => {
  const index = cart.error?.indexOf("isDropshipNameValid");
  cart.dropshipper.name = e.target.value;
  if (cart.dropshipper.name.length > 6) {
    cart.status.isDropshipNameValid = true;
    cart.error.splice(index, 1);
  } else {
    cart.status.isDropshipNameValid = false;
  }
};

const handleDropshipPhone = (e) => {
  const index = cart.error?.indexOf("isDropshipPhoneValid");
  e.target.value = e.target.value.replace(/[^0-9]+/g, "");
  cart.dropshipper.phone = e.target.value;
  if (
    cart.dropshipper.phone[0] == "0" &&
    cart.dropshipper.phone.length > 6 &&
    cart.dropshipper.phone.length < 20
  ) {
    cart.status.isDropshipPhoneValid = true;
    cart.error.splice(index, 1);
  } else {
    cart.status.isDropshipPhoneValid = false;
  }
};
const handleDropship = (e) => {
  cart.isDropship = e.target.checked;
  if (!cart.isDropship) {
    cart.dropshipper.name = "";
    cart.dropshipper.phone = "";
  }
};
</script>

<template>
  <div class="content">
    <div>
      <h1 class="title">Delivery Details</h1>
      <Input
        type="email"
        :class="
          cart.error?.includes('isEmailValid')
            ? 'invalid'
            : cart.status.isEmailValid && 'valid'
        "
        placeholder="Email"
        :value="cart.email"
        @onInput="handleEmail"
      />
      <Input
        type="text"
        :class="
          cart.error?.includes('isPhoneValid')
            ? 'invalid'
            : cart.status.isPhoneValid && 'valid'
        "
        placeholder="Phone Number"
        :value="cart.phone"
        @onInput="handlePhone"
      />
      <Textarea
        type="textarea"
        :class="
          cart.error?.includes('isAddressValid')
            ? 'invalid'
            : cart.status.isAddressValid && 'valid'
        "
        placeholder="Delivery Address"
        :value="cart.address"
        @onInput="handleAddress"
      />
      <div :style="{ textAlign: 'right', fontSize: '0.7rem' }">
        {{ addressLength }}/120 character
      </div>
    </div>
    <div class="dropshipper">
      <input
        type="checkbox"
        id="vehicle1"
        name="vehicle1"
        value="Bike"
        @change="handleDropship"
      />
      <label class="label" for="vehicle1">Send as dropshipper</label><br />
      <Input
        :disabled="!cart.isDropship"
        :class="
          cart.error?.includes('isDropshipNameValid')
            ? 'invalid'
            : cart.status.isDropshipNameValid && 'valid'
        "
        type="text"
        placeholder="Dropshipper Name"
        :value="cart.dropshipper.name"
        @onInput="handleDropshipName"
      />
      <Input
        :disabled="!cart.isDropship"
        :class="
          cart.error?.includes('isDropshipPhoneValid')
            ? 'invalid'
            : cart.status.isDropshipPhoneValid && 'valid'
        "
        type="text"
        :value="cart.dropshipper.phone"
        @onInput="handleDropshipPhone"
        placeholder="Dropshipper Phone Number"
      />
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
