const url = "https://dog.ceo/api/breeds/image/random";

// Function to fetch dog image and return URL
async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data.message; // Return image URL
}

// Fixing event listener
let button = document.querySelector(".get-dogs");
button.addEventListener("click", async () => {
    let dogContainer = document.querySelector(".dog-container");
    dogContainer.innerHTML = "";
    let imgUrl = await getData(); // Wait for image URL from API
    let imageContainer = document.createElement("img");
    imageContainer.setAttribute("src", imgUrl);
    imageContainer.setAttribute("alt", "Random Dog"); 
    dogContainer.appendChild(imageContainer);
});
