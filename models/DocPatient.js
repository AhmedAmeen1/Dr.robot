const {sequelize} = require('../db')
const {DataTypes} = require('sequelize');


const DocPatient = sequelize.define('DocPatient',{
    // thepatientid: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     references: {
    //       model: 'patients',
    //       key: 'id',
    //     }
    //   },
    //   thedoctorid:{
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     references: {
    //       model: 'doctors',
    //       key: 'id',
    //     }

    //   }
    
} , {timestamps:false }
)


module.exports = DocPatient;