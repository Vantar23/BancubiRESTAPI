import pool from "../db.js";

export const getUserPadres = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM users_padres");
  res.json(rows);
};

export const getUserPadreById = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM users_padres WHERE id = ?", [
    req.params.id,
  ]);

  if (rows.length <= 0)
    return res.status(400).json({
      message: "User not found",
    });

  res.json(rows[0]);
};

export const createUserPadre = async (req, res) => {
  const { Nombre, Apellido, Contraseña, Hijos, NumeroTelefono } = req.body;
  const [rows] = await pool.query(
    "INSERT INTO users_padres (Nombre, Apellido, Contraseña, Hijos, NumeroTelefono) VALUES (?, ?, ?, ?, ?)",
    [Nombre, Apellido, Contraseña, Hijos, NumeroTelefono]
  );

  res.send({
    id: rows.insertId,
    Nombre,
    Apellido,
    Contraseña,
    Hijos,
    NumeroTelefono,
  });
};

export const deleteUserPadre = async (req, res) => {
  const [result] = await pool.query("DELETE FROM users_padres WHERE id = ?", [
    req.params.id,
  ]);

  if (result.affectedRows <= 0)
    return res.status(404).json({
      message: "User not found",
    });

  res.sendStatus(204);
};

export const updateUserPadre = async (req, res) => {
  const { id } = req.params;
  const { Nombre, Apellido, Contraseña, Hijos, NumeroTelefono } = req.body;

  const [result] = await pool.query(
    "UPDATE users_padres SET Nombre = ?, Apellido = ?, Contraseña = ?, Hijos = ?, NumeroTelefono = ? WHERE id = ?",
    [Nombre, Apellido, Contraseña, Hijos, NumeroTelefono, id]
  );

  if (result.affectedRows === 0)
    return res.status(404).json({
      message: "User not found",
    });

  const [rows] = await pool.query("SELECT * FROM users_padres WHERE id = ?", [
    id,
  ]);

  res.json(rows[0]);
};

export const validateUserPadre = async (req, res) => {
  const { Nombre, Contraseña } = req.body;

  const [rows] = await pool.query(
    "SELECT * FROM users_padres WHERE Nombre = ? AND Contraseña = ?",
    [Nombre, Contraseña]
  );

  if (rows.length <= 0) {
    return res.status(401).json({
      message: "Invalid username or password",
    });
  }

  res.json({
    message: "Authentication successful",
  });
};
