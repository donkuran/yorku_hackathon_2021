import express from "express";
import { validationCheckEntries } from "./APIHelpers/middleware";
import db from "../../database/connection";

const router = express.Router();

router.post('/', validationCheckEntries, async (req, res) => {
const {
  name,
  email,
  phoneNumber,
  subject,
  message,
} = req.body;

const sql = `INSERT INTO user (name, email, phoneNumber, subject, message) VALUES ("${name}" , "${email}", "${phoneNumber}", "${subject}", "${message}");`;

  db.query(sql,
    function (error, results, fields) {
      if (error) throw error;
      return res.status(201).send(results);
    }
  );
});

router.get("/", async (req, res) => {
  const sql = `SELECT DATE_FORMAT(create_at, "%b %d %y %r") as create_at, userID, name, phoneNumber, email, subject, message FROM my_profile_app.user ORDER BY userID DESC;`;
db.query(sql, function (error, results, fields) {
  if (error) throw error;
  return res.status(201).send(results);
});
});

router.delete(`/:userID`, async (req, res) => {
  const sql = `DELETE FROM my_profile_app.user WHERE userID=${req.params.userID};`;

db.query(sql, function (error, results, fields) {
  if (error) throw error;
  return res.status(201).send(results);
});
});

export default router;
