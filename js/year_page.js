
function getDurationFromUrl() {
	const url = new URLSearchParams(window.location.search);
	const duration = url.get("year");
	return duration;
}

const countYear = getDurationFromUrl();

function fetchYear(){
    const API = `https://cms.istad.co/api/ms-movies?populate=*&filters[year][$eq]=${countYear}`
    const duration_card = document.getElementById("year");
    fetch(API)
    .then(res =>{
        return res.json();
    })
    .then(data=>{
        let items = data.data;
        items.forEach((data) => {
            duration_card.innerHTML += `
        
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
    })
    
}

fetchYear();