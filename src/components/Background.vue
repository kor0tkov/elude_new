<script>
export default {
  name: "Background",
  props: {
		mainScreen: {
			type: Boolean,
			default: false,
		},
		join: {
			type: Boolean,
			default: false,
		},
  },
};
</script>

<template>
	<div class="background">
		<div v-if="mainScreen" class="background__plane background__plane_show background__plane_move"></div>
		<div v-if="mainScreen" class="background__clouds background__clouds_0"></div>
		<div v-if="join" class="background__clouds background__clouds_1"></div>
		<div v-if="mainScreen" class="background__clouds background__clouds_2"></div>
		<div v-if="mainScreen" class="background__clouds background__clouds_3"></div>
	</div>
</template>

<style lang="scss">
.background {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
	overflow: hidden;
  &__plane {
    position: absolute;
    z-index: 3;
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
			right: 0;
			transform: translateX(10px);
		}
		&_show {
			animation-name: plane-show, plane-move;
			animation-duration: 3s, 10s;
			animation-delay: 0s, 4s;
			animation-iteration-count: 1, infinite;
			@keyframes plane-show {
				from {
					transform: translateX(-100%) translateY(100%);
				}
				to {
					background-position: center;
				}
			}
			@keyframes plane-move {
				from {
					background-position: center;
				}
				50% {
					transform: translateY(-4%) translateX(-48%);
				}
				to {
					background-position: center;
				}
			}
		}
  }

  &__clouds {
    position: absolute;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

		&_0 {
			z-index: 1;
			height: 100%;
			width: 100%;
			background-color: #dfe0e3;
		}

    &_1 {
      z-index: 1;
      height: 100%;
      width: 100%;
			//background-size: 100% 33%;
			//background-position: top;
      background-image: url('../../src/assets/img/background/clouds-1.jpg');
    }

    &_2 {
      z-index: 2;
      height: 100%;
      width: 100%;
      background-image: url('../../src/assets/img/background/clouds-2.png');
			animation-name: clouds-2;
			animation-duration: 10s;
			animation-iteration-count: infinite;
			//animation-direction: alternate;
			animation-timing-function: linear;
			@keyframes clouds-2 {
				from {
					background-position: left;
				}
				to {
					background-position: right;
				}
			}
    }

    &_3 {
      z-index: 4;
      height: 70%;
      width: 100%;
      bottom: 0;
      background-position: bottom;
      background-image: url('../../src/assets/img/background/clouds-3.png');
			animation-name: clouds-3;
			animation-duration: 20s;
			animation-iteration-count: infinite;
			//animation-direction: alternate;
			animation-timing-function: linear;
			position: fixed;
			@keyframes clouds-3 {
				from {
					background-position: left;
				}
				to {
					background-position: right;
				}
			}
    }
  }
}
</style>
