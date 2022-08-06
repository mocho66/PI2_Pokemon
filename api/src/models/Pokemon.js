const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    // DataTypes.INTEGER son valores entre -2,147,483,647 y 2,147,483,647 para validar luego el valor
    life: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: "https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/ef1b5-ash-y-pikachu-png.png?fit=900%2C900&ssl=1"
    },
    image2: {
      type: DataTypes.STRING,
      defaultValue: "https://i.pinimg.com/originals/34/c1/e5/34c1e5d371d64a581b1902ec5c4509f4.png"
    },
    image3: {
      type: DataTypes.STRING,
      defaultValue: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png"
    },
    create: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
  },{
    timestamps: false
  });
};