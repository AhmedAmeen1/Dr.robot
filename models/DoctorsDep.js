const {sequelize} = require('../db')
const {DataTypes} = require('sequelize');

const DoctorsDep = sequelize.define('DoctorsDep',{
    // id: {
    //     type: DataTypes.INTEGER,
    //     autoIncrement: true,
    //     allowNull: false,
    //     primaryKey: true
    //   },

} , { timestamps: false }
)


module.exports = DoctorsDep;