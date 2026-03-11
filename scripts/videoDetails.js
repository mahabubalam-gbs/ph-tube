function loadVideoDetails(video_id) {
    const url = `https://openapi.programming-hero.com/api/phero-tube/video/${video_id}`

    fetch(url)
        .then(res => res.json())
        .then(data => displayVideoDetails(data.video))
}

const displayVideoDetails = (video) => {
    console.log(video)
    document.getElementById("video_details").showModal();
    const detailsContainer = document.getElementById("details-container");

    detailsContainer.innerHTML = `
       <div class="card  image-full shadow-sm">
            <figure>
                <img src="${video.thumbnail}" />
            </figure>
            <div class="card-body">
                <h2 class="text-3xl font-bold">${video.title}</h2>
                <p class="font-bold text-gray-400">${video.others.views} Views</p>
                <div class="rating">
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" aria-label="5 star" checked="checked" />
                </div>
                <p>${video.description}</p>


                <div class="flex gap-3 px-0 py-5">
                    <div class="avatar">
                        <div class="w-32 rounded">
                            <img src="${video.authors[0].profile_picture}" />
                        </div>
                    </div>
                    <div class="intro">
                        <h2 class="font-bold text-xl flex gap-1 items-center">${video.authors[0].profile_name} <img
                            class="w-5 h-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt=""></h2>
                    </div>
                </div>                    
            </div>
        </div>
    `
}