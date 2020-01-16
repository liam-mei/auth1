const express = require("express");
const dataModel = require("../database/dataModel");
const router = express.Router();

router.get("/users", async (req, res, next) => {
  try {
    res.json(await dataModel.find());
  } catch (err) {
    next(err);
  }
});

module.exports = router;