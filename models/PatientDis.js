const {sequelize} = require('../db')
const {DataTypes} = require('sequelize');


const PatientDis = sequelize.define('PatientDis',{
    thepatientid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'patients',
          key: 'id',
        }
      },
      thediseaseid:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'diseases',
          key: 'id',
        }

      }
    
} , { timestamps: false }
)


module.exports = PatientDis;