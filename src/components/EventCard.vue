<template lang="">
  <div class="pb-5 pt-5">
    <router-link
      class="flex justify-center pt-5 pb-5 shadow-md max-w-md mx-auto hover:shadow-2xl cursor-pointer"
      :to="{ name: 'event-show', params: { id: event.id } }"
    >
      <div class="text-left space-y-1">
        <span>@{{ event.time }} on {{ event.date }} </span>
        <h4 class="font-bold">{{ event.title }}</h4>

        <BaseIcon name="users">
          <span class="font-bold">{{ event.attendees.length }} attending</span>
        </BaseIcon>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    event: Object,
  },
  data() {
    return {};
  },
};
</script>
<style scoped></style>
