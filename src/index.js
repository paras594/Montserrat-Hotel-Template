import "./main.scss";
import "./rooms.html";
console.log("javascript status: working");
import AOS from "aos";
import "aos/dist/aos.css";
import "./js/header-carousel";
import "./js/blog-carousel";
import "./js/rooms";

AOS.init({
	offset: 200,
	duration: 700
});
