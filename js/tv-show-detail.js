function getIDFromUrl() {
	const url = new URLSearchParams(window.location.search);
	const id = url.get("id");
	return id;
}

function truncateText(text, maxLength) {
	let words = text.split(" ");

	if (words.length > maxLength) {
		return words.slice(0, maxLength).join(" ") + "...";
	}

	return text;
}

const API_URL = `https://cms.istad.co/api/ms-movies?filters[id][$eqi]=${getIDFromUrl()}&populate=*`;

function fetchHeader() {
	fetch(API_URL)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			let card = document.getElementById("header-detail");
			let detail_bg = document.getElementById("background-image");

			let items = data.data;
			items.forEach((data) => {
				let image =
					"https://cms.istad.co" +
					data.attributes.thumbnail.data.attributes.url;

				detail_bg.style.backgroundImage = `url(${image})`;

				card.innerHTML += `
                <h1 class="text-center fs-36">${data.attributes.title}</h1>
				<div class="text-center fs-17 text-shadow mt-[25px]">
					<p>
                    ${insertBr(data.attributes.description)}
					</p>
					
				</div>
				<div class="flex justify-center">
					<a href="/pages/video_player.html?id=${data.id}">
                    <button class="button-color px-4 mt-10 m-5">
                    <p class="uppercase flex">
                        <span class="mr-2"
                            ><i class="fa-solid fa-play"></i> </span
                        >Watch
                    </p>
                </button>
                    </a>
					<div class="mt-10">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="43"
							height="43"
							viewBox="0 0 43 43"
							fill="none">
							<circle
								cx="21.5"
								cy="21.5"
								r="21.5"
								fill="#1E1E1E" />
							<path
								d="M15 13.9473C15 13.4308 15.2107 12.9355 15.5858 12.5704C15.9609 12.2052 16.4696 12 17 12H27C27.5304 12 28.0391 12.2052 28.4142 12.5704C28.7893 12.9355 29 13.4308 29 13.9473V29.5257L22 26.118L15 29.5257V13.9473Z"
								stroke="#00925D"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round" />
						</svg>
					</div>
					<div class="mt-10 m-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="43"
							height="43"
							viewBox="0 0 43 43"
							fill="none">
							<circle
								cx="21.5"
								cy="21.5"
								r="21.5"
								fill="#1E1E1E" />
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M21.5 13H17.3333C15.4925 13 14 14.4532 14 16.2455V25.982C14 27.7744 15.4925 29.2275 17.3333 29.2275H27.3333C29.1742 29.2275 30.6667 27.7744 30.6667 25.982C30.6667 24.1394 30.6667 21.9252 30.6667 21.9252C30.6667 21.4773 30.2933 21.1138 29.8333 21.1138C29.3733 21.1138 29 21.4773 29 21.9252V25.982C29 26.8778 28.2533 27.6048 27.3333 27.6048C24.5583 27.6048 20.1075 27.6048 17.3333 27.6048C16.4125 27.6048 15.6667 26.8778 15.6667 25.982C15.6667 23.2802 15.6667 18.9466 15.6667 16.2455C15.6667 15.3489 16.4125 14.6228 17.3333 14.6228H21.5C21.96 14.6228 22.3333 14.2593 22.3333 13.8114C22.3333 13.3635 21.96 13 21.5 13ZM27.8217 14.6228H24.8333C24.3733 14.6228 24 14.2593 24 13.8114C24 13.3635 24.3733 13 24.8333 13H29.8333C30.2933 13 30.6667 13.3635 30.6667 13.8114V18.6796C30.6667 19.1275 30.2933 19.491 29.8333 19.491C29.3733 19.491 29 19.1275 29 18.6796V15.77L22.9225 21.6874C22.5975 22.0039 22.0692 22.0039 21.7442 21.6874C21.4183 21.371 21.4183 20.8566 21.7442 20.5401L27.8217 14.6228Z"
								fill="#00925D" />
						</svg>
					</div>
				</div>
                `;
			});
		});
}

fetchHeader();

// for(i =0; i<5 ; i++){
// 	fetch(API_URL)
// 	.then(res=>{return res.json()})
// 	.then(data=>{
// 		let episodeContainer = document.getElementById("episode-container");
// 		let items = data.data;
// 		items.forEach(data=>{

// 			episodeContainer.innerHTML += `
// 			<div class="episode-card relative">
// 				<a href="/pages/video_player.html?id=${data.id}">
// 					<img src="https://cms.istad.co${data.attributes.thumbnail.data.attributes.url}" alt="#" class="episode-img">
// 					<p class="text-center mt-2 text-[20px]">Episode ....</p>
// 				</a>
// 			</div>

// 			`;
// 		})

// 	})
// }

function fetchTvShow() {

	const API = "https://cms.istad.co/api/ms-movies?pagination%5Bstart%5D=25&pagination%5Blimit%5D=14&populate=%2A";

	fetch(API)
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			let items = data.data;
			let trendingCard = document.getElementById("trending_tv");

			items.forEach(data =>{
				trendingCard.innerHTML += `
				<a href="/pages/details.html?id=${data.id}">
				<div class="mt-[25px] w-[200px] h-[300px]">
					<img
						src="https://cms.istad.co${
							data.attributes.thumbnail.data.attributes.url
						}"
						alt="img-1"
						class="up-card-img" />
					<!-- title -->
					<div class="mt-5">
						<h2 class="py-1 fs-17">${data.attributes.title}</h2>
						<div class="flex gap-5">
							<p class="text-secondary">${data.attributes.year}</p>
							<p>
								<span
									><i
										class="fa-solid fa-star color-gold"></i>
									${data.attributes.rating}</span
								>
							</p>
							<p>
								<span
									><i
										class="fa-regular fa-clock text-secondary"></i>
									${data.attributes.duration}min</span
								>
							</p>
						</div>
					</div>
				</div>
			</a>
				`;
			})

		});
}

fetchTvShow()
