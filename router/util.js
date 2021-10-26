const express = require("express");
const UtilService = require("../service/util");

const router = express.Router();

router.post("/", UtilService.generateHMAC);
router.get("/healthcheck", UtilService.healthcheck);

module.exports = router;