<script>
import Background from "@/components/Background";
import Container from "@/components/base/Container";
import Button from "@/components/base/Button";
export default {
  name: "Join",
  components: {Button, Container, Background},
  data() {
    return {
      text: 'Stay tuned for the app launch that will include flight and hotel packages as well as other cities will be added to the flight deals coming soon! ',
    };
  },
};
</script>

<template>
  <div class="join">
    <Background class="join__background" />
    <Container class="join__container">
      <!--<div class="join__img" />-->
      <img src="../../src/assets/img/background/phone-2x.png" class="join__img" />
      <div class="join__content">
        <h2 class="join__title">Join Us</h2>
        <p class="join__text">{{ text }}</p>
        <Button text="I'm In, Let's Go!" class="join__button" />
      </div>
    </Container>
  </div>
</template>

<style lang="scss">
.join {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  &__container {
    height: 100%;
    position: relative;
    z-index: 4;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    @media only screen and (min-width: 769px) {
      padding-top: 90px;
      padding-bottom: 110px;
    }
    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
  &__img {
    @media only screen and (min-width: 769px) {
      height: 100%;
      margin-right: 80px;
      user-select: none;
    }
    @media only screen and (max-width: 768px) {
      width: 100%;
      transform: scale(0.95);
    }
  }
  &__content {
    @media only screen and (min-width: 769px) {
      transform: translateY(-15%);
    }
    @media only screen and (max-width: 768px) {
      order: -1;
      text-align: center;
      margin-bottom: 40px;
    }
  }
  &__title {
    font-size: 60px;
    font-weight: 600;
    letter-spacing: 0.2px;
    line-height: 1.33;
    color: #403e3e;
    margin-bottom: 20px;
  }
  &__text {
    font-size: 16px;
    font-weight: 300;
    line-height: 1.88;
    color: #706163;
    margin-bottom: 40px;
  }
  &__button {
    @media only screen and (min-width: 769px) {
      width: 290px;
      height: 70px;
      font-size: 18px;
    }
    @media only screen and (max-width: 768px) {
      width: 100%;
      height: 50px;
      font-size: 16px;
    }
  }
}
</style>