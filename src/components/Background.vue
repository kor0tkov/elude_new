<script>
    export default {
        name: "Background",
    };
</script>

<template>
	<div class="background">
		<div id="plane" class="background__plane plane-show plane-move"></div>
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
				height: 102%;
				max-width: 1440px;
				min-height: 640px;
				left: 48%;
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
		}

		&__clouds {
			position: absolute;
			/*background-size: cover;*/
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
				width: 400vw;
				background-size: 200vw 100vh;
				z-index: 2;
				background-image: url('../../src/assets/img/background/clouds-2.png');
				background-repeat: repeat-x;
				animation-name: move-clouds-left;
				animation-iteration-count: infinite;
				animation-timing-function: linear;
				animation-duration: 20s;

				@media only screen and (min-width: 768px) {
					width: 200vw;
					background-size: 100vw 100vh;
				}

				.second-screen & {
					opacity: 0;
					transition: .25s;
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
				@media only screen and (max-width: 768px) {
					width: 400vw;
					background-size: 200vw $clouds-height;
				}
			}
		}
	}
</style>
