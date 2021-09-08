import express from "express";
import db from "../../database/connection";
import { validateResumeUpdateEntry } from "./APIHelpers/middleware";

const router = express.Router();

// Create

router.post("/education", async (req, res) => {
  db.query(
    "INSERT INTO school (schoolName, schoolLink, qualification, graduationDate) VALUES (?, ?, ?, ?)",
    [req.body.schoolName, req.body.schoolLink, req.body.qualification, req.body.graduationDate],

    function (error, results, fields) {
      if (error) throw error;
      return res.status(201).send(results);
    }
  );
});


// Update

router.put(
  `/education/:schoolID`,
  validateResumeUpdateEntry,
  async (req, res) => {
    console.log(req.body);
    let query = res.locals.query;

    const sql = `UPDATE my_profile_app.school SET ${query.toString()} WHERE schoolID=${
      req.params.schoolID
    }`;

    db.query(sql, function (error, results, fields) {
      if (error) throw error;
      return res.status(200).send(results);
    });
  }
);

export default router;
