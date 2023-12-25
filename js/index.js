$(document).ready(function () {
	$("#input-search").hide();
	$("#search-btn").click(function () {
		$("#input-search").fadeToggle();
	});
});

function duration(minutes){
	window.location.href = `duration_page.html?duration=${minutes}`;
}
	
function yearOfMovies(year){
	window.location.href = `year_page.html?year=${year}`;
}



function pagination(){
	window.location.href = `pagination.html?page=${1}`;
}



let preScrollPos = window.scrollY;

window.addEventListener("scroll", function () {
	let currentScrollPos = this.window.scrollY;
	if (preScrollPos < currentScrollPos) {
		this.document.querySelector("nav").classList.add("hidden");
	} else {
		this.document.querySelector("nav").classList.remove("hidden");
		this.document.querySelector("nav").classList.remove("bg-transparent");
		this.document.querySelector("nav").classList.add("bg-[#0D0C0F7C]");
	}
	if (currentScrollPos < 5) {
		this.document.querySelector("nav").classList.remove("bg-[#0D0C0F7C]");
		this.document.querySelector("nav").classList.add("bg-transparent");
	}
	preScrollPos = currentScrollPos;
});

function getIDFromUrl() {
	const url = new URLSearchParams(window.location.search);
	const id = url.get("id");
	return id;
}




function insertBr(text) {
	const words = text.split(" ");
	const wordsCount = words.length;

	if (wordsCount > 20) {
		let modifiedText = "";
		for (let i = 0; i < wordsCount; i++) {
			modifiedText += words[i] + " ";
			if ((i + 1) % 20 === 0) {
				modifiedText += "<br>";
			}
		}
		return modifiedText;
	}
	return text;
}

function findMovie() {
	let inputSearch = document.getElementById("input-search");
	let searchList = document.getElementById("search_list");
	let card = document.getElementById("search_card_list");
	card.innerHTML = "";

	let searchItem = inputSearch.value.trim();
	if (searchItem.length > 0) {
		searchList.classList.remove("hidden");

		fetch(
			`https://cms.istad.co/api/ms-movies?filters[title][$containsi]=${searchItem}&populate=*`
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				let items = data.data;
				items.forEach((data) => {
					card.innerHTML += `
                    <a href="/pages/details.html?id=${data.id}">
                        <li class="w-full px-2 py-2 border-b border-gray-200 flex items-center gap-2">
                            <img
                                src="https://cms.istad.co${data.attributes.thumbnail.data.attributes.url}"
                                alt="#"
                                class="w-[50px] h-[50px] rounded object-cover	" />
                            <p>${data.attributes.title}<br>${data.attributes.year}</p>
                        </li>
                    </a>
            
                    `;
				});
			});
	} else {
		searchList.classList.add("hidden");
	}
}
