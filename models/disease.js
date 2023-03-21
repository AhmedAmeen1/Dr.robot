const {sequelize} = require('../db')
const {DataTypes} = require('sequelize');

const Disease = sequelize.define('Disease',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    note: DataTypes.TEXT,
    Description: DataTypes.TEXT,
}, { timestamps: false }
)


module.exports = Disease;