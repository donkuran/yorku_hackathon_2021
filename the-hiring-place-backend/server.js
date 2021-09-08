import express from "express";
import cors from "cors";
import login from "./src/API/authentication";
import message from "./src/API/message";
import signup from "./src/API/signup";
import createProfile from "./src/API/createProfile";
import maintainProfile from "./src/API/maintainProfile";
import { jwtVerify } from "./src/API/APIHelpers/middleware";
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.ENV_PORT || 3000;

var corsOptions = {
  origin: "http://my-profile.don-kur.me",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.options("*", cors());
app.use(express.json());
app.use(cookieParser());

app.get("/api/ping", (req, res) => {
  res.send({
    msg: "Hello, World",
  });
});

app.use("/auth", login);
app.use("/message", message);
app.use("/createProfile", jwtVerify, createProfile);
app.use("/maintainProfile", maintainProfile);
app.use("/signup", jwtVerify, signup);


app.use("*", (req, res) => {
  return res.status(404).json({ message: "not found" });
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
