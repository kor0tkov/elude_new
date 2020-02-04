<script>
import Button from "@/components/base/Button";
import SocialIcons from "@/components/SocialIcons";
export default {
  name: "Header",
  components: {SocialIcons, Button},
  methods: {
    onScrollToEvents(selector) {
      const element = document.querySelector(selector);
      const offsetPosition = element.offsetTop;
      window.scrollTo({
        top: offsetPosition,
        left: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<template>
  <div class="header">
    <img src="../assets/img/logo/logo.svg" class="header__logo" />
    <SocialIcons class="header__social-icons" />
    <Button
      text="What else ya got?"
      class="header__button"
      @click="$emit('shuffle')"
    />
  </div>
</template>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (min-width: 769px) {
    padding: 35px 0;
    position: absolute;
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
    display: none;
    @media only screen and (min-width: 880px) {
      display: block;
      width: 235px;
      height: 50px;
      font-size: 16px;
    }

    .second-screen & {
      opacity: 0;
      z-index: -1;
      pointer-events: none;
      transition: .25s;
    }
  }
  &__social-icons {
    @media only screen and (min-width: 880px) {
      /*display: none;*/
      margin-left: auto;
      margin-right: 40px;
    }
  }
}
</style>
