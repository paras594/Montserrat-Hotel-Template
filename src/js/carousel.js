class Carousel {
	constructor(track, nextBtn, prevBtn, dotsNav, fade = false) {
		this.track = track;
		this.nextBtn = nextBtn;
		this.prevBtn = prevBtn;
		this.dotsNav = dotsNav;
		this.slides = Array.from(track.children);
		this.dots = Array.from(dotsNav.children);
		this.slideWidth = this.getSlideWidth();
		this.fadeEffect = fade;
		this.infiniteFadeEffect = false;
		this.carouselInterval = null;

		if (!this.fadeEffect) {
			this.slides.forEach(this.setSlidePosition);
		} else {
			this.track.classList.add("fade");
			this.track.style.width = "100%";
			this.slides.forEach(slide => {
				slide.classList.add("carousel__slide-fade");
				slide.classList.remove("carousel__slide");
			});
		}

		this.addEventHandlers();
	}

	getSlideWidth = () => {
		return this.slides[0].getBoundingClientRect().width;
	};

	setSlidePosition = (slide, index) => {
		slide.style.left = this.slideWidth * index + "px";
		slide.classList.add("carousel__slide");
		slide.classList.remove("carousel__slide-fade");
	};

	moveToSlide = (currentSlide, targetSlide) => {
		this.track.style.transform = `translateX(-${targetSlide.style.left})`;
		currentSlide.classList.remove("current-slide");
		targetSlide.classList.add("current-slide");
	};

	fadeToSlide = (currentSlide, targetSlide) => {
		currentSlide.classList.remove("current-slide");
		targetSlide.classList.add("current-slide");
	};

	updateDots = (currentDot, targetDot) => {
		currentDot.classList.remove("current-slide");
		targetDot.classList.add("current-slide");
	};

	hideShowArrows = targetIndex => {
		if (targetIndex === 0) {
			this.prevBtn.classList.add("is-hidden");
			this.nextBtn.classList.remove("is-hidden");
		} else if (targetIndex === this.slides.length - 1) {
			this.prevBtn.classList.remove("is-hidden");
			this.nextBtn.classList.add("is-hidden");
		} else {
			this.prevBtn.classList.remove("is-hidden");
			this.nextBtn.classList.remove("is-hidden");
		}
	};

	slideToNext = e => {
		const currentSlide = this.track.querySelector(".current-slide");
		let nextSlide = currentSlide.nextElementSibling;
		const currentDot = this.dotsNav.querySelector(".current-slide");
		let nextDot = currentDot.nextElementSibling;
		let nextIndex = this.slides.findIndex(slide => slide === nextSlide);

		if (this.infiniteFadeEffect) {
			this.resetInterval();
			if (!nextSlide) {
				nextSlide = this.slides[0];
				nextDot = this.dots[0];
				nextIndex = 0;
			}
		}

		if (this.fadeEffect) {
			this.fadeToSlide(currentSlide, nextSlide);
		} else {
			this.moveToSlide(currentSlide, nextSlide);
		}

		this.updateDots(currentDot, nextDot);
		this.hideShowArrows(nextIndex);

		if (this.infiniteFadeEffect) {
			this.resetInterval();
		}
	};

	slideToPrev = e => {
		const currentSlide = this.track.querySelector(".current-slide");
		const prevSlide = currentSlide.previousElementSibling;
		const currentDot = this.dotsNav.querySelector(".current-slide");
		const prevDot = currentDot.previousElementSibling;
		const prevIndex = this.slides.findIndex(slide => slide === prevSlide);

		if (this.fadeEffect) {
			this.fadeToSlide(currentSlide, prevSlide);
		} else {
			this.moveToSlide(currentSlide, prevSlide);
		}

		this.updateDots(currentDot, prevDot);
		this.hideShowArrows(prevIndex);
		if (this.infiniteFadeEffect) {
			this.resetInterval();
		}
	};

	addEventHandlers = () => {
		if (this.nextBtn) {
			this.nextBtn.addEventListener("click", this.slideToNext);
		}

		if (this.prevBtn) {
			this.prevBtn.addEventListener("click", this.slideToPrev);
		}

		if (this.dotsNav) {
			this.dotsNav.addEventListener("click", this.handleDotsNavClick);
		}
	};

	infiniteFade = val => {
		this.infiniteFadeEffect = val;
		this.carouselInterval = setInterval(this.slideToNext, 3000);
	};

	resetInterval = () => {
		clearInterval(this.carouselInterval);
		this.carouselInterval = setInterval(this.slideToNext, 3000);
	};
}

export default Carousel;
