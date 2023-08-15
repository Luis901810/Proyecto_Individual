const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>{
    // defino modelos o tabla
    sequelize.define("diets", {
        id:{
           
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
           
        },
        Nombre:{
            type :DataTypes.STRING,
            allownulls:false
        }
    },{timestamps: false})
}