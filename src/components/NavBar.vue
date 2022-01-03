<template lang="">
  <div>
    <div id="nav" class="flex justify-around">
      <router-link to="/">Real World Events</router-link>

      <div>
        <router-link :to="{ name: 'event-list' }">List</router-link> |
        <router-link :to="{ name: 'event-create' }">Create</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
