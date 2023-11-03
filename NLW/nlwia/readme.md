# Projeto NLW IA - Transcrição e Resumo de Vídeos do YouTube

Este é o projeto desenvolvido por Mateus Duarte durante a Next Level Week edição IA pela Rocketseat. Durante o evento, criamos uma aplicação que permite a transcrição e resumo de vídeos curtos do YouTube. A aplicação utiliza diversas tecnologias, incluindo HTML, CSS, JavaScript e Node.js, e faz uso de duas inteligências artificiais para realizar as tarefas principais: transcrição e resumo.

## Visão Geral

A aplicação é projetada para automatizar o processo de transcrição e resumo de vídeos curtos do YouTube em português. Ela realiza as seguintes etapas:

1. **Recebe um Vídeo do YouTube**: O usuário fornece o link de um vídeo curto do YouTube na aplicação.

2. **Converte o Vídeo em Áudio**: A aplicação utiliza parâmetros específicos para extrair o áudio do vídeo, preparando-o para a transcrição.

3. **Transcreve o Áudio em Texto em PT-BR**: Uma IA especializada em transcrição é acionada para converter o áudio do vídeo em texto em português brasileiro.

4. **Cria um Resumo do Texto**: O texto transcrito é enviado para outra IA que interpreta o conteúdo e cria um resumo conciso do vídeo.

5. **Exibe o Resumo ao Usuário**: O resumo gerado é apresentado ao usuário na aplicação.

## Tecnologias Utilizadas

O projeto faz uso das seguintes tecnologias:

- HTML: Utilizado para criar a estrutura da página da web.
- CSS: Responsável pela estilização e layout da aplicação.
- JavaScript: Usado para manipular a interface do usuário e interagir com as IAs.
- Node.js: Utilizado no lado do servidor para gerenciar as solicitações da aplicação.

## IAs Utilizadas

Duas inteligências artificiais desempenham papéis fundamentais na aplicação:

1. **Transcription IA**: Esta IA é responsável por transcrever o áudio do vídeo em texto no idioma português brasileiro.

2. **Summarize IA**: A segunda IA interpreta o texto da transcrição e cria um resumo conciso do conteúdo do vídeo.

## Como Executar o Projeto

Para executar este projeto em sua máquina, siga as etapas abaixo:

1. Certifique-se de que você possui o Node.js instalado. Caso contrário, você pode baixá-lo em [nodejs.org](https://nodejs.org/).

2. Clone este repositório no seu ambiente local.

```bash
git clone https://github.com/Mateuszdv/Projetos/tree/main/NLW/nlwia.git
```

3. Navegue até o diretório do projeto.

```bash
cd nlwia
```

4. Instale as dependências necessárias executando:
```bash
npm install
```


5. Após a instalação das dependências, você pode iniciar a aplicação com os seguintes comandos:
```bash
npm run server (Para iniciar o back-end)
npm run web (Para iniciar o front-end)
```

## Contribuições
Contribuições são bem-vindas. Sinta-se à vontade para abrir problemas (issues) ou enviar solicitações de pull (pull requests) para melhorar o projeto.

## Licença
Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para obter mais detalhes.

Desenvolvido com ❤️ por Mateus Duarte
