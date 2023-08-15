const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement: true
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Image:{
      type : DataTypes.STRING,
      allowNull: false

    },

    Resumendelplato:{
      type: DataTypes.STRING,
      allowNull: false
    },
    NiveldeComidaSaludable:{
      type: DataTypes.ENUM("health score"),
      allowNull: false,

    },
    Pasoapaso:{
      type: DataTypes.STRING,
      allowNull: false
    }


  }, { timestamps: false });
};
