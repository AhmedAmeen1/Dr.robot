const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    dialect: 'mysql',
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
});

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