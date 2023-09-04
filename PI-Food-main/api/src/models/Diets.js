const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>{
    // defino modelos o tabla
    sequelize.define("diets", {
        id:{
           
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
           
           
        },
       name:{
            type :DataTypes.STRING,
            allownulls:false,
            unique: true,
            set(value){
                this.setDataValue("name", value.toLowerCase())
            }
        }
    },{timestamps: false})
}