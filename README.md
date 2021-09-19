# Portal Web

Neste guia iremos configurar o ambiente de desenvolvimento, clonando o projeto e instalando suas dependências, além de mostrar como executá-lo. Ainda neste guia é possível encontrar uma breve explicação da estrutura das pastas adotada para a construção em equipe desse projeto.
> :desktop_computer: Para acessar o protótipo, acesse: [https://polaris-fatec.netlify.app/](https://polaris-fatec.netlify.app/)

### Links úteis (para antes de clonar o repositório)
- [Instalação das ferramentas](https://www.notion.so/Instala-o-das-ferramentas-405f3e8b014649cbb422dee6b5bd0535): como instalar o Node, NPM ou Yarn e o Visual Studio Code (tutoriais para Windows, MacOS e Linux)
- [Atualização (caso já tenha as ferramentas](https://www.notion.so/Atualiza-o-vers-es-diferentes-09abff4d88d44c459a7c7a925ad15bfa): se já passou pelo processo de instalação do Node, NPM e Yarn alguma vez, realize este tutorial para garantir as versões mais recentes das ferramentas (para Windows, MacOS e Linux)
- [Caso surja algum problema...](https://www.notion.so/Tive-problemas-e-agora-c67378e1319d4723a3211aad8eb987c6)

  
## Clonando projeto
Com todas as ferramentas necessárias devidamente instaladas, baixe ou clone este repositório pelo terminal seguindo passo a passo descrito abaixo.

```bash
# Baixe este repositório ou clone pelo Git usando o comando:
$ git clone https://github.com/Equipe-Polaris-DSM-2021/web.git

# Acesse a pasta do projeto
$ cd web-main

# Instale as dependências do projeto (são listadas no arquivo package.json)
$ npm install
# ou
$ yarn

# Execute o projeto
$ npm start
# ou
$ yarn start
```
Agora o servidor deste projeto está ativo. É só acessar pelo localhost na porta 3333: [https://localhost:3333]!


## Explicação da estrutura das pastas

| Pasta                             | Definição                                                                                         |
| :-------------------------------- | :------------------------------------------------------------------------------------------------ |
| :open_file_folder: node_modules/  | Armazena as bibliotecas (dependências) usadas pelo projeto                                        |
| :open_file_folder: public/        | Pasta pública do projeto acessível ao público geral por meio de um servidor web                   |
| :open_file_folder: src/assets     | Pasta de arquivos visuais (imagens, estilização (css), componentes, fontes, lottieJSONs, scss...) |
| :open_file_folder: src/components | Código fonte dos componentes do projeto (botões, rodapés, cabeçalhos, barra de navegação..)       |
| :open_file_folder: src/pages      | Código fonte das páginas do projeto                                                               |
| :open_file_folder: src/services   | Arquivos de serviços externos utilizados no projeto como a nossa API                              |
| :page_facing_up: package.json     | Arquivo usado para gerenciar as dependências do projeto, scripts e versões                        |


### Tecnologias utilizadas
As seguintes tecnologias e ferramentas estão sendo utilizadas neste projeto:

- [Figma](http://www.figma.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://pt-br.reactjs.org/)
- [Leaflet.js](https://leafletjs.com/reference-1.7.1.html)
- [React Leaflet](https://react-leaflet.js.org/)
