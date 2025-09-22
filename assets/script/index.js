window.addEventListener("load", () => {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popup-overlay").style.display = "block";
    document.body.classList.add("blurred");
});

document.getElementById("popup-close").addEventListener("click", () => {
    document.getElementById("popup").style.display = "none";
    document.getElementById("popup-overlay").style.display = "none";
    document.body.classList.remove("blurred");
});