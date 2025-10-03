const jogos = [
  "The Legend of Zelda: Ocarina of Time",
  "Red Dead Redemption 2",
  "The Last of Us",
  "GTA V",
  "Hollow Knight",
  "The Crew 2",
  "Just Dance Friends",
  "Mortal Kombat 11",
  "Just Dance 2017",
  "FC 25",
  "Roblox",
  "Half-Life"
];

const btn = document.getElementById("btn-sorteio");
const resultado = document.getElementById("codigo-gerado");

btn.addEventListener("click", () => {
  const sorteado = Math.floor(Math.random() * jogos.length);
  resultado.textContent = jogos[sorteado];
});