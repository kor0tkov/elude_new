<script>
import Container from "@/components/base/Container";
import Button from "@/components/base/Button";
import Modal from "@/components/Modal";
import Copyright from "./base/copyright";
export default {
  name: "Join",
  components: {Copyright, Button, Container, Modal},
  data() {
    return {
      showModal: false,
      text: 'Stay tuned for the app launch that will include flight and hotel packages as well as other cities will be added to the flight deals coming soon! ',
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
    }
  }
};
</script>

<template>
  <div id="join" class="join">
    <Container id="join-container" class="join__container" v-click-outside="closeModal">
      <img src="../../src/assets/img/background/phone-2x.png" class="join__img" />
      <div class="join__content">
        <h2 class="join__title">Join Us</h2>
        <p class="join__text">{{ text }}</p>
        <Button @click="showModal = true" text="I'm In, Let's Go!" class="join__button" />
      </div>
    </Container>
    <transition name="fade">
        <Modal
          v-click-outside="closeModal"
          @close="closeModal"
          title="Join Us"
          v-if="showModal"
          subtitle="Keep up-to-date and be amongst the first to get access our platform."
          class="join__modal"
        />
    </transition>
    <copyright class="join__copyright"/>
  </div>
</template>

<style lang="scss">
.join {
  height: calc(100% + 1px);
  width: 100%;
  overflow: hidden;
  .join-show {
    height: 100%;
    animation-name: join-show;
    animation-duration: 1s;
    animation-delay: .7s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
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
    object-fit: contain;
    max-width: 400px;
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
    @media only screen and (width: 768px) {
      width: 30%;
    }
  }
  &__modal-wrapper {
    position: absolute;
    z-index: 6;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.71);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    cursor: pointer;
  }
  &__modal {
    width: 100%;
    transform: translateY(0);
  }
  .fade-enter-active, .fade-leave-active {
    transition: .25s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateY(-25px);
  }

  &__copyright {
    position: absolute;
    bottom: 40px;
    left: calc(50% - 150px);
    transition: .5s;

    @media (max-width: 768px) {
      display: none;
    }

    .first-screen & {
      opacity: 0;
      z-index: -1;
    }

    .second-screen & {
      opacity: 1;
      z-index: 101;
    }
  }
}
</style>
