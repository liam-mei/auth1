const express = require("express");
const bcrypt = require("bcryptjs");
const dataModel = require("../database/dataModel");

const router = express.Router();

router.post("/register", async (req, res, next) => {
  console.log("register");
  const { username, password } = req.body;
  try {
    res.status(201).json(await dataModel.add({ username, password }));
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await dataModel.findBy({ username });
    const passwordValid = await bcrypt.compare(password, user.password);

    if (user && passwordValid) {
      req.session.user = user;
      res.json({ message: `Welcome ${user.username}` });
    } else {
      res.status(401).json({ message: "Invalid Credentials" });
    }
  } catch (err) {
    next(err);
  }
});

router.get("/logout", (req, res, next) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        err.message = "We have problems logging you out";
        next(err);
      } else {
        res.json({ message: "You have been logged out" });
      }
    });
  } else {
    res.json({ message: "You weren't logged in to begin with" });
  }
});

module.exports = router;
