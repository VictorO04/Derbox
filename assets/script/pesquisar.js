// Array com coisas do site, TUDO MINUSCULO!
const pesquisado = [
    // 🎮 Jogos
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
    { termos: ["mais jogos", "mais"], pagina: "../pages/jogos/mais_jogos.html" },

    // 🕹️ Consoles
    { termos: ["xbox 360", "360"], pagina: "../pages/consoles/360.html" },
    { termos: ["ps2", "playstation 2"], pagina: "../pages/consoles/PS2.html" },
    { termos: ["ps3", "playstation 3"], pagina: "../pages/consoles/PS3.html" },
    { termos: ["ps4", "playstation 4"], pagina: "../pages/consoles/PS4.html" },
    { termos: ["ps5", "playstation 5"], pagina: "../pages/consoles/PS5.html" },
    { termos: ["switch", "nintendo switch"], pagina: "../pages/consoles/switch.html" },
    { termos: ["switch 2", "nintendo switch 2"], pagina: "../pages/consoles/switch2.html" },
    { termos: ["wii", "nintendo wii"], pagina: "../pages/consoles/wii.html" },
    { termos: ["xbox one"], pagina: "../pages/consoles/xboxone.html" },

    // 🎬 Filmes
    { termos: ["shrek"], pagina: "../pages/filmes/shrek.html" },

    // 📚 Livros
    { termos: ["acaba"], pagina: "../pages/livros/acaba.html" },
    { termos: ["anne"], pagina: "../pages/livros/anne.html" },
    { termos: ["biblioteca"], pagina: "../pages/livros/biblioteca.html" },
    { termos: ["coração", "coracao"], pagina: "../pages/livros/coracao.html" },
    { termos: ["empregada"], pagina: "../pages/livros/empregada.html" },
    { termos: ["estilhaça-me", "estilhaca", "estilhacame"], pagina: "../pages/livros/estilhaca.html" },
    { termos: ["harry potter", "harry"], pagina: "../pages/livros/harry.html" },
    { termos: ["máscara", "mascara"], pagina: "../pages/livros/mascara.html" },
    { termos: ["sanoman"], pagina: "../pages/livros/sanoman.html" },
    { termos: ["stranger"], pagina: "../pages/livros/stranger.html" },
    { termos: ["verão", "verao"], pagina: "../pages/livros/verao.html" },
    { termos: ["verity"], pagina: "../pages/livros/verity.html" },

    // 📺 Séries
    { termos: ["black mirror"], pagina: "../pages/series/black.html" },
    { termos: ["breaking bad", "breaking"], pagina: "../pages/series/breaking.html" },
    { termos: ["bridgerton"], pagina: "../pages/series/bridgerton.html" },
    { termos: ["the chosen"], pagina: "../pages/series/chosen.html" },
    { termos: ["dexter"], pagina: "../pages/series/dexter.html" },
    { termos: ["friends"], pagina: "../pages/series/friendss.html" },
    { termos: ["the game of thrones", "game of thrones", "got"], pagina: "../pages/series/game_of_thrones.html" },
    { termos: ["la casa de papel", "lacasa"], pagina: "../pages/series/lacasa.html" },
    { termos: ["rock"], pagina: "../pages/series/rock.html" },
    { termos: ["sherlock", "sherlock homes"], pagina: "../pages/series/sherlock.html" }
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