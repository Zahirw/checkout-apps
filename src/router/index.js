import { createRouter, createWebHistory } from "vue-router";
import DeliveryPage from "../views/DeliveryPage.vue";
import ShipmentPage from '../views/ShipmentPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: DeliveryPage,
    }, {
      path: "/shipment",
      name: "shipment",
      component: ShipmentPage,
    },
  ],
});

export default router;
