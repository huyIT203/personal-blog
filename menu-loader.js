document.addEventListener("DOMContentLoaded", function () {
    fetch("/java/menujava.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("menu-container").innerHTML = data;
        })
        .catch((error) => console.error("Error loading menu:", error));
});
