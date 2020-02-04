<template>
	<div class="copyright">
		<span>Make with </span>
		<span class="copyright__icon">♥</span>
		<span> in </span>
		<a href="https://pixelscrew.com" target="_blank">PixelScrew</a>
	</div>
</template>

<script>
    export default {
        name: 'copyright',
    }
</script>

<style lang="scss">
	.copyright {
		width: 300px;
		height: 20px;
		text-align: center;
		/*display: flex;*/
		/*align-items: center;*/
		/*justify-content: center;*/

		span, a {
			font-size: 12px;
			font-weight: 400;
			font-stretch: normal;
			font-style: normal;
			letter-spacing: 0.2px;
			text-align: center;
			color: #918b8c;
			line-height: 20px;
		}

		&__icon {
			color: #ac4245 !important;
		}

		a {
			font-weight: 600;
			color: #403e3e !important;
			text-decoration: none;
		}
	}
</style>
