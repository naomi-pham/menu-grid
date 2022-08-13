const modalCoffeeBtn = document.getElementById("open-coffee-modal")
const modalCoffeeContainer = document.getElementById("modal-container")
const closeCoffeeBtn = document.getElementById("close-coffee-modal")
const changeThemeBtn = document.getElementById("change-theme")

modalCoffeeBtn.addEventListener("click", function() {
    modalCoffeeContainer.style.display = "block"

})

closeCoffeeBtn.addEventListener("click", function() {
    modalCoffeeContainer.style.display = "none"
})



changeThemeBtn.addEventListener("click", function(dark) {
    let heading = document.getElementById("h1")
    let changeBody = document.getElementById("body")
    heading.classList.toggle("dark-h1")
    changeBody.classList.toggle("body-dark")
})



