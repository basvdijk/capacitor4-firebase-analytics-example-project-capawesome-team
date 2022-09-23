import { FirebaseAnalytics } from "@capacitor-firebase/analytics";
import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "/folder/Inbox",
  },
  {
    path: "/folder/:id",
    component: () => import("../views/FolderPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  await FirebaseAnalytics.setCurrentScreen({
    screenName: to.path as string,
    screenClassOverride: to.path as string,
  });

  return next();
});

export default router;
