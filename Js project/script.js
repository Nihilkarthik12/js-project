var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");
var cancelpopup = document.getElementById("cancel-popup");
var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");

// Show popup when clicking "+"
addpopupbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

// Hide popup when clicking "CANCEL"
cancelpopup.addEventListener("click", function (event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// Add book when clicking "ADD"
addbook.addEventListener("click", function (event) {
    event.preventDefault();

    // Prevent adding empty books
    if (!booktitleinput.value.trim()) {
        alert("Please enter a book title!");
        return;
    }

    // Create a new book container
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `
        <h2>${booktitleinput.value}</h2>
        <h5>${bookauthorinput.value}</h5>
        <p>${bookdescriptioninput.value}</p>
        <button class="delete-book">Delete</button>
    `;

    container.appendChild(div);

    // Hide popup after adding book
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";

    // Clear input fields
    booktitleinput.value = "";
    bookauthorinput.value = "";
    bookdescriptioninput.value = "";

    // Add delete functionality
    div.querySelector(".delete-book").addEventListener("click", function () {
        div.remove();
    });
});
function deletebook(event){
    event.target.parentElement.remove()
}

