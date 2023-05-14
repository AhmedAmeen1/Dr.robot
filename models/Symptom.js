const {sequelize} = require('../db')
const {DataTypes} = require('sequelize');

const Symptom = sequelize.define('symptom',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: DataTypes.STRING,
    Description: DataTypes.TEXT,
}, { timestamps: false }
)


module.exports = Symptom;
