function crip() {
  const digitar_texto = document.getElementById("id_digite_seu_texto").value;

  function texto(params) {
    return params
      .replace(/a/g, "assat")
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
  }

  document.getElementById(
    "id_conteudo_principal_tela_dois_paragrafos_decodificadora"
  ).innerText = texto(digitar_texto);

  document.getElementById("id_butao_copiar").style.marginTop = "20pc";
  return digitar_texto.join("\nAqui vai a quebra de linha.\nE mais uma linha.");
}

function removerAcentos(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

document
  .getElementById("id_digite_seu_texto")
  .addEventListener("input", function (event) {
    const textoLimpio = removerAcentos(event.target.value);
    event.target.value = textoLimpio;
  });

document.getElementById(
  "id_conteudo_principal_tela_dois_paragrafos_decodificadora"
).style.fontSize = "36px";

function img() {
  document.getElementById("imagem__da__garota_de_joelho").style.display =
    "none";

  document.getElementById(
    "id_conteudo_principal_tela_decodificadora_p_nenhuma_mensagem"
  ).style.display = "none";

  document.getElementById(
    "id_conteudo_principal_tela_decodificadora_p_digite_um_texto"
  ).style.display = "none";

  document.getElementById("id_butao_copiar").style.display = "block";
}
