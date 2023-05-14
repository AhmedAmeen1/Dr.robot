const {sequelize} = require('../db')
const {DataTypes} = require('sequelize');

const Disease = sequelize.define('disease',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: DataTypes.STRING,
    Description: DataTypes.STRING,
}, { timestamps: false }
)


module.exports = Disease;
