import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.config";
import Pelicula from "./pelicula.model";

class Personaje extends Model {}

Personaje.init(
  {
    imagen: {
      type: DataTypes.BLOB,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    edad: {
      type: DataTypes.INTEGER,
    },
    peso: {
      type: DataTypes.DECIMAL(5, 2),
    },
    historia: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: "Personaje",
    tableName: "Personajes",
    paranoid: true,
  }
);

export default Personaje;
