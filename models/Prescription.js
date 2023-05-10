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
    Dosage: DataTypes.STRING,
    Duration: DataTypes.STRING,
    Repeat: DataTypes.STRING,
    Timeofday: DataTypes.STRING,
    Taken: DataTypes.STRING,

} , {timestamps:false }
)

module.exports = Prescription;