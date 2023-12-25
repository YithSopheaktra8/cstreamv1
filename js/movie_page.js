function fetchTrending() {
	let card = document.getElementById("trending");
	fetch(
		"https://cms.istad.co/api/ms-movies?filters[type][name][$eqi]=trending&pagination[start]=0&pagination[limit]=14&filters[isMovie][$eqi]=true&populate=*"
	)
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			let items = data.data;

			items.forEach((data) => {
				card.innerHTML += `
			
			<a href="/pages/details.html?id=${data.id}" class="w-full grid items-center justify-between">
				<div class="mt-[25px] w-[200px] h-[500px] md:w-[200px] lg:w-full">
					<img src="https://cms.istad.co${data.attributes.thumbnail.data.attributes.url}" alt="img-1" class="rounded-[25px] object-cover h-[390px] md:h-[300px] lg:h-[390px]" />
					<div class="up-card-desc mt-5">
						<div class="flex justify-between">
							<p class="fs-17">${data.attributes.title}</p>
						</div>
						<div class="justify-between mt-3 flex gap-5">
							<h5 class="text-secondary fs-10">${data.attributes.year}</h5>
							<p class="fs-10">
								<span><i class="fa-solid fa-star color-gold"></i>
								${data.attributes.rating}</span>
							</p>
							<p class="fs-10">
								<span><i class="fa-regular fa-clock text-secondary"></i>
								${data.attributes.duration}mn</span>
							</p>
						</div>
					</div>
				</div>
			</a>
			
			`;
			});
		});
}
fetchTrending();


function fetchHorror(){
	let card = document.getElementById("horror");
	fetch(
		"https://cms.istad.co/api/ms-movies?filters[type][name][$eqi]=horror&pagination[start]=0&pagination[limit]=14&filters[isMovie][$eqi]=true&populate=*"
	)
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			let items = data.data;

			items.forEach((data) => {
				card.innerHTML += `
			
			<a href="/pages/details.html?id=${data.id}">
				<div class="mt-[25px] w-[200px] h-[500px] lg:w-full">
					<img src="https://cms.istad.co${data.attributes.thumbnail.data.attributes.url}" alt="img-1" class="rounded-[25px] object-cover h-[390px]" />
					<div class="up-card-desc mt-5">
						<div class="flex justify-between">
							<p class="fs-17">${data.attributes.title}</p>
						</div>
						<div class="justify-between mt-3 flex gap-5">
							<h5 class="text-secondary fs-10">${data.attributes.year}</h5>
							<p class="fs-10">
								<span><i class="fa-solid fa-star color-gold"></i>
								${data.attributes.rating}</span>
							</p>
							<p class="fs-10">
								<span><i class="fa-regular fa-clock text-secondary"></i>
								${data.attributes.duration}mn</span>
							</p>
						</div>
					</div>
				</div>
			</a>
			
			`;
			});
		});
}

fetchHorror();

function fetchFilter(url) {
	let card = document.getElementById("filter_list");
	card.innerHTML = "";

	fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			let items = data.data;

			items.forEach((data) => {
				card.innerHTML += `

                <li>
                    <a href="movie_page.html"
                    class="block px-4 py-2 hover:bg-gray-100 ">${data.attributes.name}</a>
                </li>
        
                `;
			});
		})
		.catch((error) => {
			console.error("error while fetch data : " + error);
		});
}


