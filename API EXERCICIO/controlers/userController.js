import {db} from "../db.js"

export const getUsers = (_,res) =>{
    const q = "SELECT * FROM users;"
    db.query(q,(err,data)=>{
        if (err) return res.json(err);
        return res.status(200).json(data);
    })
}
export const getUsersById = (_,res) =>{
    const q = "SELECT * FROM users;"
    db.query(q)
}

export const postUsers = (req)=>{
 const q = "INSERT INTO users(nome,email) VALUES(?)";
    const values = [req.body.nome,req.body.email]
    db.query(q,[values])
}
