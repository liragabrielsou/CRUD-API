import {db} from '../db.js';

export const getTask = (_,res)=>{ 
    const q = "SELECT * FROM tasks"
    db.query(q,(err,data)=>{
        if (err) return res.json(err);
        return res.status(200).json(data);
    })
}

export const postTask = (req) => {
    const q = "INSERT INTO tasks VALUES(null,?,?,?,?,?,?)"
    const values = [
        req.body.fk_usuario,
        req.descricao,
        req.setor,
        req.prioridade,
        req.dt_cadastro,
        req.status
    ]
    db.query(q, [values])
}

export const updateTask = (req,res) => {
  const q = "UPDATE tasks SET descricao=?, setor=?, prioridade=?, dt_cadastro=?, status=? WHERE id=?"
  const values = [
      req.body.descricao,
      req.body.setor,
      req.body.prioridade,
      req.body.dt_cadastro,
      req.body.status,
      req.params.id
  ]
  db.query(q, [...values, req.params.id])
}

export const deleteTask = (req,res) => {
    const q = "DELETE FROM tasks WHERE id=?"
    db.query(q, [req.params.id])
}
    