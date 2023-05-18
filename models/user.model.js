import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.config";

class User extends Model {}

User.init(
  {
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
  },
  {
    sequelize,
    modelName: "User",
    tableName: "User",
  }
);
export default User;
