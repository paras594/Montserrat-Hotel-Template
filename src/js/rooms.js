const priceSlider = document.querySelector("#price");
const sortOption = document.querySelector("#sort");
const ratingOption = document.querySelector("#rating");

const data = [
	{
		name: "paras",
		price: 100,
		rating: 4
	},
	{
		name: "jai",
		price: 300,
		rating: 2
	},
	{
		name: "abhishek",
		price: 200,
		rating: 5
	},
	{
		name: "mukul",
		price: 400,
		rating: 3
	}
];

let options = {
	sortBy: "",
	price: 0,
	rating: 0
};

priceSlider.addEventListener("input", handlePriceSlider);
priceSlider.addEventListener("change", handlePriceSlider);

sortOption.addEventListener("change", handleSortOption);

ratingOption.addEventListener("change", handleRatingOption);

function handlePriceSlider(e) {
	options.price = e.target.value;
	renderData();
}

function handleSortOption(e) {
	options.sortBy = e.target.value;
	console.log(options.sortBy);
	renderData();
}

function handleRatingOption(e) {
	options.rating = e.target.value;
	renderData();
}

function renderData() {
	let newData = data;
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

	console.table(newData);
}
