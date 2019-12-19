<script>
import Container from "@/components/base/Container";
import Background from "@/components/Background";
import Header from "@/components/Header";
export default {
  name: "mainScreen",
  components: {Header, Background, Container}
}
</script>

<template>
  <div class="main-screen">
    <Background class="main-screen__background" />
    <Container class="main-screen__container">
      <Header class="main-screen__header" />
      <!-- cards -->
    </Container>
  </div>
</template>

<style lang="scss">
  .main-screen {
    height: 100vh;
    width: 100%;
    &__container {
      position: relative;
      z-index: 5;
    }
  }
</style>
