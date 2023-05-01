const {sequelize} = require('../db')
const {DataTypes} = require('sequelize');


const Appointment = sequelize.define('Appointment',{
    Date: {
        type: DataTypes.STRING,
    },
    Time: {
        type: DataTypes.STRING,
    },
    Reason: {
        type: DataTypes.TEXT,
    },
    Specilization: {
        type: DataTypes.TEXT
    }
} , {timestamps:false }
)

module.exports = Appointment;