function removeActiveClass() {
    const activeButtons = document.getElementsByClassName("active");

    for (const activeBtn of activeButtons) {
        activeBtn.classList.remove("active")
    };
}