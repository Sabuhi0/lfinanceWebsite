const menubar = document.querySelector(".menubar")
console.log(menubar)

// Add
document.querySelector(".menubar").addEventListener("click", function() {
    const headerSearchForm = document.querySelector(".navbar-menu ul");
    headerSearchForm.classList.add("active")
});

// Remove
document.querySelector("#navbarClose").addEventListener("click", function() {
    const headerSearchForm = document.querySelector(".navbar-menu ul");
    headerSearchForm.classList.remove("active")
});