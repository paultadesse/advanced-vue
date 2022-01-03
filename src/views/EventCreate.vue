<template>
  <div>
    <h1>Create an Event</h1>
    <div>
      <form class="space-y-2" @submit.prevent="createEvent">
        <label for=""> Select a category</label>
        <select name="" id="" v-model="event.category">
          <option value="" v-for="cat in categories" :key="cat">
            {{ cat }}
          </option>
        </select>
        <h3>Name & describe your event</h3>
        <div>
          <label for="">Title</label>
          <input
            type="text"
            v-model="event.title"
            placeholder="add an event title"
          />
        </div>
        <div>
          <label for="">Description</label>
          <input
            type="text"
            v-model="event.description"
            placeholder="add an event description"
          />
        </div>
        <h3>where is your event</h3>
        <div>
          <label for="">Location</label>
          <input
            type="text"
            v-model="event.location"
            placeholder="add a location"
          />
        </div>
        <h3>when is your event</h3>
        <div>
          <label for="">date</label>
          <datepicker v-model="event.date" placeholder="select a date" />
        </div>

        <label for=""> Select a time</label>
        <select name="" id="" v-model="event.time">
          <option value="" v-for="time in times" :key="time">
            {{ time }}
          </option>
        </select>

        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>
<script>
import Datepicker from "vuejs-datepicker";

export default {
  components: {
    Datepicker,
  },

  data() {
    const times = [];

    for (let i = 1; i <= 24; i++) {
      times.push(i + ":00");
    }
    return {
      times,
      categories: this.$store.state.categories,
      event: this.createFreshEventObject(),
    };
  },

  methods: {
    createEvent() {
      this.$store
        .dispatch("event/createEvent", this.event)
        .then(() => {
          this.$router.push({
            name: "event-show",
            params: { id: this.event.id },
          });
          this.event = this.createFreshEventObject();
        })
        .catch(() => {});
    },

    createFreshEventObject() {
      const user = this.$store.state.user.user;
      const id = Math.floor(Math.random() * 10000000);

      return {
        id: id,
        user: user,
        title: "",
        date: "",
        time: "",
        location: "",
        description: "",
        organizer: user,
        caregory: "",
        attendees: [],
      };
    },
  },
};
</script>
