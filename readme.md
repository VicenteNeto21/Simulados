# Projeto de Simulados e Avaliações de Aprendizagem

Este repositório contém o código-fonte de uma aplicação de simulados e avaliações de aprendizagem, desenvolvida pela equipe composta por Lucio Cauper, Lucas Lima, Vitoria Kelly e Vicente Neto.

## Tecnologias Utilizadas

- Node.js
- ReactJS
- Docker
- PostgreSQL

## Instruções de Configuração

### Pré-requisitos

- Node.js e npm instalados
- Docker Desktop instalado

### Passos para Execução

1. Clone este repositório.
2. Na pasta `front` e na pasta `API`, execute o comando `npm i` para instalar as dependências.
3. Inicie o Docker Desktop e execute o seguinte comando para criar um contêiner do PostgreSQL:

   `docker run -d --name postgres -e POSTGRES_PASSWORD=123456 -e POSTGRES_DB=pi2 -p 5432:5432 postgres:latest`
### Na pasta da API:
- execute os comandos
    - `npm run migrate` 
    - `npm run dev`

### Na pasta do front-end:

- execute o comando `npm start` para iniciar o frontend.

<b> Observação:</b> Certifique-se de iniciar o Docker Desktop antes de prosseguir com a configuração, especialmente no ambiente Windows.