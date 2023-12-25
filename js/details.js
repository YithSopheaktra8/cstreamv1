function fetchDetailMovie() {
    fetch(
        `https://cms.istad.co/api/ms-movies?filters[id][$eqi]=${getIDFromUrl()}&populate=*`
    )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let card = document.getElementById("details");
            let detail_bg = document.getElementById("detail-bg");

            let items = data.data;

            items.forEach((data) => {
                let image =
                    "https://cms.istad.co" +
                    data.attributes.thumbnail.data.attributes.url;

                detail_bg.style.backgroundImage = `url(${image})`;

                card.innerHTML += `
            
            <div class="flex flex-col md:flex-row">
            <img
                src="https://cms.istad.co${
                    data.attributes.thumbnail.data.attributes.url
                }"
                alt="upcoming-1"
                class="detail-img" />
            <div class="md:ml-[60px]">
                <h2 class="text-[36px] mt-[30px] text-span md:text-[64px] md:mt-0">
                ${data.attributes.title}
                </h2>
                <div class="title-des flex gap-5 mt-5">
                    <p class="text-sm bg-white text-black title-border">
                        ${data.attributes.isMovie ? "Movie" : "TV show"}
                    </p>
                    <p class="text-sm text-white title-border">HD</p>
                    <p class="hidden md:block" >Action, Drama, Adventure, Science fiction</p>
                </div>
                <p class="block mt-5 md:hidden">Action, Drama, Adventure, Science fiction</p>
                <div class="title-des flex gap-5 mt-5">
                    <p>
                        <span
                            ><i
                                class="fa-regular fa-clock text-secondary"></i>
                                ${data.attributes.duration}mn</span
                        >
                    </p>
                    <p class="text-white fs-17">
                        <i
                            class="fa-solid fa-calendar-days text-secondary"></i>
                            ${data.attributes.year}
                    </p>
                </div>
                <div
                    class=" md:w-[417px] h-[112px] rounded-[20px] bg-[#3F3F3F73] mt-[35px] flex justify-evenly items-center">
                    <div>
                        <i
                            class="fa-solid fa-share-nodes text-[20px] ml-2"></i>
                        <p class="text-[13px]">Share</p>
                    </div>
                    <p class="flex flex-col items-center text-[13px]">
                        <span class="fs-17">
                            <i class="fa-solid fa-star color-gold"></i>
                            ${data.attributes.rating}
                        </span>
                        Rate The Movie
                    </p>

                    <a href="video_player.html?id=${data.id}">
                        <button class="button-color">
                            <p class="uppercase">
                                <span class="mr-2"
                                    ><i class="fa-solid fa-play"></i> </span
                                >Play
                            </p>
                        </button>
                    </a>
                </div>

                <div class="title-des flex gap-5 mt-[35px]">
                    <p>
                    ${insertBr(data.attributes.description)}
                    </p>
                </div>
            </div>
        </div>
            
            `;
            });
        })
        .catch((error) => {
            console.error("error while fetch data : " + error);
        });
}

fetchDetailMovie();

function fetchTvShow() {
    fetch(
        "https://cms.istad.co/api/ms-movies?pagination[start]=0&pagination[limit]=5&filters[isMovie][$eqi]=false&populate=*"
    )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let card = document.getElementById("tv-show");

            let items = data.data;

            items.forEach((data) => {
                card.innerHTML += `

                <a href="/pages/details.html?id=${data.id}">
                <div class="w-[250px]">
                    <img
                        src="https://cms.istad.co${data.attributes.thumbnail.data.attributes.url}"
                        alt="upcoming-1"
                        class="up-card-img" />
                
                    <div class="up-card-desc mt-5">
                        <div class="flex justify-between">
                            <p class="fs-17">${data.attributes.title}</p>
                            <h5 class="text-secondary fs-17">${data.attributes.year}</h5>
                        </div>
                        <div class="flex justify-between mt-5">
                            <p class="text-xs text-white title-border">
                                HD
                            </p>
                            <div class="flex gap-5">
                                <p>
                                    <span
                                        ><i
                                            class="fa-regular fa-clock text-secondary"></i>
                                            ${data.attributes.duration}min</span
                                    >
                                </p>
                                <p>
                                    <span
                                        ><i
                                            class="fa-solid fa-star color-gold"></i>
                                            ${data.attributes.rating}</span
                                    >
                                </p>
                            </div>
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

fetchTvShow();

function fetchPopular() {
    fetch(
        "https://cms.istad.co/api/ms-movies?filters[type][name][$eqi]=popular&pagination[start]=0&pagination[limit]=6&filters[isMovie][$eqi]=true&populate=*"
    )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let card = document.getElementById("detail-popular");
            let items = data.data;

            items.forEach((data) => {
                card.innerHTML += `

                <a href="/pages/details.html?id=${data.id}">
                <div class="mt-[25px] w-[220px] h-[390px]">
                    <img
                        src="https://cms.istad.co${data.attributes.thumbnail.data.attributes.url}"
                        alt="img-1"
                        class="up-card-img" />
                </div>
            </a>
        
        `;
            });
        })
        .catch((error) => {
            console.error("error while fetch data : " + error);
        });
}

fetchPopular();


function fetchTrending(){
    fetch(
        "https://cms.istad.co/api/ms-movies?filters[type][name][$eqi]=trending&pagination[start]=6&pagination[limit]=6&filters[isMovie][$eqi]=true&populate=*"
    )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let card = document.getElementById("detail-trending");
            let items = data.data;

            items.forEach((data) => {
                card.innerHTML += `

                <a href="/pages/details.html?id=${data.id}">
                <div class="mt-[25px] w-[220px] h-[390px]">
                    <img
                        src="https://cms.istad.co${data.attributes.thumbnail.data.attributes.url}"
                        alt="img-1"
                        class="up-card-img" />
                </div>
            </a>
        
        `;
            });
        })
        .catch((error) => {
            console.error("error while fetch data : " + error);
        });
}

fetchTrending();