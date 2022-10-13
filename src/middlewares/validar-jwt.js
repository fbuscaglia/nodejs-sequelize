import { response } from "express";
import jwt from "jsonwebtoken";

export function validarJWT(req, res = response, next) {
  // x-token headers
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "No hay token en la petición",
    });
  }
  try {
    const { id, name } = jwt.verify(token, 'Esto-Es-Una-Palbr@-Secretaqwejsad@asdljasdknapito');
    req.id = id;
    req.name = name;
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: "Token no válido",
    });
  }

  next();
}
