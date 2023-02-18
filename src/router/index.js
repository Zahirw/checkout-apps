import { createRouter, createWebHistory } from "vue-router";
import DeliveryPage from "../views/DeliveryPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: DeliveryPage,
    },
  ],
});

export default router;
