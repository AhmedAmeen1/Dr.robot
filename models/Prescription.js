const {sequelize} = require('../db')
const {DataTypes} = require('sequelize');


const Prescription = sequelize.define('Prescription',{
    Diagnosis: {
        type: DataTypes.STRING,
    },
    Medicine: {
        type: DataTypes.STRING,
    },
    Advice: {
        type: DataTypes.TEXT,
    },
} , {timestamps:false }
)

module.exports = Prescription;