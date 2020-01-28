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
        handleScroll() {
            const app = document.getElementById('app');
            const plane = document.getElementById('plane');
            const title = document.getElementById('title');
            const join = document.getElementById('join-container');
            const clouds_1 = document.getElementById('clouds_1');
            const cardsContainer = document.getElementsByClassName('main-screen__cards')[0];


            if (window.scrollY === 0) {
                cardsContainer.classList.add("cards-show-up");
                if (title) title.classList.add("title-show");
                plane.classList.add("plane-transform");
                clouds_1.classList.add("clouds-transform-up");
                join.classList.add("join-hide");

                cardsContainer.classList.remove("cards-hide");
                if (title) title.classList.remove("title-hide");
                app.classList.remove('second-screen');
                join.classList.remove("join-show");
                clouds_1.classList.remove("clouds-transform-down");
                plane.classList.remove("plane-hide");
                this.isFirstScreen = true;
            }
            if (window.scrollY >= 1) {
                cardsContainer.classList.add("cards-hide");
                if (title) title.classList.add("title-hide");
                join.classList.add("join-show");
                app.classList.add('second-screen');
                plane.classList.add("plane-hide");
                clouds_1.classList.add("clouds-transform-down");
                this.isFirstScreen = false;

                cardsContainer.classList.remove("cards-show-up");
                if (title) title.classList.remove("title-show");
                plane.classList.remove("plane-transform");
                clouds_1.classList.remove("clouds-transform-up");
                join.classList.remove("join-hide");

            }
        }
    },
    mounted() {
        document.addEventListener('scroll', this.handleScroll);
        // if (document.addEventListener) {
        //     if ('onwheel' in document) {
        //         // IE9+, FF17+
        //         document.addEventListener("wheel", this.handleScroll);
        //     } else if ('onmousewheel' in document) {
        //         // устаревший вариант события
        //         document.addEventListener("mousewheel", this.handleScroll);
        //     } else {
        //         // Firefox < 17
        //         document.addEventListener("MozMousePixelScroll", this.handleScroll);
        //     }
        // } else { // IE8-
        //     document.attachEvent("onmousewheel", this.handleScroll);
        // }
    }
};
