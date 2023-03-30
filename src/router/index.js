import Vue from "vue";
import VueRouter from "vue-router";
import galleryHome from "../views/galleryHome";
import catDescription from "../views/catDescription";
import aboutViewe from "../views/aboutViewe";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: galleryHome,
  },
  {
    path: "/desc/:id",
    name: "desc",
    component: catDescription,
    props: true,
  },
  {
    path: "/about",
    name: "about",
    component: aboutViewe,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
