import express from "express";
import * as jwtGenerator from "jsonwebtoken";
import bcrypt from "bcrypt";
import db from "../../database/connection";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    // console.log(req.body)
    const { email, password } = req.body;
    db.query(
      "SELECT * FROM <table name> WHERE email=?",
      [email],
      async (error, results) => {
        // console.log(results);
        if (results.length === 0) {
          return res.status(401).json({
            message: "Invalid Email or Password"
          });
        } else if (!(await bcrypt.compare(password, results[0].password))) {
          return res.status(401).json({
            message: "Invalid Email or Password"
          });
        } else {
          const id = results[0].id;

          const token = jwtGenerator.sign(
            { id },
            process.env.ACCESS_JWT_SECRET,
            {
              expiresIn: process.env.JWT_EXPIRES_IN,
            }
          );
          return res.status(200).json({ token });
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
});
export default router;
