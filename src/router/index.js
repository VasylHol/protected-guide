import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/pages/HomePage.vue";
import XSSAttackPage from "../views/pages/XSSAttackPage.vue";
import ReflectedStep from "../components/XSSComponents/ReflectedXSS/ReflectedStep.vue";
import StoredStep from "../components/XSSComponents/StoredXSS/StoredStep.vue";
import DOMBasedStep from "../components/XSSComponents/DOMBasedXSS/DOMBasedStep.vue";
import DDosStep from "../components/DDoSComponents/DDoSStep.vue";
import BruteForceStep from "../components/BruteForceComponents/BruteForceStep.vue";
import SQLInjectionsStep from "../components/SQLInjectionsComponents/SQLInjectionsStep.vue";
import LoginPage from "@/views/pages/LoginPage.vue";
import BookInfo from "@/components/BookManager/BookInfo.vue"
import JWTStep from '@/components/JWTComponents/JWTStep.vue'
import OAuthStep from '@/components/OAuthComponents/OAuthStep.vue'
const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/xss-attacks",
    name: "xss-attacks",
    children: [
      { path: "", component: XSSAttackPage },
      { path: "reflected-xss", component: ReflectedStep },
      { path: "stored-xss", component: StoredStep },
      { path: "dom-based-xss", component: DOMBasedStep },
    ],
  },
  {
    path: "/ddos-attacks",
    name: "ddos-attacks",
    component: DDosStep,
  },
  {
    path: "/sql-injections",
    name: "sql-injections",
    component: SQLInjectionsStep,
  },
  {
    path: "/book-manager",
    name: "book-manager",
    component: LoginPage,
  },
  {
    path: "/brute-force-attacks",
    name: "brute-force-attacks",
    component: BruteForceStep,
  },
  {
    path: "/book-info",
    name: "book-info",
    component: BookInfo,
  },
  {
    path: "/jwt-providing",
    name: "jwt-providing",
    component: JWTStep,
  },
  {
    path: "/oauth-providing",
    name: "oauth-providing",
    component: OAuthStep,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
