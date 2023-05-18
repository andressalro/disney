import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.config";
import Personaje from "../models";
import Genero from "../models";

const Pelicula = sequelize.define("Pelicula", {
  imagen: {
    type: DataTypes.STRING,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fechaCreacion: {
    type: DataTypes.DATE,
  },
  calificacion: {
    type: DataTypes.INTEGER,
  },
});

Pelicula.belongsToMany(Personaje, { through: "PersonajePelicula" });
Pelicula.belongsToMany(Genero, { through: "GeneroPelicula" });

export default Pelicula;
