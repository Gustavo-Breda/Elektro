# Elektro

**Status**: em desenvolvimento 

![Badge](https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=white)
![Badge](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Badge](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![Badge](https://img.shields.io/badge/Expo-FFFFFF?style=for-the-badge&logo=expo&logoColor=000020)
![Badge](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

## Tabela de Conteúdo

1. [Tecnologias utilizadas](#tecnologias-utilizadas)
2. [Download](#download)
3. [Instalação](#instalação)
4. [Configuração](#configuração)
5. [Uso](#uso)
6. [Autores](#autores)


<br>


## Tecnologias utilizadas

Essas são as frameworks e ferramentas que você precisará instalar para desenvolver esse projeto:

- React Native
- Prisma
- Expo
- Node.js

## Download 

Para que seja possível a execução dos arquivos deste repositório, o usuário deve clonar através da ferramenta git. Abrindo o terminal do seu sistema operacional ou o GitBash, insira o seguinte comando na pasta desejada:

``` bash
$ git clone https://github.com/Gustavo-Breda/Elektro.git
```

## Instalação 
Para o correto funcionamento do aplicativo, terão que ser feitas as instalações das dependências, tanto da pasta backend, quanto da pasta frontend. Para isso entre na pasta que foi clonada pelo comando e exclua a pasta .git:

``` bash
$ cd Elektro
$ rm -r .git
```

### Pasta backend
Abra um terminal, execute esses comandos e as dependências do back serão instaladadas na pasta `backend`:

``` bash 
$ npm install -g lemon-pie-cli
```

``` bash
$ cd backend
$ npm install
```

### Pasta frontend
Abra outro terminal, execute esses comandos e as dependências do front serão instaladadas na pasta `frontend`:

``` bash 
$ npm install -g expo-cli
```

``` bash
$ cd frontend
$ yarn install
```

## Configuração
Antes de rodar, renomeie em `backend` e `frontend` os arquivos `.env.example` para `.env` e adicione suas variáveis de ambiente

No terminal em `backend`, rodes os comandos de configuração do servidor:

``` bash
$ npm run keys
$ npx prisma migrate dev --name init
```

## Uso
No terminal em `backend`, execute o seguinte comando servindo Elektro um servidor customizado ao executar no frontend:

``` bash
npm run dev ou npm start
```

No terminal em `frontend`, execute o seguinte comando inicializando Elektro: 

``` bash
npm start
```

## Autor
- Gustavo Breda


<br>


## Última atualização: 27/08/2024
