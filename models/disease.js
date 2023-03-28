const {sequelize} = require('../db')
const {DataTypes} = require('sequelize');

const Disease = sequelize.define('disease',{
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