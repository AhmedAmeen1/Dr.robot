const {sequelize} = require('../db')
const {DataTypes} = require('sequelize');
const Patient = require('./patient')

const Doctor = sequelize.define('doctor',{
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
    specialization: DataTypes.STRING,
    image: DataTypes.STRING,
    rate: DataTypes.FLOAT,
    fees: DataTypes.STRING,
    availableFrom: DataTypes.STRING,
}, { timestamps: false }
)



module.exports = Doctor;