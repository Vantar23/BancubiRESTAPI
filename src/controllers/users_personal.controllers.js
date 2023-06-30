import pool from "../db.js";

export const getUserPersonal = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM users_personal");
  console.log(req.body);
  res.json(rows);
};

export const getUserPersonalById = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM users_personal WHERE ID = ?", [
    req.params.id,
  ]);

  if (rows.length <= 0)
    return res.status(400).json({
      message: "User not found",
    });
  res.json(rows[0]);
};

export const createUserPersonal = async (req, res) => {
  const { Usuario, Contraseña } = req.body;
  const [rows] = await pool.query(
    "INSERT INTO users_personal (Usuario, Contraseña) VALUES (?,?)",
    [Usuario, Contraseña]
  );
  console.log(req.body);
  res.send({
    id: rows.insertId,
    Usuario,
    Contraseña,
  });
};

export const deleteUserPersonal = async (req, res) => {
  const [result] = await pool.query(
    "DELETE FROM users_personal WHERE id = ?", [req.params.id]
  )
  if (result.affectedRows <= 0)
  return res.status(404).json({
    message: "User not found",
  })

res.sendStatus(204);
}

export const updateUserPersonal = async (req, res) => {
    const {id} = req.params
    const {Usuario, Contraseña} = req.body
    
    const [result] = await pool.query('UPDATE users_personal SET Usuario = IFNULL(?, Usuario), Contraseña = IFNULL(?, Contraseña) WHERE id = ?', [Usuario, Contraseña, id])

    if (result.affectedRows === 0) return res.status(404).json({
        message: "User not found"
    })

    const [rows] = await pool.query('SELECT * FROM users_personal WHERE id = ?', [id])

    res.json(rows[0])
}

export const validateUserPersonal = async (req, res) => {
  const { Usuario, Contraseña } = req.body;

  const [rows] = await pool.query(
    "SELECT * FROM users_personal WHERE Usuario = ? AND Contraseña = ?",
    [Usuario, Contraseña]
  );

  if (rows.length <= 0) {
    return res.status(401).json({
      message: "Invalid username or Contraseña",
    });
  }

  res.json({
    message: "Authentication successful",
  });
};
