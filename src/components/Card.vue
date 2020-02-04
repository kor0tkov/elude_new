<script>
    export default {
        name: "Card",
        props: {
            date: {
                type: String,
                default: '',
            },
            city: {
                type: String,
                default: '',
            },
            cost: {
                type: String,
                default: '',
            },
            link: {
                type: String,
                default: ''
            }
        },
    };
</script>

<template>
	<div class="card">
		<div class="card__inner">
			<div class="card__wrapper">
				<span class="card__date">{{ date }}</span>
				<span class="card__city">{{ city }}</span>
			</div>
			<div class="card__section">
				<span class="card__cost">${{ cost }}</span>
				<div class="card__button"/>
			</div>
			<a :href="link" target="_blank" class="card__link"/>
		</div>
	</div>
</template>

<style lang="scss">
	.card {

		@media only screen and (min-width: 768px) {
			width: calc(25% - 15px);
		}
	}
	.card,
	.card__inner {
		user-select: none;
		outline: none;
		height: auto !important;

		&__inner {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			position: relative;
			border-radius: 4px;
			box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.05);
			background-color: #fff;
			padding: 20px;
			box-sizing: border-box;

			@media only screen and (max-width: 768px) {
				width: 180px;
				flex: 0 0 auto;
			}
		}

		&__date {
			display: block;
			font-size: 14px;
			font-weight: 300;
			letter-spacing: -0.5px;
			opacity: 0.75;
			margin-bottom: 10px;
			max-height: 35px;
			color: #706163;
			overflow: hidden;
		}

		&__city {
			display: block;
			font-size: 22px;
			font-weight: 700;
			color: #706163;
			line-height: 1.25;
			height: 60px;
			overflow: hidden;
			margin-bottom: 10px;

			@media (min-width: 880px) {
				font-size: 28px;
				height: 80px;
			}
		}

		&__section {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		&__cost {
			font-size: 24px;
			font-weight: 800;
			letter-spacing: 0.5px;
			color: #ac4245;
			opacity: 0.9;
			max-width: 85px;
			overflow: hidden;
		}

		&__button {
			width: 40px;
			height: 40px;
			cursor: pointer;
			flex: 0 0 auto;
			background-size: contain;
			background-position: center;
			background-repeat: no-repeat;
			background-image: url('../../src/assets/img/buttons/next.svg');
			transition: 0.15s;

			&:hover {
				background-image: url('../../src/assets/img/buttons/next-hover.svg');
			}
		}

		&__link {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
		}
	}
</style>
