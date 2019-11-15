import Carousel from "./carousel";

const track = document.querySelector(".carousel__track");
const nextBtn = document.querySelector(".carousel__button-right");
const prevBtn = document.querySelector(".carousel__button-left");
const dotsNav = document.querySelector(".carousel__nav");

const headerCarousel = new Carousel(track, nextBtn, prevBtn, dotsNav, true);
headerCarousel.infiniteFade(true);
