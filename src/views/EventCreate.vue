<template>
  <div>
    <h1 class="font-bold text-6xl">Create an Event</h1>
    <div class="flex text-justify justify-center pt-10">
      <form class="space-y-7 pb-10" @submit.prevent="createEvent">
        <BaseSelect
          lable="Select a category"
          :options="categories"
          v-model="event.category"
          :inputClass="
            $v.event.category.$error ? 'border-2 border-red-600' : ''
          "
          @blur="$v.event.category.$touch()"
        />
        <template v-if="$v.event.category.$error">
          <p class="text-red-600 text-sm" v-if="!$v.event.category.required">
            Category is required.
          </p>
        </template>

        <h3 class="text-3xl font-bold">Name & describe your event</h3>
        <BaseInput
          lable="Title"
          type="text"
          placeholder="title"
          v-model="event.title"
          :inputClass="$v.event.title.$error ? 'border-2 border-red-600' : ''"
          @blur="$v.event.title.$touch()"
        />
        <template v-if="$v.event.title.$error">
          <p class="text-red-600 text-sm" v-if="!$v.event.title.required">
            Title is required.
          </p>
        </template>

        <BaseInput
          lable="Description"
          type="text"
          placeholder="add an event description"
          v-model="event.description"
          :inputClass="
            $v.event.description.$error ? 'border-2 border-red-600' : ''
          "
          @blur="$v.event.description.$touch()"
        />
        <template v-if="$v.event.description.$error">
          <p class="text-red-600 text-sm" v-if="!$v.event.description.required">
            Description is required.
          </p>
        </template>

        <h3 class="text-3xl font-bold">where is your event ?</h3>
        <BaseInput
          lable="Location"
          type="text"
          placeholder="add a location"
          v-model="event.location"
          :inputClass="
            $v.event.location.$error ? 'border-2 border-red-600' : ''
          "
          @blur="$v.event.location.$touch()"
        />
        <template v-if="$v.event.location.$error">
          <p class="text-red-600 text-sm" v-if="!$v.event.location.required">
            Location is required.
          </p>
        </template>

        <h3 class="text-3xl font-bold">when is your event ?</h3>
        <div class="flex flex-col">
          <label class="text-sm text-gray-400" for="">Date</label>
          <datepicker
            v-model="event.date"
            placeholder="select a date"
            :input-class="$v.event.date.$error ? 'border-2 border-red-600' : ''"
            @focusin.native="$v.event.date.$touch()"
          />
        </div>
        <template v-if="$v.event.date.$error">
          <p class="text-red-600 text-sm" v-if="!$v.event.date.required">
            Date is required.
          </p>
        </template>

        <BaseSelect
          lable="Select a time"
          :options="times"
          v-model="event.time"
          :inputClass="$v.event.time.$error ? 'border-2 border-red-600' : ''"
          @blur="$v.event.time.$touch()"
        />
        <template v-if="$v.event.time.$error">
          <p class="text-red-600 text-sm" v-if="!$v.event.time.required">
            Time is required.
          </p>
        </template>

        <BaseButton
          type="submit"
          :disabled="$v.$anyError"
          buttonClass="px-10 py-3 rounded-md text-white font-bold text-sm bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
          >Submit</BaseButton
        >
        <p v-if="$v.$anyError" class="text-red-600 text-sm">
          Please fill out the required field(s).
        </p>
      </form>
    </div>
  </div>
</template>
<script>
import Datepicker from "vuejs-datepicker";
import NProgress from "nprogress";
import { required } from "vuelidate/lib/validators";

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

  validations: {
    event: {
      title: { required },
      date: { required },
      time: { required },
      location: { required },
      description: { required },
      category: { required },
    },
  },

  methods: {
    createEvent() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
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
      }
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
        category: "",
        attendees: [],
      };
    },
  },
};
</script>
