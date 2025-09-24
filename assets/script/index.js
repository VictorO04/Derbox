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

// Pega o "tema=xxxx" na URL da barrinha de pesquisa do nav.
const params = new URLSearchParams(window.location.search);
const tema = params.get("tema");
const footer = document.querySelector("footer");

// Troca o fundo de acordo com o tema escolhido
if (tema === "senai") {
  document.body.style.background = "linear-gradient(to bottom, #bc1b1bff, #4d1010ff)";
} else if (tema === "claro") {
  document.body.style.background = "linear-gradient(to bottom, #d9d9d9ff, #a9a9a9ff)";
  document.body.style.color = "#000";
  footer.style.color = "#000";
  footer.style.background = "#fff";
} else {
  document.body.style.background = "linear-gradient(to bottom, #171631, #2c0531)";
  document.body.style.color = "#fff";
  footer.style.color = "#fff";
  footer.style.background = "#1a1a1a";
}