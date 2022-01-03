<template lang="">
  <div class="absolute bottom-10 right-10">
    <NotificationBar
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>
<script>
import NotificationBar from "./NotificationBar.vue";
import { mapState } from "vuex";
export default {
  components: {
    NotificationBar,
  },

  computed: {
    ...mapState("notification", ["notifications"]),
  },
};
</script>
<style lang=""></style>
