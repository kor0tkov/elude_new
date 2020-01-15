<script>
    export default {
        name: "Background",
    };
</script>

<template>
	<div class="background">
		<div id="plane" class="background__plane background__plane_show background__plane_move"></div>
		<div class="background__clouds background__clouds_0"></div>
		<div id="clouds_1" class="background__clouds background__clouds_1"></div>
		<div id="clouds_0" class="background__clouds background__clouds_2"></div>
		<div class="background__clouds background__clouds_3"></div>
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

		.plane-hide {
			animation-name: plane-hide;
			animation-duration: 1.5s;
			animation-delay: 0s;
			opacity: 0;
			@keyframes plane-hide {
				from {
					opacity: 1;
				}
				to {
					transform: translateX(100%) translateY(-100%);
				}
			}
		}

		&__plane {
			position: absolute;
			z-index: 3;
			pointer-events: none;
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
			@media only screen and (width: 768px) {
				width: 80%;
				height: 50%;
				max-width: 768px;
				min-height: 640px;
				top: 12vh;
				left: 50%;
				transform: translateX(-50%);
			}

			&_show {
				animation-name: plane-show, plane-move;
				animation-duration: 1.5s, 10s;
				animation-delay: 0s, 2s;
				animation-iteration-count: 1, infinite;
				@keyframes plane-show {
					from {
						transform: translateX(-100%) translateY(100%);
					}
					to {
						background-position: center;
					}
				}
				@media only screen and (min-width: 769px) {
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
				@media only screen and (max-width: 768px) {
					@keyframes plane-move {
						from {
							background-position: center;
						}
						50% {
							transform: translateY(4%) translateX(5%);
						}
						to {
							background-position: center;
						}
					}
				}
				@media only screen and (width: 768px) {
					@keyframes plane-move {
						from {
							background-position: center;
						}
						50% {
							transform: translateY(15%) translateX(-55%);
						}
						to {
							background-position: center;
						}
					}
				}
			}
		}

		.clouds-show {
			animation-name: clouds-show;
			animation-duration: 1.5s;
			animation-iteration-count: 1;
			opacity: 1;
			@keyframes clouds-show {
				from {
					transform: translateY(-100%);
				}
				to {
					opacity: 1;
				}
			}
		}

		.clouds-hide {
			animation-name: clouds-hide;
			animation-duration: 1.5s;
			animation-iteration-count: 1;
			opacity: 0;
			@keyframes clouds-hide {
				from {
					opacity: 1;
				}
				to {
					transform: translateY(-100%);
				}
			}
		}

		.clouds-transform-up {
			background-size: 100% 60%;
			animation-name: clouds-transform-up;
			animation-duration: 1s;
			@keyframes clouds-transform-up {
				from {
					background-size: 100% 100%;
				}
				to {
					background-size: 100% 60%;
				}
			}
		}

		.clouds-transform {
			background-size: 100% 100%;
			animation-name: clouds-transform;
			animation-duration: 1s;
			@keyframes clouds-transform {
				from {
					background-size: 100% 60%;
				}
				to {
					background-size: 100% 100%;
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
				background-size: 100% 60%;
				background-position: bottom;
				background-image: url('../../src/assets/img/background/clouds-1.jpg');
			}

			&_2 {
				height: 100vh;
				z-index: 2;
				background-image: url('../../src/assets/img/background/clouds-2.png');
				background-repeat: repeat-x;
				animation-name: clouds-2;
				animation-iteration-count: infinite;
				animation-timing-function: linear;
				@media only screen and (min-width: 769px) {
					width: 200vw;
					background-size: 100vw 100vh;
					animation-duration: 20s;
				}
				@media only screen and (max-width: 768px) {
					width: 400vw;
					background-size: 200vw 100vh;
					animation-duration: 10s;
				}
				@keyframes clouds-2 {
					from {
						background-position: right;
					}
					to {
						background-position: left;
					}
				}
			}

			&_3 {
				$clouds-height: 30vh;
				z-index: 4;
				height: $clouds-height;
				width: 200vw;
				bottom: 0;
				background-image: url('../../src/assets/img/background/clouds-3.png');
				background-position: bottom;
				background-repeat: repeat-x;
				background-size: 100vw $clouds-height;
				animation-name: clouds-3;
				animation-iteration-count: infinite;
				animation-timing-function: linear;
				@media only screen and (min-width: 769px) {
					animation-duration: 20s;
				}
				@media only screen and (max-width: 768px) {
					animation-duration: 50s;
				}
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
