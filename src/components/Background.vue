<script>
export default {
  name: "Background",
  props: {
    plane: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
	<div class="background">
    <div v-if="plane" class="background__plane" />
		<div class="background__clouds background__clouds_1"/>
		<div class="background__clouds background__clouds_2"/>
		<div class="background__clouds background__clouds_3"/>
	</div>
</template>

<style lang="scss">
.background {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  &__plane {
    position: absolute;
    z-index: 4;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('../../src/assets/img/background/plane.png');
		@media only screen and (min-width: 769px) {
			width: 80%;
			height: 100%;
			max-width: 1440px;
			min-height: 640px;
			left: 50%;
			transform: translateX(-50%);
		}
		@media only screen and (max-width: 768px) {
			width: 160%;
			min-height: 310px;
			top: 18vh;
			right: -10px;
		}
  }

  &__clouds {
    position: absolute;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    &_1 {
      z-index: 1;
      height: 100%;
      width: 100%;
      background-image: url('../../src/assets/img/background/clouds-1.jpg');
    }

    &_2 {
      z-index: 2;
      height: 100%;
      width: 100%;
      background-image: url('../../src/assets/img/background/clouds-2.png');
    }

    &_3 {
      z-index: 3;
      height: 70%;
      width: 100%;
      bottom: 0;
      background-position: bottom;
      background-image: url('../../src/assets/img/background/clouds-3.png');
    }
  }
}
</style>
