<script>
  export default {
    name: "Container"
  }
</script>

<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss">
.container {
  @media only screen and (min-width: 769px) {
    padding: 0 200px;
  }
  @media only screen and (max-width: 768px) {
    padding: 0 20px;
  }
}

</style>