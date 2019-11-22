import json from "../data.json";
const priceSlider = document.querySelector("#price");
const sortOption = document.querySelector("#sort");
const ratingOption = document.querySelector("#rating");
const roomsContainer = document.querySelector("#rooms-data");
const inputPrice = document.querySelector("#input-price");
const optionsResetBtn = document.querySelector("#options-reset");
console.log(optionsResetBtn);

if (priceSlider) {
	const data = json.data;

	let options = {
		sortBy: "",
		price: 0,
		rating: 0
	};

	renderData();

	priceSlider.addEventListener("input", handlePriceSlider);
	priceSlider.addEventListener("change", handlePriceSlider);

	sortOption.addEventListener("change", handleSortOption);

	ratingOption.addEventListener("change", handleRatingOption);

	optionsResetBtn.addEventListener("click", handleResetBtn);

	function handlePriceSlider(e) {
		options.price = e.target.value;
		inputPrice.innerHTML = e.target.value;
		renderData();
	}

	function handleSortOption(e) {
		options.sortBy = e.target.value;
		// console.log(options.sortBy);
		renderData();
	}

	function handleRatingOption(e) {
		options.rating = e.target.value;
		renderData();
	}

	function handleResetBtn() {
		options = {
			sortBy: "",
			price: 0,
			rating: 0
		};

		priceSlider.value = 1000;
		inputPrice.innerHTML = 1000;
		sortOption.value = "";
		ratingOption.value = "";

		renderData();
	}

	function renderData() {
		roomsContainer.innerHTML = "";
		let newData = [...data];
		if (options.price) {
			newData = newData.filter(item => item.price <= options.price);
		}

		if (options.rating) {
			newData = newData.filter(item => item.rating == options.rating);
		}

		if (options.sortBy) {
			newData = newData.sort((a, b) => {
				if (options.sortBy[0] == "R") {
					if (a[options.sortBy.slice(1)] > b[options.sortBy.slice(1)])
						return -1;
				} else {
					if (a[options.sortBy] <= b[options.sortBy]) return -1;
				}
			});
		}

		newData.forEach((item, i) => {
			let roomCard = document.createElement("div");
			roomCard.classList.add("room-card");
			roomCard.innerHTML = `
				<div class="room-card__main">
				<img
					class="room-card__img"
					src="${item.img}"
					alt="room image ${i + 1}"
				/>
				<div class="room-card__details">
					<h2 class="room-card__heading">${item.name}</h2>
					<div class="room-card__rating">
						<span>Rating</span>
						<div class="room-card__stars">
					
						</div>
					</div>
					<div class="room-card__facilities">
						<ion-icon name="wifi" title="Wifi"></ion-icon>
						<ion-icon name="snow" title="Air Conditioning"></ion-icon>
						<ion-icon name="tv" title="TV"></ion-icon>
						<ion-icon name="cafe" title="Coffee Maker"></ion-icon>
					</div>
					<div class="room-card__price">
						<span>Price:</span>
						<p><span>$${item.price}</span> per night</p>
					</div>
				</div>
				<div class="room-card__description">
					${item.description}
				</div>
			</div>`;

			let starsContainer = roomCard.querySelector(".room-card__stars");

			let counter = 0;
			while (counter < item.rating) {
				starsContainer.innerHTML += `<ion-icon name="star"></ion-icon>`;
				counter++;
			}

			while (counter < 5) {
				starsContainer.innerHTML += `<ion-icon name="star-outline"></ion-icon>`;
				counter++;
			}

			roomsContainer.appendChild(roomCard);
		});
	}
}
