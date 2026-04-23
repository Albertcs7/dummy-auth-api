const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const users = require("./data/users.data");

const app = express();

const sanitizeUser = ({ password, ...user }) => user;

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({
    UID: "3570",
    password: "Aditi01*",
    username: "Aditi Nair",
    role: "ADMIN",
    modules: [
      {
        module: "insurance",
        access: true,
        permissions: { read: true, write: true, delete: false },
      },
    ],
  },);
});

module.exports = app;