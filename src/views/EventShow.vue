<template>
  <div>
    <h1 class="font-bold">Show event {{ event.title }}</h1>
    <div>{{ event }}</div>
    <div>
      <span class="font-bold">Attendees </span
      ><span class="bg-green-700 p-2 text-white font-bold rounded-full">
        {{ event.attendees ? event.attendees.length : 0 }}</span
      >
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: ["id"],

  created() {
    this.fetchEvent(this.id);
  },

  computed: {
    ...mapState({
      event: (state) => state.event.event,
    }),
  },

  methods: {
    ...mapActions("event", ["fetchEvent"]),
  },
};
</script>
