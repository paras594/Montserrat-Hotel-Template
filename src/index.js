import "./main.scss";
import "./rooms.html";
console.log("javascript status: working");
import AOS from "aos";
import "aos/dist/aos.css";
import "./js/navbar";
import "./js/header-carousel";
import "./js/blog-carousel";
import "./js/rooms";

const size = document.querySelector(".size");

AOS.init({
	offset: 180,
	duration: 700
});

const serviceItems = document.querySelectorAll(".services__icon");
const roomsList = document.querySelectorAll(".rooms__room");
const carouselSlides = document.querySelectorAll(".carousel__slide");

if (window.innerWidth <= 580) {
	serviceItems.forEach(item => {
		item.dataset.aosDelay = 0;
	});
}

if (window.innerWidth <= 640) {
	AOS.init({
		offset: 80,
		duration: 700
	});
	roomsList.forEach(room => {
		room.dataset.aosDelay = 0;
	});
}

window.onresize = () => {
	carouselSlides.forEach(slide => {
		slide.style.width = "100%";
	});

	if (window.innerWidth >= 580) {
		serviceItems.forEach(item => {
			item.dataset.aosDelay = 0;
		});
	}

	if (window.innerWidth <= 640) {
		roomsList.forEach(room => {
			room.dataset.aosDelay = 0;
		});
	}
};
