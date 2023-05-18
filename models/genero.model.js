import { sequelize } from "../config/db.config";
import { DataTypes } from "sequelize";
import Pelicula from "../models";

const Genero = sequelize.define("Genero", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imagen: {
    type: DataTypes.STRING,
  },
});

Genero.belongsToMany(Pelicula, { through: "PersonajePelicula" });

export default Genero;
