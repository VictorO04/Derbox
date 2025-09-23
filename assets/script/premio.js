// Função para gerar um código aleatório
function gerarCodigo() {
  const caracteres = "ABDEFGHIJKLMNOPQRSTVWXYZ0123456789"
  let codigo = "DERBOX"
  for (let i = 0; i < 2; i++) {
    codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
  }
  return codigo
}

// Oq o botão vai fazer...
document.getElementById("btn-sorteio").addEventListener("click", () => {
  const codigo = gerarCodigo()
  document.getElementById("codigo-gerado").textContent = codigo;
})