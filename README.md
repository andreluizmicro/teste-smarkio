# teste-smarkio
Seguir os passos para a execução do teste.

# Ao realizar o download do projeto, acesse a pasta do mesmo e rode os seguintes comandos no terminal:

# COMANDOS
## npm install 
## npm install express
## npm install express-handlebars
## npm install sequelize
## npm install mysql2

# Configuração do Banco de Dados
acesse o arquivo src/config/database.js e altere o o usuário e senha colocando suas credencias.

# PASSO 1 - Download do projeto teste-smarkio
# PASSO 2- Criação do Banco de Dados
1- Criar o Banco de Dados chamado de teste_smarkio 2- 1ª Forma de criar a base de dados e pegar o arquivo teste_smarkio.sql e rodar o código para criação do banco de dados. 2ª Froma: Criar Banco de dados chamado teste_smarkio * criar a tabela chamada comments com o seguintes campos -- -- Estrutura da tabela comments --

  CREATE TABLE `comments` (
    `id` int(11) NOT NULL,
    `comment` text NOT NULL,
    `createdAt` timestamp NULL DEFAULT NULL,
    `updatedAt` timestamp NULL DEFAULT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

  --
  -- Índices para tabelas despejadas
  --

  --
  -- Índices para tabela `comments`
  --
  ALTER TABLE `comments`
    ADD PRIMARY KEY (`id`);

  --
  -- AUTO_INCREMENT de tabelas despejadas
  --

  --
  -- AUTO_INCREMENT de tabela `comments`
  --
  ALTER TABLE `comments`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
  COMMIT;

  /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
  /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
  /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
# PASSO 3- Rodar no terminal na pasta do projeto o comando npm install para realizar o download das dependências do projeto.
# PASSO 4- Não é necessário rodar o projeto com o nodemon, basta rodar node app.js e o projeto estará rodando em localhost:3000/comments

node app.js
acesse o browser no caminho localhost:3000/comments

