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
    Type: DataTypes.STRING,
    Taken: DataTypes.STRING,
    Analysis: DataTypes.STRING,
    Analysistype: DataTypes.STRING,
    PatientCondition: DataTypes.STRING,
    X_Ray: DataTypes.STRING,
} , {timestamps:false }
)

module.exports = Prescription;