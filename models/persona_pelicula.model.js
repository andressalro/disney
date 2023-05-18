import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.config";
import Personaje from "./personaje.model";
import Pelicula from "./pelicula.model";

class PersonajePelicula extends Model {}

PersonajePelicula.init(
  {
    personajeId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    peliculaId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "PersonajePelicula",
    tableName: "PersonajePelicula",
    timestamps: false,
  }
);
Personaje.belongsToMany(Pelicula, { through: "PersonajePelicula" });
Pelicula.belongsToMany(Personaje, { through: "PersonajePelicula" });
PersonajePelicula.belongsTo(Personaje);
PersonajePelicula.belongsTo(Pelicula);
Personaje.hasMany(PersonajePelicula);
Pelicula.hasMany(PersonajePelicula);
export default PersonajePelicula;
