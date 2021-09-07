import express from "express";
import { jwtVerify } from "./APIHelpers/middleware";
import db from "../../database/connection";

const router = express.Router();

// Retrieve from database

router.get("/school", async (req, res) => {
  const sql = `SELECT DATE_FORMAT(graduationDate, "%b %Y") as graduationDate, schoolID, schoolName, schoolLink, qualification FROM my_profile_app.school ORDER BY graduationDate;`;
  db.query(sql, function (error, results, fields) {
    if (error) throw error;
    return res.status(201).send(results);
  });
});


// Delete from database

router.delete(`/education/:schoolID`, jwtVerify, async (req, res) => {
  console.log(req.params);
  const sql = `DELETE FROM my_profile_app.school WHERE schoolID=${req.params.schoolID};`;

  db.query(sql, function (error, results, fields) {
    if (error) throw error;
    return res.status(201).send(results);
  });
});


export default router;
