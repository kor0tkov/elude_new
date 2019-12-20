<script>
import Button from "@/components/base/Button";
import SocialIcons from "@/components/SocialIcons";
export default {
  name: "Header",
  components: {SocialIcons, Button}
}
</script>

<template>
  <div class="header">
    <img src="../assets/img/logo/logo.svg" class="header__logo" />
    <Button text="What else ya got?" class="header__button" />
    <SocialIcons class="header__social-icons" />
  </div>
</template>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (min-width: 769px) {
    padding: 35px 0;
  }
  @media only screen and (max-width: 768px) {
    padding: 20px 0;
  }
  &__logo {
    user-select: none;
    @media only screen and (min-width: 769px) {
      width: 140px;
      height: 36px;
    }
    @media only screen and (max-width: 768px) {
      width: 105px;
      height: 27px;
    }
  }
  &__button {
    @media only screen and (min-width: 769px) {
      width: 235px;
      height: 50px;
      font-size: 16px;
    }
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
  &__social-icons {
    @media only screen and (min-width: 769px) {
      display: none;
    }
  }
}
</style>