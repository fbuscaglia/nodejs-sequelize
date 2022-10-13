import { User } from "../models/User.js";
import bcrypt from "bcrypt";
import { generarJWT } from "../helpers/jwt.js";

export async function createUser(req, res) {
  try {
    const { id, name, email, password } = req.body;
    let usuario = await User.findOne({ where: { email: email } });
    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario ya existe",
      });
    }

    usuario = new User(req.body);

    // Encriptar contraseña
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();

    // Generar JWT
    const token = await generarJWT(usuario.email, usuario.name);

    res.status(201).json({
      ok: true,
      email: usuario.email,
      name: usuario.name,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
}

export async function getUsers(req, res) {
  try {
    const users = await User.findAll({
      attributes: ["email", "name"],
      order: [["name", "DESC"]],
    });
    res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function updateUser(req, res) {
  const { id } = req.params;
  try {
    const user = await User.findOne({
      attributes: ["name", "email", "id"],
      where: { id },
    });

    user.set(req.body);

    await user.save();

    res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function deleteUser(req, res) {
  const { id } = req.params;
  try {
    await User.destroy({
      where: { id },
    });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getUser(req, res) {
  const { id } = req.params;
  try {
    const user = await User.findOne({
      where: { id },
      attributes: ["id", "email", "name"],
    });
    res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function loginUsuario(req, res = response) {
  const { email, password } = req.body;
  
  try {
    let usuario = await User.findOne({ where: { email: email } });

    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario no existe con ese email",
      });
    }

    // Confirmar los passwords
    const validPassword = bcrypt.compareSync(password, usuario.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Password incorrecto",
      });
    }

    // Generar JWT
    const token = await generarJWT(usuario.id, usuario.name);

    res.json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

export async function revalidarToken(req, res = response) {
  const { id, name } = req;

  // Generar JWT
  const token = await generarJWT(id, name);

  res.json({
    ok: true,
    token,
  });
}
