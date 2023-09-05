const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>{
    // defino modelos o tabla
    sequelize.define("diets", {
        id:{
           
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
           
           
        },
       name:{
            type :DataTypes.ENUM("vegetarian","gluten free","dairy free","lacto ovo vegetarian","vegan","paleolithic","primal","whole 30","pescatarian","ketogenic","fodmap friendly"),
            allownulls:false,
            set(value){
                this.setDataValue("name", value.toLowerCase())
            }
        }
    },{timestamps: false})
}