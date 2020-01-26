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
  @media only screen and (min-width: 1281px) {
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 200px;
  }
  @media only screen and (max-width: 1280px) {
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 20px;
  }
  @media only screen and (max-width: 768px) {
    padding: 0 20px;
  }
}

</style>
