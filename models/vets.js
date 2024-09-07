import { DataTypes } from "sequelize";
import { dbConnection } from "../config/db.js";

const Vets = dbConnection.define("vets", {
  namevet: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Vets.sync();
export default Vets;
