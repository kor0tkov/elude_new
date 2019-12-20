<script>
import Container from "@/components/base/Container";
import Background from "@/components/Background";
import Header from "@/components/Header";
import Card from "@/components/Card";
import SocialIcons from "@/components/SocialIcons";
import Button from "@/components/base/Button";
export default {
  name: "mainScreen",
  components: {Button, SocialIcons, Card, Header, Background, Container},
  data() {
    return {
      cards: [
        { id: 1, date: '24 Sep - 28 Sep', city: 'Paris', cost: '$569' },
        { id: 2, date: '28 Sep - 2 Oct', city: 'New York', cost: '$129' },
        { id: 3, date: '4 Oct - 12 Oct', city: 'Rome', cost: '$639' },
        { id: 4, date: '21 Sep - 25 Sep', city: 'Rio de Janeiro', cost: '$820' },
      ],
    };
  },
};
</script>

<template>
  <div class="main-screen">
    <Background plane="true" class="main-screen__background" />
    <Container class="main-screen__container">
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
            class="main-screen__card"
          />
        </div>
        <SocialIcons class="main-screen__social-icons"/>
        <Button text="What else ya got?" class="main-screen__button" />
      </div>
      <div class="main-screen__arrow"></div>
    </Container>
  </div>
</template>

<style lang="scss">
.main-screen {
  height: 100vh;
  width: 100%;
  &__container {
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
  }
  &__title {
    position: absolute;
    z-index: 3;
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
      top: 10vh;
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
