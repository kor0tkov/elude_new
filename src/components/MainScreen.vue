<script>
import Container from "@/components/base/Container";
import Background from "@/components/Background";
import Header from "@/components/Header";
import Card from "@/components/Card";
export default {
  name: "mainScreen",
  components: {Card, Header, Background, Container},
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
    <Background class="main-screen__background" />
    <Container class="main-screen__container">
      <Header class="main-screen__header" />
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
    </Container>
  </div>
</template>

<style lang="scss">
  .main-screen {
    height: 100vh;
    width: 100%;
    &__background {
      &:before {
        content: 'From LA';
        position: absolute;
        z-index: 3;
        font-size: 166px;
        line-height: 130px;
        font-weight: 800;
        opacity: 0.5;
        color: #918b8c;
        letter-spacing: 1px;
        top: 150px;
        left: 200px;
      }
    }
    &__container {
      position: relative;
      z-index: 5;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-sizing: border-box;
      padding-bottom: 90px;
    }
    &__cards {
      display: flex;
    }
    &__card {
      margin-right: 20px;
    }
  }
</style>
