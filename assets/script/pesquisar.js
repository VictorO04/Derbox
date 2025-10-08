// Array com coisas do site, TUDO MINUSCULO!
const pesquisado = [
    { termos: ["gta v", "gta", "grand theft auto v"], pagina: "../pages/jogos/GTA.html" },
    { termos: ["half-life", "hl"], pagina: "../pages/jogos/halflife.html" },
    { termos: ["mortal kombat 11", "mk11", "mortal kombat"], pagina: "../pages/jogos/MK11.html" },
    { termos: ["the crew 2", "crew 2"], pagina: "../pages/jogos/Crew2.html" },
    { termos: ["just dance 2017", "justdance"], pagina: "../pages/jogos/Dance2017.html" },
    { termos: ["just dance friends", "justdancefriends"], pagina: "../pages/jogos/DanceFriends_banner.html" },
    { termos: ["fifa 25", "fc25"], pagina: "../pages/jogos/FC25.html" },
    { termos: ["hollow knight", "hollow"], pagina: "../pages/jogos/Hollow.html" },
    { termos: ["the last of us", "tlou", "last"], pagina: "../pages/jogos/last.html" },
    { termos: ["ocarina of time", "zelda", "ocarina"], pagina: "../pages/jogos/OcarinaTime.html" },
    { termos: ["red dead redemption 2", "rdr2", "red dead"], pagina: "../pages/jogos/RedDeadRedemption2.html" },
    { termos: ["roblox"], pagina: "../pages/jogos/Roblox.html" },
    { termos: ["mais jogos", "mais"], pagina: "../pages/jogos/mais_jogos.html" }
];

function pesquisar() {
    const input = document.getElementById("searchInput").value.trim().toLowerCase();
    // Buscar de acordo com o input do usuario
    const Encontrado = pesquisado.find(j =>
        j.termos.some(termo => termo.includes(input))
    );

    if (Encontrado) {
        window.location.href = `./${Encontrado.pagina}`;
    } else {
        document.getElementById("naoEncontrado").style.display = "block";
    }
}

// Se clicar enter, ele vai tbm
document.getElementById("searchInput").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        pesquisar();
    }
});