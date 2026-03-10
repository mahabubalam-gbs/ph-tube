function loadVideoDetails(video_id) {
    const url = `https://openapi.programming-hero.com/api/phero-tube/video/${video_id}`

    fetch(url)
        .then(res => res.json())
        .then(data => displayVideoDetails(data.video))
}

const displayVideoDetails = (video) => {
    console.log(video)
}