function loadVideos() {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then(res => res.json())
        .then(data => {
            removeActiveClass();
            document.getElementById("btn-all").classList.add("active")
            displayVideos(data.videos)
        })
}

const displayVideos = (videos) => {

    const videoContainer = document.getElementById("video-container");
    videoContainer.innerHTML = " ";

    if (videos.length == 0) {
        videoContainer.innerHTML = `
            <div class="col-span-full flex flex-col items-center py-20">
                <img class="w-[120px]" src="assets/Icon.png" alt="">
                <h2 class="text-2xl font-bold">Oops!! Sorry, There is no content here</h2>
            </div>
        `
        return;
    }

    videos.forEach(video => {
        const videoCard = document.createElement("div");
        videoCard.innerHTML = `
            
        <div class="card bg-base-100 ">
            <figure class="relative">
                <img class="w-full h-[150px] object-cover" src="${video.thumbnail}" />
                <span class="absolute bottom-2 right-2 text-white text-sm rounded bg-black px-2">3 hrs 56 min ago</span>
            </figure>
            <div class="flex gap-3 px-0 py-5">
                <div class="profile">
                    <div class="avatar">
                        <div class="w-6 rounded-full">
                            <img src="${video.authors[0].profile_picture}" />
                        </div>
                    </div>
                </div>

                <div class="intro">
                    <h2 class="font-bold">${video.title}</h2>
                    <p class="text-sm text-gray-400 flex gap-1 items-center">${video.authors[0].profile_name} ${video.authors[0].verified == true ? `<img
                            class="w-5 h-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt="">` : ``}</p>
                    <p class="text-sm text-gray-400">${video.others.views} views</p>
                </div>
            </div>
            
            <button onclick=loadVideoDetails('${video.video_id}') class="btn btn-block">Show Details</button>
        </div>
        `
        videoContainer.append(videoCard)
    })
}

loadVideos()