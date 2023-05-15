const {sequelize} = require('../db')
const {DataTypes} = require('sequelize');

const Nurse = sequelize.define('Nurse',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type:DataTypes.STRING,
        validate:{
            max:150
        }
    },
    phoneNo:{
        type:DataTypes.INTEGER
    },
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.TEXT,
}, { timestamps: false }
)



module.exports = Nurse;