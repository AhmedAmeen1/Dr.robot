const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    'hospital',
    'root',
    'password',{
        dialect:'mysql',
        host:'127.0.0.1'
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