const toggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");

navLinks.classList.remove("open");

function openNav() {
	toggle.classList.add("open");
	navLinks.classList.add("open");
	window.addEventListener("click", closeNav);
}

function closeNav() {
	toggle.classList.remove("open");
	navLinks.classList.remove("open");
	window.removeEventListener("click", closeNav);
}

toggle.addEventListener("click", e => {
	e.stopPropagation();
	if (toggle.classList.contains("open")) {
		closeNav();
	} else {
		openNav();
	}
});
