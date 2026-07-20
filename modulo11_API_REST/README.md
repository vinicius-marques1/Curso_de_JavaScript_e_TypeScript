# API REST de Cadastro de Alunos

Este projeto é uma API REST desenvolvida em Node.js com Express para gerenciar informações de alunos, usuários e fotos associadas aos estudantes.

## Propósito

O objetivo principal deste projeto é praticar e demonstrar o desenvolvimento de uma API REST com autenticação, persistência de dados e upload de arquivos, utilizando boas práticas de organização e estruturação de código.

## Funcionalidades

- Cadastro, listagem, edição e exclusão de alunos
- Cadastro e gerenciamento de usuários
- Autenticação com JWT
- Proteção de rotas por middleware de autenticação
- Upload de fotos relacionadas a alunos
- Persistência de dados com banco relacional

## Stack utilizada

- Node.js
- Express
- Sequelize
- MariaDB
- JWT (JSON Web Token)
- Multer
- bcryptjs
- dotenv
- Nodemon
- ESLint

## Tecnologias e ferramentas

- JavaScript/ES6+
- REST API
- Banco de dados relacional
- Docker Compose para o ambiente de banco de dados
- Arquitetura em camadas com controllers, models, routes e middlewares

## Estrutura do projeto

- src/controllers: lógica das rotas e requisições
- src/models: modelos de dados do Sequelize
- src/routes: definição das rotas da API
- src/middlewares: middlewares de autenticação e validação
- src/database: configuração do banco e migrations
- uploads: arquivos enviados pelos usuários

## Observação

Este projeto foi desenvolvido com propósito de estudos.
