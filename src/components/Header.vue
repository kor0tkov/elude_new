<script>
  export default {
    name: "Header"
  }
</script>

<template>
  <div class="header">
    <img src="../assets/img/logo/logo.svg" class="header__logo" />
    <button class="header__button">What else ya got?</button>
  </div>
</template>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 0;
  &__logo {
    width: 140px;
    height: 36px;
  }
  &__button {
    font: 16px Montserrat-Medium;
    width: 235px;
    height: 50px;
    color: #ffffff;
    background-color: #ac4245;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    padding: 10px 40px;
  }
}
</style>