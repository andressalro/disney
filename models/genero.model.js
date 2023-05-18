import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.config";

class Genero extends Model {}

Genero.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "Genero",
    tableName: "Generos",
    paranoid: true,
  }
);

export default Genero;
