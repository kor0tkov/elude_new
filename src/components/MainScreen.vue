<script>
import Container from "@/components/base/Container";
import Background from "@/components/Background";
export default {
  name: "mainScreen",
  components: {Background, Container}
}
</script>

<template>
  <div class="main-screen">
    <Background class="main-screen__background" />
    <Container class="main-screen__container">
      <!-- header -->
      <!-- cards -->
    </Container>
  </div>
</template>

<style lang="scss">
  .main-screen {
    height: 100vh;
    width: 100%;
  }
</style>
