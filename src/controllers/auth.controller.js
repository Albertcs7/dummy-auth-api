const { loginUser } = require("../services/auth.service");

const login = (req, res) => {
  const { UID, password } = req.body;

  const user = loginUser(UID, password);

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  }

  return res.json({
    success: true,
    data: user,
  });
};

module.exports = { login };