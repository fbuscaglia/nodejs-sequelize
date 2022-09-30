import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const ClockifyClient = sequelize.define("clockify_clients", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  workspaceId: {
    type: DataTypes.STRING,
  },
  archived: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
  note: {
    type: DataTypes.STRING,
  },
  ingested_at: {
    type: DataTypes.DATE,
  },
});
