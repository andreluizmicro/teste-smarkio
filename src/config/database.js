const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'teste_smarkio',
  'username',
  'password',
  {
      host: "localhost",
      dialect: 'mysql'
  }
);

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};

sequelize.authenticate().then(function(){
  console.log("Conectado com sucesso!");
}).catch(function(err){
  console.log("Erro ao conecatar ao Banco de dados!" + err);
});