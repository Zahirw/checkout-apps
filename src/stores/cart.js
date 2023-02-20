import { ref } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  const cart = ref({
    name: '',
    phone: '',
    address: '',
    isDropship: false,
    dropshipper: {
      name: '',
      phone: '',
    },
    status: {
      isEmailValid: false,
      isPhoneValid: false,
      isAddressValid: false,
      isDropshipNameValid: false,
      isDropshipPhoneValid: false,
    },

  });
  // const doubleCount = computed(() => count.value * 2);
  // function increment() {
  //   count.value++;
  // }

  return { cart };
});
