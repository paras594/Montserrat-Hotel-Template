import Carousel from "./carousel";

const blogTrack = document.querySelector(".blogs__track");
const blogNextBtn = document.querySelector(".blogs__button-right");
const blogPrevBtn = document.querySelector(".blogs__button-left");
const blogDotsNav = document.querySelector(".blogs__nav");

const blogCarousel = new Carousel(
	blogTrack,
	blogNextBtn,
	blogPrevBtn,
	blogDotsNav,
	false
);
