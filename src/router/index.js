import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login.vue";
import Home from "../components/Home.vue";
import Welcome from "../components/Welcome.vue";
import Users from "../components/user/Users.vue";
import Rights from "../components/power/Rights.vue";
import Roles from "../components/power/Roles.vue";
import Cate from "../components/goods/Cate.vue";
import Params from "../components/goods/Params.vue"

Vue.use(VueRouter);

const routes = [
  {    
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/home",
    component: Home,
    redirect: "/welcome",
    children: [
      {
        path: "/welcome",
        component: Welcome
      },
      {
        path: "/users",
        component: Users
      },
      {
        path: "/rights",
        component: Rights
      },
      {
        path: "/roles",
        component: Roles
      },
      {
        path: "/categories",
        component: Cate
      },
      {
        path: "/params",
        component: Params
      },
    ]
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  // 如果地址为login则放行
  if (to.path === "/login") {
    return next();
  }
  // 如果没有token则返回login页面
  const tokenStr = window.sessionStorage.getItem("token");
  if (!tokenStr) {
    return next("/login");
  }
  //如果有token则放行
  next();
});
export default router;
