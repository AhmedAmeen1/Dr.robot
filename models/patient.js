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
        allowNull:false,
        validate:{
            max:150,
        }
    },
    lname:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            max:150,
        }
    },
    phoneNo:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    age:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    gender:{
        type:DataTypes.STRING,
        allowNull:false,
    },

    email: {
        type:DataTypes.STRING,
        allowNull:false
    },
    password: {
        type:DataTypes.STRING,
        allowNull:false
    },
    nationalnumber: {
        type:DataTypes.STRING,
        allowNull:false
    },
    address: {
        type:DataTypes.STRING,
        allowNull:false
    },
    bloodType: {
        type:DataTypes.STRING,
        allowNull:false
    },

    medicalHistory: DataTypes.STRING,
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
    ambient_temperature: DataTypes.INTEGER,
}, { timestamps: false }
 );




module.exports = Patient;
