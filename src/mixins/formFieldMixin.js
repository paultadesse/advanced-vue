export const formFieldMixin = {
  inheritAttrs: false,
  props: {
    lable: {
      type: String,
      default: "",
    },
    inputClass: {
      type: String,
      default: "",
    },
    value: [String, Number],
  },

  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue,
      };
    },
  },

  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    },
  },
};
