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
        testMethod() {
            alert('test');
        },
    },
    mounted() {
        function handleScroll(direction) {
            if (direction === null) {
                return;
            }

            const app = document.getElementById('app');
            const plane = document.getElementById('plane');
            const title = document.getElementById('title');
            const join = document.getElementById('join-container');
            const clouds_1 = document.getElementById('clouds_1');
            const cardsContainer = document.getElementsByClassName('main-screen__cards')[0];

            if (direction === 'top') {
                if (app) {
                    app.classList.remove('second-screen');
                    app.classList.add('first-screen');
                }
                if (cardsContainer) {
                    cardsContainer.classList.add("cards-show-up");
                    cardsContainer.classList.remove("cards-hide");
                }
                if (title) {
                    title.classList.add("title-show");
                    title.classList.remove("title-hide");
                }
                if (plane) {
                    plane.classList.add("plane-transform");
                    plane.classList.remove("plane-hide");
                }
                if (clouds_1) {
                    clouds_1.classList.add("clouds-transform-up");
                    clouds_1.classList.remove("clouds-transform-down");
                }
                if (join) {
                    join.classList.add("join-hide");
                    join.classList.remove("join-show");
                }

                window.isFirstScreen = true;
            } else if (direction === 'bottom') {
                if (app) {
                    app.classList.remove('first-screen');
                    app.classList.add('second-screen');
                }
                if (title) {
                    title.classList.add("title-hide");
                    title.classList.remove("title-show");
                }
                if (cardsContainer) {
                    cardsContainer.classList.add("cards-hide");
                    cardsContainer.classList.remove("cards-show-up");
                }
                if (join) {
                    join.classList.add("join-show");
                    join.classList.remove("join-hide");
                }
                if (plane) {
                    plane.classList.add("plane-hide");
                    plane.classList.remove("plane-transform");
                }
                if (clouds_1) {
                    clouds_1.classList.remove("clouds-transform-up");
                    clouds_1.classList.add("clouds-transform-down");
                }

                window.isFirstScreen = false;
            }
        }

        if (window.innerWidth < 980) {
            let touchsurface = document.getElementById('app'),
                startY,
                dist = 0,
                elapsedTime,
                allowedTime = 100,
                startTime;
            window.addEventListener('load', function () {

                touchsurface.addEventListener('touchstart', function (e) {
                    const touchobj = e.changedTouches[0];
                    startY = touchobj.pageY;
                    startTime = new Date().getTime(); // время контакта с поверхностью сенсора
                }, false);

                touchsurface.addEventListener('touchend', function (e) {
                    const touchobj = e.changedTouches[0];
                    dist = touchobj.pageY - startY; // получаем пройденную дистанцию
                    elapsedTime = (new Date().getTime() - startTime) >= allowedTime; // узнаем пройденное время
                    const swipeDirection = () => {
                        if (elapsedTime) {
                            if (dist > 60) return 'top';
                            else if (dist < -60) return 'bottom';
                        }
                    };
                    if (!swipeDirection()) {
                        return;
                    } else {
                        handleScroll(swipeDirection());
                        e.preventDefault();
                    }
                }, false)

            }, false)
        } else {
            document.addEventListener('scroll', function () {
                if (window.scrollY === 0) {
                    handleScroll('top')
                } else {
                    handleScroll('bottom')
                }
            });
        }
    }
};
