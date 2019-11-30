import "./main.scss";
import "./rooms.html";
console.log("javascript status: working");
import AOS from "aos";
import "aos/dist/aos.css";
import "./js/header-carousel";
import "./js/blog-carousel";
import "./js/rooms";

const toTopBtn = document.querySelector(".to-top-button");

if (window.scrollY > window.innerHeight / 2) toTopBtn.style.display = "";

window.addEventListener("scroll", () => {
	console.log(window.scrollY, window.innerHeight / 2);
	if (window.scrollY > window.innerHeight / 2) {
		toTopBtn.style.display = "";
	} else if (window.scrollY < window.innerHeight / 2) {
		toTopBtn.style.display = "none";
	}
});

AOS.init({
	offset: 180,
	duration: 700
});

const serviceItems = document.querySelectorAll(".services__icon");
const roomsList = document.querySelectorAll(".rooms__room");

if (window.innerWidth <= 580) {
	serviceItems.forEach(item => {
		item.dataset.aosDelay = 0;
	});
}

if (window.innerWidth <= 640) {
	roomsList.forEach(room => {
		room.dataset.aosDelay = 0;
	});
}

window.onresize = () => {
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
