import { ref } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  const cart = ref({
    name: '',
    phone: '',
    address: '',
    dropshipper: {
      name: '',
      phone: '',
    }
  });
  // const doubleCount = computed(() => count.value * 2);
  // function increment() {
  //   count.value++;
  // }

  return { cart };
});
