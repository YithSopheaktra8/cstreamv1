function fetchUpcoming() {
    fetch(
        "https://cms.istad.co/api/ms-movies?filters[type][name][$eqi]=upcoming&populate=*"
    )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let card = document.getElementById("upcoming_card");

            let items = data.data;
            

            items.forEach((data) => {
                card.innerHTML += `

        <a href="/pages/details.html?id=${data.id}">
            <div class="w-[100%] h-[390px] lg:w-[240px] ">
                <img
                    loading="lazy"
                    src="https://cms.istad.co${data.attributes.thumbnail.data.attributes.url}"
                    alt="upcoming-1"
                    class="object-cover rounded-[25px] w-[100%] h-[390px] lg:h-[390px]" />

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

fetchUpcoming();

function fetchTrending() {
    fetch(
        "https://cms.istad.co/api/ms-movies?filters[type][name][$eqi]=trending&pagination[start]=0&pagination[limit]=6&populate=*"
    )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let card = document.getElementById("trending");

            let items = data.data;

            items.forEach((data) => {
                card.innerHTML += `

                <a href="/pages/details.html?id=${data.id}">
                <div class="mt-[45px] w-[220px] h-[390px]">
                    <img
                        loading="lazy"
                        src="https://cms.istad.co${data.attributes.thumbnail.data.attributes.url}"
                        alt="img-1"
                        class="object-cover rounded-[25px] w-[100%] h-[390px]" />
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

function fetchPopular() {
    fetch(
        "https://cms.istad.co/api/ms-movies?filters[type][name][$eqi]=popular&pagination[start]=0&pagination[limit]=6&populate=*"
    )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let card = document.getElementById("popular");
            let items = data.data;

            items.forEach((data) => {
                card.innerHTML += `

                <a href="/pages/details.html?id=${data.id}">
                <div class="mt-[25px] w-[220px] h-[390px]">
                    <img 
                    src="https://cms.istad.co${data.attributes.thumbnail.data.attributes.url}"
                    alt="img-1"
                    class="object-cover rounded-[25px] w-[100%] h-[390px]" />
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


