<template>
  <div class="space-y-4">
    <h1 class="font-bold">Show event {{ event.title }}</h1>
    <div>
      <p>{{ event.date | date }}</p>
    </div>

    <h3>{{ event.title }}</h3>
    <div class="flex justify-center space-x-2">
      <span>Organized By</span>
      <p>{{ event.organizer.name }}</p>
    </div>
    <div>
      <span class="font-bold">Attendees </span
      ><span class="bg-green-700 p-2 text-white font-bold rounded-full">
        {{ event.attendees ? event.attendees.length : 0 }}</span
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
};
</script>
