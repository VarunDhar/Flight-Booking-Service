const express = require("express");
const router = express.Router();
// const {homepage} = require("../../controllers");
// const {aeroplaneController} = require("../../controllers");
const aeroplaneRoutes = require("./aeroplane-routes");

router.use('/aeroplane',aeroplaneRoutes);

module.exports = router;