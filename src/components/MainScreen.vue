<script>
	import Container from "@/components/base/Container";
	import Background from "@/components/Background";
	import Header from "@/components/Header";
	import Card from "@/components/Card";
	import SocialIcons from "@/components/SocialIcons";
	import Button from "@/components/base/Button";
	import moment from "moment";

	export default {
		name: "mainScreen",
		components: {
			Button,
			SocialIcons,
			Card,
			Header,
			Background,
			Container,
		},
		props: {
			routes: Array
		},
		data() {
			return {
				isFirstScreen: true,
			};
		},
		computed: {
			cityName() {
				if (this.routes.length && this.routes.length > 0)
					return this.routes[0].LP_city;
				else return null;
			},
			quickRoutes() {
				const parseDate = (date) => moment(new Date(date)).format("D MMM");
				if (this.routes && this.routes.length > 0) {
					const randomArr = this.arrayRandElements(this.routes, 4);
					return randomArr.map(el => {
						return {
							date: `${parseDate(el.outbound_departure_dt)} - ${parseDate(el.inbound_departure_dt)}`,
							price: Number(el.local_price).toFixed(0),
							link: el.Landing_Page_Link,
							city: el.destination_city,
						}
					});
				} else return [];
			}
		},
		methods: {
			arrayRandElements(arr, count) {
				const countArr = Array(count).fill(null).map((u, i) => i);
				let usedIdx = [];
				return countArr.map(() => {
					const randomIdx = () => {
						let rand = Math.floor(Math.random() * (arr.length - 1));
						if (usedIdx.includes(rand)) {
							return randomIdx();
						}
						usedIdx.push(rand);
						return rand
					};
					return arr[randomIdx()]
				});
			},
			shuffleArray(arr) {
				arr.sort(() => Math.random() - 0.5)
			},
			moveBottom() {
				document.getElementsByTagName('html')[0].scrollTop = 1;
			},
			handleScroll: function (vt, el) {
				const app = document.getElementById('app');
				const plane = document.getElementById('plane');
				const title = document.getElementById('title');
				const join = document.getElementById('join-container');
				const clouds_1 = document.getElementById('clouds_1');

				if (window.scrollY === 0) {
					if (el) el.classList.add("cards-show-up");
					if (title) title.classList.add("title-show");
					plane.classList.add("plane-transform");
					clouds_1.classList.add("clouds-transform-up");
					join.classList.add("join-hide");

					if (el) el.classList.remove("cards-hide");
					if (title) title.classList.remove("title-hide");
					app.classList.remove('second-screen');
					join.classList.remove("join-show");
					clouds_1.classList.remove("clouds-transform-down");
					plane.classList.remove("plane-hide");
					this.isFirstScreen = true;
				}
				if (window.scrollY >= 1) {
					if (el) el.classList.add("cards-hide");
					if (title) title.classList.add("title-hide");
					join.classList.add("join-show");
					app.classList.add('second-screen');
					plane.classList.add("plane-hide");
					clouds_1.classList.add("clouds-transform-down");
					this.isFirstScreen = false;

					if (el) el.classList.remove("cards-show-up");
					if (title) title.classList.remove("title-show");
					plane.classList.remove("plane-transform");
					clouds_1.classList.remove("clouds-transform-up");
					join.classList.remove("join-hide");
				}
				return window.scrollY > 100;
			}
		},
	};
</script>

<template>
	<div class="main-screen">
		<Background class="main-screen__background"/>
		<Container class="main-screen__container">
			<Header
				id="header"
				@shuffle="shuffleArray(routes)"
				:class="{ 'opacity-hide': !isFirstScreen }"
				class="main-screen__header"
			/>
			<div id="title" v-if="cityName" class="main-screen__title title-show">From {{cityName}}</div>
			<div class="main-screen__section">
				<div class="main-screen__cards-inner">
					<div v-if="quickRoutes && quickRoutes.length > 0" class="main-screen__cards">
						<Card
							v-for="(route, idx) in quickRoutes"
							:key="idx"
							:date="route.date"
							:city="route.city"
							:cost="route.price"
							:link="route.link"
							v-scroll="handleScroll"
							class="main-screen__card cards-show-up"
						/>
					</div>
				</div>
				<SocialIcons id="social" :class="{ 'opacity-hide': !isFirstScreen }" class="main-screen__social-icons"/>
				<Button
					id="button"
					text="What else ya got?"
					:class="{ 'opacity-hide': !isFirstScreen }"
					class="main-screen__button"
					@click="shuffleArray(routes)"
				/>
			</div>
			<div
				id="arrow"
				:class="{ 'opacity-hide': !isFirstScreen }"
				class="main-screen__arrow"
				@click="moveBottom()"
			></div>
		</Container>
	</div>
