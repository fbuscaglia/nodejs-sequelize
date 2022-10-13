import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const ClockifyProject = sequelize.define("clockify_projects", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  projectId: {
    type: DataTypes.STRING,
  },
  clientId: {
    type: DataTypes.STRING,
  },
  workspaceId: {
    type: DataTypes.STRING,
  },
  duration: {
    type: DataTypes.STRING,
  },
  z_duration_hh: {
    type: DataTypes.INTEGER,
  },
  z_duration_mm: {
    type: DataTypes.INTEGER,
  },
  z_duration_totalmm: {
    type: DataTypes.DECIMAL,
  },
  z_duration_totalhh: {
    type: DataTypes.DECIMAL,
  },
  clientName: {
    type: DataTypes.STRING,
  },
  note: {
    type: DataTypes.STRING,
  },
  budgetEstimate: {
    type: DataTypes.STRING,
  },
  public: {
    type: DataTypes.STRING,
  },
  billable: {
    type: DataTypes.BOOLEAN,
  },
  archived: {
    type: DataTypes.BOOLEAN,
  },
  ingested_at: {
    type: DataTypes.DATE,
  },
});
