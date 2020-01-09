<script>
import Container from "@/components/base/Container";
import Button from "@/components/base/Button";
import Modal from "@/components/Modal";
export default {
  name: "Join",
  components: {Button, Container, Modal},
  data() {
    return {
      showModal: false,
      text: 'Stay tuned for the app launch that will include flight and hotel packages as well as other cities will be added to the flight deals coming soon! ',
    };
  },
};
</script>

<template>
  <div id="join" class="join">
    <Container id="join-container" class="join__container">
      <img src="../../src/assets/img/background/phone-2x.png" class="join__img" />
      <div class="join__content">
        <h2 class="join__title">Join Us</h2>
        <p class="join__text">{{ text }}</p>
        <Button @click="showModal = true" text="I'm In, Let's Go!" class="join__button" />
      </div>
    </Container>
    <Modal
      v-if="showModal"
      @close="showModal = false"
      title="Join Us"
      subtitle="Keep up-to-date and be amongst the first to get access our platform."
      class="join__modal"
    />
  </div>
</template>

<style lang="scss">
.join {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  .join-show {
    height: 100%;
    animation-name: join-show;
    animation-duration: 3s;
    //animation-delay: 2s;
    animation-timing-function: ease-out;
    opacity: 1;
    @keyframes join-show {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
  &__container {
    position: relative;
    z-index: 4;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    opacity: 0;
    @media only screen and (min-width: 769px) {
      padding-top: 90px;
      padding-bottom: 110px;
    }
    @media only screen and (max-width: 768px) {
      flex-direction: column;
      padding-top: 40px;
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
    font-weight: 700;
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
  &__modal {
  }
}
</style>