const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    'hospital',
    'drrobot1',
    'Graduationproject1',{
        dialect:'mysql',
        host:'azuregradproject.mysql.database.azure.com',
        dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false // only set to true if using a self-signed certificate
            }
          }
        }
);

const connectToDb = async ()=>{
    try{
        await sequelize.authenticate();
        console.log("Successfully connected to our db");
    }
    catch(error){
        console.log(error);
    }
}


module.exports = {sequelize , connectToDb};