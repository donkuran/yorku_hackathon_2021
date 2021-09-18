import express from "express";
import bcrypt from "bcrypt";
import db from "../../database/connection";
import { validationCheckUsers } from "./APIHelpers/middleware";

const router = express.Router();

router.post("/", validationCheckUsers, async (req, res) => {
  const { name, email } = req.body;

  const password = await bcrypt.hash(req.body.password, 10);

  const sql = `INSERT INTO <table name> (email, password, student, recruiter) VALUES ("${email}", "${password}", "${student}", "${recruiter}");`;

  db.query(sql, function (error, results, fields) {
    if (error) throw error;
    return res.status(201).send(results);
  });
});

export default router;
