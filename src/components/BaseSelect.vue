<template lang="">
  <div class="flex flex-col">
    <label v-if="lable" class="text-sm text-gray-400">{{ lable }}</label>
    <select
      :class="inputClass"
      :value="value"
      @input="updateValue"
      v-bind="$attrs"
      v-on="listeners"
    >
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
import { formFieldMixin } from "../mixins/formFieldMixin";
export default {
  mixins: [formFieldMixin],
  inheritAttrs: false,
  props: {
    options: {
      type: Array,
      require: true,
    },
  },
};
</script>
<style lang=""></style>
