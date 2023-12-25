$(function () {
	plyr.setup();
});

function fetchDetailVideo() {
	fetch(
		`https://cms.istad.co/api/ms-movies?filters[id][$eqi]=${getIDFromUrl()}&populate=*`
	)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			let card = document.getElementById("video-detail");

			let items = data.data;

			items.forEach((data) => {

				card.innerHTML += `
            
                <iframe
                    class="rounded-[20px] h-[400px] md:w-full md:h-screen "
                    src="${data.attributes.videoUrl}"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
                <!-- title start -->
                <div class="mt-[100px] hidden w-full  h-[80vh] gap-[50px] md:block md:flex">
                    <img
                        class="object-cover rounded-[20px] w-full h-[250px] md:w-[300px] md:h-[375px] "
                        src="https://cms.istad.co${data.attributes.thumbnail.data.attributes.url}"
                        alt="video-player" />
                    <!-- title content -->
                    <div>
                        <h1 class="text-[24px] md:text-[48px]">
                            ${data.attributes.title}
                        </h1>
                        <div class="flex gap-6 mt-[20px]">
                            <p
                                class="text-[16px] bg-white text-black title-border inline-block">
                                ${data.attributes.isMovie ? "Movie" : "TV show"}
                            </p>
                            <p class="text-[16px] text-white title-border">
                                HD
                            </p>
                            <p class="text-[18px] text-white p-1">
                                Action, Drama, Adventure, Science fiction
                            </p>
                        </div>
                        <div class="flex gap-5 mt-[20px]">
                            <p>
                                <span
                                    ><i
                                        class="fa-regular fa-clock text-secondary mr-2"></i>
                                        ${data.attributes.duration}min</span
                                >
                            </p>
                            <p class="text-white fs-17">
                                <i
                                    class="fa-solid fa-calendar-days text-secondary mr-2"></i>
                                    ${data.attributes.year}
                            </p>
                        </div>
                        <div
                            class="relative w-[411px] h-[90px] bg-[#3F3F3F73] mt-[20px] rounded-[20px] flex justify-evenly items-center">
                            <div>
                                <p class="text">
                                    <i
                                        class="fa-solid fa-share-nodes ml-2 text-[20px]"></i>
                                </p>
                                <p class="text-[13px]">Share</p>
                            </div>
                            <p class="flex flex-col items-center text-[13px]">
                                <span class="fs-17"
                                    ><i class="fa-solid fa-star color-gold"></i>
                                    ${data.attributes.rating}</span
                                >
                                Rate The Movie
                            </p>
                            <button class="button-color">
                                <p class="uppercase">
                                    <span class="mr-2"
                                        ><i class="fa-solid fa-play"></i> </span
                                    >Play
                                </p>
                            </button>
                        </div>
                        <p class="mt-[20px] text-[16px]">
                        ${insertBr(data.attributes.description)}
                        </p>
                    </div>
                </div>
            <!-- title end -->

            `;
			});
		})
		.catch((error) => {
			console.error("error while fetch data : " + error);
		});
}

fetchDetailVideo();

function fetchAlsoLike() {
    fetch(
        "https://cms.istad.co/api/ms-movies?filters[type][name][$eqi]=trending&pagination[start]=3&pagination[limit]=12&filters[isMovie][$eqi]=true&populate=*"
    )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let card = document.getElementById("also-like");
            let items = data.data;

            items.forEach((data) => {
                card.innerHTML += `

                <a href="/pages/details.html?id=${data.id}">
                <div class="mt-[25px] w-[220px] h-[500px]">
                    <img
                        src="https://cms.istad.co${data.attributes.thumbnail.data.attributes.url}"
                        alt="img-1"
                        class="up-card-img" />
                    <div class="up-card-desc mt-5">
                        <div class="flex justify-between">
                            <p class="fs-17">${data.attributes.title}</p>
                        </div>
                        <div class="justify-between mt-3 flex gap-5">
                            <h5 class="text-secondary fs-10">${data.attributes.year}</h5>
                            <p class="fs-10">
                                <span
                                    ><i
                                        class="fa-solid fa-star color-gold"></i>
                                        ${data.attributes.rating}</span
                                >
                            </p>
                            <p class="fs-10">
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
            });
        })
        .catch((error) => {
            console.error("error while fetch data : " + error);
        });
}

fetchAlsoLike();