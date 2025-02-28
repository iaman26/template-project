import { createWebHistory, createRouter } from "vue-router";
import login from "./views/LoginView.vue";
import DashboardView from "./views/DashboardView.vue";
import HistoryView from "./views/HistoryView.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    name: "login",
    component: login,
    path: "/login",
  },
  {
    name: "dashboard",
    component: DashboardView,
    path: "/dashboard",
  },
  {
    name: "history",
    component: HistoryView,
    path: "/history",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
