const jogos = [
  "The Legends of Zelda Ocarina of Time",
  "Red Dead Redemption 2",
  "The Last Of Us",
  "GTA V",
  "Hollow Night",
  "The Crew 2",
  "Just Dance Friends",
  "Mortal Kombat 11",
  "Just Dance 2017",
  "FC25",
  "Roblox",
  "Halflife",
  "Zelda Breath Of The Wild",
  "Sonic",
  "Uno",
  "Epic Mickey",
  "Clue",
  "FC26",
  "Super Mario Galaxy"
];

const btn = document.getElementById("btn-sorteio");
const resultado = document.getElementById("codigo-gerado");

btn.addEventListener("click", () => {
  const sorteado = Math.floor(Math.random() * jogos.length);
  resultado.textContent = jogos[sorteado];
});