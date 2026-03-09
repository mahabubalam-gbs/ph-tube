function loadCategories() {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then(res => res.json())
        .then(data => displayCategories(data.categories
        ))
}

function displayCategories(categories) {
    const categoryContainer = document.getElementById("category-container");

    for (const category of categories) {
        const button = document.createElement("button")
        button.id = `btn-${category.category_id}`;
        button.classList = "btn btn-sm hover:bg-red-500 hover:text-white"
        button.innerText = category.category
        button.onclick = () => loadCategoryVideos(category
            .category_id);
        categoryContainer.append(button)
    }
}

loadCategories()