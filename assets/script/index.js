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

// Pega o parâmetro "tema" da URL
const params = new URLSearchParams(window.location.search);
const tema = params.get("tema");

// Troca o fundo de acordo com o tema escolhido
if (tema === "retro") {
  document.body.style.background = "linear-gradient(to bottom, #ff00aa, #220055)";
} else if (tema === "claro") {
  document.body.style.background = "linear-gradient(to bottom, #f0f0f0, #fff)";
  document.body.style.color = "#000"; // ajusta contraste do texto
} else if (tema === "imagem") {
  document.body.style.background = 'url("../img/consoles_banner.png") no-repeat center center fixed';
  document.body.style.backgroundSize = "cover";
} else {
  // Tema padrão (escuro)
  document.body.style.background = "linear-gradient(to bottom, #171631, #2c0531)";
}