import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';
import About from "@/views/About.vue";
import Gallery from "@/views/Gallery.vue";
import Voting from "@/views/Voting.vue";
import Breeds from "@/views/Breeds.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/voting",
    name: "Voting",
    component: Voting,
  },
  {
    path: "/breeds",
    name: "Breeds",
    component: Breeds,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
