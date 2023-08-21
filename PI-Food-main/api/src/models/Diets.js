const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>{
    // defino modelos o tabla
    sequelize.define("diets", {
        id:{
           
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
           
        },
       name:{
            type :DataTypes.STRING,
            allownulls:false,
            unique: true,
            set(value){
                this.setDataValue("name", value.tolowerCase())
            }
        }
    },{timestamps: false})
}