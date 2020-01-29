<script>
    import Input from "@/components/base/Input";
    import Button from "@/components/base/Button";
    import {getCityFromConfig} from "../../public/plugins/city";

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
            closeModal() {
                this.isSend = false;
                this.$emit('close');
            },
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
            prepareCityInputValue(cityName) {
                this.inputs.find(({id}) => id === 'city').value = cityName;
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
                await sendMail('php/mail.php', user)
            },
        },
        created() {
            const cityName = getCityFromConfig();
            if (cityName)
                this.prepareCityInputValue(cityName);
        }
    };
</script>

<template>
	<div id="openModal" class="modal">
		<div class="modal-dialog">
			<form @submit="sendForm()" v-if="!isSend" id="form" class="modal-content">
				<div class="modal__title">
					<span>Join Us</span>
					<div title="Close" class="close" @click="closeModal()">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<path fill="#000" fill-rule="nonzero" d="M10.993 12.03l-8.828 8.83c-.244.247-.195.696.05.942a.621.621 0 0 0 .443.185c.16 0 .438.056.56-.067l8.83-8.834 8.76 8.764c.123.123.33.137.491.137.16 0 .32-.061.443-.185.245-.246.364-.765.12-1.012l-8.758-8.76 8.76-8.765c.245-.247.129-.763-.116-1.01-.245-.246-.691-.296-.936-.05l-8.764 8.768-8.833-8.838c-.245-.246-.762-.126-1.007.12-.244.247-.29.693-.046.94l8.83 8.834z"/>
						</svg>
					</div>
				</div>
				<p class="modal__subtitle">
					Keep up-to-date and be amongst the first to get access
					to our platform.
				</p>
				<ModalInput
					v-for="item in inputs"
					:key="item.title"
					:placeholder="item.title"
					:id="item.id"
					:type="item.type"
					required
					v-model="item.value"
					class="modal__input"/>
				<Button
					:disabled="isSend || isValidForm"
					:text="isSend ? 'Ваша заявка успешно отправлена!' : 'Submit'"
					@click="sendForm()"
					class="modal__button"
				/>
			</form>
			<form class="modal-content join" v-else>
				<div class="modal__title">
					<span>Thank You!</span>
					<div title="Close" class="close" @click="closeModal()">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<path fill="#000" fill-rule="nonzero" d="M10.993 12.03l-8.828 8.83c-.244.247-.195.696.05.942a.621.621 0 0 0 .443.185c.16 0 .438.056.56-.067l8.83-8.834 8.76 8.764c.123.123.33.137.491.137.16 0 .32-.061.443-.185.245-.246.364-.765.12-1.012l-8.758-8.76 8.76-8.765c.245-.247.129-.763-.116-1.01-.245-.246-.691-.296-.936-.05l-8.764 8.768-8.833-8.838c-.245-.246-.762-.126-1.007.12-.244.247-.29.693-.046.94l8.83 8.834z"/>
						</svg>
					</div>
				</div>
				<p class="join_text">We will definitely inform you when we start the service.</p>
				<Button
					text="Close"
					@click="closeModal()"
					class="modal__button"
				/>
			</form>
		</div>
		<div class="modal-layout" @click="closeModal()"></div>
	</div>
</template>

<style lang="scss">
	.modal {
		position: relative;
		z-index: 7;
		box-sizing: border-box;
		cursor: default;

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

		&__content {
			padding: 30px 50px 50px;
			box-sizing: border-box;
			min-width: 620px;
		}

		&__title {

			span {
				letter-spacing: 0.2px;
				color: #191919;
				font-size: 60px;
				line-height: 80px;
				margin-bottom: 10px;
				display: flex;
				font-weight: 700;
				font-family: Montserrat, sans-serif;
				justify-content: space-between;
				width: 100%;
			}
		}

		&__subtitle {
			font-size: 16px;
			font-weight: 300;
			line-height: 30px;
			letter-spacing: 0;
			color: #191919;
			margin-bottom: 30px;
			min-height: 50px;

			@media (max-width: 980px) {
				width: 100%;
				margin-bottom: 60px;
				max-width: 100%;
			}
		}

		&__inputs {
			background-color: #ffffff;
			margin-bottom: 75px;
		}

		&__input {
			background-color: #ffffff;
			margin-bottom: 40px;
		}

		&__button {
			width: 100%;
			font-size: 18px;
			margin-top: auto;
			margin-bottom: 0;
			padding: 20px;
			height: 70px;
		}
	}

	/* свойства модального окна по умолчанию */
	.modal {
		position: fixed; /* фиксированное положение */
		top: 0;
		right: 0;
		bottom: 0;
		left: 0; /* цвет фона */
		z-index: 103;
		max-width: 100%;
		overflow-y: hidden;

		&-layout {
			position: absolute;
			z-index: 102;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background: rgba(0, 0, 0, 0.5);
		}
	}

	/* ширина модального окна и его отступы от экрана */
	.modal-dialog {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 104;
		margin: auto;
		display: flex;
		flex-direction: column;
		background-color: #fff;
		padding: 30px 50px 50px;
		box-sizing: border-box;
		min-width: 620px;

		@media (max-width: 620px) {
			transform: translate(0);
			background-color: #fff;
			margin: 0;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			box-sizing: border-box;
			min-width: auto;
			height: 100%;
			border: none;
			padding: 60px 20px 30px;
		}
	}

	/* свойства для блока, содержащего контент модального окна */
	.modal-content {
		display: flex;
		flex-direction: column;
		background-color: #fff;
		box-sizing: border-box;
		min-height: 360px;
		max-width: 100%;
		height: 100%;
	}

	/* свойства для заголовка модального окна */
	.modal-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 15px;
		border-bottom: 1px solid #eceeef;
	}

	.modal-title {
		margin-top: 0;
		margin-bottom: 0;
		line-height: 1.5;
		font-size: 1.25rem;
		font-weight: 500;
	}

	/* свойства для кнопки "Закрыть" */
	.close {
		position: absolute;
		top: 50px;
		right: 50px;
		opacity: .5;
		width: 24px;
		height: 24px;
		display: flex;
		@media (max-width: 620px) {
			top: 20px;
			right: 20px;
		}
	}

	/* свойства для кнопки "Закрыть" при нахождении её в фокусе или наведении */
	.close:focus, .close:hover {
		color: #000;
		text-decoration: none;
		cursor: pointer;
		opacity: .75;
	}

	/* свойства для блока, содержащего основное содержимое окна */
	.modal-body {
		position: relative;
		flex: 1 1 auto;
		padding: 15px;
		overflow: auto;
	}

</style>
