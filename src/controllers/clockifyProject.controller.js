import { ClockifyProject } from "../models/ClockifyProject.js";
import QueryTypes from "@sequelize/core";
import { sequelize } from "../database/database.js";

export async function getProjects(req, res) {
  try {
    const [results, metadata] = await sequelize.query(
      `SELECT DISTINCT name, clientName as client, id, clientId, SUM(z_duration_totalhh) as 
      horas FROM clockify_projects GROUP BY name ORDER BY horas DESC`,
      { type: QueryTypes.SELECT }
    );
    res.json(results);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getProject(req, res) {
  const { id } = req.params;
  try {
    const client = await ClockifyProject.findOne({
      where: { id },
      attributes: ["id", "name", "ingested_at"],
    });
    res.json(client);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