</template>

<style lang="scss">
	.main-screen {
		height: calc(100vh + 1px);
		width: 100%;

		&__container {
			top: 0;
			transition: 0.5s;
			position: relative;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			box-sizing: border-box;
			@media only screen and (min-width: 769px) {
				padding-bottom: 90px;
			}
			@media only screen and (max-width: 768px) {
				padding-bottom: 50px;
			}
		}

		&__header {
			position: relative;
			z-index: 5;
			transition: .5s;
		}

		&__title {
			position: absolute;
			z-index: 2;
			font-weight: 800;
			opacity: 0.5;
			color: #918b8c;
			letter-spacing: 1px;
			transition: .5s;
			@media only screen and (min-width: 768px) {
				max-width: 1000px;
				font-size: 11.5vw;
				line-height: 166px;
				top: 14vh;
				transform: translateX(-10px);
			}
			@media only screen and (max-width: 767px) {
				max-width: 360px;
				font-size: 100px;
				line-height: 114px;
				top: 8vh;
			}
		}

		&__section {
			position: relative;
			z-index: 5;
			@media only screen and (min-width: 769px) {
				display: flex;
				justify-content: space-between;
				align-items: flex-end;
				z-index: 11;
			}
		}

		&__cards-inner {
			@media only screen and (min-width: 768px) {
				height: 350px;
				display: flex;
				align-items: flex-end;
				overflow: hidden;
			}
			@media only screen and (max-width: 768px) {
				width: calc(100% + 20px);
				overflow-x: scroll;
				-webkit-overflow-scrolling: touch;
			}
			@media only screen and (width: 768px) {
				height: 350px;
				width: 100%;
				overflow: hidden;
			}
		}

		&__cards {
			display: flex;
			@media only screen and (min-width: 768px) {
				height: 240px;
			}
			@media only screen and (max-width: 769px) {
				height: 220px;
				overflow-x: scroll;
				overflow-y: hidden;
				-webkit-overflow-scrolling: touch;
			}
			@media only screen and (width: 768px) {
				width: 100%;
				justify-content: space-between;
			}
		}

		&__card {
			@media only screen and (min-width: 769px) {
				margin-top: 20px;
				margin-right: 20px;
			}
			@media only screen and (max-width: 768px) {
				margin-right: 10px;
			}
			&:nth-child(4) {
				margin-right: 0;
			}
		}

		&__social-icons {
			transition: .5s;
			flex-wrap: wrap;
			@media only screen and (min-width: 769px) {
				display: flex;
			}
			@media only screen and (max-width: 768px) {
				display: none;
			}
		}

		&__button {
			transition: .5s;
			@media only screen and (min-width: 769px) {
				display: none;
			}
			@media only screen and (max-width: 768px) {
				position: relative;
				z-index: 5;
				width: 100%;
				height: 50px;
				font-size: 16px;
				margin-top: 20px;
			}
			@media only screen and (width: 768px) {
				width: 30%;
				left: 50%;
				transform: translateX(-50%);
			}
		}

		&__arrow {
			position: absolute;
			z-index: 5;
			width: 18px;
			height: 10px;
			left: 50%;
			transform: translateX(-50%);
			cursor: pointer;
			transition: 0.15s;
			background-size: contain;
			background-position: center;
			background-repeat: no-repeat;
			background-image: url('../../src/assets/img/buttons/arrow.svg');
			@media only screen and (min-width: 769px) {
				bottom: 36px;
			}
			@media only screen and (max-width: 768px) {
				bottom: 20px;
			}
			&:hover {
				background-image: url('../../src/assets/img/buttons/arrow-hover.svg');
			}
		}
	}

	@import "/../assets/scss/resourses/animation.scss";
</style>
