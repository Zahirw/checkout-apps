import { createRouter, createWebHistory } from "vue-router";
import DeliveryPage from "../views/DeliveryPage.vue";
import ShipmentPage from '../views/ShipmentPage.vue'
import FinishPage from '../views/FinishPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: DeliveryPage,
    },
    {
      path: "/shipment",
      name: "shipment",
      component: ShipmentPage,
    },
    {
      path: "/finish",
      name: "finish",
      component: FinishPage,
    },
  ],
});

export default router;
