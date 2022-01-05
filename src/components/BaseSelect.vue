<template lang="">
  <div class="flex flex-col">
    <label v-if="lable" class="text-sm text-gray-400">{{ lable }}</label>
    <select :value="value" @input="updateValue" v-bind="$attrs">
      <option
        v-for="option in options"
        :key="option"
        :value="option"
        :selected="option === value"
      >
        {{ option }}
      </option>
    </select>
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
    options: {
      type: Array,
      require: true,
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
