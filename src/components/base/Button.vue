<script>
    export default {
        name: "Button",
        props: {
            text: {
                type: String,
                default: '',
            },
        },
    };
</script>

<template>
	<button class="button" v-on:click.prevent="$emit('click')">{{ text }}</button>
</template>

<style lang="scss">
	.button {
		font-weight: 500;
		color: #ffffff;
		background-color: #ac4245;
		border: none;
		border-radius: 8px;
		padding: 10px 40px;
		cursor: pointer;
		outline: none;
		transition: 0.15s;

		&:hover {
			background-color: #c34b4e;
		}
	}
</style>
