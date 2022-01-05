<template>
  <div>
    <h1 class="font-bold text-6xl">Create an Event</h1>
    <div class="flex text-justify justify-center pt-10">
      <form class="space-y-7 pb-10" @submit.prevent="createEvent">
        <div class="flex flex-col">
          <label class="text-sm text-gray-400" for=""> Select a category</label>
          <select name="" id="" v-model="event.category">
            <option value="" v-for="cat in categories" :key="cat">
              {{ cat }}
            </option>
          </select>
        </div>

        <h3 class="text-3xl font-bold">Name & describe your event</h3>
        <BaseInput
          lable="Title"
          type="text"
          placeholder="title"
          v-model="event.title"
        />
        <BaseInput
          lable="Description"
          type="text"
          placeholder="add an event description"
          v-model="event.description"
        />

        <h3 class="text-3xl font-bold">where is your event ?</h3>
        <BaseInput
          lable="Location"
          type="text"
          placeholder="add a location"
          v-model="event.location"
        />

        <h3 class="text-3xl font-bold">when is your event ?</h3>
        <div class="flex flex-col">
          <label class="text-sm text-gray-400" for="">Date</label>
          <datepicker v-model="event.date" placeholder="select a date" />
        </div>

        <div class="flex flex-col">
          <label class="text-sm text-gray-400" for=""> Select a time</label>
          <select name="" id="" v-model="event.time">
            <option value="" v-for="time in times" :key="time">
              {{ time }}
            </option>
          </select>
        </div>

        <input class="block px-4 py-2" type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>
<script>
import Datepicker from "vuejs-datepicker";
import NProgress from "nprogress";

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
      NProgress.start();
      this.$store
        .dispatch("event/createEvent", this.event)
        .then(() => {
          this.$router.push({
            name: "event-show",
            params: { id: this.event.id },
          });
          this.event = this.createFreshEventObject();
        })
        .catch(() => {
          NProgress.done();
        });
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
