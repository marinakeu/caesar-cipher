# Cifra de César

## Introdução

O projeto "Cipher: mensagens secretas" foi desenvolvido a partir da situação-problema informada no briefing: o aniversário da sua mãe está se aproximando e para organizar uma  festa surpresa com amigues e familiares você precisa de uma aplicação que permita enviar mensagens criptografadas e depois descriptografar.

Utilizando, portanto, conceitos de UX para interface e de programação em JavaScript para escrever a lógica que cifra e decifra, foi desenhada uma aplicação simples, fácil e funcional para atender a demanda pontual dos usuários mencionados.

## Objetivos

1. Criar uma aplicação que pode ser facilmente utilizada pelo público alvo;
2. Permitir que o usuário digite um texto com letras maiúsculas e minúsculas, além de caracteres especiais para ser cifrado ou decifrado;
3. Permitir que o usuário escolha o deslocamento para cifrar ou decifrar, inclusive deslocamentos negativos;
4. Garantir que a aplicação possa ser testada de forma rápida com testes automatizados.

## Definição do produto

* Diagrama de blocos

Uma vez compreendidos o briefing e os requisitos básicos, foi possível desenvolver a lógica de funcionamento:

![Diagrama de blocos](https://uploaddeimagens.com.br/images/001/868/902/original/cipher-diagrama.png)


* HTML

O HTML foi estruturado em três <div> principais (página inicial, bloco para o usuário inputar as informações e bloco onde a mensagem cifrada/decifrada é exibida). Foram usadas as tags "input" (do tipo  number), "textarea" e button para inserir as infromações e para chamar as funções do JavaScript.

* CSS
O CSS desse projeto foi escrito com objetivo de garantir uma padronização estética da interface. Utilizou-se principalmente de classes para conferir o estilo às divs e botões.

* JavaScript

O arquivo JS principal (cipher.js) é composto por duas funções de manipulação das <div>, para exibi-las ou não  (showCipherPage e showInitialPage); duas para salvar os inputs do usuário, chamar a função de processamento da cifra e exibir o resultado (saveEncode e saveDecode); e as duas funções de cifrar/decifrar (encode e decode).

Já o arquivo de testes (tests.js) contém doze strings que testam o funcionamento da aplicação. Seis testam a criptografia e as outras seis, a função de decifrar.

* Outras considerações

As funções de cifrar/decifrar utilizam a tabela ASCII e se aplicam às letras maiúsculas e minúsculas. Os caracteres especiais são processados e devolvidos da forma como foram inseridos, sem deslocamento. 

## Resultados
Os objetivos do projeto foram alcançados. Todas as funcionalidades do requisito básico e as da Hacker Edition foram desenvolvidas na metade do prazo disponível (uma semana de duas disponíveis), além de uma prévia consistente da interface. O tempo restante (segunda semana) permitiu realizar os ajustes na interface e melhorar o fluxo de interação.

