import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.config";

class Pelicula extends Model {}

Pelicula.init(
  {
    imagen: {
      type: DataTypes.STRING,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    calificacion: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "Pelicula",
    tableName: "Peliculas",
  }
);
export default Pelicula;
