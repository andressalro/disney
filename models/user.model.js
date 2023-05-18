import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.config";

export const User = sequelize.define("User", {
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  mail: {
    type: DataTypes.STRING,
    unique: true,
  },
  credential: {
    type: DataTypes.STRING,
  },
});
