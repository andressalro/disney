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
      type: DataTypes.BLOB,
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
