const users = require("../data/users.data");

const loginUser = (UID, password) => {
  const user = users.find(
    (u) => u.UID === UID && u.password === password
  );

  if (!user) return null;

  return {
    uid: user.UID,
    username: user.username,
    role: user.role,
    modules: user.modules,
  };
};

module.exports = { loginUser };