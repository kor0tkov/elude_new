<script>
  export default {
    name: "Input",
    props: {
      placeholder: {
        type: String,
        default: '',
      },
      required: {
        type: Boolean,
        default: false
      },
      id: String,
      value: String,
      type: String
    },
    methods: {
      updateInput(e) {
        this.$emit('input', e.target.value)
      }
    }
  };
</script>

<template>
  <label class="input">
    <input
      :id="id"
      :required="required"
      :value="value"
      @input="updateInput($event)"
      class="input__item"
      :type="type"
    />
    <span class="input__title">{{ placeholder }}</span>
  </label>
</template>

<style lang="scss">
.input {
  position: relative;
  display: block;
  &__title {
    display: block;
    letter-spacing: 0.2px;
    user-select: none;
    position: absolute;
    bottom: 10px;
    left: 0;
    font-size: 18px;
    font-weight: 300;
    color: #333;
    opacity: 0.25;
    transition: 0.25s;

    .input__item:focus + & {
      font-size: 14px;
      bottom: 100%;
      opacity: 1;
    }

    .input__item:valid + & {
      font-size: 14px;
      bottom: 100%;
      opacity: 1;
    }
  }
  &__item {
    font-family: Montserrat, sans-serif;
    width: 100%;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.2px;
    color: #333333;
    outline: none;
    border: none;
    height: 20px;
    padding: 10px 0;
    line-height: 30px;
    border-radius: 0;
    border-bottom: 1px solid rgba(51, 51, 51, 0.2);
    transition: .25s;

    &:focus {
      border-bottom: 1px solid #333;
    }
  }
}
</style>
