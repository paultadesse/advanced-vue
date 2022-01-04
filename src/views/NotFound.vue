<template>
  <div class="space-y-10">
    <h1 class="text-7xl font-bold">Opps !</h1>
    <h3 class="text-lg">
      The <span class="font-bold">{{ resource }}</span> you're looking for is
      not here.
    </h3>
    <router-link :to="{ name: 'event-list' }" class="underline text-green-400"
      >Back to the home page</router-link
    >
  </div>
</template>
<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
    },
  },
};
</script>
