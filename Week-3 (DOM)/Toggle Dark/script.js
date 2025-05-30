let toggleBtn = document.querySelector(".toggle");

toggleBtn.addEventListener("click", () => {
    let bodyTag = document.querySelector("body");
    bodyTag.classList.toggle("dark-mode");

    // Optional: Change button text dynamically
    if (bodyTag.classList.contains("dark-mode")) {
        toggleBtn.textContent = "Change to Light Mode";
    } else {
        toggleBtn.textContent = "Change to Dark Mode";
    }
});
