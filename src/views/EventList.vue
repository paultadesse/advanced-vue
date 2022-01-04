<template>
  <div>
    <h1 class="text-7xl font-bold">Events For {{ user.user.name }}</h1>

    <EventCard v-for="event in event.events" :key="event.id" :event="event" />

    <template v-if="page != 1">
      <router-link
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
        class="underline text-green-400"
      >
        Prev page</router-link
      >
      <template v-if="hasNextPage"> | </template>
    </template>

    <template v-if="hasNextPage">
      <router-link
        :to="{ name: 'event-list', query: { page: page + 1 } }"
        rel="next"
        class="underline text-green-400"
      >
        Next page</router-link
      >
    </template>
  </div>
</template>

<script>
import EventCard from "../components/EventCard.vue";
import { mapState } from "vuex";
import store from "../store";

export default {
  props: {
    page: {
      type: Number,
      required: true,
    },
  },
  components: {
    EventCard,
  },

  beforeRouteUpdate(routeTo, routeFrom, next) {
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

  computed: {
    hasNextPage() {
      return this.event.eventsTotal > this.page * this.event.perPage;
    },
    ...mapState(["event", "user"]),
  },
};
</script>
