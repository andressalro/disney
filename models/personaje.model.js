import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.config";
import Pelicula from "../models";

const Personaje = sequelize.define("Personaje", {
  imagen: {
    type: DataTypes.STRING,
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
});

Personaje.belongsToMany(Pelicula, { through: "PersonajePelicula" });

export default Personaje;
