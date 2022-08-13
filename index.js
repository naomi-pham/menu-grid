const modalCoffeeBtn = document.getElementById("open-coffee-modal")
const modalCoffeeContainer = document.getElementById("modal-container")
const closeCoffeeBtn = document.getElementById("close-coffee-modal")
const changeThemeBtn = document.getElementById("change-theme")
const hero = document.getElementById("hero-hide")

modalCoffeeBtn.addEventListener("click", function() {
    modalCoffeeContainer.style.display = "block"
    hero.style.display = "none";

})

closeCoffeeBtn.addEventListener("click", function() {
    modalCoffeeContainer.style.display = "none";
    hero.style.display = "block";
})



changeThemeBtn.addEventListener("click", function(dark) {
    let heading = document.getElementById("h1")
    let changeBody = document.getElementById("body")
    heading.classList.toggle("dark-h1")
    changeBody.classList.toggle("body-dark")
})



