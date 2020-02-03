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
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
  max-width: 1065px;
  @media only screen and (min-width: 1281px) {

  }
}

</style>
