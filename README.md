# Base - Node com Sequelize ORM e Express

Esse repositório tem como objetivo, servir como base para o desenvolvimento de aplicações com o uso de **NodeJS** e as bibliotecas **Sequelize** e **Express**.
Esse projeto utiliza sintaxe do **ES6** e é compilado usando Sucrase-Node

## Utilização

- Para começar a desenvolver, basta ativar o docker-compose atráves do `docker-compose up`. Um container para o banco e outro para a aplicação serão inicializados.

## Dependências utilizadas e Documentações

- [Express](https://expressjs.com/pt-br/)
- [Sequelize](https://sequelize.org/v5/)
  1. [Sequelize-CLI](https://github.com/sequelize/cli)
  2. [pg](https://www.npmjs.com/package/pg)
  3. [pg-hstore](https://www.npmjs.com/package/pg-store)
- [Nodemon](https://nodemon.io/)
  - [Sucrase](https://www.npmjs.com/package/sucrase)

## Estrutura de pastas

```
|-- .sequelizerc ➡️ Configura a CLI para a conexão com o banco
|-- Dockerfile ➡️ Configura o container que abriga o servidor Node
|-- README.md
|-- docker-compose.yml ➡️ Executa o container NodeJS e Postgres
|-- nodemon.json ➡️ Configra o Nodemon para usar o Sucrase
|-- package.json ➡️ Lista informações e dependências do projeto
|-- yarn.lock ➡️ Arquivo gerado pelo Yarn para versionamento das dependências
|-- .gitignore ➡️ Configura o git para ignorar a pasta node_modules
|-- src
    |-- routes.js ➡️ Contém todas as rotas da aplicação e suas respostas
    |-- server.js ➡️ Contém as configurações do servidor (Express)
    |-- config
    |   |-- db.js ➡️ Exporta a configuração da conexão do Node com o banco
    |-- controllers
    |-- db
    |   |-- index.js ➡️ Cria um objeto Sequelize para fazer operações no banco
    |   |-- migrations ➡️ Reune todas as Migrations para sincronização entre devs/produção
    |   |-- models ➡️ Reune os Modelos utilizados na aplicação
    |   |-- seeders ➡️ Reune arquivos para teste do banco através de semeamento
    |-- services ➡️ Reune as conexão com serviços externos
```

## Configurações pré-definidas

- **docker-compose**.yml
  - Define usuário, senha e nome do banco para: base
  - Redireciona a porta **5432** do container _DB_ para **5454** do _Host_
  - Define um volume para permitir o hot-reloading da aplicação (através do Nodemon)
- src/**server**.js
  - Configura o servidor Express para usar a porta **3333**
  - Configura o servidor Express para receber e enviar JSON
- src/**routes**.js
  - Configura uma rota "/" para testes no servidor
