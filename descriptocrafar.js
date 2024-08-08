function descrip() {
  const digitar_texto = document.getElementById("id_digite_seu_texto").value;

  function texto(params) {
    return params
      .replace(/ai/g, " a ")
      .replace(/enter/g, " e ")
      .replace(/imes"/g, " i ")
      .replace(/ober"/g, " o ")
      .replace(/ufat"/g, " u ");
  }

  document.getElementById(
    "id_conteudo_principal_tela_dois_paragrafos_decodificadora"
  ).innerText = texto(digitar_texto);

  document.getElementById("id_butao_copiar").style.marginTop = "20pc";
  document.getElementById(
    "id_conteudo_principal_tela_dois_paragrafos_decodificadora"
  ).style.fontSize = "36px";
}
