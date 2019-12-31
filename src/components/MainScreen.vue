<script>
import Container from "@/components/base/Container";
import Background from "@/components/Background";
import Header from "@/components/Header";
import Card from "@/components/Card";
import SocialIcons from "@/components/SocialIcons";
import Button from "@/components/base/Button";
export default {
  name: "mainScreen",
  components: {
    Button,
    SocialIcons,
    Card,
    Header,
    Background,
    Container
  },
  data() {
    return {
      cards: [
        { id: 1, date: '24 Sep - 28 Sep', city: 'Paris', cost: '$569' },
        { id: 2, date: '28 Sep - 2 Oct', city: 'New York', cost: '$129' },
        { id: 3, date: '4 Oct - 12 Oct', city: 'Rome', cost: '$639' },
        { id: 4, date: '21 Sep - 25 Sep', city: 'Rio de Janeiro', cost: '$820' },
      ],
      scrollEventFunc: null
    };
  },
  methods: {
    /*onScrollToEvents(selector) {
      const element = document.querySelector(selector);
      const offsetPosition = element.offsetTop;
      window.scrollTo({
        top: offsetPosition,
        left: 0,
        behavior: 'smooth',
      });
    },
    removeFromList(id) {
      this.cards = this.cards.filter(item => item.id !== id);
    },*/
    handleScroll: function(vt, el) {
      // eslint-disable-next-line no-console
      console.log(el.scrollTop, window.scrollY);
      const plane = document.getElementById('plane');
      const join = document.getElementById('join-container');
      const clouds_0 = document.getElementById('clouds_0');
      const clouds_1 = document.getElementById('clouds_1');
      if (window.scrollY >= 1) {
        el.classList.add("if_scroll");
        plane.classList.add("plane-hide");
        join.classList.add("join-show");
        clouds_0.classList.add("clouds-hide");
        clouds_1.classList.add("clouds-transform");
      }
      if (window.scrollY === 0) {
        el.classList.remove("if_scroll");
        plane.classList.remove("plane-hide");
        join.classList.remove("join-show");
        clouds_0.classList.remove("clouds-hide");
        clouds_1.classList.remove("clouds-transform");
      }
      return window.scrollY > 100;
    }
  },
  /*mounted() {
    const html = document.getElementsByTagName('html')[0];
    const container = document.getElementsByClassName('main-screen__container')[0];
    //document.body.style.overflow = "hidden";
    this.scrollEventFunc = () => {
      if (html.scrollTop > 0) {
        document.removeEventListener('scroll', this.scrollEventFunc);
        container.classList.add("main-screen__container_active");
        this.onScrollToEvents('#join');
      } else {
        container.classList.remove("main-screen__container_active")
      }
    };
    document.addEventListener('scroll', this.scrollEventFunc);
  }*/
};
</script>

<template>
  <div class="main-screen">
    <Background class="main-screen__background" />
    <Container v-scroll="handleScroll" class="main-screen__container">
      <Header class="main-screen__header"/>
      <div class="main-screen__title">From LA</div>
      <div class="main-screen__section">
        <div class="main-screen__cards">
          <Card
            v-for="item in cards"
            :key="item.id"
            :date="item.date"
            :city="item.city"
            :cost="item.cost"
            :item="item"
            class="main-screen__card"
          />
        </div>
        <SocialIcons class="main-screen__social-icons"/>
        <Button
          text="What else ya got?"
          class="main-screen__button"
          @click.native.prevent="handleScroll"
        />
      </div>
      <div class="main-screen__arrow" @click.prevent="handleScroll"></div>
    </Container>
  </div>
</template>

<style lang="scss">
.main-screen {
  height: calc(100vh + 1px);
  width: 100%;
  &__container {
    top: 0;
    transition: 0.5s;
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    @media only screen and (min-width: 769px) {
      padding-bottom: 90px;
    }
    @media only screen and (max-width: 768px) {
      padding-bottom: 50px;
    }
  }
  &__header {
    position: relative;
    z-index: 5;
    .if_scroll & {
      opacity: 0;
      transition: .5s;
    }
  }
  &__title {
    position: absolute;
    z-index: 2;
    font-weight: 800;
    opacity: 0.5;
    color: #918b8c;
    letter-spacing: 1px;
    @media only screen and (min-width: 769px) {
      font-size: 11.5vw;
      user-select: none;
      line-height: 166px;
      top: 14vh;
    }
    @media only screen and (max-width: 768px) {
      font-size: 100px;
      line-height: 114px;
      top: 8vh;
    }
    animation-name: title-show;
    animation-duration: 1.5s;
    animation-iteration-count: 1;
    animation-direction: alternate;
    animation-timing-function: ease;
    @keyframes title-show {
      from {
        opacity: 0;
        left: -100%;
      }
      to {
        opacity: 0.5;
        left: 200px;
      }
    }
    .if_scroll & {
      opacity: 0;
      transform: translateX(-100%);
      transition: .7s;
    }
  }
  &__section {
    position: relative;
    z-index: 5;
    @media only screen and (min-width: 769px) {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    @media only screen and (max-width: 768px) {
    }
    .if_scroll & {
      opacity: 0;
      transition: .7s;
    }
  }
  &__cards {
    display: flex;
    @media only screen and (min-width: 769px) {
    }
    @media only screen and (max-width: 768px) {
      overflow: scroll;
      margin-right: -20px;
    }
  }
  &__card {
    @media only screen and (min-width: 769px) {
      margin-top: 20px;
      margin-right: 20px;
    }
    @media only screen and (max-width: 768px) {
      margin-right: 10px;
    }
    //animation-name: card-show;
    animation-duration: 0.5s;
    //animation-direction: alternate;
    animation-timing-function: linear;
    @keyframes card-show {
      from {
        opacity: 0;
        transform: translateY(-100%);
      }
      to {
        opacity: 1;
      }
    }
    &:nth-child(2) {
      animation-delay: 0.5s;
    }
    &:nth-child(3) {
      animation-delay: 1s;
    }
    &:nth-child(4) {
      animation-delay: 1.5s;
    }
  }
  &__social-icons {
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
  &__button {
    @media only screen and (min-width: 769px) {
      display: none;
    }
    @media only screen and (max-width: 768px) {
      position: relative;
      z-index: 4;
      width: 100%;
      height: 50px;
      font-size: 16px;
      margin-top: 20px;
    }
  }
  &__arrow {
    position: absolute;
    z-index: 5;
    width: 18px;
    height: 10px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    transition: 0.15s;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('../../src/assets/img/buttons/arrow.svg');
    @media only screen and (min-width: 769px) {
      bottom: 36px;
    }
    @media only screen and (max-width: 768px) {
      bottom: 20px;
    }
    &:hover {
      background-image: url('../../src/assets/img/buttons/arrow-hover.svg');
    }
  }
}
</style>
