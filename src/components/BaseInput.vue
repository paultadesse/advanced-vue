<template lang="">
  <div class="flex flex-col">
    <label v-if="lable" class="text-sm text-gray-400">{{ lable }}</label>
    <input
      :class="inputClass"
      :value="value"
      @input="updateValue"
      v-bind="$attrs"
      v-on="listeners"
    />
  </div>
</template>
<script>
import { formFieldMixin } from "../mixins/formFieldMixin";
export default {
  mixins: [formFieldMixin],
};
</script>
<style lang=""></style>
