import Vue from "vue";
import VueRouter from "vue-router";
import EventCreate from "../views/EventCreate.vue";
import EventList from "../views/EventList";
import EventShow from "../views/EventShow";
import NProgress from "nprogress";
import store from "../store/index";
import NotFound from "../views/NotFound.vue";
import NetworkIssue from "../views/NetworkIssue.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "event-list",
    component: EventList,
    props: true,
    beforeEnter: (routeTo, routeFrom, next) => {
      const currentPage = parseInt(routeTo.query.page) || 1;
      store
        .dispatch("event/fetchEvents", { page: currentPage })
        .then(() => {
          routeTo.params.page = currentPage;
          next();
        })
        .catch((error) => {
          if (error && error.code == "ECONNABORTED") {
            next({ name: "network-issue" });
          }
        });
    },
  },
  {
    path: "/event/:id",
    name: "event-show",
    component: EventShow,
    props: true,
    beforeEnter: (routeTo, routeFrom, next) => {
      store
        .dispatch("event/fetchEvent", routeTo.params.id)
        .then((event) => {
          routeTo.params.event = event;
          next();
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            next({
              name: "404",
              params: {
                resource: "event",
              },
            });
          } else {
            next({ name: "network-issue" });
          }
        });
    },
  },
  {
    path: "/event/create",
    name: "event-create",
    component: EventCreate,
  },
  {
    path: "/404",
    name: "404",
    component: NotFound,
    props: true,
  },
  {
    path: "/network-issue",
    name: "network-issue",
    component: NetworkIssue,
  },
  {
    path: "*",
    redirect: {
      name: "404",
      params: {
        resource: "page",
      },
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
