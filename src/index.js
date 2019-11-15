import "./main.scss";
console.log("javascript status: working");
import AOS from "aos";
import "aos/dist/aos.css";
import "./js/header-carousel";
import "./js/blog-carousel";

AOS.init({
	offset: 200,
	duration: 700
});
