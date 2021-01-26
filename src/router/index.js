import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Help from '../views/Help.vue';
import About from '../views/About.vue';
import Blog from '../views/Blog';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
      path: "/help",
      name: "Help",
      component: Help
  },
  {
      path: '/blog',
      name: 'Help',
      component: Blog
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes // == routes: routes
});

export default router;
