import { createRouter, createWebHashHistory } from "vue-router";
import { TYPE_USER } from "@/const";
import { auth } from "./middlewares";
import Style from "@/views/StyleView.vue";
import Home from "@/views/HomeView.vue";
// import LayoutAuthenticated from "@/Layouts/LayoutAuthenticated.vue";
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";

const routes = [
  {
    meta: {
      middleware: [(context) => auth(context, TYPE_USER.ADMIN)],
    },
    path: "/",
    name: "LayoutAuthenticated",
    component: LayoutAuthenticated,
  },
  {
    meta: {
      title: "Select style",
    },
    path: "/",
    name: "style",
    component: Style,
  },
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: "Dashboard",
      middleware: [(context) => auth(context, TYPE_USER.ADMIN)],
    },
    path: "/dashboard",
    name: "dashboard",
    component: Home,
  },
  {
    meta: {
      title: "Tables",
      middleware: [(context) => auth(context, TYPE_USER.ADMIN)],
    },
    path: "/tables",
    name: "tables",
    component: () => import("@/views/TablesView.vue"),
  },
  {
    meta: {
      title: "Forms",
      middleware: [(context) => auth(context, TYPE_USER.ADMIN)],
    },
    path: "/forms",
    name: "forms",
    component: () => import("@/views/FormsView.vue"),
  },
  {
    meta: {
      title: "Profile",
      middleware: [(context) => auth(context, TYPE_USER.ADMIN)],
    },
    path: "/profile",
    name: "profile",
    component: () => import("@/views/ProfileView.vue"),
  },
  {
    meta: {
      title: "Ui",
      middleware: [(context) => auth(context, TYPE_USER.ADMIN)],
    },
    path: "/ui",
    name: "ui",
    component: () => import("@/views/UiView.vue"),
  },
  {
    meta: {
      title: "Responsive layout",
      middleware: [(context) => auth(context, TYPE_USER.ADMIN)],
    },
    path: "/responsive",
    name: "responsive",
    component: () => import("@/views/ResponsiveView.vue"),
  },
  {
    meta: {
      title: "Login",
    },
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
    // beforeEnter: (to, from, next) => {
    //   to.meta.loginTo = from.meta.loginTo;
    //   next();
    // },
  },
  {
    meta: {
      title: "Error",
    },
    path: "/error",
    name: "error",
    component: () => import("@/views/ErrorView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});
const middlewarePipeline = (context, middleware, index) => {
  const nextMiddleware = middleware[index];
  if (!nextMiddleware) {
    return context.next;
  }
  return () => {
    const nextPipeline = middlewarePipeline(context, middleware, index + 1);
    nextMiddleware({ ...context, next: nextPipeline });
  };
};
router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next();
  }
  const { middleware } = to.meta;
  const context = { to, from, next };
  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
});

export default router;
