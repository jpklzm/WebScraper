const express = require("express");
const router = express.Router();
const { getUsers } = require("../controllers/UserListController");

router.get("/", getUsers);

module.exports = router;
