const {sequelize} = require('../db')
const {DataTypes} = require('sequelize');
const Appointment = require('./Appointment');

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
    medicalHistory: DataTypes.STRING,
    bloodType: DataTypes.STRING,
    BloodPressure: DataTypes.BOOLEAN,
    Diabetes: DataTypes.BOOLEAN,
    Allergic: DataTypes.BOOLEAN,
    Surgery: DataTypes.BOOLEAN,
    Cancer: DataTypes.BOOLEAN,
    Pregnant: DataTypes.BOOLEAN,
    Smoker: DataTypes.BOOLEAN,
    temperature: DataTypes.INTEGER,
    
    
}, { timestamps: false }
 );




module.exports = Patient;
