function getPageFromUrl() {
	const url = new URLSearchParams(window.location.search);
	let page = url.get("page");
	return page;
}

let page = getPageFromUrl();


function fetchPagination(){
    page++;
    let card = document.getElementById("trending_pagination");
    let pageTotal = document.getElementById("totalPage");
    card.innerHTML = "";
	fetch(
		`https://cms.istad.co/api/ms-movies?pagination[withCount]=true&pagination[page]=${page > 5 ? page = 0 : page++}&pagination[pageSize]=14&populate=*`
	)
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			let items = data.data;


            pageTotal.innerHTML = `

            <span>Page ${data.meta.pagination.page} of ${data.meta.pagination.pageCount}</span>
            
            `;

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

fetchPagination();


function fetchPaginationMinus(){
    page--;
    let card = document.getElementById("trending_pagination");
    let pageTotal = document.getElementById("totalPage");
    card.innerHTML = "";
	fetch(
		`https://cms.istad.co/api/ms-movies?pagination[withCount]=true&pagination[page]=${page < 0 ? page = 5 : page--}&pagination[pageSize]=14&populate=*`
	)
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			let items = data.data;

            pageTotal.innerHTML = `

            <span>Page ${data.meta.pagination.page} of ${data.meta.pagination.pageCount}</span>
            
            `;

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