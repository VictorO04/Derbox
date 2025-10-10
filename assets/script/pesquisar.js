// Array com coisas do site, TUDO MINUSCULO!
const pesquisado = [
    // 🎮 Jogos
    { termos: ["fc25", "fifa 25"], pagina: "../pages/jogos/FC25.html" },
    { termos: ["gta v", "gta", "grand theft auto v"], pagina: "../pages/jogos/GTAV.html" },
    { termos: ["half life", "half-life", "hl"], pagina: "../pages/jogos/halflife.html" },
    { termos: ["hollow knight", "hollowknight", "hollow"], pagina: "../pages/jogos/hollowKnight.html" },
    { termos: ["just dance 2017", "justdance2017", "justdance"], pagina: "../pages/jogos/justDance2017.html" },
    { termos: ["mais jogos", "mais"], pagina: "../pages/jogos/mais_jogos.html" },
    { termos: ["mk11", "mortal kombat 11", "mortal kombat"], pagina: "../pages/jogos/MK11.html" },
    { termos: ["ocarina of time", "ocarina", "zelda"], pagina: "../pages/jogos/OcarinaofTime.html" },
    { termos: ["red dead redemption 2", "rdr2", "red dead"], pagina: "../pages/jogos/RedDeadRedemption2.html" },
    { termos: ["roblox"], pagina: "../pages/jogos/Roblox.html" },
    { termos: ["the crew 2", "crew 2"], pagina: "../pages/jogos/theCrew2.html" },
    { termos: ["the last of us", "tlou", "last of us"], pagina: "../pages/jogos/theLastOfUs.html" },

    // 🕹️ Consoles
    { termos: ["nintendo switch", "switch"], pagina: "../pages/consoles/nintendoSwitch.html" },
    { termos: ["nintendo switch 2", "switch 2"], pagina: "../pages/consoles/nintendoSwitch2.html" },
    { termos: ["ps2", "playstation 2"], pagina: "../pages/consoles/PS2.html" },
    { termos: ["ps3", "playstation 3"], pagina: "../pages/consoles/PS3.html" },
    { termos: ["ps4", "playstation 4"], pagina: "../pages/consoles/PS4.html" },
    { termos: ["ps5", "playstation 5"], pagina: "../pages/consoles/PS5.html" },
    { termos: ["wii", "nintendo wii"], pagina: "../pages/consoles/wii.html" },
    { termos: ["xbox 360", "360"], pagina: "../pages/consoles/xbox360.html" },
    { termos: ["xbox series x", "xbox series", "series x"], pagina: "../pages/consoles/xboxSeriesX.html" },

    // 🎬 Filmes
    { termos: ["avangers", "avengers"], pagina: "../pages/filmes/avangers.html" },
    { termos: ["branquelas", "white chicks", "comedia americana"], pagina: "../pages/filmes/branquelas.html" },
    { termos: ["coraline"], pagina: "../pages/filmes/coraline.html" },
    { termos: ["minions"], pagina: "../pages/filmes/minions.html" },
    { termos: ["monstros"], pagina: "../pages/filmes/monstros.html" },
    { termos: ["minha mae e uma peca", "mae", "comedia brasileira"], pagina: "../pages/filmes/peca.html" },
    { termos: ["shrek"], pagina: "../pages/filmes/shrek.html" },
    { termos: ["up"], pagina: "../pages/filmes/up.html" },
    { termos: ["zootopia"], pagina: "../pages/filmes/zootopia.html" },

    // 📚 Livros
    { termos: ["e assim que acaba"], pagina: "../pages/livros/acaba.html" },
    { termos: ["anne"], pagina: "../pages/livros/anne.html" },
    { termos: ["biblioteca"], pagina: "../pages/livros/biblioteca.html" },
    { termos: ["coracao", "coração"], pagina: "../pages/livros/coracao.html" },
    { termos: ["empregada"], pagina: "../pages/livros/empregada.html" },
    { termos: ["estilhaca-me", "estilhaça", "estilhaca me", "estilhaça me"], pagina: "../pages/livros/estilhaca.html" },
    { termos: ["harry potter", "harry", "pedra filosofal", "harry potter pedra filosofal"], pagina: "../pages/livros/harry.html" },
    { termos: ["a mascara", "máscara"], pagina: "../pages/livros/mascara.html" },
    { termos: ["sanoman"], pagina: "../pages/livros/sanoman.html" },
    { termos: ["stranger", "stranger things"], pagina: "../pages/livros/stranger.html" },
    { termos: ["verao", "verão"], pagina: "../pages/livros/verao.html" },
    { termos: ["verity"], pagina: "../pages/livros/verity.html" },

    // 📺 Séries
    { termos: ["anne", "anne with an e"], pagina: "../pages/series/anne.html" },
    { termos: ["black mirror", "black"], pagina: "../pages/series/black.html" },
    { termos: ["breaking bad", "breaking"], pagina: "../pages/series/breaking.html" },
    { termos: ["bridgerton"], pagina: "../pages/series/bridgerton.html" },
    { termos: ["the chosen", "chosen"], pagina: "../pages/series/chosen.html" },
    { termos: ["dexter"], pagina: "../pages/series/dexter.html" },
    { termos: ["friends", "friends show"], pagina: "../pages/series/friendss.html" },
    { termos: ["game of thrones", "got"], pagina: "../pages/series/game_of_thrones.html" },
    { termos: ["la casa de papel", "lacasa", "casa de papel"], pagina: "../pages/series/lacasa.html" },
    { termos: ["rock"], pagina: "../pages/series/rock.html" },
    { termos: ["sherlock", "sherlock holmes"], pagina: "../pages/series/sherlock.html" },

    //Easter egg
    { termos: ["rebeca", "beca"], pagina: "../assets/img/rebeca.png" }
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