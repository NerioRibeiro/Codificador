function c() {
  const tt = document.getElementById(
    "id_conteudo_principal_tela_dois_paragrafos_decodificadora"
  );
  const range = document.createRange();
  range.selectNodeContents(tt);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  try {
    document.execCommand("copy");
    alert("Texto copiado!");
  } catch (err) {
    alert("Falha ao copiar texto");
  }
  selection.removeAllRanges(); // Deseleciona o texto após copiar
}
