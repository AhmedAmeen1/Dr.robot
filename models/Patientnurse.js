const {sequelize} = require('../db')
const {DataTypes} = require('sequelize');

const Patientnurse = sequelize.define('Patientnurse',{
    // id: {
    //     type: DataTypes.INTEGER,
    //     autoIncrement: true,
    //     allowNull: false,
    //     primaryKey: true
    //   },

} , { timestamps: false }
)


module.exports = Patientnurse;