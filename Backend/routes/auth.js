import express from 'express'
import { register, login, logout } from '../controllers/auth.js'
import { db } from '../db.js'

const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)

router.get("/register", (req, res)=>{
    const query = "SELECT * FROM users"
    db.query(query, (err, data)=>{
      res.json(data)
    })
  })


export default router