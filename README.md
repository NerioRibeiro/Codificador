Projeto Codificador
Este projeto é um codificador simples de texto, permitindo que os usuários digitem, visualizem e copiem textos com facilidade. O objetivo é fornecer uma interface intuitiva para manipulação de texto, incluindo recursos para remover acentos, transformar letras em minúsculas e quebrar linhas corretamente.

Funcionalidades
Entrada de Texto: Um campo de texto que permite ao usuário digitar seu conteúdo.
Transformação de Texto: Conversão automática do texto para letras minúsculas e remoção de acentos.
Quebra de Linhas e Palavras: Gerenciamento de quebras de linha e palavras longas dentro do campo de texto.
Cópia para Área de Transferência: Um botão que permite copiar o conteúdo do campo de texto para a área de transferência.
Limitação de Altura: Limitação da altura do campo de texto com barra de rolagem automática.
Estrutura do Projeto

    function removerAcentos(texto) {
      return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    }

    document.getElementById('id_digite_seu_texto').addEventListener('input', function(event) {
      const textoLimpio = removerAcentos(event.target.value);
      event.target.value = textoLimpio;
    });

    function copiarTexto() {
      const textarea = document.getElementById('id_digite_seu_texto');
      textarea.select();
      document.execCommand('copy');
      alert('Texto copiado para a área de transferência!');
    }

Como Usar
Abra o Projeto: Abra o arquivo HTML no seu navegador.
Digite o Texto: Digite o texto desejado no campo de texto.
Transformação Automática: Observe a transformação automática para letras minúsculas e remoção de acentos enquanto digita.
Copiar Texto: Clique no botão "Copiar texto" para copiar o conteúdo para a área de transferência.
Personalização
Altura do Textarea: Modifique a propriedade height no CSS para ajustar a altura do campo de texto.
Estilos: Customize o estilo do campo de texto e do botão conforme necessário no bloco de estilo CSS.
Funcionalidade de Texto: Ajuste a função removerAcentos no JavaScript para adicionar ou modificar transformações de texto.
Contribuição
Sinta-se à vontade para contribuir com melhorias ou novas funcionalidades para este projeto. Faça um fork do repositório, crie uma branch com suas alterações e envie um pull request.

Licença
Este projeto é licenciado sob a MIT License.

Autor
Desenvolvido por Nério Ribeiro.

Contato
Para dúvidas ou sugestões, entre em contato pelo email: nerioribeirocosta@gmail.com.

