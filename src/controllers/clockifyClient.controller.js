import { ClockifyClient } from "../models/ClockifyClient.js";
import QueryTypes from "@sequelize/core";
import { sequelize } from "../database/database.js";

export async function getClients(req, res) {
  try {
    const [results] = await sequelize.query(
      `SELECT SUM(z_duration_totalhh) as horas, clientName as client, COUNT(DISTINCT name) as projects, clientId
      FROM clockify_projects GROUP BY client`,
      { type: QueryTypes.SELECT }
    );
    res.json(results);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getClient(req, res) {
  const { id } = req.params;
  try {
    const client = await ClockifyClient.findOne({
      where: { id },
      attributes: ["id", "name", "workspaceId", "ingested_at"],
    });
    res.json(client);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
