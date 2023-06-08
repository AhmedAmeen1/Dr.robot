const {sequelize} = require('../db')
const {DataTypes} = require('sequelize');
const Appointment = require('./Appointment');

const Patient = sequelize.define('patient',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    fname:{
        type:DataTypes.STRING,
        validate:{
            max:150
        }
    },
    lname:{
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
    X_Ray_done: DataTypes.BOOLEAN,
    Analysis_done: DataTypes.BOOLEAN,
    Medicine_done: DataTypes.BOOLEAN,
    Serum_done: DataTypes.BOOLEAN,
    Reviewed_devices: DataTypes.BOOLEAN,
    
}, { timestamps: false }
 );




module.exports = Patient;
