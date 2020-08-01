const express = require("express");
const router = express.Router();
const { addSearch, getSearches } = require("../controllers/searches");

router.route("/").get(getSearches).post(addSearch);

module.exports = router;
