import { ClockifyClient } from "../models/ClockifyClient.js";

export async function getClients(req, res) {
  try {
    const clients = await ClockifyClient.findAll({
      attributes: ["id", "name", "workspaceId", "ingested_at"],
      order: [["id", "DESC"]],
    });
    res.json(clients);
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
