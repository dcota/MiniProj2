import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Main from "../views/Main.vue";
import MainSponsors from "../views/Main_Sponsors.vue";
import NewSponsor from "../views/New_Sponsor.vue";
import MainExperts from "../views/Main_Experts.vue";
import NewExpert from "../views/New_Expert.vue";
import EditSponsor from "../views/Edit_Sponsor.vue";
import EditExpert from "../views/Edit_Expert.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Main",
    name: "Main",
    component: Main,
  },
  {
    path: "/MainSponsors",
    name: "MainSponsors",
    component: MainSponsors,
  },
  {
    path: "/NewSponsor",
    name: "NewSponsor",
    component: NewSponsor,
  },
  {
    path: "/MainExperts",
    name: "MainExperts",
    component: MainExperts,
  },
  {
    path: "/NewExpert",
    name: "NewExpert",
    component: NewExpert,
  },
  {
    path: "/EditSponsor",
    name: "EditSponsor",
    component: EditSponsor,
  },
  {
    path: "/EditExpert",
    name: "EditExpert",
    component: EditExpert,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
