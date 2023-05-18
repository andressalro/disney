import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.config";
import Genero from "./genero.model";
import Pelicula from "./pelicula.model";

class GeneroPelicula extends Model {}

GeneroPelicula.init(
  {
    generoId: {
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
    modelName: "GeneroPelicula",
    tableName: "GeneroPelicula",
    timestamps: false,
  }
);
Genero.belongsToMany(Pelicula, { through: "GeneroPelicula" });
Pelicula.belongsToMany(Genero, { through: "GeneroPelicula" });
GeneroPelicula.belongsTo(Genero);
GeneroPelicula.belongsTo(Pelicula);
Genero.hasMany(GeneroPelicula);
Pelicula.hasMany(GeneroPelicula);
export default GeneroPelicula;
