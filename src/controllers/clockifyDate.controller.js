import QueryTypes from "@sequelize/core";
import { sequelize } from "../database/database.js";

export async function getDateByClients(req, res) {
  const { clientId, dateFrom, dateTo } = req.params;
  try {
    const [results, metadata] = await sequelize.query(
      `SELECT DISTINCT te.id, start, te.userid as userId, prj.name as projectName, 
        prj.clientId, te.description ,taskId, usr.name, prj.id as projectiD, te.z_duration_totalhh as horas, 
        freshdesk_ticket_id as ticketId FROM clockify_users usr, clockify_time_entries te 
        INNER JOIN clockify_projects prj ON te.projectId = prj.id WHERE te.userid=usr.id
        AND prj.clientId = ?
        AND start BETWEEN ? AND ?
        ORDER BY ticketId DESC`,
      { replacements: [clientId, dateFrom, dateTo], type: QueryTypes.SELECT }
    );
    res.json(results);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getDateByProject(req, res) {
  const { projectId, dateFrom, dateTo } = req.params;
  try {
    const [results, metadata] = await sequelize.query(
      `SELECT DISTINCT te.id, start, te.userid as userId, prj.name as projectName, 
        prj.clientId, te.description ,taskId, usr.name, prj.id as projectiD, te.z_duration_totalhh as horas, 
        freshdesk_ticket_id as ticketId FROM clockify_users usr, clockify_time_entries te 
        INNER JOIN clockify_projects prj ON te.projectId = prj.id WHERE te.userid=usr.id
        AND te.projectId = ?
        AND start BETWEEN ? AND ?
        ORDER BY ticketId DESC`,
      { replacements: [projectId, dateFrom, dateTo], type: QueryTypes.SELECT }
    );
    res.json(results);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
