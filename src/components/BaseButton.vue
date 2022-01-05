<template lang="">
  <div>
    <button
      v-on="$listeners"
      class="block"
      :class="buttonClass"
      v-bind="$attrs"
    >
      <slot />
    </button>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    buttonClass: {
      type: String,
    },
  },
};
</script>
<style lang=""></style>
