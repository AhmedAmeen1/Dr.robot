const {sequelize} = require('../db')
const {DataTypes} = require('sequelize');
const DocPatient = require('./DocPatient');

const Patient = sequelize.define('patient',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type:DataTypes.STRING,
        validate:{
            max:150
        }
    },
    phoneNo:{
        type:DataTypes.INTEGER
    },
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.TEXT,
    nationalnumber: DataTypes.INTEGER,
    address: DataTypes.TEXT,
    
}, { timestamps: false }
 );




module.exports = Patient;
