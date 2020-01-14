<script>
export default {
  name: "SocialIcons",
  props: {
    icon: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
  },
};
</script>

<template>
  <div class="social-icons">
    <a href="http://instagram.com/elude" target="_blank" class="social-icons__item social-icons__item_instagram" />
    <a href="https://www.facebook.com/EIudeToday/" target="_blank" class="social-icons__item social-icons__item_facebook" />
  </div>
</template>

<style lang="scss">
.social-icons {
  &__item {
    display: inline-block;
    transition: 0.2s;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    @media only screen and (min-width: 769px) {
      width: 30px;
      height: 30px;
    }
    @media only screen and (max-width: 768px) {
      width: 20px;
      height: 20px;
    }
    &:not(:last-child) {
      margin-right: 20px;
    }
    &_instagram {
      background-image: url('../../src/assets/img/icons/instagram.svg');
      &:hover {
        background-image: url('../../src/assets/img/icons/instagram-hover.svg');
      }
    }
    &_facebook {
      background-image: url('../../src/assets/img/icons/facebook.svg');
      &:hover {
        background-image: url('../../src/assets/img/icons/facebook-hover.svg');
      }
    }
  }
}
</style>
