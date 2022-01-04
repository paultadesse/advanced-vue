<template lang="">
  <div>
    <div
      class="text-white p-4"
      :class="notificationType === 'success' ? 'bg-green-600 ' : 'bg-red-600 '"
    >
      <p>{{ notification.message }}</p>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      timeout: null,
    };
  },

  computed: {
    notificationType() {
      return this.notification.type;
    },
  },

  mounted() {
    this.timeout = setTimeout(() => this.remove(this.notification), 5000);
  },

  beforeDestroy() {
    clearTimeout(this.timeout);
  },

  methods: {
    ...mapActions("notification", ["remove"]),
  },
};
</script>
<style lang=""></style>
