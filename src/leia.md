# MINHAS INSTRUÇÕES

Nesta src tem o arquivo `run.js`. Esse arquivo é o ponto de entrada (pois não quis alterar seus arquivos).

## Execute:

- `node ./src/run.js`

O arquivo está "hardcode" neste primeiro momento para testes!

## Observações:

- Eu criei alguns arquivos para separar a lógica de negócio.
- Deixar todo o código no  `index.js` não é o mais recomendado;
- Não precisa também criar um arquivo para cada "função". Mas é interessante dividir em arquivos seperados.

## Minha divisão

- `md-links` este é chamado por enquanto pelo arquivo `run.js`. Passo como argumentos o nome do arquivo e futuramente o `object` com as opções passadas em linha de commando
- `validate-file-extension` valida a extensão do arquivo
- `read-file` Lê o arquivo e faz o parse dos links. Além disso, retorna o array no formato requisitado pela Laboratória.

Alguns pontos do arquivo `read-file`:

- Eu ajustei nomes das variáveis para tentar deixar mais claro o que elas representam;
- Ajuste o return do promise utilizando a palavra reservada `return`;
- Além disso, chamei o método `catch`. Quando você chama o  `rejects` dentro de um promise, ele lança uma exceção. E você precisa capturar essa exceção dentro do catch;


Arquivo `validate-links`

- Criei esse arquivo para receber o link e retornar se é valida e não (statusCode e message [ok, fail])
- A chamada para esta função fica dentro do arquivo `read-file`. Toda vez que eu capto as informações de um  link (title, href, file), eu verifico se a opção `validate` é verdadeira. Se sim, chamo a função do arquivo `validate-link`

