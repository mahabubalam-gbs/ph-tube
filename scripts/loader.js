function showLoader() {
    document.getElementById("loader").classList.remove("hidden");
    document.getElementById("video-container").classList.add("hidden");
}

function hideLoader() {
    document.getElementById("loader").classList.add("hidden");
    document.getElementById("video-container").classList.remove("hidden");
}