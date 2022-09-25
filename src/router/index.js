import * as vueRouter from "vue-router";
import Login from "../components/pages/Login.vue";//login
import SignUp from "../components/pages/SignUp.vue";//signup
import Chat from "../components/pages/Chat.vue";//chat

const routes = [
  {
    path: "/",
    component: Chat, // LoginからChatに変更
  },
  {
    path: "/signup",
    component: SignUp,
  },
  {
    path: "/login", 
    component: Login, 
  },
];

const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(),
  routes,
});

export default router;