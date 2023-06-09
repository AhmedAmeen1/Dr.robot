const {sequelize} = require('../db')
const {DataTypes} = require('sequelize');

const Department = sequelize.define('departments',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Ename: DataTypes.STRING,
    Aname: DataTypes.STRING,
    note: DataTypes.TEXT,
}, { timestamps: false }
)


module.exports = Department;
