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
            Container
        },
        props: {
            routes: Array
        },
        data() {
            return {
                cards: [
                    {id: 1, date: '24 Sep - 28 Sep', city: 'Paris', cost: '$569'},
                    {id: 2, date: '28 Sep - 2 Oct', city: 'New York', cost: '$129'},
                    {id: 3, date: '4 Oct - 12 Oct', city: 'Rome', cost: '$639'},
                    {id: 4, date: '21 Sep - 25 Sep', city: 'Rio de Janeiro', cost: '$820'},
                ],
                scrollEventFunc: null
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
                const header = document.getElementById('header');
                const title = document.getElementById('title');
                const join = document.getElementById('join-container');
                const clouds_0 = document.getElementById('clouds_0');
                const clouds_1 = document.getElementById('clouds_1');
                const arrow = document.getElementById('arrow');

                if (window.scrollY === 0) {
                    app.classList.remove('second-screen');
                    if (el)
                        el.classList.add("cards-show-up");
                    header.classList.add("header-show");
                    if (title)
                        title.classList.add("title-show");
                    clouds_0.classList.add("clouds-hide");
                    clouds_1.classList.add("clouds-transform-up");
                    join.classList.add("join-hide");

                    if (el)
                        el.classList.remove("cards-hide");
                    plane.classList.remove("plane-hide");
                    header.classList.remove("header-hide");
                    if (title)
                        title.classList.remove("title-hide");
                    clouds_0.classList.remove("clouds-hide");
                    clouds_1.classList.remove("clouds-transform");
                    arrow.classList.remove("arrow-hide");
                    join.classList.remove("join-show");
                }
                if (window.scrollY >= 1) {
                    app.classList.add('second-screen');
                    if (el)
                        el.classList.add("cards-hide");
                    header.classList.add("header-hide");
                    if (title)
                        title.classList.add("title-hide");
                    plane.classList.add("plane-hide");
                    clouds_0.classList.add("clouds-hide");
                    clouds_1.classList.add("clouds-transform");
                    arrow.classList.add("arrow-hide");
                    join.classList.add("join-show");

                    el.classList.remove("cards-show-up");
                    if (el)
                        header.classList.remove("header-show");
                    if (title)
                        title.classList.remove("title-show");
                    clouds_0.classList.remove("clouds-hide");
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
		<Container v-scroll="handleScroll" class="main-screen__container">
			<Header id="header" @shuffle="shuffleArray(routes)" class="main-screen__header"/>
			<div id="title" class="main-screen__title" v-if="cityName">From {{cityName}}</div>
			<div class="main-screen__section">
				<div class="main-screen__cards-inner">
					<div class="main-screen__cards" v-if="quickRoutes && quickRoutes.length > 0">
						<Card
							v-for="(route, idx) in quickRoutes"
							:key="idx"
							:date="route.date"
							:city="route.city"
							:cost="route.price"
							:link="route.link"
							class="main-screen__card"
						/>
					</div>
				</div>
				<SocialIcons class="main-screen__social-icons"/>
				<Button
					text="What else ya got?"
					class="main-screen__button"
					@click="shuffleArray(routes)"
				/>
			</div>
			<div id="arrow" class="main-screen__arrow" @click="moveBottom()"/>
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

		.header-show {
			opacity: 1;
			transition: .5s;
		}
		.header-hide {
			opacity: 0;
			transition: .5s;
		}
		&__header {
			position: relative;
			z-index: 5;
		}

		.title-show {
			animation-name: title-showw;
			animation-duration: 1.5s;
			animation-iteration-count: 1;
			animation-direction: alternate;
			animation-timing-function: ease;
			@media only screen and (min-width: 769px) {
				@keyframes title-showw {
					from {
						opacity: 0;
						left: -100%;
					}
					to {
						opacity: 0.5;
						left: 200px;
					}
				}
			}
			@media only screen and (max-width: 768px) {
				@keyframes title-show {
					from {
						opacity: 0;
						left: -100%;
					}
					to {
						opacity: 0.5;
						left: 20px;
					}
				}
			}
		}
		.title-hide {
			opacity: 0;
			transform: translateX(-200%);
			transition: .7s;
		}
		&__title {
			position: absolute;
			max-width: 1000px;
			z-index: 2;
			font-weight: 800;
			opacity: 0.5;
			color: #918b8c;
			letter-spacing: 1px;
			animation-name: title-show;
			animation-duration: 1.5s;
			animation-iteration-count: 1;
			animation-direction: alternate;
			animation-timing-function: ease;
			@media only screen and (min-width: 769px) {
				font-size: 11.5vw;
				line-height: 166px;
				top: 14vh;
			}
			@media only screen and (max-width: 768px) {
				font-size: 100px;
				line-height: 114px;
				top: 8vh;
			}
			@media only screen and (min-width: 769px) {
				@keyframes title-show {
					from {
						opacity: 0;
						left: -100%;
					}
					to {
						opacity: 0.5;
						left: 200px;
					}
				}
			}
			@media only screen and (max-width: 768px) {
				@keyframes title-show {
					from {
						opacity: 0;
						left: -100%;
					}
					to {
						opacity: 0.5;
						left: 20px;
					}
				}
			}

			.second-screen & {
				animation: none;
				opacity: 0;
			}
		}

		@keyframes card-show {
			from {
				opacity: 0;
				transform: translateY(-100%);
			}
			to {
				opacity: 1;
			}
		}

		&__section {
			//pointer-events: none;
			position: relative;
			z-index: 5;
			@media only screen and (min-width: 769px) {
				display: flex;
				justify-content: space-between;
				align-items: flex-end;
				z-index: 11;
			}
			@media only screen and (max-width: 768px) {
			}
			.cards-hide & {
				transition: .7s;
				opacity: 0;
				z-index: -1;
				animation-name: cards-hide;
				animation-duration: 0.5s;
				animation-timing-function: ease-out;
			}
			.cards-show-up & {
				z-index: 11;
				transition: 1s;
				opacity: 1;
			}
		}

		&__cards-inner {
			@media only screen and (min-width: 768px) {
				height: 220px;
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
        width: 100%;
				overflow: hidden;
      }
    }
		&__cards {
			display: flex;
			@media only screen and (min-width: 768px) {
				height: 240px;
			}
			@media only screen and (max-width: 1200px) {
				height: 220px;
			}
      @media only screen and (width: 768px) {
				width: 100%;
        justify-content: space-between;
      }
		}

		&__card {
			pointer-events: all;
      animation-duration: 0.5s;
      animation-timing-function: ease-out;
			@media only screen and (min-width: 769px) {
				margin-top: 20px;
				margin-right: 20px;
			}
			@media only screen and (max-width: 768px) {
				margin-right: 10px;
			}
			&:nth-child(1) {
				animation-name: card-show;
				animation-duration: 0.5s;
			}
			&:nth-child(2) {
				animation-name: card-show;
				animation-duration: 1s;
			}
			&:nth-child(3) {
				animation-name: card-show;
				animation-duration: 1.5s;
			}
			&:nth-child(4) {
				animation-name: card-show;
				animation-duration: 2s;
        margin-right: 0;
			}

			.cards-show-up & {
				animation-name: card-show;
			}
		}

		&__social-icons {
      @media only screen and (min-width: 769px) {
        display: flex;
      }
			@media only screen and (max-width: 768px) {
				display: none;
			}
		}

		&__button {
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

		.arrow-hide {
			opacity: 0;
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
</style>
