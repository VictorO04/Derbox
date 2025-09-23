  // Pega todos os destaques
  const destaques = document.querySelectorAll('.destaque');
  const bannerImg = document.querySelector('.banner-img');

    // Define as imagens que vão aparecer no banner ao passar o mouse
    const imagensBanner = {
    "The Legends of Zelda Ocarina of Time": "./../assets/img/OcarinaofTime_banner.png",
    "Red Dead Redemption 2": "./../assets/img/RedDeadRedemption2_banner.png",
    "Last Of Us": "./../assets/img/last_banner.png",
    "FC25": "./../assets/img/FC25_banner.png",
    "GTA": "./../assets/img/GTA_banner.png",
    "Hollow": "./../assets/img/Hollow_capa.png"
    };

  destaques.forEach(d => {
    d.addEventListener('mouseenter', () => {
      //Animaçãozinha (não sei escrever isso kkkkkk)
      d.style.transform = "translate(-80px)";
      d.style.transition = "all 0.6s ease";
      
      // Muda banner
      const key = d.alt.split(' ')[0]; // pega primeira palavra do alt
      if(imagensBanner[key]){
        bannerImg.src = imagensBanner[key];
      }
    });

    d.addEventListener('mouseleave', () => {
      // Volta ao normal
      d.style.transform = "translate(0, 0)";
      // Restaura banner original
      bannerImg.src = "./../assets/img/games_pc.png";
    });
  });