<template lang="">
  <div class="flex flex-col">
    <label v-if="lable" class="text-sm text-gray-400">{{ lable }}</label>
    <input :value="value" @input="updateValue" v-bind="$attrs" />
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    lable: {
      type: String,
      default: "",
    },
    value: [String, Number],
  },

  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>
<style lang=""></style>
