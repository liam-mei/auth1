module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    next();
  } else {
    next({ status: 401, message: "No session provided" });
  }
};
