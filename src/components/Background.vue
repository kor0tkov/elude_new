<script>
    export default {
        name: "Background",
    };
</script>

<template>
	<div class="background">
		<div class="background__plane"/>
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
			width: 80%;
			min-height: 640px;
			height: 100%;
			left: 50%;
			transform: translateX(-50%);
			&:before {
				content: 'From LA';
				position: absolute;
				z-index: 3;
				font-size: 166px;
				color: #918b8c;
				letter-spacing: 1px;
			}
		}

		&__clouds {
			position: absolute;
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
				background-image: url('../../src/assets/img/background/clouds-3.png');
			}
		}
	}

</style>
