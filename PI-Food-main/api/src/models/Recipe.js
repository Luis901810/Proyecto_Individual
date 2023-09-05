const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true
      },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value){
        this.setDataValue("title",value.toLowerCase())
      }},

    image:{
      type: DataTypes.STRING,
      allowNull: false
    },

    healthScore:{
      type: DataTypes.INTEGER,
      allowNull: false
    },

    summary:{
      type: DataTypes.STRING,
      allowNull: false
    },

    instructions:{
      type: DataTypes.TEXT,
      allowNull: true
    },   

  },{timestamps:false});
};

