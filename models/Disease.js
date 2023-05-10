const {sequelize} = require('../db')
const {DataTypes} = require('sequelize');

const Disease = sequelize.define('disease',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: DataTypes.STRING,
    Description: DataTypes.TEXT,
}, { timestamps: false }
)


module.exports = Disease;
