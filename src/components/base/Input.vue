<script>
  export default {
    name: "Input",
    props: {
      title: {
        type: String,
        default: '',
      },
      placeholder: {
        type: String,
        default: '',
      },
      value: String
    },
    methods: {
      updateInput(e) {
        this.$emit('input', e.target.value)
      }
    }
  };
</script>

<template>
  <div class="input">
    <span class="input__title">{{ title }}</span>
    <input :placeholder="placeholder" :value="value" v-on:input="updateInput($event)" class="input__item" />
  </div>
</template>

<style lang="scss">
.input {
  &__title {
    display: block;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 0.2px;
    color: #333333;
    opacity: 0.75;
    user-select: none;
  }
  &__item {
    font-family: Montserrat, sans-serif;
    width: 100%;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.2px;
    color: #333333;
    outline: none;
    border: 0;
    border-bottom: 1px solid rgba(51, 51, 51, 0.2);
    padding: 10px 0
  }
}
</style>