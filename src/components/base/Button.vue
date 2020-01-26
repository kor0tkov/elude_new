<script>
    export default {
        name: "Button",
        props: {
            text: {
                type: String,
                default: '',
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
    };
</script>

<template>
	<button class="button" @click.prevent="$emit('click')" :disabled="disabled">{{ text }}</button>
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

		&:disabled {
			cursor: not-allowed;
			opacity: 0.2;
		}

		&:hover {
			background-color: #c34b4e;
		}
	}
</style>
