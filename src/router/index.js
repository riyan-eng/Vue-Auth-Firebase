import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/DashboardView.vue"
import Register from '@/views/RegisterView.vue'
import Login from '@/views/LoginView.vue'

const routes = [
  {
    path: "/",
    component: Dashboard,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
