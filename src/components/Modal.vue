<script>
    import Input from "@/components/base/Input";
    import Button from "@/components/base/Button";

    export default {
        name: "Modal",
        components: {Button, ModalInput: Input},
        props: {
            title: {
                type: String,
                default: '',
            },
            subtitle: {
                type: String,
                default: '',
            },
        },
        computed: {
            isValidForm() {
                return !!this.inputs.find(({value}) => value === '' || null);
            }
        },
        data() {
            return {
                isSend: false,
                inputs: [
                    {title: 'Your Name', id: 'name', type: 'text', value: ''},
                    {title: 'E-mail', id: 'email', type: 'text', value: ''},
                    {title: 'Home City', id: 'city', type: 'text', value: ''},
                ],
            };
        },
        methods: {
            /**
             * @return {boolean}
             */
            ValidateEmail(mail) {
                if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
                    return true;
                }
                alert("You have entered an invalid email address!");
                const inputEmail = document.getElementById('email');
                inputEmail.focus();
                return false;
            },
            async sendForm() {
                async function sendMail(url, data) {
                    return await new Promise((resolve, reject) => {
                        window.$.post(url, data, function (response, error) {
                            resolve(response);
                            reject(error);
                        }, 'json');
                    })
                }

                // проверка заполненности формы
                const hasEmpty = this.inputs.find(({value}) => value === '' || !value);
                if (hasEmpty) {
                    const emptyInputId = this.inputs.find(({value}) => value === '' || !value).id;
                    alert('Заполните все поля.');
                    document.getElementById(emptyInputId).focus();
                    return;
                }

                // проверка правильности email
                let emailInputValue = this.inputs.find(({id}) => id === 'email').value;
                const emailValidateStatus = this.ValidateEmail(emailInputValue);
                if (emailValidateStatus === false) {
                    return;
                }

                // подготовка данных
                const user = {
                    name: this.inputs[0].value,
                    mail: this.inputs[1].value,
                    city: this.inputs[2].value
                };
                this.isSend = true;
                setTimeout(() => {
                    this.isSend = false;
                    this.$emit('close');
                    this.inputs = this.inputs.map((el) => {
                        el.value = '';
                        return el;
                    });
                }, 2500);
                await sendMail('php/mail.php', user)
            },
        }
    };
</script>

<template>
	<div class="modal">
		<div class="modal__window">
			<h2 class="modal__title">{{ title }}</h2>
			<div @click="$emit('close')" class="modal__close"></div>
			<p class="modal__subtitle">{{ subtitle }}</p>
			<div class="modal__inputs">
				<ModalInput
					v-for="item in inputs"
					:key="item.title"
					:placeholder="item.title"
					:id="item.id"
					:type="item.type"
					required
					v-model="item.value"
					class="modal__input"/>
			</div>
			<Button
				:disabled="isSend || isValidForm"
				:text="isSend ? 'Ваша заявка успешно отправлена!' : 'Submit'"
				@click="sendForm()"
				class="modal__button"
			/>
		</div>
	</div>
</template>

<style lang="scss">
	.modal {
		position: relative;
		z-index: 7;
		box-sizing: border-box;
		background-color: #ffffff;
		cursor: default;

		@media only screen and (min-width: 769px) {
			width: 620px;
			padding: 30px 50px 50px;
		}
		@media only screen and (max-width: 768px) {
			height: 100%;
			width: 100%;
			padding: 30px;
			overflow: scroll;
		}

		&__close {
			position: absolute;
			width: 24px;
			height: 24px;
			transition: 0.2s;
			top: 30px;
			background-size: contain;
			background-position: center;
			background-repeat: no-repeat;
			background-image: url('../../src/assets/img/buttons/close.svg');

			&:hover {
				background-image: url('../../src/assets/img/buttons/close-hover.svg');
			}

			@media only screen and (min-width: 769px) {
				cursor: pointer;
				right: 50px;
			}
			@media only screen and (max-width: 768px) {
				right: 30px;
			}
		}

		&__title {
			font-size: 60px;
			font-weight: 700;
			line-height: 1.33;
			letter-spacing: 0.2px;
			color: #191919;
			margin-bottom: 10px;
		}

		&__subtitle {
			font-size: 16px;
			font-weight: 300;
			line-height: 1.88;
			color: #706163;
			margin-bottom: 30px;
		}

		&__inputs {
			background-color: #ffffff;
			margin-bottom: 75px;
		}

		&__input {
			background-color: #ffffff;
			margin-bottom: 30px;
		}

		&__button {
			width: 100%;
			font-size: 18px;
			@media only screen and (min-width: 769px) {
				height: 70px;
			}
			@media only screen and (max-width: 768px) {
				height: 50px;
			}
		}
	}
</style>
