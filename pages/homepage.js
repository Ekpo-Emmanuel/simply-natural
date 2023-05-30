//resized nav drop down
var secondNav = document.querySelector(".second-drop");
var secondDrop = document.querySelector(".second-dropdown");

secondNav.addEventListener("click", ()=> {
    if (secondDrop.style.display === "none"){
        secondDrop.style.display = "block"
    }
    else {
        secondDrop.style.display = "none"
    }
}) 

// resize main bars
var mainbar = document.querySelector(".mainbar");
mainbar.addEventListener("click", ()=> {
    document.querySelector('.mainlink').classList.toggle("checked")
})